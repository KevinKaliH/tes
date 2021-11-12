import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import './index.css'

import {Outlet} from 'react-router-dom'

export default function ContainerJob(){
    return (
        <div className='container-main'>
            <Outlet/>
        </div>
    )
}

export {
    Home,
    Create,
    Edit
}