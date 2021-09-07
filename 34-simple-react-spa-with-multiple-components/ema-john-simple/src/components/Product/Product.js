import React from 'react';
import './Product.css';

const Product = (props) => {
	console.log(props.product);
	const { name, seller, stock, category, img, price, shipping } = props.product;
	return (
		<section className="product">
			<div className="itemsPhoto">
				<img src={img} alt="" />
			</div>
			<div className="productItem">
				<h6 className="productName">{name}</h6>
				<p>
					<small>by: {seller}</small>
				</p>
				<h6>${price}</h6>
				<p>
					<small>Only {stock} left in stock - Order Soon</small>
				</p>
			</div>
		</section>
	);
};

export default Product;
