import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import lotusImage from "../assets/lotus.avif";
import styles from "./Navbar.module.css";

function FlowersNav() {
	return (
		<Navbar bg="light" variant="light">
			<div className=" container-fluid d-flex justify-content-between">
				<Nav className={styles.title}>
					Flower <img src={lotusImage} alt="lotus" className={styles.logo} />
				</Nav>
				<Nav className="ml-auto">
					<Nav.Link href="/" className="text-dark">
						Home
					</Nav.Link>
					<Nav.Link href="/about" className="text-dark">
						About
					</Nav.Link>
					<Nav.Link href="/products" className="text-dark">
						Products
					</Nav.Link>
					<Nav.Link href="/review" className="text-dark">
						Review
					</Nav.Link>
					<Nav.Link href="/contact-us" className="text-dark">
						Contact
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="/cart">
						<MDBIcon fas icon="shopping-cart" className="text-dark" />
					</Nav.Link>
					<Nav.Link href="/profile">
						<MDBIcon fas icon="user" className="text-dark" />
					</Nav.Link>
				</Nav>
			</div>
		</Navbar>
	);
}

export default FlowersNav;
