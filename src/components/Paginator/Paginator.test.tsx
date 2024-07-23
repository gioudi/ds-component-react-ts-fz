import {fireEvent, render, screen} from '@testing-library/react';

import Paginator from './Paginator';

describe('Paginator component',()=>{
    const setup = (
     pageCount = 10,
     pageRange = 5,
     currentPage = 1,
     onClick = jest.fn()) =>
    render(<Paginator pageCount={pageCount} pageRange={pageRange} currentPage={currentPage}
        onPageChange={onClick}/>)
    test('Paginator renders ', ()=>{
        setup();

        expect(screen.getByText('Next')).toBeInTheDocument();
        expect(screen.getByText('Prev')).toBeInTheDocument();    
    })

    test('Calls onPage with correct number',()=>{
        const onPageChange = jest.fn();
        setup(10,5,1,onPageChange);

        fireEvent.click(screen.getByText(1));
        expect(onPageChange).toHaveBeenCalledWith(1);
    })
})