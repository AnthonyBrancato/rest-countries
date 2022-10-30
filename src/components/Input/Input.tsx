import { Input as MUIInput, InputProps } from '@mui/material';

function Input({ ...props }: InputProps) {
  return <MUIInput {...props} />;
}

export default Input;
