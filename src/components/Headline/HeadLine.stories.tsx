import {Meta, StoryObj } from '@storybook/react';
import HeadLine from './HeadLine';

const meta: Meta<typeof HeadLine> = {
    component: HeadLine
}

export default meta;

type Story = StoryObj<typeof HeadLine>

export const Hero: Story = {
    args: {
        title: 'Healthy Eating is important part of lifestyle',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
        variant: 'hero'
    }
}


export const Large: Story = {
    args: {
        title: 'Starters',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
        variant: 'large'
    }
}

export const Normal: Story = {
    args: {
        title: 'Coming Soon',
        variant: 'normal'
    }
}