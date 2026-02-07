import { useCartStore } from '@/entities/cart';
import { Product } from '@/entities/product';
import { toaster } from '@/components/ui/toaster';

export const useAddToCart = () => {
  const { addItem, items } = useCartStore();

  const addToCart = (product: Product) => {
    debugger
    const isAlreadyInCart = items.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      toaster.create({
        title: 'Already in cart',
        description: `${product.title} quantity increased`,
        type: 'info',
      });
    } else {
      toaster.create({
        title: 'Added to cart',
        description: `${product.title} has been added`,
        type: 'success',
      });
    }

    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      discountPercentage: product.discountPercentage,
    });
  };

  return { addToCart };
};
