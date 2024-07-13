import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProductHeader } from "../components/ProductHeader"
import { ProductList } from "../components/ProductList"

export const Product = () => {
    return (
        <>
            <Nav />
            <ProductHeader />
            <ProductList />
            <Footer />
        </>
    )
}