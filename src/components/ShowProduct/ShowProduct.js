import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//import axios from 'axios';
import "./ShowProduct.scss";

function ShowProduct({lista}){
        const RenderProducts = () => {
            //console.log( products)
            //convert an object into a list??
                const productCart = lista.map((data)=>{
                   // console.log()
                    //const id_serie_url="/serie/"+data.show.id;
                    //const linkSerie = "/serie/"+data.show.id
                   // console.log(data)
                    //console.log(data)
                    return(
                        <div key={data._id} className="located-Serie" >
                            
                                <div className="col-md-3">
                                    <p></p>
                                    <Link to ={"/product/"+data._id}>{data.product_name}</Link>
                                    {
                                        /*
                                            <p></p>
                                            <p>{data.description}</p>
                                            <
                                        */ 
                                    }
                                    {
                                    //<Link to={id_serie_url}>{data.show.name}</Link>
                                    //<p>{data.show.id}</p>
                                    }
                                    <p></p>
                                            

                                    <div  id="image-container" className="col-mb-0 justify-content-center">
                                        {data.image? <img src={data.image} alt="" className="image-view image-container" />: <img src="https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg" alt="" className="image-view" />}
                                    </div>
                                    <p className="justify-content-left">Price: ${data.price}</p>
                                    <p></p>
                                </div>
                            
                        </div>
                    )
                })
                return productCart;
            }   

    return (
        <div >
            
                {lista ? <RenderProducts className="row justify-content-center"/>: <p className="row justify-content-center"> Loading...</p>}
            
        </div>
    )
    
}

ShowProduct.propTypes={
    lista: PropTypes.array
}

export default ShowProduct;