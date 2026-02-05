import { Product } from '@/entities/product';
import { toaster } from '@/components/ui/toaster';

export const useShareProduct = () => {
  const shareProduct = async (product: Product) => {
    const shareData = {
      title: product.title,
      text: `Check out ${product.title} - $${product.price}`,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(
          `${shareData.text}\n${shareData.url}`
        );
        toaster.create({
          title: 'Link copied!',
          description: 'Product link copied to clipboard',
          type: 'success',
        });
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        toaster.create({
          title: 'Share failed',
          description: 'Could not share the product',
          type: 'error',
        });
      }
    }
  };

  return { shareProduct };
};
