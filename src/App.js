import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    
  }
  // Ajoutez d'autres routes ici si nécessaire
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App