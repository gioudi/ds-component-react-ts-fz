import {render } from '@testing-library/react';

import Nav from './Nav';

describe('Nav component', ()=>{
    test('Nav component renders well once the screen is loaded', ()=> {
        render(<Nav 
            options={['Home', 'About', 'Services', 'Contact']}
            phone={"+86 852 346 000"}
            buttonText={"Reservations"}
            logo='../../images/Logo.png'
            urlButton='#'
        />)
    })
})