import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Icons from './vector-icons-list';
import palette from './palette';

const iconSets = Object.keys(Icons).map(setName => ({
  key: setName,
  length: Object.keys(Icons[setName]).length,
}));

export default class Home extends React.PureComponent {
  static navigationOptions = {
    title: 'Expo Vector Icons Explorer',
    headerStyle: {
      backgroundColor: palette.defaultPrimary,
    },
    headerTintColor: palette.textPrimary,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  separator = () => (
    <View style={{ height: 2, backgroundColor: palette.divider }} />
  )

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('IconSetDetail', {
          iconSetName: item.key,
        })
      }
    >
      <View
        style={{
          justifyContent: 'center',
          padding: 10,
          backgroundColor: '#eee',
        }}
      >
        <Text style={{ fontSize: 18, color: palette.primaryText }}>
          {item.key}
        </Text>
        <Text style={{ fontSize: 10, color: palette.secondaryText }}>
          {item.length} icons
        </Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <FlatList
        ItemSeparatorComponent={this.separator}
        data={iconSets}
        renderItem={this.renderItem}
      />
    );
  }
}
