import { useEffect, useState } from "react"
import {getStoredCart} from '../../utilities/Database';
const useCart = services => {
    const [cart, setCart] = useState([]);

    useEffect( () => {

        if(services.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addService = services.find(service => service.key === key);
                if(addService){
                    const quantity = savedCart[key];
                    addService.quantity = quantity;
                    storedCart.push(addService);
                }
            }
            setCart(storedCart);
        }
    } , [services])
    return [cart, setCart];
}

export default useCart;