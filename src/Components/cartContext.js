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

    const [prods, setProds] = useState([])

    const addToCart = produto =>{
        setProds(produto.id)
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
    
    const rmvFromCart = (produtoid) =>{
        setCart(old =>{
            const newCart ={}
            Object.keys(old).forEach(id =>{
                if(id !== produtoid){
                    newCart[id] = old[id]
                }
            })
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }
    const changeQtd = (produtoid, newQtd) =>{
        setCart(old =>{
            const newCart ={}
            Object.keys(old).forEach(id =>{
                const newProduto = {...old[id]}
                if(id === produtoid){
                    newProduto.qtd = newQtd
                }
                newCart[id] = newProduto
            })
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }

    return(
        <CartContext.Provider value={{cart, addToCart, rmvFromCart, changeQtd}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    const cart = useContext(CartContext)
    return cart
}