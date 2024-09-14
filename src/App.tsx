import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '@/redux/store';
import {ThemeProvider} from 'styled-components';
import {theme} from '@/styles/theme';
import StackNavigator from '@/navigator/StackNavigator';

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <StackNavigator />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
