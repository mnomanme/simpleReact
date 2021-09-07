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
		<div>
			<h3>{products.length}</h3>
			<section>
				{products.map((pd) => {
					const { name, key } = pd;
					return (
						<section key={key}>
							<h6>{name.slice(0, 50)}</h6>
						</section>
					);
				})}
			</section>
		</div>
	);
};

export default Shop;
