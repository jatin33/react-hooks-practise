import React from 'react';
import style from './App.module.css';
import ExpenseTracker from './ExpenseTracker';
import { ExportContextProvider } from './ExpenseTracker/contexts/ExpenseContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import CountDownTimer from './CountDownTimer';
import { Random } from './Random';

function App() {
  return (
    <div>
      <Router>
       <nav>
          <ul>
            <li>
              <NavLink to="/countdowntimer" activeClassName={style.selected}>CountDownTimer</NavLink>
            </li>
            <li>
              <NavLink to="/expensetracker" activeClassName={style.selected}>Expense Tracker</NavLink>
            </li>
            <li>
              <NavLink to="/random" activeClassName={style.selected}>Random stuff</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route strict path="/countdowntimer">
            <CountDownTimer time={300} />
          </Route>
          <Route strict path="/expensetracker">
            <ExportContextProvider>
              <ExpenseTracker />
            </ExportContextProvider>
          </Route>
          <Route strict path="/random">
            <Random />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
