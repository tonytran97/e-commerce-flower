import React from "react";
import { Link } from "react-router-dom";

function AboutUsText() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
			}}
		>
			<h1>Why Choose Us</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
				assumenda, architecto debitis, laborum dolor dicta repudiandae deserunt
				maiores voluptatem reprehenderit porro quo amet velit esse fugit veniam
				consectetur, ab saepe? Praesentium aut laborum blanditiis voluptate
				dolore ut minima quae nam?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita
				necessitatibus, consectetur molestiae eum aspernatur...
			</p>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Link
					to="/about"
					style={{
						borderRadius: "80px",
						background: "#4f4f4f",
						color: "white",
						padding: "10px",
						textAlign: "center",
						width: "200px",
						alignContent: "center",
					}}
				>
					Learn More
				</Link>
			</div>
		</div>
	);
}

export default AboutUsText;
