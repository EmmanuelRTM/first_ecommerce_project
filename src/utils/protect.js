import React from 'react';
import { Redirect } from 'react-router-dom';

function HOC (Component){
    const token = window.localStorage.getItem('token');
    const WrappedComponent = (props) =>{
        return token ? <Component {...props} /> : <Redirect to="/" /> 
    }

    return WrappedComponent 

}
//HOC hace que cualquier componente al que se vaya usar si no tiene token, vuelve a HOME como tal
export default HOC;