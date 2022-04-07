import {createContext,useState} from 'react'

const CartContext = createContext();
export const CartProvider = ({ children }) => {
    
    const [items, setItems] = useState([]);

    const addToCart = (name,image,price) => {
        setItems((prev) => [...prev, { name,image, price }]);
    }

    return (
        <CartContext.Provider value={{items,addToCart}}>
            {children}
      </CartContext.Provider>
  )
}

export default CartContext