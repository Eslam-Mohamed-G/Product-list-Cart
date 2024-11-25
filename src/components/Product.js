

const Product = (props) => {

    const onClick = (id) => {
        props.incrementQuantity(id);
    }

    const onKeyDown = (event) => {
        event.preventDefault();
        if (event.key === 'Enter' || event.key === ' ') {
            onClick();
        }
    }


    return (
        <div className="product">
            <div className='image-section'>
                <picture>
                    <source media="(min-width: 992px)" srcSet={props.product.image.desktop} />
                    <source media="(min-width: 768px)" srcSet={props.product.image.tablet} />
                    <img className={props.product.quantity ? 'selected' : 'not-selected'} src={props.product.image.mobile} alt="Product" />
                </picture>
                {props.product.quantity === 0 && <div className='button button-no-in-cart' role='button' tabIndex='0' onKeyDown={onKeyDown} onClick={()=>{onClick(props.product.id)}}>
                    <img className='cart-icon' src='./images/icon-add-to-cart.svg' alt='Cart Icon' />
                    <p>Add to Cart</p>
                </div>}
                {props.product.quantity > 0 && <div className='button button-added-to-cart'>
                    <button className='quantity-control button-minus' 
                    onClick={()=>{props.decrementQuantity(props.product.id)}}></button>
                    <p>{props.product.quantity}</p>
                    <button className='quantity-control button-plus'
                    onClick={()=>{props.incrementQuantity(props.product.id)}}></button>
                </div>}
            </div>
            <div className='product-details-section'>
                <p className='category'>{props.product.category}</p>
                <p className='product-name'>{props.product.name}</p>
                <p className='price'>${Number(props.product.price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Product;