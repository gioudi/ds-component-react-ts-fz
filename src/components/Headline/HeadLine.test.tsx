import {screen, render } from '@testing-library/react';

import HeadLine from './HeadLine';

describe('HeadLine component', ()=>{
    test('render component correctly', ()=>{
        render(<HeadLine title='Healthy Eating 
        is important
        part of lifestyle' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu' variant='hero'/>)
        expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu')).toBeInTheDocument();
    })
})