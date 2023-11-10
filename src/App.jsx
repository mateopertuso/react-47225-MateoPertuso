import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Nosotros from "./components/pages/Nosotros/Nosotros";
import Productos from "./components/pages/products/Products";
import Contacto from "./components/pages/Contacto/Contacto";
import CartContextComponent from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";


function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<h1>Not found</h1>} />
          </Route>
        </Routes>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
