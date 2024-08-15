import React from 'react';
import { View } from 'react-native';
import MeuBotao from '../components/MeuBotao';
import MeuGrid from '@/components/MeuGrid';
import MeuInput from '@/components/MeuInput';
import MinhaImagem from '@/components/MinhaImagem';


const App = () => {
  return (
    <View>
      <MeuBotao title="Clique aqui" onPress={() => alert('Botão pressionado!')} />
      <MeuInput label="Nome" placeholder="Digite seu nome" />
      <MeuGrid />
      <MinhaImagem source={{ uri: 'https://example.com/imagem.jpg' }} description="Minha imagem" />
    </View>
  );
};

export default App;
