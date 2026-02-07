// Centralized route paths - single source of truth

export const PATHS = {
  HOME: '/',
  BLOGS: {
    ROOT: '/blogs',
    POST: (id: string | number) => `/blogs/${id}`,
    CATEGORY: (category: string) => `/blogs/category/${category}`,
  },
  CONTACT: '/contact',
  WISHLIST: '/wishlist',
  RECENT_PRODUCTS: '/recent_products',
  CART: {
    ROOT: '/cart',
    CHECKOUT: '/cart/checkout',
  },
  CATEGORY: {
    ROOT: (category: string) => `/category/${category}`,
    PRODUCT_DETAILS: (category: string, id: string | number) =>
      `/category/${category}/${id}/product_details`,
  },
} as const;
