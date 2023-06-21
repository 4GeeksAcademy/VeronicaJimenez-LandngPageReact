import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create Navar component
const Navar = () => {
	return(
		<div className="text-center container-fluid">
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Start Bootstrap</a>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item">
							<a className="nav-link">Service</a>
							</li>
							<li className="nav-item">
							<a className="nav-link">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>	
	)
}

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
//create card component
const CardComponent = () => {
	return (
		<div className="row">
					<div className="col">
						<div className="card">
							<img src="http://placehold.it/500x325.jpg" className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Find Out more!</a>
							</div>

						</div>
					</div>
					<div className="col">
						<div className="card">
							<img src="http://placehold.it/500x325.jpg" className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Find Out more!</a>
							</div>

						</div>
					</div>
					<div className="col">
						<div className="card">
							<img src="http://placehold.it/500x325.jpg" className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Find Out more!</a>
							</div>

						</div>
					</div>
					<div className="col">
						<div className="card">
							<img src="http://placehold.it/500x325.jpg" className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Find Out more!</a>
							</div>

						</div>
					</div>
				</div>	
				
	)
	
}


const Home = () => {
	return (
		<div>
			<Navar />
			<div className="container">
				<JumbotronComponent />
				<CardComponent />
			</div>
			

		</div>
			
				
		
	);
};

export default Home;
