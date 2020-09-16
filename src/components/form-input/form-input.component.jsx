import React from "react";

import "./form-input.styles.scss";

const FormInput = ({label, handleChange, ...otherProps}) => (
    <div className="group">
        <input type="text" className="form-input" onChange={handleChange} {...otherProps}/>

        {
            label ?
            (<label 
                className={
                    `${otherProps.value.length ? 'shrink': ''}
                     form-input-label`}> {/* label will always have class name form-input-label 
            but we will have shrink property whenewer user types anything in */}

            {label}
                            
            </label>)
            :null
        }
        
    </div>
)
export default FormInput;