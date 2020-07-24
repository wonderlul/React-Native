import React, {useEffect, useState, useCallback} from 'react';
import {StatusBar, Platform, FlatList, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {fetchBerriesList, fetchPokemonsList} from '../../apiService';

import {useDebounce} from '../../hooks/useDebounce';

import {ListHeader} from '../../components/ListHeader/ListHeader';

import {ListItem} from '../../components/ListItem/ListItem';

import {Container} from './HomeView.styles';
import {useAsyncStorage} from '../../hooks/useAsyncStorage';

const HomeView = ({navigation, route}) => {
  const routeName = route.name;
  const isPokemonRoute = routeName === 'Pokemon';

  const key = isPokemonRoute ? '@pokeDexList' : '@berriesList';

  const [data, setData] = useState([]);
  const [source, setSource] = useAsyncStorage(key);

  const [searchTerm, setSearchTerm] = useState('');

  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    (async () => {
      const list = await AsyncStorage.getItem(key);

      if (list == null) {
        const response = isPokemonRoute
          ? await fetchPokemonsList()
          : await fetchBerriesList();
        setSource(response.results);
      }
      setData(source);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshList = async () => {
    setIsRefreshing(true);
    const response = isPokemonRoute
      ? await fetchPokemonsList()
      : await fetchBerriesList();
    await setSource(response.results);
    setData(source);
    setIsRefreshing(false);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filterItems = useCallback(
    term =>
      source.filter(item =>
        item.name.toLowerCase().includes(term.toLowerCase()),
      ),
    [source],
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filteredItems = filterItems(debouncedSearchTerm);
      setData(filteredItems);
    } else {
      setData(source);
    }
  }, [debouncedSearchTerm, source, filterItems]);

  const barStyle = Platform.OS === 'ios' ? 'default' : 'light-content';
  const isLoading = data == null;

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor="black" />
      <Container>
        {isLoading ? (
          <>
            <ActivityIndicator />
          </>
        ) : (
          <FlatList
            windowSize={5}
            onRefresh={refreshList}
            refreshing={isRefreshing}
            ListHeaderComponent={
              <ListHeader
                route={routeName}
                value={searchTerm}
                onChange={setSearchTerm}
              />
            }
            data={data}
            scrollEnabled={!isRefreshing}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({item, index}) => {
              return (
                <ListItem
                  isRefreshing={isRefreshing}
                  name={item.name}
                  index={index}
                  url={item.url}
                  navigation={navigation}
                  route={routeName}
                />
              );
            }}
          />
        )}
      </Container>
    </>
  );
};

export default HomeView;
