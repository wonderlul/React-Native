import React from 'react';
import {ActivityIndicator} from 'react-native';

import AnimatedBar from '../../components/AnimatedBar/AnimatedBar';

import {
  Container,
  FirstLayer,
  SecondLayer,
  PokemonContainer,
  PokemonImage,
  Name,
  TypesContainer,
  Types,
  Type,
  StatsContainer,
  PokemonStats,
  PokemonStatName,
} from './DetailsView.styles';

const PokemonDetailsView = ({route}) => {
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
        <PokemonContainer>
          <PokemonImage
            source={{
              uri: payload.sprites.front_default,
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
            {payload.types.map((item, index) => (
              <Types key={index}>
                <Type>{item.type.name}</Type>
              </Types>
            ))}
          </TypesContainer>
          <StatsContainer>
            {payload.stats.map((item, index) => (
              <PokemonStats key={index}>
                <PokemonStatName>
                  {item.stat.name.toUpperCase()}: {item.base_stat}
                </PokemonStatName>
                <AnimatedBar value={item.base_stat} index={index} />
              </PokemonStats>
            ))}
          </StatsContainer>
        </PokemonContainer>
      </SecondLayer>
    </Container>
  );
};

export default PokemonDetailsView;
