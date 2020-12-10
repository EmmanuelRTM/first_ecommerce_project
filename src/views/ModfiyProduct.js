import React ,{useState, useEffect} from 'react';
//import protect from '../utils/protect';
import Navbar from '../components/Navbar';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useHistory, useParams} from 'react-router-dom';


function ModifyProduct(){
    const history = useHistory();
    const params = useParams();
    const [productInfo, setProductInfo] = useState();

    const obtainData = () =>{
        //obtain data from the product
    
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.idItem}`)
            .then((response)=>{
                if(response.status===200){
                    //console.log("Information of the user has been received", response.data.user)
                    setProductInfo(response.data);
                }else{
                    console.log("please check your credentials",response)
                }
            })
            .catch(()=>{
                console.log("Please check your configuration")
            })
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

            axios.patch(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.idItem}`,data,config)
                .then((resp) =>{
                    console.log(resp.status)
                    //console.log(response.data)
                    alert("You have successfully changed your product's information");
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
        obtainData();
    },[obtainData()])

    const { inputs, handleInputChange, handleSubmit } = useForm(sendData,{});
    return (
        <form onSubmit={handleSubmit}>
            <Navbar />
            {productInfo === undefined ? 
                <h3>
                    Loading...
                </h3>
            :
                <div className="container mt-5">
                    <h3>Products current information</h3>
                <div className="row justify-content-center">

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Product Name: {productInfo.product_name}</label>
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
                            <label htmlFor="">Category: {productInfo.category}</label>
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
                            <label htmlFor="">Brand: {productInfo.brand}</label>
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
                            <label htmlFor="">Price: ${productInfo.price}</label>
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
                            <label htmlFor="">Image URL: { productInfo.image != undefined ? productInfo.image : "https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg" }</label>
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
                            value={inputs.description ==undefined ? productInfo.description : inputs.description}
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

export default ModifyProduct;