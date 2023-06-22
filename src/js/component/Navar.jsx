import React from "react";

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

export default Navar;
