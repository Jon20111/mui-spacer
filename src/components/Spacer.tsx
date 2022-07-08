import {Divider, DividerProps} from '@mui/material';

interface Spacer extends DividerProps {
  space?: string;
  component?: string;
}

export default function Spacer(props: Spacer) {
  const {space, sx, ...rest} = props;
  console.log(sx);
  const direction = rest?.orientation === 'vertical' ? 'borderRightWidth' : 'borderBottomWidth'
  return (
    <Divider sx={{borderColor: 'transparent', ...sx, ...{[direction]: space ? space : '1px'}}} {...rest}/>
  );
}
