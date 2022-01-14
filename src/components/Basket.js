import React from 'react'

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props  
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
    </aside>
}