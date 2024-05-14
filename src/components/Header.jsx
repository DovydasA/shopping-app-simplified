import { useRef, useContext } from "react";

import CartContext from "../context/store/CartContext.js";
import logo from "/logo.png";
import CartModal from "./CartModal.jsx";

export default function Header() {
	const { items } = useContext(CartContext);
	const modal = useRef();

	const cartQuantity =
		items && items.length > 0
			? items.reduce((acc, item) => acc + item.quantity, 0)
			: 0;

	function handleOpenCartClick() {
		modal.current.open();
	}

	let modalActions = <button>Close</button>;

	if (cartQuantity > 0) {
		modalActions = (
			<>
				<button>Close</button>
				<button>Checkout</button>
			</>
		);
	}

	return (
		<>
			<CartModal
				ref={modal}
				title="Your Cart"
				actions={modalActions}
			/>
			<header id="main-header">
				<div id="main-title">
					<img
						src={logo}
						alt="Elegant model"
					/>
					<h1>Elegant Context</h1>
				</div>
				<p>
					<button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
				</p>
			</header>
		</>
	);
}
