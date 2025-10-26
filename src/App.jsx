import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./pages/products/Products"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/home/Home"
import FAQs from "./pages/faqs/FAQs"
import Checkout from "./pages/checkout/Checkout"
import { CartProvider } from "./context/CartContext"


function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-[#212121] transition-colors duration-300">
      <BrowserRouter> 
        <CartProvider> 
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/faqs' element={<FAQs />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
