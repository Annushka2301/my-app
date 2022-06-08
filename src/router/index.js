import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login"

export const privatRoutes = [
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/', component: Posts},
    {path: '*', component: Posts},
    {path: '/posts/:id', component: PostIdPage}
]

export const publicRoutes = [
    {path: '/login', component: Login},
    {path: '*', component: Login},
]
