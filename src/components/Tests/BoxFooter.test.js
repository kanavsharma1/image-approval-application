// This is something new for me and I have tried to showcase a very basic example of testing this BoxFooter component

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import {BoxFooter,NoImageSelected} from '../@app/BoxFooter';

describe('test suite for BoxFooter component', ()=>{
    test('if user is visiting first time',()=>{
        render(<NoImageSelected/>)
        const paragraphText = screen.getByText("get image recomandations",{exact:false})
        expect(paragraphText).toBeInTheDocument()
    })

    test('accept btn and reject btn are not available',()=>{
        render(
            <Provider store={store}>
        <BoxFooter approvedImagesCount={2}/>
        </Provider>)
        const actionContainerElement = screen.getByTestId('action-container')
        expect(actionContainerElement).toBeInTheDocument()
    })

})