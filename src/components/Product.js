import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div>
            <img src={product.image} alt="" className="small" />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    )
}
