import React from 'react';

const Service = (props) => {
    const {name, img, price, description} = props.service;
    return (
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{price}</h5>
                    <p className="card-text"><strong>{name}</strong></p>
                    <p>{description}</p>
                    <button onClick={() => props.handleAddToCart(props.service)} type="button" className="btn btn-outline-success"><i className="fas fa-cart-plus"></i> Order Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Service;