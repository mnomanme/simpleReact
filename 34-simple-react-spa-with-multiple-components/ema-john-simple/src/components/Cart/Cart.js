import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
	const cart = props.cart;
	// console.log(cart);

	// const totalPrice = cart.reduce((total, product) => total + product.price, 0);
	let total = 0;

	for (let i = 0; i < cart.length; i++) {
		const product = cart[i];
		total = total + product.price;
	}

	let shippingCost = 0;

	if (total > 50) {
		shippingCost = 0;
	} else if (total > 20) {
		shippingCost = 15.99;
	} else if (total > 0) {
		shippingCost = 7.99;
	}

	const tax = (total / 10).toFixed(2);
	const grandTotal = (total + shippingCost + Number(tax)).toFixed(2);

	const formatNumber = (number) => {
		const precision = number.toFixed(2);
		return Number(precision);
	};

	return (
		<div>
			<h4>Order Summary</h4>
			<h6>Itmes Orderd: {cart.length}</h6>
			<p>Products Price: {formatNumber(total)} </p>
			<p>Shipping & Handling: {shippingCost} </p>
			<p>Tax + VAT: {tax} </p>
			<h5>Order Total: {grandTotal} </h5>
			<Button variant="outline-warning" size="md">
				Review your Order
			</Button>
		</div>
	);
};

export default Cart;
