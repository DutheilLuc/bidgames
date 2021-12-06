import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import ArticleList from "./components/ArticleList";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";

function App() {
  return (
      <Router>
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Switch>
                <Route exact path="/">
                  <ArticleList />
                </Route>
                <Route path="/add">
                  <AddArticle />
                </Route>
                <Route path="/edit/:id">
                  <EditArticle />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
