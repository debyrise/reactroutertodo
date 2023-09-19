import { createBrowserRouter} from 'react-router-dom'
import Weblayout from "../Component/Layouts/Weblayout"
import  MyDay from "../Pages/Myday"
import Important from "../Pages/Important"
import Board from "../Pages/Board"
import ErrorBoundary from '../Utilities/ErrorBoundary'


const Index = createBrowserRouter ([
     
    {
        path: "/",
        element: < Weblayout  />,
        errorElement: <ErrorBoundary   />,
        hasErrorBoundary:true,
        children: [
            {
                index:true,
                element: < MyDay  />,
            },

            {
              path: "important",
              element: <Important />,
            },
            {
                path: "Board",
                element: <Board   />,
            },
        ]

    },

]);

export default Index