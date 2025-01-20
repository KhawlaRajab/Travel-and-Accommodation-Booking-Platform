import { createContext, useState, useEffect, ReactNode } from 'react'
import { room } from "../HotelPage/type";
import { CartContextType } from './type';

interface CartProviderProps{
    children: ReactNode;
}

export const CartContext = createContext<CartContextType|undefined>(undefined);

export const CartProvider:React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<room[]>(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string) : []);

    const addToCart = (item:room) => {
        setCartItems([...cartItems, { ...item }]);
    }


    const checkItem = (item:room) => {
        const isItemInCart = cartItems.find((cartItem) =>  cartItem.roomId === item.roomId);
        return !!isItemInCart;
    }

    const removeItem = (item:room) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.roomId !== item.roomId));
  }
  
  const EmptyCart = () => {
    setCartItems([])
  }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);


      return (
        <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            checkItem,
            removeItem,
            EmptyCart
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };