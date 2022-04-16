const Car = ({car}) => {
    const {id, model, prise, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>prise: {prise}</div>
            <div>year: {year}</div>
            <br/>
        </div>
    );
};

export {Car};