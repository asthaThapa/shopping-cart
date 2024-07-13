import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product'
import { SingleProduct } from '../pages/SingleProduct'
export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/single-product/:pid" element={<SingleProduct />} />
        </Routes>
    </Router>
)