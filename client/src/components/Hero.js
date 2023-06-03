import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<>
			<div className={styles.hero_content}>
				<h1 className={styles.hero_text}>
					Fresh <span className={styles.hero_span}>Flowers</span> Shop
				</h1>
				<p className={styles.hero_text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut
					corporis enim quaerat natus, iste debitis blanditiis nostrum ipsa
					temporibus.
				</p>
				<Link to="/products" className={styles.hero_button}>
					Shop Now
				</Link>
			</div>
		</>
	);
}

export default Hero;
