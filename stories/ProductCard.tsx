import React from 'react';
import { numberFormat } from '../components/numberFormat'
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

export const ProductCard = ({
  type = 'active',
  size = 'medium',
  productImageUrl,
  productTitle,
  productPrice,
  productDiscount,
  productDiscountPercentage,
  ...props
}: ProductCardProps) => {
  return (
    <div
      className={['product-card', `product-card--${size}`, `product-card--${type}`].join(' ')}
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
          disabled={type === 'disabled'}
        >
          {type === 'disabled' ? 'Out of stock' : 'Add to bag'}
        </button>
      </div>
    </div >
  );
};
