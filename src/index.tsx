import {Divider, DividerProps} from '@mui/material';

interface SpacerProps extends DividerProps {
  space?: string;
  component?: string;
}

export default function (props: SpacerProps) {
  const {space, sx, ...rest} = props;
  const direction = rest?.orientation === 'vertical' ? 'borderRightWidth' : 'borderBottomWidth'
  return (
    <Divider sx={{borderColor: 'transparent', ...sx, ...{[direction]: space ? space : '1px'}}} {...rest}/>
  );
}

export type { SpacerProps };