import React from 'react';

const OrderItem = (props) => {
    const {name, img, price, key} = props.service;
    const {handleRemove} = props;
    return (
        <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{price}</h5>
                    <p className="card-text">{name}</p>
                    <button onClick={() => handleRemove(key)}  type="button" className="btn btn-outline-success"> <i className="fas fa-trash-alt"></i> Cancel</button>
                    </div>
                </div>
            </div>
    );
};

export default OrderItem;