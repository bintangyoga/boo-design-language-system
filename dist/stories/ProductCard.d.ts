/// <reference types="react" />
import './productCard.css';
export interface ProductCardProps {
    /**
     * Is this the principal call to action on the page?
     */
    disabled?: boolean;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium';
    /**
     * Button contents
     */
    productImageUrl: string;
    productTitle: string;
    productPrice: number;
    productDiscount: number;
    productDiscountPercentage: number;
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const ProductCard: ({ disabled, size, productImageUrl, productTitle, productPrice, productDiscount, productDiscountPercentage, ...props }: ProductCardProps) => JSX.Element;
