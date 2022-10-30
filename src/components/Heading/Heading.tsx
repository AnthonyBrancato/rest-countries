import { TypographyProps } from '@mui/material/';
import Typography from '@mui/material/Typography';

function Heading({ ...props }: TypographyProps) {
  return <Typography {...props}>{props.children}</Typography>;
}

export default Heading;
