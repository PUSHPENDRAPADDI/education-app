import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Main from './Main.js';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}