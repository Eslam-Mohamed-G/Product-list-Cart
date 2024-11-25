import cartIcon from '../images/icon-add-to-cart.svg'
import decrement from '../images/icon-decrement-quantity.svg';
import increment from '../images/icon-increment-quantity.svg';


const Product = (props) => {

    const onClick = (id) => {
        props.incrementQuantity(id);
    }

    // const onKeyDown = (event) => {
    //     event.preventDefault();
    //     if (event.key === 'Enter' || event.key === ' ') {
    //         onClick();
    //     }
    // }


    return (
        <div className="flex flex-col mb-5 md:pr-4 md:w-1/3">
            <div className={`relative mb-7 w-full`}>
                <div className={`rounded-[10px] overflow-hidden border ${props.product.quantity === 0 ? "border-[var(--Rose-100)]" : "border-[var(--Red)]"} w-full`}>
                    <img
                        className="hidden lg:block w-full"
                        src={props.product.image.desktop}
                        alt={props.product.name}
                    />
                    <img
                        className="hidden md:block lg:hidden w-full"
                        src={props.product.image.tablet}
                        alt={props.product.name}
                    />
                    <img
                        className="block md:hidden w-full"
                        src={props.product.image.mobile}
                        alt={props.product.name}
                    />
                </div>
                {/* add to cart */}
                <div className={` ${props.product.quantity === 0 ? "bg-[var(--Rose-50)] border-[var(--Rose-500)]" : "bg-[var(--Red)] border-[var(--Red)]"} w-40 h-10 cursor-pointer hover:border-[var(--Red)] border-[1.5px] rounded-[20px] px-4 items-center flex justify-center absolute bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[50%]`}>
                    {props.product.quantity === 0
                        ?
                        <div className='w-full flex gap-1 justify-center hover:text-[var(--Red)]' onClick={() => { onClick(props.product.id) }}>
                            <img className='cart-icon' src={cartIcon} alt='Cart Icon' />
                            <p>Add to Cart</p>
                        </div>
                        :
                        <div className='w-full flex gap-1 items-center justify-between text-[var(--Rose-50)]'>
                            <span onClick={() => { props.decrementQuantity(props.product.id) }} className='border border-[var(--Rose-50)] rounded-[50%] w-4 h-4 flex items-center justify-center text-center text-[24px] hover:text-[var(--Red)] hover:bg-[var(--Rose-50)]'>-</span>
                            <p className="text-[var(--Rose-50)]">{props.product.quantity}</p>
                            <span onClick={() => { props.incrementQuantity(props.product.id) }} className='border border-[var(--Rose-50)] rounded-[50%] flex items-center justify-center text-center text-[24px] hover:text-[var(--Red)] hover:bg-[var(--Rose-50)]'>+</span>
                        </div>
                    }
                </div>
            </div>
            <div className='product-details-section'>
                <p className='text-[var(--Rose-500)]'>{props.product.category}</p>
                <p className='text-[16px]'>{props.product.name}</p>
                <p className='text-[var(--Red)]'>${Number(props.product.price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Product;