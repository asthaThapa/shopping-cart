import { useSelector } from 'react-redux'

export const CartBlock = () => {
    const cartCount = useSelector((state) => state.cart.value)
    return <>
        <a class="cartblock">
            <strong>Cart :</strong> <span>{cartCount}</span>
        </a>
    </>
}