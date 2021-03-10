import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getListingsAction} from '../store/actions/listingAction';
import Collapse from '../assets/images/collapse.png';
import Expand from '../assets/images/expand.png';

const Listing = ({listing, getListing}) => {
  useEffect(() => {
    getListing();
  }, [getListing]);

  const [state, setState] = useState({});

  const renderSub = (itm) => {
    return (
      <>
        {itm && (
          <>
            <TouchableOpacity
              onPress={() => {
                setState({
                  ...state,
                  [itm.name]: state[itm.name] ? !state[itm.name] : true,
                });
              }}
              style={styles.row}>
              <Text style={styles.titleStyle}>{itm.name}</Text>
              <Image
                style={styles.image}
                source={state[itm.name] ? Collapse : Expand}
              />
            </TouchableOpacity>
            {state[itm.name] && (
              <FlatList
                ListEmptyComponent={() => (
                  <Text style={styles.noItems}>No items in this category</Text>
                )}
                data={itm.sub}
                keyExtractor={(it) => 'key' + it.id}
                renderItem={({item}) => renderRoot(item)}
              />
            )}
          </>
        )}
      </>
    );
  };

  const renderRoot = (itm) => {
    return (
      <>
        {itm && (
          <>
            <TouchableOpacity
              onPress={() => {
                setState({
                  ...state,
                  [itm.name]: state[itm.name] ? !state[itm.name] : true,
                });
              }}
              style={styles.row}>
              <Text style={styles.titleStyle}>{itm.name}</Text>
              <Image
                style={styles.image}
                source={state[itm.name] ? Collapse : Expand}
              />
            </TouchableOpacity>
            {state[itm.name] && (
              <FlatList
                ListEmptyComponent={() => (
                  <Text style={styles.noItems}>No items in this category</Text>
                )}
                data={itm.sub}
                keyExtractor={(it) => 'key' + it.id}
                renderItem={({item}) => renderSub(item)}
              />
            )}
          </>
        )}
      </>
    );
  };
  return (
    <View>
      {listing && (
        <>
          <FlatList
            data={listing}
            keyExtractor={(item) => 'key' + item.id}
            renderItem={({item}) => renderRoot(item)}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 12,
    marginTop: 12,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: 12,
  },
  image: {
    width: 20,
    aspectRatio: 1,
  },
  noItems: {
    marginTop: 12,
    fontSize: 18,
    marginStart: 12,
  },
});

const mapStatesToProp = (state) => {
  return {listing: state.listing.data};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListing: () => {
      dispatch(getListingsAction());
    },
  };
};

export default connect(mapStatesToProp, mapDispatchToProps)(Listing);
