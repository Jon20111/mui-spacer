import {Divider, DividerProps} from '@mui/material';

interface SpacerProps extends DividerProps {
  space?: string;
  component?: string;
}

const Spacer = (props: SpacerProps) => {
  const {space, sx, ...rest} = props;
  console.log(sx);
  const direction = rest?.orientation === 'vertical' ? 'borderRightWidth' : 'borderBottomWidth'
  return (
    <Divider sx={{borderColor: 'transparent', ...sx, ...{[direction]: space ? space : '1px'}}} {...rest}/>
  );
}

export { Spacer };
export type { SpacerProps };