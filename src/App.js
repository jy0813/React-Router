import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import Home from "./pages/Home";

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  errorElement:<NotFound/>,
  children:[
    {index :true, element:<Home/>},
    {path: '/videos', element:<Videos/>}
  ]
  },
])

function App() {
  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
