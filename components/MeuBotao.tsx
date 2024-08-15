import React from 'react';
import { Button } from 'react-native-paper';

type BotaoProps = {
  onPress: () => void;
  title: string;
};

const MeuBotao: React.FC<BotaoProps> = ({ onPress, title }) => {
  return (
    <Button mode="contained" onPress={onPress}>
      {title}
    </Button>
  );
};

export default MeuBotao;
