import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

import { CustomCard } from "../card/CustomCard";

export const SearchForm = ({ addToFavList }) => {
	const [name, setName] = useState("");
	const [robot, setRobot] = useState();

	const handleOnChange = e => {
		const { value } = e.target;
		setName(value);
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		setRobot(name);
		setName("");

		//call the fun to call the api
	};

	console.log(robot);
	return (
		<div>
			<Form onSubmit={handleOnSubmit}>
				<Row>
					<Col>
						<Form.Control
							placeholder="Search ..."
							value={name}
							onChange={handleOnChange}
							required
						/>
					</Col>
					<Col>
						<Button variant="primary" type="submit">
							Search
						</Button>
					</Col>
				</Row>
			</Form>

			<Row className="mt-5">
				<Col>
					<CustomCard name={robot} fun={addToFavList} />
				</Col>
			</Row>
		</div>
	);
};
