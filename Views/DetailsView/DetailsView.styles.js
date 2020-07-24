import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

const conditions = ['Held in battle', 'Used on a party Pokémon'];

export const PokemonContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -27%;
`;

export const BerriesContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -12%;
`;

export const TypesContainer = styled.View`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Types = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 100px;
  height: 30px;
  background: #559edf;
  box-shadow: 0px 0px 10px rgba(85, 158, 223, 0.7);
  border-radius: 104px;
`;

export const Type = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Container = styled.View``;

export const FirstLayer = styled(LinearGradient)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SecondLayer = styled.View`
  position: relative;
  top: -25%;
  left: 0%;
  width: 100%;
  height: 65%;
  background: #fafafa;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 220px;
  height: 220px;
`;

export const BerryImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Name = styled.Text`
  margin-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;

  text-align: center;

  color: #4f4f4f;
`;

export const StatsContainer = styled.View`
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonStats = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2px 0;
`;
export const BerriesStats = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const PokemonStatName = styled.Text`
  margin-right: 4px;

  font-style: normal;
  font-weight: 800;
  font-size: 18px;

  letter-spacing: -0.072px;

  color: #559edf;
`;

export const BerryStatName = styled.Text`
  text-align: center;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;

  line-height: 30px;
  letter-spacing: -0.072px;

  color: ${props =>
    conditions.some(el => props.children.includes(el)) ? '#559EDF' : 'black'};
`;
