import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from './AppFrame';
import CustomerActions from './CustomerActions';
import CustomersList from './CustomersList'
const customers = [
    {
        "dni":'27000000',
        "name":"Juan Perez",
        "age":37
    },
    {
        "dni":'30000000',
        "name":"Otro",
        "age":35
    },
    {
        "dni":'33000000',
        "name":"Luis Martinez",
        "age":32
    },
];

class CustomerContainer extends Component {
    
    handleAddNew = () => {
        console.log('Nuevo cliente')
    }

    renderBody = customers => {
        return(
            <div>
                <CustomersList 
                    customers={customers} 
                    urlPath={'customers/'}>
                </CustomersList>
                <CustomerActions>
                    <button onClick={this.handleAddNew}>Nuevo Cliente</button>
                </CustomerActions>
            </div>
        )
    }
    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}></AppFrame>
            </div>
        )
    }
}

export default CustomerContainer;
