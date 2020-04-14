import React from 'react';
import '../style/Team.css'

class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name, correct: 0, incorrect: 0};
    }

    decreaseCorrect = () => {
        this.setState(state => ({
            correct: this.state.correct - 1
        }));
      }

    increaseCorrect = () =>  {
        this.setState(state => ({
            correct: this.state.correct + 1
        }));
    }

    decreaseIncorrect = () => {
        this.setState(state => ({
            incorrect: this.state.incorrect - 1
        }));
      }

    increaseIncorrect = () =>  {
        this.setState(state => ({
            incorrect: this.state.incorrect + 1
        }));
    }

    render() {
        return (
        <div class="block">
            <br />
            <h2><span role="img" aria-label="team">☄️ </span> <u>Team {this.state.name}</u></h2>
            <br />
            <div class="row">
                <div class="col-sm">
                    <h2>{this.state.correct}</h2>
                    <h3 id="correct"><b><span role="img" aria-label="correct">✅</span> correct</b></h3>
                    <br />
                    <h2><a onClick={this.increaseCorrect}>⬆️</a> <a onClick={this.decreaseCorrect}>⬇️</a></h2>
                </div>
                <div class="col-sm">
                    <h2>{this.state.incorrect}</h2>
                    <h3 id="incorrect"><b><span role="img" aria-label="incorrect">🚨</span> incorrect</b></h3>
                    <br />
                    <h2><a onClick={this.increaseIncorrect}>⬆️</a> <a onClick={this.decreaseIncorrect}>⬇️</a></h2>
                </div>
                <div class="col-sm">
                    <h2>{this.state.correct - this.state.incorrect}</h2>
                    <h3><b>total</b></h3>
                </div>
            </div>
            <br />
        </div> );
    }
}

export default Team;