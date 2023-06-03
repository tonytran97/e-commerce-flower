import React from "react";
import AboutUsClip from "./AboutUsGif";
import AboutUsText from "./AboutUsText";

function AboutUsPreview() {
	return (
		<>
			<h1
				style={{
					textAlign: "center",
					marginTop: "1rem",
					backgroundColor: "rgb(255 206 214 / 70%)",
				}}
			>
				<span style={{ color: "rgb(252, 157, 173)" }}>About</span> Us
			</h1>
			<div style={{ display: "flex" }}>
				<AboutUsClip />
				<AboutUsText />
			</div>
		</>
	);
}

export default AboutUsPreview;
