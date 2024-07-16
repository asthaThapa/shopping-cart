import { CheckoutRow } from './CheckoutRow'
import { useSelector } from 'react-redux';

export const CheckoutTable = () => {

    const items = useSelector((state) => state.cart.checkoutItems);
    const totalQuantity = useSelector((state) => state.cart.value);
    const totalPrice = useSelector((state) => state.cart.amount);

    return (
        <div class="mycart">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <table class="table table-bordered">
                            <tbody>
                                {items.map((item) => (
                                    <CheckoutRow
                                        key={item.itemId}
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        itemId={item.itemId}
                                        quantity={item.quantity}
                                        totalPrice={item.totalPrice}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div class="col-sm-4">
                        <div class="cartSummary">
                            <h3>Cart Summary</h3>
                            <div class="cartRow">

                                <strong class="col1">ITEMS {items.length}</strong>
                                <strong class="col2">${totalQuantity}</strong>

                            </div>

                            <div class="cartRow">


                                <strong class="col1">Tax 10%</strong>
                                <strong class="col2">$30</strong>

                            </div>
                            <div class="cartTotal">
                                <strong class="col1">Tax 10%</strong>
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