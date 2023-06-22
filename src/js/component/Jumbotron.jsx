import React from "react";

//create jumbotron component
const JumbotronComponent = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
				non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<p className="lead">
				<a href="#" className="btn btn-success">Call to action!</a>
			</p>					
		</div>

	)
}
export default JumbotronComponent;
