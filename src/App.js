import {store,persistedStore} from './store/store'
import { Provider } from 'react-redux'
import styled from 'styled-components';
import { Container } from './components/@app/Container';
import { PersistGate } from 'redux-persist/integration/react'
import { LoadingSpinner } from './components/LoadingSpinner';

const AppDiv = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
`

function App() {
  return (
    <Provider store={store} >
    <PersistGate loading={<LoadingSpinner/>} persistor={persistedStore}>
    <AppDiv className="App">
     <Container/>
    </AppDiv>
    </PersistGate>
    </Provider>
  );
}

export default App;
