import { useEffect, useState } from "react"
import {getStoredCart} from '../../utilities/Database';
const useCart = services => {
    const [cart, setCart] = useState([]);

    useEffect( () => {
        const savedCart = getStoredCart();
            const keys = Object.keys(savedCart);
            fetch('http://localhost:5000/services/byKeys', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(keys)
                
            })
            .then(res => res.json())
            .then(services => {
                console.log(services)
                // if(services.length){
            
                //     const storedCart = [];
                //     for(const key in savedCart){
                //         const addService = services.find(service => service.key === key);
                //         if(addService){
                //             const quantity = savedCart[key];
                //             addService.quantity = quantity;
                //             storedCart.push(addService);
                //         }
                //     }
                //     setCart(storedCart);
                // }
            })

        
    } , [services])
    return [cart, setCart];
}

export default useCart;