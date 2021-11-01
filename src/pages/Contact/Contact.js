import React from 'react';

const Contact = () => {
    return (
        <div className="container m-5 mx-auto">
            <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto text-dark  shadow-sm p-3 mb-5 bg-body rounded">
            <div className="col">
                <h4 className="fw-bold fs-1"><i className="fas fa-map-marker-alt text-success"></i>  Location</h4>
                <hr />
                <p>24 no ward, Uttar Abrabad, Chattogram</p>
                <p>Gec Moor, Khulshi, Chattagram</p>
            </div>
            <div className="col">
                <h4 className="fw-bold fs-1"><i className="fas fa-phone-square text-success"></i>  Contact</h4>
                <hr />
                <p>+88-01822777360</p>
                <p>+88-01759427128</p> 
            </div>
            <div className="col">
                <h4 className="fw-bold fs-1"><i className="fas fa-mail-bulk  text-success"></i>  Gmail</h4>
                <hr />
                <p>web.masum@gamil.com</p>
                <p>web.foodpanda@gmail.com</p>    
            </div>
            </div>
        </div>
    );
};

export default Contact;