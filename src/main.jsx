// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';
// import Error from './pages/Error';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Blog from './pages/Blog';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/About',
//         element: <About />,
//       },
//       {
//         path: '/Blog',
//         element: <Blog />,
//       },
//       {
//         path: '/Contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );


import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);