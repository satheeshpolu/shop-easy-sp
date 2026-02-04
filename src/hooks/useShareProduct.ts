import { Product } from "@/utils/types";

const useShareProduct = () => {
    const shareProduct = async (product: Product) => {
        const productUrl = `${window.location.href}/${product.id}/product_details`;
        const shareData = {
            title: product.title,
            text: `Check out this product: ${product.title}`,
            url: productUrl,
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.error("Error sharing product:", error);
            }
        } else {
            window.location.href = productUrl;
        }
    }
    return { shareProduct };
};

export default useShareProduct;