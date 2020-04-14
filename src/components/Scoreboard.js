import React from 'react';
import '../style/Scoreboard.css'
import Team from './Team';

function Scoreboard() {
    return (
        <div class="container-fluid">
            <h1><b><span role="img" aria-label="trophy">🏆</span> Scoreboard</b></h1>
            <h3>The mainframe.</h3>
            <br />
            <div class="row">
                <div class="col-sm">
                    <Team name="Uno"/>
                </div>
                <div class="col-sm">
                    <Team name="Dos"/>
                </div>
            </div>
        <br />
        </div>    
    );
}

export default Scoreboard;