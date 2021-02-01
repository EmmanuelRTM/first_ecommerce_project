/* eslint-disable no-undef */

import React from 'react';
import ShowProduct from './ShowProduct';
//import Search from './Search';
import {render, screen} from '@testing-library/react'

describe('Explicando home', ()=>{
    it("Render test de show product",()=>{
        render(<ShowProduct/>);
        //screen.debug();
    });
    
    it("Render show product  wtih image-container component",()=>{
        render(<ShowProduct/>);
        const label=screen.getByTestId('[data-testid="loadindText"]');
        expect(label).toBeInTheDocument();
    });
/*
    it("Render test para modificar objeto input",()=>{
        render(<Home/>);
        //screen.debug();
        const input = screen.getByTestId('idTestSearch')
        //change va a recibir en donde va  aescrbir
        fireEvent.change(input,{
            target: {value:'una busqueda mas'}
        })
        console.log('-------');
        //screen.debug()
    });

    //Detectar quse se detone correctamente el onchage
    it("Detectar quse se detone correctamente el onchage",()=>{
        const funcionOnChangeFake=jest.fn();//Hace una funcion vacia
        render(
            <Search
                value=''
                onChange={funcionOnChangeFake}
                titulo="Este es mi titulo"
            />
        );
        

        const input = screen.getByTestId('idTestSearch')

        //change va a recibir en donde va aescrbir
        fireEvent.change(input,{
            target: {value:'JS'}
        })
        
        expect(funcionOnChangeFake).toHaveBeenCalledTimes(1);
    });*/

});