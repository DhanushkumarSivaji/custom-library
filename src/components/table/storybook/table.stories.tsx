import { Story } from '@storybook/react';
import Stack from '@mui/material/Stack';
import TableComponent from '../table';
import React from 'react';

export default {
    title: 'GOE/Molecules/Table',
    component: TableComponent,
  };

function createData(
    name: string,
    gender: string,
    phone: number,
    age: number,
    country: string,
  ) {
    return { name, gender, phone, age, country };
  }
  
  const data = [
    createData('John', "Male", 9500902823, 24, 'United States'),
    createData('Nikolai', 'Male', 8764534455, 37, 'Phillipines'),
    createData('Rossie', 'Female', 9876412345, 24, 'Australia'),
    createData('Albert', 'Male', 9893458342, 67, 'India'),
    createData('Claudia', 'Female', 8934218423, 49, 'Canada'),
  ];
  
const Template: Story = ({data}) =><Stack m={5}><TableComponent data={data}/></Stack>;

export const Table = Template.bind({});

Table.args = {
    data,
};
