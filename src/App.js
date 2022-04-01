import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { SearchForm } from "./components/form/SearchForm";
import { FavList } from "./components/list/FavList";
import { Title } from "./components/title/Title";

function App() {
	const [favList, setFevList] = useState([]);

	const addToFavList = name => {
		setFevList([...favList, name]);
	};

	return (
		<div className="wrapper">
			<Container>
				<Title />
				<SearchForm addToFavList={addToFavList} />
				<hr />
				<FavList favList={favList} />
			</Container>
		</div>
	);
}

export default App;
