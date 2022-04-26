import React from 'react';
import {useDispatch} from "react-redux";

import {dogActions} from "../../redux";

const Dog = ({dog: {id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {id} --- {name}
            <button onClick={() => dispatch(dogActions.deleteById({id}))}>Del</button>
        </div>
    );
};

export {Dog};