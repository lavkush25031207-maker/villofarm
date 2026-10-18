import type { Order, Product, User } from "./types";
const API = "/api";
const request = async <T>(
  path: string,
  options: RequestInit = {},
): Promise<T> => {
  const token = localStorage.getItem("villofarm_token");
  const response = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  if (!response.ok)
    throw new Error(
      (await response.json().catch(() => ({}))).message || "Request failed",
    );
  return response.status === 204 ? (undefined as T) : response.json();
};
export const api = {
  products: () => request<Product[]>("/products"),
  login: (email: string, password: string) =>
    request<{ token: string; user: User }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  register: (name: string, email: string, password: string) =>
    request<{ token: string; user: User }>("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    }),
  order: (
    deliveryAddress: string,
    items: { productId: number; quantity: number }[],
  ) =>
    request<Order>("/orders", {
      method: "POST",
      body: JSON.stringify({
        deliveryAddress,
        paymentMethod: "CASH_ON_DELIVERY",
        items,
      }),
    }),
  myOrders: () => request<Order[]>("/orders/my"),
  adminProducts: () => request<Product[]>("/admin/products"),
  saveProduct: (product: Partial<Product>) =>
    request<Product>(
      product.id ? `/admin/products/${product.id}` : "/admin/products",
      { method: product.id ? "PUT" : "POST", body: JSON.stringify(product) },
    ),
  deleteProduct: (id: number) =>
    request<void>(`/admin/products/${id}`, { method: "DELETE" }),
  orders: () => request<Order[]>("/admin/orders"),
  updateOrder: (id: number, status: string) =>
    request<Order>(`/admin/orders/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};
