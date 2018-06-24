import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icons from './vector-icons-list';
import palette from './palette';
import IconView from './IconView';
import SearchBar from './SearchBar';

export default class IconSetDetail extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('iconSetName', '')} icons`,
  })

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const iconSetName = navigation.getParam('iconSetName', 'Feather');
    this.icons = Object.keys(Icons[iconSetName]).map(iconName => ({
      setName: iconSetName,
      key: iconName,
    }));
  }

  separator = () => (
    <View style={{ height: 2, backgroundColor: palette.divider }} />
  )

  renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee',
      }}
    >
      <IconView iconSet={item.setName} icon={item.key} />
      <Text
        style={{ paddingLeft: 10, fontSize: 18, color: palette.primaryText }}
      >
        {item.key}
      </Text>
    </View>
  )

  render() {
    return (
      <View>
        <SearchBar />
        <FlatList
          ItemSeparatorComponent={this.separator}
          data={this.icons}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
