import React, { Fragment, useState, useEffect } from "react";
import InputFile from "./InputFile";
import { Button, Card } from "antd";
import { useParams, useNavigate } from 'react-router-dom'
import _ from 'lodash';
const AdduserDetails = ({
    editData,
    setType,
    type
}) => {
    const [registerData, setRegisterData] = useState({
    })      //for store input value 
    const [onSubmitData, setonSubmit] = useState(false)  //validation check state
   //validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const nameRegex = /^[A-Za-z]+$/;
    //Add Submit functionality
    const onSubmit = () => {
        if ((nameRegex.test(registerData.firstname)) && nameRegex.test(registerData.lastname) && (phoneRegex.test(registerData.phoneNumber) && (emailRegex.test(registerData.email)))) {
            if (type == 'add') {
                const arrayAsString = localStorage.getItem("listValue");
                let temp = arrayAsString ? JSON.parse(arrayAsString) : []
                registerData.id = Math.floor(Math.random() * 90000) + 10000
                temp.push(registerData)
                let myArray = JSON.stringify(temp);
                localStorage.setItem('listValue', myArray)

            }
            else {
                const arrayAsString = localStorage.getItem("listValue");
                let temp = JSON.parse(arrayAsString)
                if (temp.length > 0) {
                    let id = editData.id
                    for (let i in temp) {
                        if (temp[i].id == id) {
                            registerData.id = id
                            temp.splice(i, 1, registerData)


                        }
                    }
                    let myArray = JSON.stringify(temp);
                    localStorage.setItem('listValue', myArray)
                }
            }
            setType('list')
        }
        else {
            setonSubmit(true)
        }
    }
    //input onChange
    const handleNameChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }
    //set edit user details 
    useEffect(() => {
        if (editData && type == 'edit') {
            setRegisterData(editData)
        }
        else {
            setRegisterData({})
        }
    }, [editData])
   
    return (
        <Fragment>
            <Card className="mt-3">

                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <InputFile label="First Name" type="text" name='firstname' value={registerData.firstname} onChange={handleNameChange} />
                            {(onSubmitData == true && (nameRegex.test(registerData.firstname) == false)) || (onSubmitData == true && (registerData.firstname == '' || registerData.firstname == undefined)) ? <span style={{ color: 'red' }}>{registerData.firstname == '' || registerData.firstname == undefined ? 'Please Enter First Name' : 'Please Enter Valid First Name'}</span> : ''}
                        </div>
                        <div className="col-md-6">
                            <InputFile label="Last Name" type="text" name='lastname' value={registerData.lastname} onChange={handleNameChange} />
                            {(onSubmitData == true && registerData.lastname && (nameRegex.test(registerData.lastname) == false)) || (onSubmitData == true && (registerData.lastname == '' || registerData.lastname == undefined)) ? <span style={{ color: 'red' }}>{registerData.lastname == '' || registerData.lastname == undefined ? 'Please Enter Last Name' : 'Please Enter Valid Last Name'}</span> : ''}
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <InputFile label="Email" type="text" name='email' value={registerData.email} onChange={handleNameChange} />
                            {onSubmitData == true && (emailRegex.test(registerData.email) == false) ? <span style={{ color: 'red' }}>{registerData.email == '' || registerData.email == undefined ? 'Please Enter Email' : 'Please Enter Valid Email'}</span> : ''}
                        </div>
                        <div className="col-md-6">
                            <InputFile label="Phone Number" type="text" name='phoneNumber' value={registerData.phoneNumber} onChange={handleNameChange} />
                            {onSubmitData == true && (phoneRegex.test(registerData.phoneNumber) == false) ? <span style={{ color: 'red' }}>{registerData.phoneNumber == '' || registerData.phoneNumber == undefined ? 'Please Enter Phone Number' : 'Please Enter Valid Phone Number'}</span> : ''}
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <InputFile label="Address" type="text" name='address' value={registerData.address} onChange={handleNameChange} />
                        </div>
                        <div className="col-md-6">
                            <InputFile label="City" type="text" name='city' value={registerData.city} onChange={handleNameChange} />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <InputFile label="State" type="text" name='state' value={registerData.state} onChange={handleNameChange} />
                        </div>
                        <div className="col-md-6">
                            <InputFile label="Country" type="text" name='country' value={registerData.country} onChange={handleNameChange} />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <InputFile label="PostalCode" type="text" name='postalCode' value={registerData.postalCode} onChange={handleNameChange} />
                        </div>
                    </div>
                </div>
                <Button className="mt-3" style={{ marginLeft: '45%' }} onClick={onSubmit} type="primary">Submit</Button>
            </Card>
        </Fragment>
    )
}
export default AdduserDetails