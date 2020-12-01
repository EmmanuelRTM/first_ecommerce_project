import React, { useState, useEffect} from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import "./ShowProduct.scss";

const url ="https://ecomerce-master.herokuapp.com/api/v1/item";

function Copy(){

    // eslint-disable-next-line no-unused-vars
    const [products, setProducts]=useState('');

    useEffect(
        axios.get(url)
            .then((resp)=>{
                if(resp.status === 200){
                    let productsToLoad=resp.data;
                    setProducts(productsToLoad);
                    //console.log(productsToLoad)
                }else{
                    console.log(resp.status, " error consulting DB")
                    return resp.status;
                }
                }).catch((err)=>{
                    console.log(err)
                    return err;
                })
            ,[url]
    );


    return (
        <div>
            hallo
        </div>
    )
}

export default Copy;