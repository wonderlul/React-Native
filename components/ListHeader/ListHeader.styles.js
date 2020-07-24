import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 120px;
`;

export const Header = styled.Text`
  padding: 10px 0;
`;

export const LinearGradientContainer = styled(LinearGradient)`
  display: flex;
  padding: 0 15px;
`;

export const SearchBarContainer = styled.View`
  position: relative;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 18px;
  width: 100%;
`;

export const SearchBar = styled.TextInput`
  background: rgba(0, 0, 0, 0.12);
  border-radius: 18px;
  width: 100%;
  padding: 5px 15px;
`;

export const SearchIcon = styled.Image`
  position: absolute;
  right: 90.33%
  top:35%;
  
`;
