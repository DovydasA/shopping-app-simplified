import { useState, useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "./CartReducer";

export default function CartContextProvider({ children }) {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, {
		items: [],
	});

	const [shoppingCart, setShoppingCart] = useState({
		items: [],
	});

	function handleAddItemToCart(id) {
		dispatchCartAction({ type: "ADD", payload: { id } });
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		dispatchCartAction({ type: "UPDATE", payload: { productId, amount } });
	}

	const contextValue = {
		items: cartState.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}
