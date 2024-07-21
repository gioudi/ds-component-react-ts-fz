import {render, fireEvent} from '@testing-library/react';
import Button from './Button';

test('Button renders with correct label', ()=>{
    const {getByText} = render(<Button label="Click me" onClick={()=>{}}/>)
    expect(getByText('Click me')).toBeInTheDocument();
})