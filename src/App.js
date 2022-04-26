import {Form, Cats, Dogs, Forms} from "./components";
import './App.css';

const App = () => {
    return (
        <div className={'header'}>
            <div>
                <Form/>
                <Cats/>
            </div>
            <div>
                <Forms/>
                <Dogs/>
            </div>
        </div>
    );
};

export default App;