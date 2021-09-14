import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const App = () => {
    return (
        <nav className={classes.header}>
            <ul>
                <li>
                    <NavLink className={classes.active} to='/todolist'>
                        ToDoList
                    </NavLink>
                </li>
                <li>
                    <NavLink className={classes.active} to='/todolist/functional'>
                        ToDoListFunc
                    </NavLink>
                </li>
                <li>
                    <NavLink className={classes.active} to='/counter'>
                        CounterFunc
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default App;
