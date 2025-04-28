import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	 
	let seconds = props.seconds;
	
	const hunThousand = Math.floor(seconds / 100000) % 10
	const tenThousand = Math.floor(seconds / 10000) % 10;
	const thousand = Math.floor(seconds / 1000) % 10;
	const hundred = Math.floor(seconds / 100) % 10;
	const ten = Math.floor(seconds / 10) % 10;
	const unit = seconds % 10;
	
	return (
		<div className="app d-flex justify-content-center">
			<div className="icon box">
			<i className="far fa-clock"></i>
		</div>
		<div className="counter box">{hunThousand}</div>
		<div className="counter box">{tenThousand}</div>	
		<div className="counter box">{thousand}</div>
		<div className="counter box">{hundred}</div>
		<div className="counter box">{ten}</div>
		<div className="counter box">{unit}</div>
		</div>

	);

};

export default Home;