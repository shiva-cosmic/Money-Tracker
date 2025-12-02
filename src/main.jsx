import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }, 

      {
        path: '/about',
        element: <About />
      }, 

      {
        path: '/contact',
        element: <Contact />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
 
    <Provider store = {store}>
      <RouterProvider router={router}/>
    </Provider>
  
)
