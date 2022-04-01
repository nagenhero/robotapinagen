import React from "react";
import { Button, Card } from "react-bootstrap";

const apiUrl = "https://robohash.org/";

export const CustomCard = ({ name, fun }) => {
	return name ? (
		<Card style={{ width: "18rem", marginTop: "1rem" }}>
			<Card.Img variant="top" src={apiUrl + name} />
			<Card.Body>
				<Card.Title>{name} </Card.Title>

				<Button variant="primary" onClick={() => fun(name)}>
					Add to the list{" "}
				</Button>
			</Card.Body>
		</Card>
	) : (
		""
	);
};
