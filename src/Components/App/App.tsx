import TableLayout from '../table-layout';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../store/reducers';


const store = createStore(rootReducer);

const App =  () => {
    return (
        <>
            <Provider store={store}>
                <TableLayout />
            </Provider>
        </>
    );
}

export default App;