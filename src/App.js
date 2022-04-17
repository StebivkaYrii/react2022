import {CarForm, Cars} from "./components";
import {useState} from "react";

export const App = () => {

    const [newCar, setNewCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);
    const [carFormUpdate, setCarFormUpdate] = useState(null)
    return (
        <div>
            <CarForm setNewCar={setNewCar} carFormUpdate={carFormUpdate} setUpdatedCar={setUpdatedCar}/>
            <hr/>
            <Cars newCar={newCar} setCarFormUpdate={setCarFormUpdate} updatedCar={updatedCar}/>
        </div>
    );
}