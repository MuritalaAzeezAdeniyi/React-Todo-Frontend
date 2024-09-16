 import TopNav from '../components/topNav'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import AddTask from '../components/addTask'


const ROUTES = [
    {
        path: '/',
        element:<TopNav/>
    },
    {
        path: '/signUp',
        element: <SignUp/>
    },
    {
        path: '/login',
        element:<Login/>  
    },
    {
        path:'/addTask',
        element:<AddTask/>
    }
]


export default ROUTES