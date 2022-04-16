import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar}) => {

    // const [formError, setFormError] = useState({});

    const {register, reset, handleSubmit, formState: {errors}} = useForm({resolver:joiResolver(carValidator)});

    const submit = async (car) => {
        try {
            const {data} = await carService.create(car);
            setNewCar(data)
            reset()
        } catch (e) {
            // setFormError(e.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price:<input type="text"{...register('price', {valueAsNumber: true})}/></label></div>
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year:<input type="text"{...register('year', {valueAsNumber: true})}/></label></div>
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <hr/>
            <button>save</button>
        </form>
    );
};

export {CarForm};