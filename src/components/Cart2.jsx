import { useCartContext } from "../context/CartContext"

const Cart = ({ isCartOpen, closeCart }) => {

    // Contexto Cart
    const { cart, removeFromCart, updateQuantity } = useCartContext();
    
    return (
    <>
        {isCartOpen && 
        <div className="fixed inset-0 bg-black/85 backdrop-blur-[2px] flex items-center justify-center z-50">
            
            <div className="relative bg-white dark:bg-[#363636] dark:text-[#c9c9c9] p-2 rounded shadow-md w-[80%] max-h-[80%] overflow-hidden flex flex-col items-center sm:p-4 sm:w-[60%] lg:w-[50%]">
                
                {/* Botón de cerrar */}
                <i
                    className="bi bi-x-lg absolute top-3 right-3 cursor-pointer hover:text-xl"
                    onClick={closeCart}
                ></i>

                {/* Título */}
                <h2 className="text-xl font-bold my-4 text-center sm:text-2xl lg:text-4xl">Carrito</h2>


                {/* lista de productos del carrito */}
                {cart.length === 0 ? (
                    <p className="text-center mt-4 lg:text-2xl">No tienes productos en el carrito.</p>
                ) : (
                    <div className="flex flex-col gap-3 overflow-y-auto max-h-[60vh]  p-2 mt-2">
                        {cart.map((item) => (
                            <div 
                                key={item.id} 
                                className=""
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 flex-shrink-0 flex items-center justify-center">
                                    <img 
                                    src={item.imagen} 
                                    alt={item.nombre} 
                                    className="w-full h-full object-contain rounded" 
                                    />
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-sm font-semibold sm:text-md lg:text-2xl">
                                        {item.nombre}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-200 lg:text-lg">
                                        ${item.precio}
                                    </p>
                                </div>

                                <div className="flex items-center border border-gray-300 rounded-md">
                                
                                    {/* Botón "-" */}
                                    <button
                                        className={`px-2 text-gray-700 ${item.cantidad > 1 ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-100 cursor-not-allowed'}`}
                                        onClick={() => {updateQuantity(item.id,Math.max(item.cantidad - 1, 1))}}
                                        disabled={item.cantidad === 1}
                                    >
                                    -
                                    </button>

                                    {/* Input número */}
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.cantidad}
                                        className="w-10 sm:w-12 text-center text-sm font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]"
                                    />

                                    {/* Botón "+" */}
                                    <button
                                        className="px-2 bg-gray-200 hover:bg-gray-300 text-gray-700"
                                        onClick={() => {updateQuantity(item.id, item.cantidad + 1)}}
                                    >
                                    +
                                    </button>
                                </div>
                                <i 
                                    className="bi bi-trash text-gray-600 text-lg hover:text-gray-800 dark:text-[#c9c9c9]
                                    dark:hover:text-[#c9c9c9] hover:scale-110 transition-transform cursor-pointer"
                                    onClick={() => removeFromCart(item.id)}
                                ></i>
                            </div>
                        ))}
                    </div>
                    
                )}

                <div className="flex flex-col w-full mt-2 p-4">
                    <div className="flex flex-row justify-between">
                        <h3>Subtotal</h3>
                        <p>$$</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h3>Envio</h3>
                        <p>$$</p>
                    </div>
                    <div className="flex flex-row justify-between border-t border-gray-300 mt-2 pt-2 font-bold dark:text-[#e2e2e2]">
                        <h3>Total</h3>
                        <p>$$</p>
                    </div>
                </div>

            </div>
        </div>
        }
    </>
)
}

export default Cart


