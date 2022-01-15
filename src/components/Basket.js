import React from 'react'

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * 0.14
    const shippingPrice = itemsPrice > 2000 ? 0 : 50
    const totalPrice = itemsPrice + taxPrice + shippingPrice
    return <aside className='block col-1'>
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is Empty</div> }
        </div>
        {cartItems.map((item) => (
        <div key={item.id} className="row">
            <div>
                {item.name}
            </div>
            <div>
                <button onClick={() => onAdd(item)} className="add">+</button>
                <button onClick={() => onRemove(item)} className="remove">-</button>
            </div>
            <div className='col-2 text-right'>
                {item.qty} x ${item.price.toFixed(2)}
            </div>
        </div>
        ))}
        {cartItems.length !== 0 && (
            <>
                <hr />
                <div className="row">
                    <div>Item Price</div>
                    <div>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div>Tax Price</div>
                    <div>${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div>Shipping Price</div>
                    <div>${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div>
                        <strong>Total Price</strong>
                    </div>
                    <div>
                        <strong>${totalPrice.toFixed(2)}</strong> 
                    </div>
                </div>
                <hr />
                <div className="row">
                    <button onClick={()=> alert('Implement Check Out')}>
                        Checkout
                    </button>
                </div>
            </>
        )}
    </aside>
}