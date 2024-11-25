import { useEffect, useState } from 'react';
import OrderConfirmation from './OrderConfirmation';
import emptyCart from '../images/illustration-empty-cart.svg';
import remove from '../images/icon-remove-item.svg';
import carbon from '../images/icon-carbon-neutral.svg'

const Cart = (props) => {

    const [orderConfirmation, setOrderConfirmation] = useState(false);

    const countItemsInCart = (products) => {

        let selectedProducts = 0;

        for (let i = 0; i < products.length; i++) {
            if (products[i].quantity > 0) {
                selectedProducts += products[i].quantity;
            }
        }

        return selectedProducts;
    }

    const countTotalPrice = (products) => {

        let totalPrice = 0;

        for (let i = 0; i < products.length; i++) {
            if (products[i].quantity > 0) {

                let unitPrice = products[i].price;
                let quantity = products[i].quantity;

                totalPrice += unitPrice * quantity;
            }
        }

        return totalPrice.toFixed(2);
    }

    const confirmOrder = () => {
        /*all mechanisms related to finalising the order
        ... */

        setOrderConfirmation(true);
    }

    useEffect(() => {
        document.body.style.overflow = orderConfirmation ? "hidden" : "unset";
    }, [orderConfirmation]);

    return (
        <div className='bg-[var(--Rose-50)] py-3 px-7 rounded-[20px]'>
            <h2 className='text-[var(--Red)] font-bold text-[24px] mb-2'>Your Cart ({props.products ? countItemsInCart(props.products) : '0'})</h2>
            {(!props.products || countItemsInCart(props.products) === 0) && <div className='flex flex-col items-center'>
                <img src={emptyCart} alt='Empty Cart' />
                <p>Your added items will apear here</p>
            </div>}
            {props.products && countItemsInCart(props.products) !== 0 && <div className='cart-with-items'>
                <div className='cart-items'>
                    {props.products.map((product) => {
                        if (product.quantity !== 0) {

                            return (
                                <>
                                <div key={product.id} className='flex justify-between items-center'>
                                    <div className='selected-product'>
                                        <h3 className='product-heading text-[var(--Rose-900)]'>{product.name}</h3>
                                        <div className='flex flex-row gap-2'>
                                            <p className='text-[var(--Red)]'>{product.quantity}x</p>
                                            <p className='text-[var(--Rose-500)]'>@ ${Number(product.price).toFixed(2)}</p>
                                            <p className='text-[var(--Rose-500)] font-bold'>${(Number(product.price) * product.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <button className='rounded-[50%] border border-[var(--Rose-500)] p-[2px]' onClick={() => { props.removeItems(product.id) }}>
                                        <img src={remove} alt="remove" />
                                    </button>
                                </div>
                                <hr className='bg-[var(--Rose-500)] my-3'/>
                                </>
                            )
                        } else {
                            return null;
                        }

                    })}
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between font-bold'>
                        <p className='text-[var(--Rose-500)]'>Order Total</p>
                        <p className='text-[20px]'>${countTotalPrice(props.products)}</p>
                    </div>
                    <div className='bg-[var(--Rose-100)] flex items-center justify-center rounded-[5px] py-2'>
                        <img src={carbon} alt='Tree Icon' />
                        <p className='text-[var(--Rose-500)]'>This is <span className='font-bold text-[var(--Rose-900)]'>carbon-neutral</span>  delivery</p>
                    </div>

                    <button className='w-full py-3 bg-[var(--Red)] rounded-[25px] text-[var(--Rose-50)] text-center' onClick={confirmOrder}>Confirm Order</button>
                </div>
            </div>}
            <div className='fixed top-0 left-0 flex items-center justify-center bg-[var(--Rose-50)]'>
                <div className=''></div>
                <OrderConfirmation trigger={orderConfirmation} products={props.products} countTotalPrice={countTotalPrice} />
            </div>
        </div>
    )
}

export default Cart;