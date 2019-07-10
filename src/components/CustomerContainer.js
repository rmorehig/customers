import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
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
        this.props.history.push("/customers/new")
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

export default withRouter(CustomerContainer);
