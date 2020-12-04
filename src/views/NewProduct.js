import React, { useState, useEffect } from 'react';
import protect from '../utils/protect';
import Navbar from '../components/Navbar';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useHistory} from 'react-router-dom';


function NewProduct(){
    const history = useHistory();
    const [userInfo, setUserInfo]=useState();

    const obtainData = () =>{
        //console.log(userInfoID) 
        
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
                Authorization: `JWT ${token}` 
            }
        }
        //console.log(config)
        if(config){
            axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/me`,config)
            .then((response)=>{
                if(response.status===200){
                    //console.log("Information of the user has been received", response.data.user)
                    setUserInfo(response.data.user);
                    //response.data.user.role for detecting the role CUSTOMER/ADMIN
                }else{
                    console.log("please check your credentials",response)
                }
            })
            .catch(()=>{
                //alert("Please Signup/Login") 
                //It's repeating the alert many times
                console.log("Please check Signup/Login")
            })
        }
        
    }

    const sendData = (data) =>{

        //eliminado el delte del confirm password
            const token = window.localStorage.getItem('token')
            const config = {
                headers:{
                    Authorization: `JWT ${token}` 
                }
            }

            //podria usar axios dos veces creo yo

            axios.post(`https://ecomerce-master.herokuapp.com/api/v1/item/`,data,config)
                .then((resp) =>{
                    console.log(resp.status)
                    //console.log(response.data)
                    alert("You have successfully created a new product");
                    //const { token } =response.data;
                    //const pato = response.data.token;
                    //session.storage
                    //local.storage
                    //window.localStorage.setItem("token", token) ;// esto agrega algo nuevo al local storag
                    history.push('/');
                })
                .catch((error) =>{
                    alert(error.response.data.message);
                })
        

    }
    useEffect(()=>{
        obtainData()
    },[obtainData()])


    const { inputs, handleInputChange, handleSubmit } = useForm(sendData,{});
    return (
        <form onSubmit={handleSubmit}>
            <Navbar />
            {userInfo ? 
                <h3>
                    Loading...
                </h3>
            :
            
                <div className="container mt-5">
                    <h3>Products current information</h3>
                <div className="row justify-content-center">

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Product Name</label>
                            <input type="text" 
                            value={inputs.product_name}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="product_name" 
                            id="product_name"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Category</label>
                            <input 
                            type="text" 
                            value={inputs.category}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="category" 
                            id="category"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Brand</label>
                            <input 
                            type="text" 
                            value={inputs.brand}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="brand" 
                            id="brand"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Price</label>
                            <input type="number" 
                            value={inputs.price}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="price" 
                            id="price"
                            />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Image URL</label>
                            <input type="text" 
                            value={inputs.image}
                            onChange={handleInputChange}
                            className="form-control padding-5" 
                            name="product_name" 
                            id="product_name"/>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <input 
                            type="text" 
                            value={inputs.description}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="description" 
                            id="description"/>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-dark">Edit Info</button>
                    </div>
                </div>
            </div>
            }
            
        </form>
    )
}

export default protect(NewProduct);