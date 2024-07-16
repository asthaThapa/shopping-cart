import { useState } from 'react';
import { CheckoutRow } from './CheckoutRow'
import { useSelector } from 'react-redux';

export const CheckoutTable = () => {

    const items = useSelector((state) => state.cart.checkoutItems);

    const totalQuantity = useSelector((state) => state.cart.value);
    const totalPrice = useSelector((state) => state.cart.amount);
    const initialTax = (totalPrice * 10) / 100
    const [tax, setTax] = useState(initialTax)

    function calculateTax() {
        var tax = (totalPrice * 10) / 100
        setTax(tax)
    }

    return (
        <div class="mycart">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <table class="table table-bordered">
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
                    <div class="col-sm-4">
                        <div class="cartSummary">
                            <h3>Cart Summary</h3>
                            <div class="cartRow">

                                <strong class="col1">ITEMS {items.length}</strong>
                                <strong class="col2">${totalPrice}</strong>

                            </div>

                            <div class="cartRow">


                                <strong class="col1">Tax 10%</strong>
                                <strong class="col2">${tax}</strong>

                            </div>
                            <div class="cartTotal">
                                <strong class="col1">Total</strong>
                                <strong class="col2">$30</strong>
                            </div>
                            <button class="checkout">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}