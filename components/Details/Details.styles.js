import styled from 'styled-components';

export const CellContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 19px;
  font-weight: 100;
  color: #4f4f4f;
`;

export const ImageContainer = styled.View`
  flex-basis: 30%;
`;

export const Image = styled.Image`
  width: ${props => (props.type === 'pokemon' ? '100px' : '50px')};

  height: ${props => (props.type === 'pokemon' ? '100px' : '50px')};
`;

export const Number = styled.Text`
  font-size: 15px;
  font-weight: 100;
  color: #a4a4a4;
`;

export const styles = {
  itemContainer: {
    padding: 8,
  },
  disableItemContainer: {
    backgroundColor: '#eee',
  },
};
