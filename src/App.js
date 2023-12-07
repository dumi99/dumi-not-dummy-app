import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Layout from './Pages/Layout';
import Contributions from './Pages/Contributions';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Homepage /></Layout>
  },
  {
    path: '/my-contributions',
    element: <Layout><Contributions /></Layout>
  },
  {
    path: '/projects-examples',
    element: <Layout><Projects /></Layout>
  },
  {
    path: '/about-me',
    element: <Layout><About /></Layout>
  },
  {
    path: '/contact-me',
    element: <Layout><Contact /></Layout>
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
