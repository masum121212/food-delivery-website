import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, deleteFromDb } from '../../utilities/Database';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useServices from '../hooks/UseServices';
import OrderItem from '../OrderItem/OrderItem';

const MyOrder = () => {
    const [services] = useServices();
    const [cart, setCart] = useCart(services);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(service => service.key !== key);
        setCart(newCart)
        deleteFromDb(key);
    }

    const handleOrder = () => {
        history.push("/delivery");
        // setCart([]);
        // clearTheCart();
    }
    return (
        <div className="container p-5">
            <h1>My Order's</h1>
            <div className="row gy-5">
                <div className="col-9">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            cart.map(service=> <OrderItem
                                key={service.key}
                                service={service}
                                handleRemove={handleRemove}
                                ></OrderItem>)
                        }
                    </div>
                </div>
                <div className="col-3">
                <Cart cart={cart}>
                <button onClick={handleOrder}  type="button" className="btn btn-outline-success">CONFIRM <i className="fas fa-arrow-circle-right"></i></button>
                </Cart>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;