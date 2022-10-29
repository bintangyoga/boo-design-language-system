import React from 'react';
import { numberFormat } from '../components/numberFormat'
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
export const ProductCard = ({
  disabled = false,
  size = 'medium',
  productImageUrl,
  productTitle,
  productPrice,
  productDiscount,
  productDiscountPercentage,
  ...props
}: ProductCardProps) => {
  const mode = disabled && 'product-card--disabled';
  return (
    <div
      className={['product-card', `product-card--${size}`, mode].join(' ')}
      {...props}
    >
      <div className='product-card__image'>
        {productImageUrl && <img src={productImageUrl} alt='product image' />}
      </div>
      <div className='product-card__details'>
        <div className='product-card__title'>
          {productTitle}
        </div>
        <div className='product-card__price'>
          Rp{numberFormat(productPrice)}
        </div>
        <div className='product-card__discount'>
          <span className='product-card__discount-nominal'>
            Rp{numberFormat(productDiscount)}
          </span>
          <span className='product-card__discount-percentage'>
            {productDiscountPercentage}%
          </span>
        </div>
        <button
          type="button"
          disabled={disabled ? true : false}
        >
          {disabled ? 'Out of stock' : 'Add to bag'}
        </button>
      </div>
    </div >
  );
};
