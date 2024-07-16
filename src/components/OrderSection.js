import { AddToCartBtn } from "./AddToCartBtn";
import { useState } from "react";

export const OrderSection = ({ pid, image, title, description, price }) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [totalPrice, setTotalPrice] = useState(price);

    function calculateTotal(value) {
        const newCartCounter = cartCounter + value;
        if (newCartCounter >= 1) {
            setCartCounter(newCartCounter);
            setTotalPrice(newCartCounter * price);
        }
    }

    return (
        <section className="section" id="product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="left-images">
                            <img className="orderProductImg" src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-content">
                            <h4>{title}</h4>
                            <span className="price">${price}</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span>{description}</span>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>No. of Orders</h6>
                                </div>
                                <div className="right-content">
                                    <div className="quantity buttons_added">
                                        <input type="button" value="-" className="minus" onClick={() => calculateTotal(-1)} />
                                        <input type="number" step="1" min="1" max="" name="quantity" value={cartCounter} title="Qty" className="input-text qty text" size="4" readOnly />
                                        <input type="button" value="+" className="plus" onClick={() => calculateTotal(1)} />
                                    </div>
                                </div>
                            </div>
                            <div className="total">
                                <h4>Total: ${totalPrice.toFixed(2)}</h4>
                                <AddToCartBtn image={image} title={title} description={description} pid={pid} count={cartCounter} amount={totalPrice} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
