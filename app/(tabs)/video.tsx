import React from 'react';
import {View, Text} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const video = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', marginTop: 20 }}>
        Video de YouTube 
      </Text>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={'aVBm6p5T7Ms'}
      />
      <Text style={{ fontSize: 18, fontWeight: 'normal', paddingHorizontal: 20, textAlign: 'center', marginTop: -20 }}>
        Este es un video donde explico mi experiencia desarrollando esta aplicación
        siendo mi primera vez programando en React Native ✡️
      </Text>
    </View>
  );
};

export default video