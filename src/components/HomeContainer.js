import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import AppFrame from "./AppFrame";
import CustomerActions from './CustomerActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log('handle on click')
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

HomeContainer.propTypes = {
    
};

export default HomeContainer;