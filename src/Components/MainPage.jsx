import React, { useState, useEffect, Fragment } from "react";
import { Button, Table } from "antd";
import { useNavigate } from 'react-router-dom'
import { EditTwoTone } from "@ant-design/icons";
import AdduserDetails from "./AdduserDetails";
const MainPage = () => {
    const [data, setData] = useState([]) //store table Data
    const [type, setType] = useState('list') //identify list or add or edit 
    const [editData, setEditData] = useState() //set edit value
    //table columns
    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstname',
            key: 'firstname',
            sortable: true,
            sorter: (a, b) => a.firstname.localeCompare(b.firstname)
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'PostalCode',
            dataIndex: 'postalCode',
            key: 'postalCode',
        },
        {
            title: 'Edit',
            render: (row, record) => {
                return <EditTwoTone onClick={() => {
                    setEditData(record)
                    setType('edit')
                }} />
            }
        },
    ];
    //set localstorage value on table.
    useEffect(() => {
        const arrayAsString = localStorage.getItem("listValue");
        if (arrayAsString) {
            setData(JSON.parse(arrayAsString))
        }
    }, [localStorage.getItem("listValue")])

    return (
        <Fragment>
            <div className="container mt-3">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-10">
                            {type == 'list' ? <h5>List Of Users</h5> : <h5>Add User Details</h5>}
                        </div>
                        <div className="col-md-2">
                            {type == 'list' ?
                                <Button type="primary" onClick={() => {
                                    setType('add')

                                }} style={{ marginLeft: '50%' }}>Add user</Button> :
                                <Button type="primary" onClick={() => {
                                    setType('list')
                                }} style={{ marginLeft: '50%' }}>Back</Button>}
                        </div>
                    </div>
                </div> {type == 'list' ?
                    <Table className="mt-3" rowClassName={(record, index) => ((data[data.length - 1].id == record.id) ? 'highlighted-row' : '')} dataSource={data} pagination={false} columns={columns} />
                    : <AdduserDetails editData={editData} type={type} setType={setType} />} </div>
        </Fragment>

    )
}
export default MainPage