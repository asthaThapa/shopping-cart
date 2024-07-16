import { useDispatch } from 'react-redux';
import { increment, incrementByAmount, addItem } from '../slice/cartSlice';

export const AddToCartBtn = ({ pid, image, title, description, count, amount }) => {
    const dispatch = useDispatch();
    return (
        <button className="main-border-button" onClick={() => {
            dispatch(increment(count));
            dispatch(incrementByAmount(amount));
            dispatch(addItem({
                itemId: pid,
                image: image,
                title: title,
                description: description,
                totalPrice: amount,
                quantity: count
            }));
        }}>
            Add To Cart
        </button>
    );
};
