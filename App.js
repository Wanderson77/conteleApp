import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Track from "./src/screens/TrackScreen"
import Sync from "./src/screens/SyncScreen"

const MainNavigator = createStackNavigator({
  Track: {screen: Track},
  Sync: {screen: Sync},

},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

const App = createAppContainer(MainNavigator);

export default App;
