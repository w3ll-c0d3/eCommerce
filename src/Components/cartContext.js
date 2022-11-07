import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState({})
    useEffect(() =>{
        const cartLocal = window.localStorage.getItem('cart')
        if(cartLocal){
            setCart(JSON.parse(cartLocal))
        }
    },[])
    const addToCart = produto =>{
        setCart(old => {
        let qtd = 0
        if(old[produto.id]) {
           qtd =  old[produto.id].qtd
        }   
        const newCart = {
            ...old,
            [produto.id]: {
                qtd: qtd+1,
                produto,
            },
        }
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
      })
    }
    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    const cart = useContext(CartContext)
    return cart
}