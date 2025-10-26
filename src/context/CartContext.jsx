import { createContext, useContext, useEffect, useState, useMemo } from "react";

// 1) Crear el contexto
const CartContext = createContext();

// 2) Crear el proveedor
export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(() => {
        // Estado que guarda la lista de productos en el carrito
        // Inicializa desde localStorage si ya hay algo guardado, sino empieza como array vacío
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsed = JSON.parse(storedCart);
            // Convertimos precio y cantidad a número por seguridad
            return parsed.map(item => ({
                ...item,
                precio: Number(item.precio),
                cantidad: Number(item.cantidad)
            }));
        }
        return [];
    });
    
    
    // Agregar producto al carrito o sumar cantidad si ya existe
    const addToCart = (item, cantidad = 1) => {
        const exists = cart.find(cartItem => cartItem.id === item.id);

        if (!exists) {
            setCart([...cart, { 
            ...item, 
            cantidad: Number(cantidad), 
            precio: Number(item.precio) 
            }]);
        }
    };

    const updateQuantity = (id, cantidad) => {
        setCart(cart.map(cartItem => 
            cartItem.id === id
            ? { ...cartItem, cantidad: Number(cantidad) }
            : cartItem
        ));
        };


    // Función para eliminar un item de la cart por su id
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id))

    const subtotal = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    }, [cart]);

    const tax = useMemo(() => subtotal * 0.05, [subtotal]);

    const shipping = useMemo(() => {
        if (subtotal === 0) return 0;       // si no hay productos, envío = 0
        return subtotal >= 90000 ? 0 : 1500;
        }, [subtotal]);

    const total = useMemo(() => subtotal + tax + shipping, [subtotal, tax, shipping]);

    // Cada vez que el cart cambie, guarda el array actualizado en localStorage para persisitencia
    // Convierte de array a texto JSON para almacenarlo
    useEffect(() => {
        //console.log("cart actualizada, guardando en localStorage:", cart); 
        localStorage.setItem('cart', JSON.stringify(cart));
        }, [cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, subtotal, tax, shipping, total }}>
            {children}
        </CartContext.Provider>
    );
};

// 3) Hook custom
export const useCartContext = () => useContext(CartContext);

