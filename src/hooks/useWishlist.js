import { useEffect, useState } from "react";

const useWishlist = () => {

    const [wishlist, setWishlist] = useState(() => {
        // Estado que guarda la lista de favoritos
        // Inicializa desde localStorage si ya hay algo guardado, sino empieza como array vacío
        const storedWishlist = localStorage.getItem('wishlist');
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });

    // Función para eliminar un item de la wishlist por su id
    const removeFromWishlist = (id) => setWishlist(wishlist.filter(item => item.id !== id))
    
    
    const addToWishlist = (item) => {
        // Primero verifica si ya existe para evitar duplicados
        if (!wishlist.some(wishItem => wishItem.id === item.id)) {
            setWishlist([...wishlist, item]);
        }
    }

    // Cada vez que la wishlist cambie, guarda el array actualizado en localStorage para persisitencia
    // Convierte de array a texto JSON para almacenarlo
    useEffect(() => {
        //console.log("Wishlist actualizada, guardando en localStorage:", wishlist); 
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }, [wishlist])

    return { wishlist, addToWishlist, removeFromWishlist }
}

export default useWishlist