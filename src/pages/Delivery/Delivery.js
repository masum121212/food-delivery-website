import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './Delivery.css'

const Delivery = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
  const onSubmit = data => {
      console.log(data)
    };
    return (
        <div className="delivery mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span className="text-danger">This field is required <i class="fas fa-exclamation-circle"></i></span>}
      <input placeholder="Address" defaultValue="" {...register("Address")} />
      <input placeholder="Phone Number" defaultValue="" {...register("Phone")} />
      <input className="City" defaultValue="" {...register("City")} />
      
      <input type="button" value="submit" className="btn btn-outline-success" />
    </form>
        </div>
    );
};

export default Delivery;