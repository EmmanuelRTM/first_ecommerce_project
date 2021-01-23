import React , { useState} from 'react';

const ProductContext=React.createContext();
//se encesita el proveedor de datos y el consumido de datos
//creacion del proveedor del contexto

function ProductProvider(props){

    const [list, setList]=useState([]);
    /* useEffect(() => {
        axios.get();
        setTimeout(()=>{
            setList(canciones)
        },2000)
    },[])*/
    

    const deleteProduct = (name) => {
        console.log(list)
        const newList = list.filter((product) => product.product_name !== name )
       //sin saber porque no me lo detecta como lista aun... name debe ser usado como entrada de deletepriduct
        setList([newList]);
        console.log(name, ' its going to be deleted'); 
        //setList() //se pone la nueva lista con el titulo 
    }
    
    const value = {
        list,
        setList,
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

export {ProductProvider,useProductContext};