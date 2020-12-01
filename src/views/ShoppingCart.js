import React from 'react';
import PropTypes from 'prop-types';

function ShoppingCart({list}){
    return (
        <div>
            {//insert a table : 
            //product name | unit price | number of products- delete and add button | total 
            //button - buy all>
            }
            {list}
        </div>
    )
}
ShoppingCart.propTypes={
    list: PropTypes.array
}

export default ShoppingCart;