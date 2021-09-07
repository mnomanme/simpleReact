import React, { useState } from 'react';
import fakeData from '../../resources/fakeData';
import { Container } from 'react-bootstrap';
import './Shop.css';

const Shop = () => {
	// console.log(fakeData);
	return (
		<div>
			<Container>
				<ShopData></ShopData>
			</Container>
		</div>
	);
};

// get shop data from fakedata
const ShopData = () => {
	const firstTen = fakeData.slice(50, 55);
	console.log(firstTen);
	const [products, setProducts] = useState(firstTen);

	return (
		<div className="shopContainer">
			<section className="productContainer">
				<h3>Total Product: {products.length}</h3>
				{products.map((pd) => {
					const { name, key } = pd;
					return (
						<section key={key}>
							<h6 className="productName">{name}</h6>
						</section>
					);
				})}
			</section>
			<section className="cartContainer">
				<h4>This is Cart: </h4>
			</section>
		</div>
	);
};

export default Shop;
