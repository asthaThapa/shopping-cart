import { useDispatch } from 'react-redux';
import { increaseCartItem, increaseTotal, addItem } from '../slice/cartSlice';

export const AddToCartBtn = ({ pid, image, title, description, count, singlePrice, amount }) => {
    const dispatch = useDispatch();
    return (
        <button className="main-border-button" onClick={() => {
            dispatch(increaseCartItem(count));
            dispatch(increaseTotal(amount));
            dispatch(addItem({
                itemId: pid,
                image: image,
                title: title,
                description: description,
                singlePrice: singlePrice,
                totalPrice: amount,
                quantity: count
            }));
        }}>
            Add To Cart
        </button>
    );
};
