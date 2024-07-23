import {Meta, StoryObj } from '@storybook/react';
import Filter from './Filter';


const meta: Meta<typeof Filter> = {
    component: Filter
}

export default meta;

type Story = StoryObj<typeof Filter>

export const Default: Story = {
    args: {
        options: ['All', 'Starter', 'Launch', 'Dinner', 'Drinks', 'Sweets', 'Fruits'],
        onSelect:  (selectedOption) => console.log('selected:',selectedOption)
    }
}

export const Solid: Story = {
    args: {
        options: ['All', 'Starter', 'Launch', 'Dinner', 'Drinks', 'Sweets', 'Fruits'],
        onSelect:  (selectedOption) => console.log('selected:',selectedOption),
        variant: 'solid'
    }
}