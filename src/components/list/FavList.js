import React from "react";
import { CustomCard } from "../card/CustomCard";

export const FavList = ({ favList }) => {
	console.log(favList);
	return (
		<div>
			<h4>My Fav Robot</h4>

			<div className="robot-list">
				{favList.map((nm, i) => (
					<CustomCard key={i} name={nm} />
				))}
			</div>
		</div>
	);
};
