import React from "react";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.imagen} className="card-img-top" alt="..."></img>
			<div className="card-body p-0">
				<h5 className="card-title pt-3 px-3 text-center">
					{props.titulo}
				</h5>
				<p className="card-text p-3 text-center">{props.texto}</p>
				<div className="card-footer text-center">
					<button type="button" className="btn btn-primary">
						{props.button}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
