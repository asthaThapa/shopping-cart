import { ProductPreview } from './ProductPreview';
import { getProductsByCategory } from "../api";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export const ProductList = () => {
    const { productId } = useParams();
    const [category, setCategory] = useState(productId);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCategory(productId);
    }, [productId]);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            const allProducts = await getProductsByCategory(category);
            setProducts(allProducts);
            setLoading(false);
        }

        if (category) {
            fetchProducts();
        }
    }, [category]);

    return (
        <section className="section" id="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Our Latest Products</h2>
                            <span>Check out all of our products.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        products?.length > 0 ?
                            products.map(product => (
                                <ProductPreview id={product.id} display={product.image} title={product.title} price={product.price} />
                            )) : (
                                <div>No products found</div>
                            )
                    )}
                </div>
            </div>
        </section>
    );
};
