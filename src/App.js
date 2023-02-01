import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
  path: '/',
  element: <p>Home</p>,
  errorElement:<p>Not Found</p>
  },
  {
  path: '/videos',
  element: <p>videos</p>
}
])

function App() {
  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
