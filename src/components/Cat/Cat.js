import React from 'react';
import {useDispatch} from "react-redux";

import {catActions} from "../../redux";

const Cat = ({cat: {id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {id} --- {name}
            <button onClick={() => dispatch(catActions.deleteById({id}))}>Del</button>
        </div>
    );
};

export {Cat};