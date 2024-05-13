import { createContext } from "react";

const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	updateItemQuantity: () => {},
});

export default CartContext;
