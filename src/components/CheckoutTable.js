import { useState, useEffect } from 'react';
import { CheckoutRow } from './CheckoutRow';
import { useSelector } from 'react-redux';

export const CheckoutTable = () => {
    const items = useSelector((state) => state.cart.checkoutItems);
    const totalPrice = useSelector((state) => state.cart.totalAmount);

    const [tax, setTax] = useState((totalPrice * 10) / 100);
    const [totalAmount, setTotalAmount] = useState((totalPrice + tax).toFixed(2));

    function calculateTax() {
        const tax = (totalPrice * 10) / 100;
        setTax(tax);
    }

    function calculateTotalAmt() {
        const totalAmt = totalPrice + tax;
        setTotalAmount(totalAmt);
    }

    useEffect(() => {
        calculateTax();
    }, [totalPrice]);

    useEffect(() => {
        calculateTotalAmt();
    }, [tax, totalPrice]);

    return (
        <div className="mycart">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <table className="table table-bordered">
                            <tbody>
                                {items.length > 0 ? items.map((item) => (
                                    <CheckoutRow
                                        key={item.itemId}
                                        image={item.image}
                                        title={item.title}
                                        itemId={item.itemId}
                                        quantity={item.quantity}
                                        totalPrice={item.totalPrice}
                                    />
                                )) :
                                    <div className="section-heading">
                                        <span>No items added to cart. Please add an item to checkout.</span>
                                    </div>}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-4">
                        <div className="cartSummary">
                            <h3>Cart Summary</h3>
                            <div className="cartRow">
                                <strong className="col1">ITEMS {items.length}</strong>
                                <strong className="col2">${totalPrice.toFixed(2)}</strong>
                            </div>
                            <div className="cartRow">
                                <strong className="col1">Tax 10%</strong>
                                <strong className="col2">${tax.toFixed(2)}</strong>
                            </div>
                            <div className="cartTotal">
                                <strong className="col1">Total</strong>
                                <strong className="col2">${totalAmount}</strong>
                            </div>
                            <button className="checkout">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
