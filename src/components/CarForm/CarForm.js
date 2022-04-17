import {useForm} from "react-hook-form";

import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {useEffect} from "react";

const CarForm = ({setNewCar, carFormUpdate, setUpdatedCar}) => {

    // const [formError, setFormError] = useState({});

    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        if (carFormUpdate) {
            const {model, price, year} = carFormUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carFormUpdate])

    const submit = async (car) => {
        try {
            if (carFormUpdate) {
                const {data} = await carService.updateById(carFormUpdate.id, car);
                setUpdatedCar(data)
            } else {
                const {data} = await carService.create(car);
                setNewCar(data)
            }
            reset()
        } catch (e) {
            // setFormError(e.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price:<input type="number"{...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year:<input type="number"{...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <hr/>
            <button>save</button>
        </form>
    );
};

export {CarForm};