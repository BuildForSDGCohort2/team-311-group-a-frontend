import React from 'react'


class App extends React.Component {
    render() {
        return (
            <div className = "background-img">
                <div className = "logo-div">
                    <img src= "../../public/image/Asset5.svg"></img>
                    <button className = "nav-button" id = "button1">About</button>
                    <button className = "nav-button" id = "button2">Contact Us</button>
                </div>
                <div className = "small-circle"></div>
                <span className = "intro-text">I’m currently available for work</span>
                <span className = "big-text">I am a Kiwi UI & UX Designer based in Nigeria.</span>
                <hr></hr>
            </div>
        )
        
    }
}

export default App;