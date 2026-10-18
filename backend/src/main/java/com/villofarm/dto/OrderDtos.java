package com.villofarm.dto;
import jakarta.validation.Valid;import jakarta.validation.constraints.Min;import jakarta.validation.constraints.NotBlank;import jakarta.validation.constraints.NotEmpty;import java.util.List;
public final class OrderDtos {private OrderDtos(){}public record ItemRequest(Long productId,@Min(1)int quantity){}public record CreateOrderRequest(@NotBlank String deliveryAddress,String paymentMethod,@NotEmpty List<@Valid ItemRequest> items){}public record StatusRequest(@NotBlank String status){} }
