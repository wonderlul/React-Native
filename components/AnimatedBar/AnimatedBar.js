import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

import {styles, Container} from './AnimatedBar.styles';

const AnimatedBar = ({value, index}) => {
  const width = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.timing(width, {
      toValue: value,
      delay: index * 150,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const interpolatedValue = width.interpolate({
    inputRange: [0, 255],
    outputRange: [0, 100],
  });

  return (
    <Container
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#8ECDF1', '#559EDF']}>
      <Animated.View style={[styles.bar, {width: interpolatedValue}]} />
    </Container>
  );
};

export default AnimatedBar;
