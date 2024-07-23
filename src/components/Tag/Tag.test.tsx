import {render} from '@testing-library/react';

import Tag from './Tag';

test('Tag renders with correct label', ()=>{
    const {getByText} = render(<Tag label='Default tag'/>)
    expect(getByText('Default tag')).toBeInTheDocument()
})