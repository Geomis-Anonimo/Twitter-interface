import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './components/Routes'

/*
forEach / map
forEach => nao tem retorno, por isso preciso usar o map,
porque retorna um novo array
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
