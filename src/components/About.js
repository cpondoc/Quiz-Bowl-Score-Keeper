import React from 'react';
import '../style/About.css'

function About() {
    return (
        <div class="container-fluid">
            <h1><b><span role="img" aria-label="trophy">🧐</span> About</b></h1>
            <h3>Why this?</h3>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p>We often had a lot of trouble keeping score and remembering the scores from past games.</p>
                        <p>Now, it's easier than ever to keep track of scores and make sure that everything is alright.</p>
                    </div>
                    <div class="col">
                        <p>Simply click on each correct answer and boom -- you've got everything.</p>
                        <p>This website was created by Chris Pondoc. If you have any questions, email him at <b>chris.pondoc@comcast.net</b>.</p>
                    </div>
                </div>
            </div>
            <br />
            <div class="container">
                <p>Made with <span role="img" aria-label="heart">❤️</span> by Chris Pondoc!</p>
            </div>
            <br />
        </div>    
    );
}

export default About;