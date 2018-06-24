import { createStackNavigator } from 'react-navigation';
import palette from './components/palette';
import IconSetList from './components/IconSetList';
import IconSetDetail from './components/IconSetDetail';

const Root = createStackNavigator(
  {
    Home: IconSetList,
    IconSetDetail,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: palette.defaultPrimary,
      },
      headerTintColor: palette.textPrimary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default Root;
