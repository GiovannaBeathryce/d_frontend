import FormContainer from "../FormContainer"
import ResponseContainer from "../ResponseContainer"
import { useState } from 'react';
import './style.scss'

const Main = () =>{
    const [values, setValues] = useState([])

    return(
        <div className="body">
            <FormContainer values={values} setValues={setValues} />
            <ResponseContainer values={values}/>
        </div>
    )
}

export default Main