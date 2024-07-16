import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProductHeader } from "../components/ProductHeader";
import { OrderSection } from "../components/OrderSection";
import { useParams } from "react-router-dom";
import { getProductsById } from "../api";
import { useEffect, useState } from "react";
import { CartBlock } from "../components/CartBlock";

export const SingleProduct = () => {
    const { pid } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchProductDetails() {
        const productDetails = await getProductsById(pid);
        setItem(productDetails);
        setLoading(false);
    }

    useEffect(() => {
        fetchProductDetails();
    }, [pid]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const title = "Check Our Products"
    const description = "Awesome &amp; Creative HTML CSS layout by TemplateMo"

    return (
        <>
            <Nav />
            <ProductHeader title={title} description={description} />
            {item && (
                <OrderSection
                    pid={pid}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            )}
            <Footer />
            <CartBlock />
        </>
    );
};
