import {Route, Switch} from 'react-router-dom';
import TodoList from "./codilityChalenge/TodoList";
import TodoListFunctional from "./codilityChalenge/TodoListFunctional";
import Welcome from "./layers/Welcome";
import Layout from "./layers/Layout";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Welcome/>
                </Route>
                <Route path='/todolist' exact>
                    <TodoList/>
                </Route>
                <Route path='/todolist/functional'>
                    <TodoListFunctional/>
                </Route>
            </Switch>
        </Layout>
    )
}

export default App;
