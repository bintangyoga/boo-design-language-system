/// <reference types="react" />
import './productCard.css';
export interface ProductCardProps {
    type?: 'active' | 'disabled';
    size?: 'small' | 'medium';
    productImageUrl: string;
    productTitle: string;
    productPrice: number;
    productDiscount: number;
    productDiscountPercentage: number;
    onClick?: () => void;
}
export declare const ProductCard: ({ type, size, productImageUrl, productTitle, productPrice, productDiscount, productDiscountPercentage, ...props }: ProductCardProps) => JSX.Element;
