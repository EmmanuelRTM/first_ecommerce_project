import React from 'react';
import {useProductContext} from '../../hooks/ShoppingContext';
import Navbar from '../Navbar';

function Cart(){
    const context = useProductContext();
//componente eitnermedio
    const cliclEnBorrar = (product_name) =>{
        //alert('se debe de borrar el titulo'+ context.selectedProduct.title)
        context.deleteProduct(product_name);

        console.log(`Se borrara tu producto ${product_name}`)
    }

    const RenderTable= (data) => {
        
        const showProducts = (product)=>{
            //console.log(product)
            //const e=product.list;
            console.log(product.list)
            return(
                
                    product.list.map((e,i)=>{   
                        //Hay que ver como capturar el producto y como se va a recibir para llamar con context
                        return (

                            <tr key={i} className="located-Product">
                                <td>{e.product_name}</td>
                                <td>{e.price}</td>
                                <td>{e.quantity}</td>
                                <td>
                                {
                                    e.price * e.quantity
                                }</td>
                                <td>
                                    <button onClick={()=>{cliclEnBorrar(e.product_name)}}>Eliminar</button>
                                </td>
                            </tr>

                        )
                    }
                    )
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
                <div>
                    <table className="egt">
                        <tbody>
                                {newHeaderofRow()}
                                {showProducts(data)}
                        </tbody>
                    </table>
                    <button onClick={()=>{ComprarAhora()}}>Comprar</button>
                </div>
            )
    }

const ComprarAhora = ()=>{
    alert("Enhorabunea, transacción exitosa, espere 3 días en que llegue su(s) producto(s)")
    //console.log("Enhorabunea, transacción exitosa, espere 3 días en que llegue su(s) producto(s)")
}

    return (
        <div>
            {//insert a table : 
            //product name | unit price | number of products- delete and add button | total 
            //button - buy all>
            }
            <Navbar/>
            <p>

            </p>
            { context ? RenderTable(context): <p>No products were found in your cart</p>}
        </div>

    )
}
export default Cart;