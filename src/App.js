import {MainComponent} from './components/mainComponent'
import './App.css';
import './styles.css';
import { BrowserRouter} from 'react-router-dom';
import './tailwind.css';
import {Provider} from 'react-redux'
import myStore from './redux/store';

function App() {
  return(
    <Provider store={myStore}>
      <BrowserRouter>
        <div className="App">
          <MainComponent />
        </div>
      </BrowserRouter>
    </Provider>

  )
}

export default App;
