import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import CategoryPage from "../pages/categories/CategoryPage.jsx";
import Search from "../pages/search/Search.jsx";
import Shop from "../pages/shop/shopPage.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/RoseLane",element: <Home />,},
            {path: "/categories/:categoryName",element: <CategoryPage/>, },
            {path: "/search", element: <Search />},
            {path: "/shop", element: <Shop />},
            
        ]
    },
]);

export default router;
