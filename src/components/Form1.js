import React, {useRef} from 'react';
import {useDispatch} from "react-redux";

import {dogActions} from "../redux";

const Forms = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();

    const addDog = () => {
        const {value} = nameInput.current;
        dispatch(dogActions.add({name: value}))
    }

    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={addDog}>Add</button>
        </div>
    );
};

export {Forms};