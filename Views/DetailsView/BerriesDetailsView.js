import React from 'react';
import {ActivityIndicator} from 'react-native';

import {
  Container,
  FirstLayer,
  SecondLayer,
  BerriesContainer,
  BerryImage,
  Name,
  TypesContainer,
  Types,
  Type,
  StatsContainer,
  BerriesStats,
  BerryStatName,
} from './DetailsView.styles';

const BerriesDetailsView = ({route}) => {
  const {name, payload} = route.params;

  if (!payload) {
    return (
      <>
        <ActivityIndicator />
      </>
    );
  }
  return (
    <Container>
      <FirstLayer
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#559EDF', '#69B9E3']}
      />
      <SecondLayer>
        <BerriesContainer>
          <BerryImage
            source={{
              uri: payload.sprites.default,
            }}
          />

          <Name>
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
          <TypesContainer>
            <Types>
              <Type>{payload.category.name}</Type>
            </Types>
          </TypesContainer>
          <StatsContainer>
            {payload.effect_entries.map((item, index) => (
              <BerriesStats key={index}>
                {item.effect.split('\n').map((item, index) => (
                  <BerryStatName key={index}>
                    {item.replace(/:/g, '')}
                  </BerryStatName>
                ))}
              </BerriesStats>
            ))}
          </StatsContainer>
        </BerriesContainer>
      </SecondLayer>
    </Container>
  );
};

export default BerriesDetailsView;
