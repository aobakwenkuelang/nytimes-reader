/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Header from './HeaderComponent';
import ListComponent from './ListComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import DetailComponent from './DetailComponent';

 
class Main extends Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        const HomePage = () => {
            return(
                <ListComponent/>
            );
        };
        
        const ArticleDetailPage = () => {
            return(
                <DetailComponent/>
            );
        };



        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path="/home/detail" component={ ArticleDetailPage } />
                    <Route path="/home" component={ HomePage } />
                    
                    

                    
                  
                    <Redirect to="/home" />
                </Switch>
                
                
                
            </div> 
        );

    }

}

export default withRouter(Main);