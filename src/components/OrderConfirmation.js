

const OrderConfirmation = (props) => {

    const startNewOrder = () => {
        window.location.reload();
    }

    return (props.trigger) && (props.products) ? (
        <div className='OrderConfirmation'>
            <div className='confirmation-container'>
                <img className='image' src='./images/icon-order-confirmed.svg' alt='' />
                <h1 className='heading'>Order Confirmed</h1>
                <p className='paragraph'>We hope you enjoy your food!</p>
                {props.products && <div className='cart-summary'>
                    <div className='cart-summary-items'>
                        {props.products.map((product) => {
                            if (product.quantity !== 0) {
                                return (
                                    <div key={product.id} className='cart-summary-item'>
                                        <div className='cart-item-info'>
                                            <img className='cart-item-image' src={product.image.thumbnail} alt='Product' />
                                            <div className='wrapper'>
                                                <h3 className='cart-item-heading'>{product.name}</h3>
                                                <div className='quantity-and-unit-price'>
                                                    <p className='quantity'>{product.quantity}x</p>
                                                    <p className='unit-price'>@${Number(product.price).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='price-in-general'>${(Number(product.price) * product.quantity).toFixed(2)}</p>
                                    </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <div className='order-total'>
                        <p className='order-total-txt'>Order Total</p>
                        <p className='order-total-price-summary'>{props.countTotalPrice(props.products)}</p>
                    </div>
                </div>}
                <button className='new-order-button' onClick={startNewOrder}>Start New Order</button>
            </div>
        </div>
    ) : "";
}

export default OrderConfirmation;