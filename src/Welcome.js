import React from "react";
import "./welcome.css";
import image from "../src/assets/hi.svg";
import { Container, Row, Image, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Welcome() {
	console.log(process.env.PUBLIC_URL);
	return (
		<Container
			fluid
			className="Welcome-body d-flex flex-column justify-content-center align-items-center "
		>
			<Row>
				<Col xs md lg={12}>
					<Image className="Welcome-logo" src={image} alt="hi" />
				</Col>
			</Row>
			<Row>
				<Col xs md lg={12} className="mt-4">
					<Link to="/jokes">
						<Button className="btnWelcome ">Welcome</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}
export default Welcome;
