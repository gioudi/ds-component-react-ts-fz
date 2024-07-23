import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';


const meta: Meta<typeof Button> = {
    component: Button
}

export default meta;

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args:{
        label: 'Default Button',
        onClick: ()=> alert('Default Button Clicked')
    }
}

export const DefaultLarge: Story = {
    args:{
        label: 'Default Large Button',
        onClick: ()=> alert('Default Button Clicked'),
        size: 'large',
    }
}

export const Primary: Story = {
    args:{
        label: 'Primary Button',
        onClick: ()=> alert('Primary Button Clicked'),
        variant: 'primary',
    }
}

export const PrimarySmall: Story = {
    args:{
        label: 'Primary  Small Button',
        onClick: ()=> alert('Small Button Clicked'),
        variant: 'primary',
        size:'small'
    }
}

export const Secondary: Story = {
    args:{
        label: 'Secondary Button',
        onClick: ()=> alert('Secondary Button Clicked'),
        variant: 'secondary',
    }
}

