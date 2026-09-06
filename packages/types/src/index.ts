// Shared types used by web, mobile, admin, and (as DTOs) the API.
// This is the single source of truth for these shapes — don't redefine
// Product/Order/etc. separately inside apps/web or apps/mobile.

export type ProductType = "gift" | "furniture" | "electrical";
export type DeliveryClass = "standard_gift" | "bulky_item";

export interface Product {
  id: string;
  sellerId: string;
  categoryId: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  productType: ProductType;
  deliveryClass: DeliveryClass;
  cultureTags: string[];
  stateTags: string[];
  isActive: boolean;
  personalizationEnabled: boolean;
}

export type OrderStatus =
  | "PLACED"
  | "PAID"
  | "CONFIRMED"
  | "PROCESSING"
  | "READY_FOR_PICKUP"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURN_REQUESTED"
  | "RETURNED"
  | "REFUNDED";

export interface PersonalizationData {
  name?: string;
  message?: string;
  photoUrl?: string;
  color?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  personalization?: PersonalizationData;
}

export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
  createdAt: string;
}

export interface ServiceabilityOption {
  type: "same_day" | "midnight" | "standard";
  available: boolean;
  fee: number;
}

export interface ServiceabilityResponse {
  serviceable: boolean;
  options: ServiceabilityOption[];
}
