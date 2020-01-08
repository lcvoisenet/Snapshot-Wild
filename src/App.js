import React from "react";
import "./App.css";
import OtherAdviceButton from "./OtherAdviceButton";

class App extends React.Component {
	state = {
		advice: ""
	};

	loadAdvice = async () => {
		const response = await fetch("https://api.adviceslip.com/advice");
		const {
			slip: { advice }
		} = await response.json();
		this.setState({ advice });
	};

	async componentDidMount() {
		await this.loadAdvice();
	}

	render() {
		return (
			<div className="App">
				<p className="Advice">{this.state.advice || "..."}</p>
				<OtherAdviceButton loadAdvice={this.loadAdvice} />
			</div>
		);
	}
}

export default App;
