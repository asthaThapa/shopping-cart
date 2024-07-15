import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product'
import { SingleProduct } from '../pages/SingleProduct'
import { Checkout } from '../pages/Checkout';
export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/single-product/:pid" element={<SingleProduct />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </Router>
)