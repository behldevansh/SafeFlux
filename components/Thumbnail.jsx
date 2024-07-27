import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Thumbnail = ({ vidId, title }) => {
  const thumbnailURL = `https://img.youtube.com/vi/${vidId}/mqdefault.jpg`;

  return (
    <View style={styles.thumbnail}>
      <Image source={{ uri: thumbnailURL }} style={styles.thumbImage} resizeMode="cover" />
      <Text style={styles.thumbnailTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 200,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    overflow: 'hidden',
    textAlign: 'center',
  },
  thumbImage: {
    width: '100%',
    height: 120,
  },
  thumbnailTitle: {
    fontSize: 14,
    padding: 5,
    textAlign: 'center',
  },
});

export default Thumbnail;
