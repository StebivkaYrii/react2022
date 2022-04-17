import {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar,setCarFormUpdate}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarFormUpdate={setCarFormUpdate}/>)}
        </div>
    );
};

export {Cars};