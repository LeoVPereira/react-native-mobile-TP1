import React from 'react';
import { TextInput } from 'react-native-paper';

type MeuInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  placeholder?: string; // Adicionando a propriedade placeholder
};

const MeuInput: React.FC<MeuInputProps> = ({ value, onChangeText, label, placeholder }) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder} // Usando a propriedade placeholder
    />
  );
};

export default MeuInput;
