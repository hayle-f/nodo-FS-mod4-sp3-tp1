import CardProduct from "../../components/CardProduct"
import { DataAuris } from "../../data/DataAuris"
import ModalFavs from "../../components/ModalFavs"
import Cart from "../../components/Cart"
import useWishlist from "../../hooks/useWishlist"
import useOpen from "../../hooks/useOpen" 

const Products = () => {

    //hook custom para manejar el estado del modal
    const { isOpen: isFavsOpen, open: openFavs, close: closeFavs } = useOpen(false);;
    //hook custom para manejar el estado del modal
    const { isOpen: isCartOpen, open: openCart, close: closeCart } = useOpen(false);

    //hook personalizado para wishlist
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist({})     

    return (
        <>
            <div className="products px-3 mx-auto xl:max-w-[2000px] text-center ">
                <div id="descripcion">
                    <div className="bg-[url('/imgs/videoframe2.png')] bg-cover bg-center bg-no-repeat mb-6">
                        <h1 className="text-[3rem] p-[8px] font-bold text-[#f0f0f0] [text-shadow:_2px_4px_30px_#000000,_-2px_-4px_20px_#000000,_0px_6px_20px_#000000] self-center sm:text-[5rem] sm:p-5 md:text-[6.5rem] md:p-[30px]">S o u l B e a t</h1>
                    </div>
                    <div className="px-4">
                        <h2 className="text-[1.4rem] sm:text-3xl xl:text-[2.2rem] text-[#333333] dark:text-[#e2e2e2] font-bold">
                            Siente cada latido
                        </h2>
                        <h3 className="text-[1rem] sm:text-xl xl:text-[1.5rem] text-[#333333dd] dark:text-[#c9c9c9] font-semibold">
                            La música no solo se escucha, se siente. Con SoulBeat, cada nota y cada ritmo cobran vida en tu día a día.
                        </h3>
                        <p className="text-[0.8rem] sm:text-base xl:text-[1.3rem] text-[#141414] dark:text-[#c9c9c9]">
                            Nuestros auriculares están diseñados para sumergirte en un sonido envolvente, permitiéndote desconectarte del mundo exterior y conectarte con tu música favorita. Ya sea que estés en casa, en el trabajo o en movimiento, SoulBeat te acompaña con una calidad de sonido excepcional que transforma cualquier momento en una experiencia única.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center gap-3">
                    <button 
                        onClick={openFavs}
                        className="mt-[60px] mb-8 text-gray-600 dark:text-[#c9c9c9] text-[0.9rem] tracking-wide font-medium bg-[#fdfdfd] dark:bg-[#363636] p-2 border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:text-[0.95rem] hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer"
                    >
                        Ver Favoritos
                    </button>
                    
                    <button 
                        onClick={openCart}
                        className="mt-[60px] mb-8 text-gray-600 dark:text-[#c9c9c9] text-[0.9rem] tracking-wide font-medium bg-[#fdfdfd] dark:bg-[#363636] p-2 border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:text-[0.95rem] hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer"
                    >
                        Carrito
                    </button>
                </div>
                
                <div id="galeria" className="flex flex-wrap justify-center gap-[20px] mx-2 mb-[60px]">
                    {/* mapear el arreglo de info de auriculares y hacer una card con cada uno */}
                    {DataAuris.map((auricular) => (
                        <CardProduct
                            key={auricular.id}
                            auricular={auricular} //pasar el objeto completo
                            wishlist={wishlist}
                            removeFromWishlist={removeFromWishlist}
                            addToWishlist={addToWishlist}
                        />
                    ))}
                </div>
            </div>    

            <ModalFavs 
                isFavsOpen={isFavsOpen}
                closeFavs={closeFavs} 
                wishlist={wishlist}
                removeFromWishlist={removeFromWishlist} 
            /> 

            <Cart 
                isCartOpen={isCartOpen}
                closeCart={closeCart}
            />
        </>
    )
}

export default Products