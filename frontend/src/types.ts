export type Role = 'USER' | 'ADMIN';
export interface User { id: number; name: string; email: string; role: Role }
export interface Product { id: number; name: string; description: string; price: number; originalPrice: number; stock: number; imageUrl: string; rating: number; reviewCount: number; active: boolean }
export interface CartItem { product: Product; quantity: number }
export interface Order { id: number; total: number; status: string; paymentMethod: string; deliveryAddress: string; createdAt: string; customerName?: string }
