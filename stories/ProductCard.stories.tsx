import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from './ProductCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  size: 'medium',
  disabled: false,
  productImageUrl: 'https://i.ibb.co/pjmvRt5/NIKE.jpg',
  productTitle: 'NIKE AJ1 Retro High White University Blue Black Ultimate',
  productPrice: 3550000,
  productDiscount: 1000000,
  productDiscountPercentage: 99,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  disabled: false,
  productImageUrl: 'https://i.ibb.co/pjmvRt5/NIKE.jpg',
  productTitle: 'NIKE AJ1 Retro High White University Blue Black Ultimate',
  productPrice: 3550000,
  productDiscount: 1000000,
  productDiscountPercentage: 99,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  disabled: true,
  productImageUrl: 'https://i.ibb.co/pjmvRt5/NIKE.jpg',
  productTitle: 'NIKE AJ1 Retro High White University Blue Black Ultimate',
  productPrice: 3550000,
  productDiscount: 1000000,
  productDiscountPercentage: 99,
};