import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/utils";

const CartItem = ({ item }) => {

    const { removeFromCart, updateQuantity } = useCartContext();

    return (
    <div className="flex flex-col items-center text-center gap-2 border-b p-2 dark:border-[#424242] border-gray-200 rounded w-full hover:[box-shadow:2px_2px_10px_#00000048] transition-all  sm:flex-row md:gap-4 lg:gap-6 md:p-4">
        <div className="w-20 h-20 lg:w-32 lg:h-32 flex-shrink-0 flex items-center justify-center">
            <img 
            src={item.imagen} 
            alt={item.nombre} 
            className="w-full h-full object-contain rounded" 
            />
        </div>

        <div className="flex-1 flex flex-col gap-1.5 justify-between">
        <div>
            <h3 className="mb-1 text-sm font-semibold sm:text-md lg:text-2xl text-[#333333] dark:text-[#e2e2e2]">{item.nombre}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-200 lg:text-lg">Color:(a modificar) {item.colores}</p>
        </div>

        <div className="flex items-center justify-center">
            <button
                className={`px-2 text-gray-700 ${item.cantidad > 1 ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-100 cursor-not-allowed'}`}
                onClick={() => updateQuantity(item.id, Math.max(1, item.cantidad - 1))}
            >
            -
            </button>
            <span  
                className="w-6 p-0.5 text-[#141414] dark:text-[#e2e2e2] dark:bg-[#7e7e7e] text-center text-sm font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">{item.cantidad}
            </span>
            <button
                className="px-2 bg-gray-200 hover:bg-gray-300 text-gray-700"
                onClick={() => updateQuantity(item.id, item.cantidad + 1)}
            >
            +
            </button>
        </div>
        </div>

        <div className="flex flex-col sm:items-end justify-between">
        
        <i
            onClick={() => removeFromCart(item.id)}
            className="bi bi-trash text-gray-600 text-lg hover:text-gray-800 dark:text-[#c9c9c9] dark:hover:text-[#c9c9c9] hover:scale-110 transition-transform cursor-pointer"
        ></i>
        
        <p className="text-center text-[#333333] dark:text-[#e2e2e2] text-sm sm:text-base md:text-lg lg:text-xl font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] font-semibold">{formatPrice(item.precio * item.cantidad)}</p>
        </div>
    </div>
    );
    }

export default CartItem;