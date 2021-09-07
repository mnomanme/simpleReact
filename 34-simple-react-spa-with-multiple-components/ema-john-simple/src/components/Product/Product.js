import React from 'react';
import './Product.css';

const Product = (props) => {
	// console.log(props.product);
	const { name, category, img, price, shipping } = props.product;
	return (
		<div>
			<h6>{name}</h6>
		</div>
	);
};

export default Product;
