import { useCartContext } from "../context/CartContext"

const CardProduct = ({ auricular, wishlist, removeFromWishlist, addToWishlist }) => {

  // contexto Cart
    const { cart, addToCart, removeFromCart, updateQuantity } = useCartContext();

  const labels = [
    { key: "inalambrico", label: "Inalámbrico:" },
    { key: "resistenteAgua", label: "Resistente al agua:" },
    { key: "cancelacionRuido", label: "Cancelación de ruido:" },
    { key: "microfono", label: "Micrófono:" },
    { key: "duracionBateria", label: "Duración batería:" },
  ];

  // Verificar si el auricular está en la lista de favoritos
  const isFav = wishlist.some(item => item.id === auricular.id);

  // Verificar si el auricular está en el carrito
  const isInCart = cart.some(cartItem => cartItem.id === auricular.id);

  return (
    <>
      {/* CARD */}
      <div className="border border-[#33333352] dark:bg-[#363636] rounded-2xl w-[250px] min-h-[350px] p-4 flex flex-col gap-4 justify-around items-center flex-grow [box-shadow:0px_4px_10px_#0000000c,_0px_-4px_15px_#00000022] dark:text-[#c9c9c9] sm:w-[265px] md:max-w-[320px] lg:w-[320px]">

        <i 
          onClick={() => isFav ? removeFromWishlist(auricular.id) : addToWishlist(auricular)}
          
          className={`${isFav ? 'bi bi-heart-fill text-red-600' : 'bi bi-heart text-red-800'} text-xl p-0.5 cursor-pointer self-end hover:scale-115 transition-transform dark:text-red-500`}
          title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
        </i>
      
        <img 
          src={auricular.imagen} 
          alt={auricular.nombre} 
          className="max-w-[100%] h-[150px] object-contain" 
        />

        {/* ESPECIFICACIONES */}
        <div className="flex flex-col gap-3 py-2 min-w-[100%]">
            <h3 className="mb-2 text-lg font-bold dark:text-[#e2e2e2]">{auricular.nombre}</h3>
            <p className="text-[0.9rem] dark:text-gray-300">Colores: <span className="text-[0.9rem] font-semibold text-[#333333] dark:text-gray-200">{auricular.colores}</span></p>
            <table className="w-full">
                <tbody>
                  {
                    labels.map(({ key, label }) => (
                      <tr key={key}>
                        <th className="text-left text-[0.9rem] font-medium text-[#333333dd] dark:text-gray-300">{label}</th>
                        <td className="text-[0.9rem] font-semibold text-[#333333] dark:text-gray-200">{auricular.especificaciones[key]}</td>
                      </tr>
                    ))
                  }
                </tbody>
            </table>
            <p className="text-[1.2rem] font-semibold rounded-lg mt-1 text-[#333333da] dark:text-gray-200 bg-[#3333330a] dark:bg-[#424242] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">${auricular.precio}</p>
            
            <div className="flex flex-row justify-between mt-2 px-0.5 ">
                          
              {/* Ícono de carrito */}
              <i 
                className={`${isInCart ? "bi-cart-fill text-gray-400" : "bi bi-cart-plus text-gray-600 hover:scale-115" } mx-1 text-2xl cursor-pointer transition-transform dark:text-gray-300`}
                title="Agregar al carrito"
                onClick={() => addToCart(auricular, 1)}
              ></i>

            </div>
            
        </div>
      </div>
    </>
  )
}

export default CardProduct
