import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import Searcher from '../components/Searcher'
import ShowProduct from '../components/ShowProduct';
import axios from 'axios';

function Product() {

    const URL_Searcher= "https://ecomerce-master.herokuapp.com/api/v1/item";
    
    const [consultedItems, setConsultedItems] = useState([]);
    const [searchedText,setSearchedText]=useState('');

    function getAllItems(query){
        if(query==""){
            axios.get(URL_Searcher+query)
            .then((resp)=>{
                console.log(resp.status)
            if(resp.status === 200){

                let dataFromItems=resp.data;
                console.log(dataFromItems)
                setConsultedItems(dataFromItems);

            }else{
                console.log(resp.status, " error consulting items")
                return resp.status;
            }
            }).catch((err)=>{
                console.log(err)
                return err;
            });
        }else{
            axios.get(URL_Searcher+"/"+query)
            .then((resp)=>{
                console.log(resp.status)
            if(resp.status === 200){

                let dataFromItems=resp.data;
                console.log(dataFromItems)
                setConsultedItems(dataFromItems);

            }else{
                console.log(resp.status, " error consulting items")
                return resp.status;
            }
            }).catch((err)=>{
                console.log(err)
                return err;
            });
        }
    }

    const agregarBusqueda = (search) => {
        setSearchedText(search);
    }
    // Funciona como didMount
    useEffect(() => {
        console.log('Se ejecuto useEffect');
        getAllItems(searchedText);

    }, [searchedText]);

    return (

        <div>
            <Navbar/>
            <h1 className="justify-content-center">Welcome! </h1>
            <Searcher addSearch={agregarBusqueda}/>
            {consultedItems.length === 0 ? <h1> </h1> : <ShowProduct lista={consultedItems} />}
        </div>

    );
}

export default Product;