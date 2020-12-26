import React from 'react';
import {useProductContext} from '../hooks/ShoppingContext';

function Cart(){
    const context = useProductContext();

    const cliclEnBorrar = (product_name) =>{
        //alert('se debe de borrar el titulo'+ context.selectedProduct.title)
        context.deleteSong(product_name)

    }

    const RenderTable= (data) => {
            
        const showProducts = (episo)=>{
            return(
                episo.map((e,i)=>{   
                    //Hay que ver como capturar el producto y como se va a recibir para llamar con context
                    return (
                        <tr key={i} className="located-Product">
                            <td>{e.product_name}</td>
                            <td>{e.price}</td>
                            <td>{e.quantity}</td>
                            <td>{e.price + e.quantity}</td>
                            <td>
                                <button onClick={cliclEnBorrar(e.product_name)}>Eliminar</button>
                            </td>
                        </tr>
                    )
                })
            )
        }
        const newHeaderofRow=()=>{
            return (

                <tr>
                    <th scope="row">Product description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th> Delete</th>

                </tr>

            )
        }
            return (
                <table className="egt">
                    <tbody>
                            {newHeaderofRow()}
                            {showProducts(data)}
                    </tbody>
                </table>
            )
    }

const ComprarAhora = ()=>{
    alert("Enhorabunea, transacción exitosa, espere 3 días en que llegue su(s) producto(s)")
}

    return (
        <div>
            {//insert a table : 
            //product name | unit price | number of products- delete and add button | total 
            //button - buy all>
            }
            { context ? RenderTable(context): <p>No products were found in your cart</p>}
            <button onClick={ComprarAhora()}>Comprar</button>
        </div>

    )
}
export default Cart;