import React from 'react';

import {ActivityIndicator} from 'react-native';

import {
  styles,
  CellContainer,
  ContentContainer,
  Name,
  ImageContainer,
  Image,
  Number,
} from './Details.styles';

export const Details = ({isActive, details, name, route}) => {
  const itemID = id => {
    switch (id.length) {
      case 1:
        return `#00${id}`;
      case 2:
        return `#0${id}`;
      case 3:
        return `#${id}`;
    }
  };

  if (!isActive) {
    return <ActivityIndicator size="small" />;
  }

  return (
    <CellContainer>
      <ImageContainer>
        <Image
          source={{
            uri:
              route === 'Pokemon'
                ? details.sprites.front_default
                : details.sprites.default,
          }}
          type={route === 'Pokemon' ? 'pokemon' : 'berry'}
        />
      </ImageContainer>

      <ContentContainer>
        <Name style={styles.text}>
          {name
            .split('')
            .map((letter, index) => {
              if (index === 0) {
                return letter.toUpperCase();
              } else {
                return letter;
              }
            })
            .join('')}
        </Name>
        <Number>{itemID(details.id.toString())}</Number>
      </ContentContainer>
    </CellContainer>
  );
};
