import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementItemQuantity, decrementItemQuantity, removeItem } from '../slice/cartSlice';

export const CheckoutRow = ({ key, itemId, title, image, description, quantity, totalPrice }) => {
    return (
        <>
            <tr>
                <td width="80"> <img src={image} width="80" height="80" /></td>
                <td><strong>{title}</strong> </td>
                <td><button class="min">-</button><input type="text" class="qty" value={quantity} /> <button class="max">+</button></td>
                <td>${totalPrice}</td>
                <td><button class="del">x</button></td>
            </tr>
        </>
    )
}