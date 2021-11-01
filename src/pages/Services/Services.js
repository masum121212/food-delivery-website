import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';
import { addToDb, getStoredCart } from '../../utilities/Database';
import { Link } from 'react-router-dom';
const Services = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        });
    }, []);
    useEffect( () => {
        if(services.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart){
                const addService = services.find( service => service.key === key);
                if(addService){
                    const quantity = savedCart[key];
                    addService.quantity = quantity;
                    storedCart.push(addService);

                }
            
            }
            setCart(storedCart);
        }
    } , [services])

    const handleAddToCart = (service) => {
        const exists = cart.find(item => item.key === service.key);
        let newCart = [];
        if(exists){
            const remaining = cart.filter(item => item.key !== service.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, service]
        }
        else{
            service.quantity = 1;
            newCart = [...cart, service];
        }
        setCart(newCart);
        addToDb(service.key);
    }
    return (
        <div className="container mb-5 shadow-lg">
            <h1 className="m-5">We Provide</h1>
                <div className="row gy-5">
                    <div className="col-9">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                                {
                                    services.map(service=> <Service 
                                    key={service.key}
                                    service={service}
                                    handleAddToCart={handleAddToCart}
                                    ></Service>)
                                }
                            </div>
                            
                    </div>
                    <div className="col-3 row row-col-1">
                            <Cart cart={cart}>
                            <Link to="/order"><button  type="button" className="btn btn-outline-success">GO TO CHECKOUT <i className="fas fa-arrow-circle-right"></i></button></Link>
                            </Cart>
                    </div>
                </div>
    
        </div>
    );
};

export default Services;