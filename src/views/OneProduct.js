import React, {useState, useEffect}from 'react';
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import {useProductContext} from '../hooks/ShoppingContext';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

function OneProduct(){
    const context = useProductContext();
    const [contador, setContador]=useState(0);
    const history = useHistory();
    const params= useParams();
    const [info,setInfo]=useState();
    const [userInfo, setUserInfo] = useState();
    const URL_base="https://ecomerce-master.herokuapp.com/api/v1/item/";
    //const altLink="https://static.tvmaze.com/uploads/images/medium_portrait/237/592575.jpg"

    function getInformation(id_item){
            axios.get(URL_base+id_item)
                .then((resp)=>{
                    console.log(resp.status)
                if(resp.status === 200){
    
                    let dataFromItem=resp.data;
                    console.log(dataFromItem)
                    setInfo(dataFromItem);
    
                }else{
                    console.log(resp.status, " error consulting item")
                    return resp.status;
                }
                }).catch((err)=>{
                    console.log(err)
                    return err;
        });
    }

    const sendData =(counter, data)=>{
        alert(`Has añadido ${counter} item(s) del producto "${data.product_name}"`);
        data = {...data, quantity:counter}
        //context.list.push(data)
        //No sra setList???

        //graba la primera iteracion pero nola segunda vez
        if(context.setList===undefined){
            context.setList([])
            context.setList([data])
        }else{
            console.log(context.list)
            context.setList([...context.list, data])
        }
        
        //context.setSelectedProduct(data);
    }

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
                    setUserInfo(response.data.user.role);
                    //console.log(config)
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

    useEffect(() => {
        console.log('Se ejecuto useEffect');
        getInformation(params.idItem);
        obtainData();
    }, [params.idItem]);

    const Image_Serie= (obj)=>{
        //console.log(obj.image)
        return (
            <div className="image-container">
                <img src={
                    obj.image
                } alt="" className="image-view" 
                />
            </div>
        )
    }

    const RenderProduct = (data) => {
        
        /*const id_serie_url_season="/serie/"+data.id+"/seasons";
        const id_serie_url_cast="/serie/"+data.id+"/cast"*/
            return(
            <div className="container mt-5">
                <div className="row justify-content-center">
                    
                <div key={data._id} className="located-Serie">
                    {console.log(data)}
                    <h3> {data.product_name}</h3>
                        <p>
                        </p>
                    {
                    data.image ? Image_Serie(data): <img src="https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg" alt="" className="image-view" />
                    }
                        <p>
                        </p>
                    <h5>{data.description}</h5>
                        <p>
                        </p>
                    <h5>Category: {data.category}</h5>
                        <p>
                        </p>
                    <h5>Brand: {data.brand}</h5>
                        <p>
                        </p>
                    <h5>Price: ${data.price}</h5>
                        <p>
                        </p>
                        {
                            //Boton para agregar al carrito
                        }
                { /*<Link to={id_serie_url_season}>Episodes</Link>
                    <p> </p>
                    <Link to={id_serie_url_cast}>Cast</Link>
                    <p><p/>*/}

                    <button onClick={ ( ) => { setContador(contador+1) }} > + </button>
                        <p>{contador}</p>
                    <button onClick={ ( ) => { setContador(contador-1) } }> - </button>

                    <button type="submit" onClick={()=>{
                        //detect if user is ADMIN OR CUSTOMER
                        window.localStorage.getItem('token') ? sendData(contador, data): alert(`Please login/signup to buy any product`)
                        
                    }}>Buy Now</button>

                    
                    <p>
                    </p>
                    { userInfo =="ADMIN" ?
                        <button type="submit" onClick={()=>{
                            //detect if user is ADMIN OR CUSTOMER
                            history.push(`/product/${data._id}/edit`)
                        }}>Modify product</button>
                        /*<Link to={`/product/${data._id}/edit`}>
                            Modify product
                        </Link> */: <p></p>
                        //modify product
                    }
                    <p></p>

                </div>
            </div>
            </div>
            )
    }

    return (
        <div>
            <Navbar/>
            {
            info ===undefined ? 
            <h1>loading...</h1> 
            : 
            RenderProduct(info) 
            }

            <button type="button" onClick={()=>{
                history.push('/')
            }}>Home
            </button>
        </div>
    )
}

export default OneProduct;