import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import categoryIndex from './About'
import Register from './Register'
import Login from './Login'
// https://github.com/BuildForSDGCohort2/team-311-group-a-frontend
class Home extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui grid">
                    <div className="row">
                        <div className="ui sixteen wide column" id="head">
                            <h1 className="apptitle">Hello World</h1>
                        </div>
                    </div>
                    <div className="ui tabular menu">
                        <Link to="/register" className="active item">Register</Link>
                        <Link to="/login" className="active item">Login</Link>
                        <Link to="#" className="active item">Room</Link>
                        <Link to="#" className="active item">Profile</Link>
                    </div>
                    <div className="row" id="body">
                        <div className="ui nine wide column mainbody">
                            <h1>Main Content</h1>
                        </div>
                        <div className="ui six wide column announcement">
                            <h1>Notification</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// ...
class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;