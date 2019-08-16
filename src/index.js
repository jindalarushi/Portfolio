import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <Router history ={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render = {() => <Header><App /></Header> }></Route>
            <Route path='/jokes' render = {() => <Header><Jokes /></Header>}>></Route>
            <Route path='/music-master' render = {() => <Header><MusicMaster /></Header>}>></Route>

        </Switch>
    </Router>,
     document.getElementById('root'));

new Promise( (resolve, reject) =>{

    return reject(new Error('No Beers'));
    setTimeout(() =>{
        resolve('Beers , BattleStar Galactica, Beats');
        }, 2000);
})
.then( quote => {
    console.log(quote);

})
.catch(error=>{
    console.log("error",error);
});


