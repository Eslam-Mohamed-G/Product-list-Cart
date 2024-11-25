import iconOrder from '../images/icon-order-confirmed.svg'

const OrderConfirmation = (props) => {

    const startNewOrder = () => {
        window.location.reload();
    }

    return (props.trigger) && (props.products) ? (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-60'>
            <div className='bg-[var(--Rose-50)] rounded-[10px] p-8 w-min-[300px]'>
                <img className='image' src={iconOrder} alt='Done' />
                <h1 className='font-bold text-[28px] text-[var(--Rose-900)]'>Order Confirmed</h1>
                <p className='text-[14px] font-[500] text-[var(--Rose-500)] mb-4'>We hope you enjoy your food!</p>
                {props.products && <div className='bg-[var(--Rose-100)] rounded-[10px] p-5'>
                    <div className='flex flex-col'>
                        {props.products.map((product) => {
                            if (product.quantity !== 0) {
                                return (
                                    <>
                                    <div key={product.id} className='flex justify-between min-w-[280px] items-center'>
                                        <div className='flex gap-3'>
                                            <img className='w-16 h-14 rounded-[5px]' src={product.image.thumbnail} alt={product.name} />
                                            <div className='wrapper'>
                                                <h3 className='mb-1 font-bold text-[14px] text-[var(--Rose-900)]'>{product.name}</h3>
                                                <div className='flex gap-3'>
                                                    <p className='text-[var(--Red)]'>{product.quantity}x</p>
                                                    <p className='text-[var(--Rose-500)]'>@${Number(product.price).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='font-bold text-[var(--Rose-500)]'>${(Number(product.price) * product.quantity).toFixed(2)}</p>
                                    </div>
                                    <hr className='bg-[var(--Rose-500)] my-3'/></>
                                )
                                
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <div className='flex justify-between'>
                        <p className='order-total-txt'>Order Total</p>
                        <p className='font-bold text-[var(--Rose-900)] text-[18px]'>${props.countTotalPrice(props.products)}</p>
                    </div>
                </div>}
                <button className='w-full bg-[var(--Red)] text-[var(--Rose-50)] rounded-[20px] mt-5 py-2' onClick={startNewOrder}>Start New Order</button>
            </div>
        </div>
    ) : "";
}

export default OrderConfirmation;