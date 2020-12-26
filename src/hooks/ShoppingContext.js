import React , { useState}from 'react';
//import axios from 'axios';
//import canciones from './listCanciones.json';
//creacion del contexto vacio

const ProductContext=React.createContext();
//se encesita el proveedor de datos y el consumido de datos
//creacion del proveedor del contexto
function ProductProvider(props){

    //const [selectedProduct, setSelectedProduct]= useState({});
    const [list, setList]=useState([]);

    /* useEffect(() => {
        axios.get();
        setTimeout(()=>{
            setList(canciones)
        },2000)
    },[])*/
    

    const deleteProduct = (name) => {
        const newList = list.filter((product) => product.product_name !== name )
        setList(newList) //se pone la nueva lista con el titulo borrado
        //setSelectedProduct({}) //se quita la cancion al resetear la seleccion
    }
    
    const value = {
        list,
        //selectedProduct,
        //setSelectedProduct,
        deleteProduct
    }
    return (
        //value es un ojbeto que indica que datos son globales
        <ProductContext.Provider value={value} {...props}/>
    )    
}
//consumidor del contexto
const useProductContext= ()=>{
    const context = React.useContext(ProductContext);
    return context
}

export  {ProductProvider,useProductContext};