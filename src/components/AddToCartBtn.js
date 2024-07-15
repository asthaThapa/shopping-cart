import { useDispatch } from 'react-redux';
import { increment, incrementByAmount } from '../slice/cartSlice';

export const AddToCartBtn = ({ count, amount }) => {
    const dispatch = useDispatch();
    return (
        <button className="main-border-button" onClick={() => {
            dispatch(increment(count));
            dispatch(incrementByAmount(amount));
        }}>
            Add To Cart
        </button>
    );
};
