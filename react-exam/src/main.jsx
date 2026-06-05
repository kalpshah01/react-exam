
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<BrowserRouter>

    <App />
</BrowserRouter>
  </Provider>
  
)
