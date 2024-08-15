import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

type MinhaImagemProps = {
  source: ImageSourcePropType;
  description: string;
};

const MinhaImagem: React.FC<MinhaImagemProps> = ({ source, description }) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={styles.image}
        accessibilityLabel={description}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default MinhaImagem;
