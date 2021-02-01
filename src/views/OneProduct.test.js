/* eslint-disable no-undef */

import React from 'react';
import OneProduct from './OneProduct';
//import Search from './Search';
import {render} from '@testing-library/react'

describe('Explicando home', ()=>{
    it("Render test de show product",()=>{
        render(<OneProduct/>);
        //screen.debug();
    });
    
    
    /*it("Render show product  wtih image-container component",()=>{
        render(<OneProduct/>);
        const label=screen.getByTestId('[data-testid="loadindText"]');
        expect(label).toBeInTheDocument();*/
});
