import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark mx-auto">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto text-light p-5">
                <div className="col">
                    <h5 className="fw-bold text-success"><i class="fas fa-utensils"></i> Food Panda</h5>
                    <hr />
                    <p className="text-light">The Platforms may be used by (i) natural persons who have reached 18 years of age and (ii) corporate legal entities, e.g companies. Where applicable, these Terms shall be subject to country-specific provisions as set out herein. </p>
               
                </div>
                <div className="col">
                    <h5 className="fw-bold text-success"><i className="fas fa-lock-open text-success"></i> Opening Hour</h5>
                    <hr />
                       <p>Mon-Tue:  9:00AM-10:00PM</p>
                       <p>Wed-Thu:  9:00AM-10:00PM</p>
                       <p>Fry:  9:00AM-02:00PM</p>
                       <p>Sun: Closed</p>
                </div>
                <div className="col">
                    <h5 className="fw-bold text-success"><i className="fas fa-network-wired text-success"></i> Connect Us </h5>
                    <hr />
                    <a href="https://www.facebook.com/masum.evan.96"><i className="fab fa-facebook-square text-success fs-3"></i></a><br />
                    <a href="https://www.instagram.com/masum_evan12/"><i className="fab fa-instagram-square text-success fs-3"></i></a><br />
                    <a href="https://www.linkedin.com/in/masum-evan-95a84a216/"><i className="fab fa-linkedin text-success fs-3"></i></a><br />
                    <a href="https://github.com/masum121212"><i className="fab fa-github-square text-success fs-3"></i></a>   
                </div>
            </div>
            <small className="text-light">copyright ©2021 FoodPanda</small>
        </div>
        </div>
    );
};

export default Footer;