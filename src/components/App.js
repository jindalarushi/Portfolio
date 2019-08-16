import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';
import Jokes from './Jokes';
class App extends Component
{
    state ={displayBio: true};
    // constructor()
    // {
    //     super();
    //     this.state ={displayBio:false};
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }
    toggleDisplayBio = () =>
    {
        this.setState({displayBio:!this.state.displayBio});
    }
    render()
    {  
        console.log('hi');
        return(
            <div>
                <img src={profile} alt='profile' className='profile' />
            <div>
                <h1>Hello !</h1>
                <p>My name is Arushi Bansal</p>
               <Title />

            </div>
           {
               this.state.displayBio ?
               (
                 <div>
                    <p>I live in India</p>
                    <p>My favorite language is Java</p>
                    <p>Besides coding i love music also</p>
                    <button onClick ={this.toggleDisplayBio}>Read Less</button>
                </div>
                ):
                (
                    <button onClick ={this.toggleDisplayBio}>Read More</button>
                )
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            <hr />
            <Jokes />
            </div>
            
        );
    }
}

export default App;