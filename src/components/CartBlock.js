import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const CartBlock = () => {
    const cartCount = useSelector((state) => state.cart.cartItemCount)
    return <>
        <Link to={`/checkout`} class="cartblock">
            <strong>Cart :</strong> <span>{cartCount}</span>
        </Link>
    </>
}