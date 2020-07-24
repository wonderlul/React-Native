import React, {useState} from 'react';

import {
  LinearGradientContainer,
  Container,
  Header,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
} from './ListHeader.styles';

export const ListHeader = props => {
  let imageUrl = require('../../images/Search.png');

  const [isFocused, setIsFocused] = useState(false);

  return (
    <LinearGradientContainer
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#6E95FD', '#6FDEFA', '#8DE061', '#51E85E']}>
      <Container>
        <Header>{props.route === 'Pokemon' ? 'Pokemon' : 'Berries'}</Header>
        <SearchBarContainer>
          <SearchBar
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={props.onChange}
          />
          {!props.value && !isFocused ? <SearchIcon source={imageUrl} /> : null}
        </SearchBarContainer>
      </Container>
    </LinearGradientContainer>
  );
};
