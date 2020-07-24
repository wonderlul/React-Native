import React, {useEffect, useState} from 'react';

import {TouchableOpacity} from 'react-native';

import {styles} from './ListItem.styles';

import {Details} from '../Details/Details';

import {fetchPokemonDetails} from '../../apiService';
import {fetchBerriesDetails} from '../../apiService';

import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
const AbortController = window.AbortController;

export const ListItem = ({
  url,
  name,
  route,
  index,
  isRefreshing,
  navigation,
}) => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const isActive = !isLoading && details != null;

  useEffect(() => {
    (async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      setIsLoading(true);

      if (details == null) {
        if (route === 'Pokemon') {
          const response = await fetchPokemonDetails(url, signal);
          setDetails(response);
        } else {
          const response = await fetchBerriesDetails(url, signal);
          const itemsInformation = await fetchBerriesDetails(
            response.item.url,
            signal,
          );
          setDetails(itemsInformation);
        }
      }

      setIsLoading(false);

      return () => controller.abort();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details]);

  return (
    <TouchableOpacity
      disabled={!isActive}
      key={index}
      style={[
        styles.itemContainer,
        isRefreshing && styles.disableItemContainer,
      ]}
      onPress={() =>
        navigation.navigate('Details', {
          name: name,
          payload: details,
        })
      }>
      <Details
        isActive={isActive}
        details={details}
        name={name}
        route={route}
      />
    </TouchableOpacity>
  );
};
