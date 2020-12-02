import React, {useState, useEffect} from 'react';
//import Navbar from '../components/Navbar/Navbar'; mala practica
import Navbar from '../components/Navbar';
import ShowProduct from '../components/ShowProduct';
import axios from 'axios';

function Home(){
    const [items, setItems] = useState([]);
    const [searchedText, setSearchedText]=useState('');

    const agregarQuery = (query) => {
        setSearchedText(query);
    }

    const getItems = ()=>{
        axios.get("https://ecomerce-master.herokuapp.com/api/v1/item")
            .then((response)=>{
                if(response.status===200){
                    console.log(response.data)
                    setItems(response.data)
                }else{
                    console.log("error in data")
                }
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=>{
        getItems();
    },[])

    return(
        <div>
            <Navbar addQuery={agregarQuery}/>
            {//agregar la constante de setinformation del query,  props del navbar, y enviarselo a showproduct
            }
            {//<h1 className="justify-content-center">¡Bienvenido!</h1>
            }
            {items.length===0 ? <h3>Loading...</h3> : <ShowProduct lista={items} elementoBusqueda={searchedText} className="justify-content-center"/>}
            
            {console.log(items)}
        </div>
    )
}


export default Home;