import React, { createContext, useState, ReactNode } from "react";
import { getProductData } from '../data/items';

interface CartItem {
    id: number;
    quantity: number;
}

interface CartContextType  {
    items: CartItem[];
    getProductQuantity: (id: number) => number;
    addItemToCart: (id: number) => void;
    removeItemFromCart: (id: number) => void;
    deleteFromCart: (id: number) => void;
    getTotalAmount: () => number|string;
}

export const CartContext = createContext<CartContextType>({
    items: [],
    getProductQuantity: () => 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteFromCart: () => {},
    getTotalAmount: () => 0,
});

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

    const getProductQuantity = (id: number): number => {
        const quantity = cartProducts.find((item) => item.id === id)?.quantity;
        return quantity === undefined ? 0 : quantity;
    };

    const addItemToCart = (id: number): void => {
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            setCartProducts([...cartProducts, { id, quantity: 1 }]);
        } else {
            setCartProducts(
                cartProducts.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        }
    };

    const deleteFromCart = (id: number): void => {
        setCartProducts((cartProducts) =>
            cartProducts.filter((item) => item.id !== id)
        );
    };

    const removeItemFromCart = (id: number): void => {
        const quantity = getProductQuantity(id);
        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
        }
    };

    const getTotalAmount = (): number| string => {
        let totalAmount = 0;
        cartProducts.forEach((item) => {
            const productData = getProductData(item.id);
            totalAmount += productData.price * item.quantity;
        });
        return totalAmount;
    };

    const contextValue: CartContextType = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};