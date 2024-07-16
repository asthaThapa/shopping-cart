import React from 'react';
import { useDispatch } from 'react-redux';
import { updateItemQuantity, removeItem } from '../slice/cartSlice';

export const CheckoutRow = ({ key, itemId, title, image, description, quantity, totalPrice }) => {

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(updateItemQuantity({ itemId, updateAction: "increase" }));
    };

    const handleDecrement = () => {
        dispatch(updateItemQuantity({ itemId, updateAction: "decrease" }));
    };

    const handleRemove = () => {
        dispatch(removeItem({ itemId }));
    };

    return (
        <>
            <tr>
                <td width="80">
                    <img src={image} width="80" height="80" />
                </td>
                <td><strong>{title}</strong> </td>
                <td>
                    <button class="min" onClick={handleDecrement} >-</button>
                    <input type="text" class="qty" value={quantity} />
                    <button class="max" onClick={handleIncrement} >+</button></td>
                <td>${totalPrice}</td>
                <td>
                    <button class="del" onClick={handleRemove}>x</button>
                </td>
            </tr>
        </>
    )
}