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
				<div className="row">
					<CardComponent 
					image={"http://placehold.it/500x325.jpg"}
					title={"Card title"}
					description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
					button={"Find Out more!"}/>	
					<CardComponent 
					image={"http://placehold.it/500x325.jpg"}
					title={"Card title"}
					description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
					button={"Find Out more!"}/>
					<CardComponent 
					image={"http://placehold.it/500x325.jpg"}
					title={"Card title"}
					description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
					button={"Find Out more!"}/>
					<CardComponent 
					image={"http://placehold.it/500x325.jpg"}
					title={"Card title"}
					description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
					button={"Find Out more!"}/>

				</div>	
										
			</div>
							
			<Footer/>

		</div>
			
				
		
	);
};

export default Home;
