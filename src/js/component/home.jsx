import React from "react";
import Navar from "./Navar";
import JumbotronComponent from "./Jumbotron";
import CardComponent from "./Card";
import Footer from "./footer";

const Home = () => {
	return (
		<div>
			<Navar />
			<div className="container">
				<JumbotronComponent />
				<CardComponent />
			</div>
			<Footer/>

		</div>
			
				
		
	);
};

export default Home;
