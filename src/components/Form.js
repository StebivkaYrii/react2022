import React, {useRef} from 'react';
import {useDispatch} from "react-redux";

import {catActions} from "../redux";

const Form = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();

    const addCat = () => {
        const {value} = nameInput.current;
        dispatch(catActions.add({name: value}))
    }

    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={addCat}>Add</button>
        </div>
    );
};

export {Form};