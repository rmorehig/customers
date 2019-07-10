import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import AppFrame from "./AppFrame";
import CustomerActions from './CustomerActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        this.props.history.push("/customers")
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header='Home' 
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    }/>
            </div>
        );
            }
};



export default withRouter(HomeContainer);