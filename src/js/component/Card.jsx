import React from "react";

//create card component
const CardComponent = (props) => {
	return (
			<div className="col">
				<div className="card">
					<img src={props.imagen} className="card-img-top"/>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.description}</p>
						<a href="#" className="btn btn-primary">{props.button}</a>
					</div>
				</div>
			</div>
					
	)
	
}

export default CardComponent;
