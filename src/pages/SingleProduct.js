import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProductHeader } from "../components/ProductHeader";
import { OrderSection } from "../components/OrderSection";
import { useParams } from "react-router-dom";
import { getProductsById } from "../api";
import { useEffect, useState } from "react";

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

    return (
        <>
            <Nav />
            <ProductHeader />
            {item && (
                <OrderSection
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            )}
            <Footer />
        </>
    );
};
