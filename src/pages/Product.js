import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProductHeader } from "../components/ProductHeader"
import { ProductList } from "../components/ProductList"
import { CartBlock } from "../components/CartBlock";

export const Product = () => {
    const title = "Check Our Products"
    const description = "Awesome &amp; Creative HTML CSS layout by TemplateMo"
    return (
        <>
            <Nav />
            <ProductHeader title={title} description={description} />
            <ProductList />
            <Footer />
            <CartBlock />
        </>
    )
}