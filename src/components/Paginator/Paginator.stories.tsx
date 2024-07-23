import {Meta , StoryObj } from '@storybook/react';

import Paginator from './Paginator';

const meta: Meta<typeof Paginator> = {
    component: Paginator,
    argTypes: {
        pageCount: {
          control: 'number',
          defaultValue: 10,
        },
        pageRange: {
          control: 'number',
          defaultValue: 5,
        },
        currentPage: {
          control: 'number',
          defaultValue: 1,
        },
        onPageChange: { action: 'pageChanged' },
      },
}

export default meta;

type Story = StoryObj<typeof Paginator>;

export const Default: Story = {
    args: {
        pageCount: 10,
        pageRange: 5,
        currentPage: 1
    }
}