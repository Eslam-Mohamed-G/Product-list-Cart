import Product from "./Product";

const ProductList = (props) => {
    return (
        <div className='flex flex-col'>
            <h1 className='mb-5 font-bold text-[24px]'>Desserts</h1>
            <div className="w-full flex flex-col md:flex-row flex-wrap box-border">
                {props.products && props.products.map((product, index) => {
                    return (
                        <Product 
                            key={index} 
                            product={product} 
                            incrementQuantity={props.incrementQuantity}
                            decrementQuantity={props.decrementQuantity} 
                        />
                    )
                })}
            </div>
        </div>

    )
}

export default ProductList;