import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button,{ ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
    label?: string
}

function ButtonComponent({label,variant}:CustomButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant}>{label}</Button>
    </Stack>
  );
}

export default ButtonComponent