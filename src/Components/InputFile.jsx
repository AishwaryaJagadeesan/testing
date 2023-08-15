import React, { Fragment, useEffect } from "react";
import { Card } from "antd";
const InputFile = ({ label, type, name, value, onChange }) => {

    return (
        <Fragment>
            <label><b>{label}</b></label> <span className='m-1' style={{ color: 'red' }}>*</span>
            <input className="form-control mt-1" placeholder={`Enter ${label}`} name={name} type={type} value={value} onChange={onChange} />
          
        </Fragment>
    )
}
export default InputFile