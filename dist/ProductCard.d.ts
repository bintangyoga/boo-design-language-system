/// <reference types="react" />
import './productCard.css';
export interface ProductCardProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
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
export declare const ProductCard: ({ primary, size, productImageUrl, productTitle, productPrice, productDiscount, productDiscountPercentage, ...props }: ProductCardProps) => JSX.Element;
