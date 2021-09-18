import {Route, Switch} from 'react-router-dom';
import TodoList from "./codilityChalenge/TodoList";
import TodoTest from "./codilityChalenge/TodoTest";
//import TodoListFunctional from "./codilityChalenge/TodoListFunctional";
import Welcome from "./layers/Welcome";
import Layout from "./layers/Layout";
import CounterFunctional from "./codilityChalenge/CounterFunctional";
import AutoComplete from "./codilityChalenge/AutoComplete";

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

                {/*<Route path='/todolist/functional'>*/}
                {/*    <TodoListFunctional/>*/}
                {/*</Route>*/}

                <Route path='/todoTest' exact>
                    <TodoTest/>
                </Route>

                <Route path='/counter'>
                    <CounterFunctional/>
                </Route>

                <Route path='/autocomplete'>
                    <AutoComplete/>
                </Route>
            </Switch>
        </Layout>
    )
}

export default App;
