  
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Store from './store/createStore';
import RootApp from './components/RootApp';

function App() {
    return (
        <Provider store={Store}>
            <RootApp />
        </Provider>
    );
}

export default App;

// "homepage": "http://zul-adn.github.io/siadhi_2",