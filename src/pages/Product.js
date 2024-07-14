import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProductHeader } from "../components/ProductHeader"
import { ProductList } from "../components/ProductList"
import { CartBlock } from "../components/CartBlock";

export const Product = () => {
    return (
        <>
            <Nav />
            <ProductHeader />
            <ProductList />
            <Footer />
            <CartBlock />
        </>
    )
}