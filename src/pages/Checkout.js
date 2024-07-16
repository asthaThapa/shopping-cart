import { Nav } from "../components/Nav";
import { ProductHeader } from "../components/ProductHeader";
import { Footer } from "../components/Footer";
import { CheckoutTable } from "../components/CheckoutTable";

export const Checkout = () => {
    const title = "My Cart"
    const description = "Awesome, clean &amp; creative HTML5 Template"
    return (
        <>
            <Nav />
            <ProductHeader title={title} description={description} />
            <CheckoutTable />
            <Footer />
        </>
    )
}