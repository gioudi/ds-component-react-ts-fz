import {Meta, StoryObj} from '@storybook/react';

import Nav from './Nav';

const meta: Meta<typeof Nav> = {
    component: Nav
}

export default meta;

type Story = StoryObj<typeof Nav>

export const Default: Story = {
    args: {
        options:['Home', 'About', 'Services', 'Contact'],
        phone: "+86 852 346 000",
        buttonText: "Reservations",
        logo: "../../images/Logo.png",
        urlButton: "#"
    }
}