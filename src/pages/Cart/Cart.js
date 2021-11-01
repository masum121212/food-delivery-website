import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for (const service of cart){
        if(!service.quantity){
            service.quantity = 1;
        }
            total = total + service.price * service.quantity;
            totalQuantity = totalQuantity + service.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.15;
    const disconut = (total + tax) * 0.05;
    const grandtotal = (total + shipping + tax ) - disconut;
    return (
        <div>
            <h6 className="mt-5"><i class="fas fa-hamburger text-success"></i> Order Summary</h6>
            <hr />
            <h6>Items ordered : {totalQuantity}</h6>
            <p>Subtotal : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Delivery fee : {tax.toFixed(2)}</p>
            <p>Disconut : {disconut.toFixed(2)}</p>
            <p>Total (Incl . VAT) : {grandtotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;