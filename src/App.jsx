import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Root from "./pages/global/Root";
import SurvayForm from "./pages/SurvayForm";
import Critics from "./pages/Critics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        { path: "/", element: <Main></Main> },
        { path: "survay", element: <SurvayForm></SurvayForm> },
        { path: "critics", element: <Critics></Critics> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;