import App from './App.jsx'
import './index.css'

//imports para rotas
import ReactDOM from 'react-dom/client'
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//import paginas
import Homepage from './Paginas/Homepage/index.jsx'
import Sobre from './Paginas/Sobre/index.jsx'
import Projetos from './Paginas/Projetos/index.jsx'
import DetalhesProjeto from './Paginas/DetalhesProjeto/index.jsx'
import Contatos from './Paginas/Contatos/index.jsx'
// import PageNotFound from './Paginas/PageNotFound/index.jsx'

//import Componente
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index:true, element:<Homepage/>},
      {path: '/Sobre', element: <Sobre />},
      {path: '/Projetos', element: <Projetos />},
      {path: '/Projetos/:id', element:<DetalhesProjeto /> },
      {path: '/Contato', element: <Contatos />},
      // {path: '/*', element: <PageNotFound />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
