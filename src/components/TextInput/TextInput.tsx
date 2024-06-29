import React from 'react';
import { PrimaryInput,SecondaryInput } from './styles';
import TextInputProps from './interface';

const StyledInputDictionary: Record<string, typeof PrimaryInput> = {
    _: PrimaryInput,
    _primary: PrimaryInput,
    _secondary: SecondaryInput,
  };
  
  
  const getStyledComponent = ({ variant }: TextInputProps) => {
    return StyledInputDictionary[`_${variant ?? ''}`] ?? PrimaryInput;
  };
  
  const TextInput: React.FC<TextInputProps> = ({ variant, ...props }) => {
    const StyledInput = getStyledComponent({ variant });
  
    return <StyledInput {...props} />;
  };
  
  export default TextInput;
