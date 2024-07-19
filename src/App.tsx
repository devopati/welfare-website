import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <div className='main-div'>
         <ToastContainer />
      <AppRoutes/>
    </div>
    </Provider>
    
  )
}

export default App