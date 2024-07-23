import  { fireEvent, render, screen } from '@testing-library/react';

import Filter from './Filter';

describe('Filter component',()=>{
    const options =  ['All', 'Starter', 'Launch', 'Dinner', 'Drinks', 'Sweets', 'Fruits'];
    const onSelect = jest.fn();

    test('renders a list of buttons based on the options to filter', ()=> {
        render(<Filter options={options} onSelect={onSelect}/>)
        options.forEach((option)=>{
            expect(screen.getByText(option)).toBeInTheDocument();
        })
    });

    test('calls on select when a button is clicked', ()=>{
        render(<Filter options={options} onSelect={onSelect}/>)
        fireEvent.click(screen.getByText('Starter'));
        expect(onSelect).toHaveBeenCalledWith('Starter')
    });
})