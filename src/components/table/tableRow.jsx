/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import {
	Cell,
	CellItem,
	Row,
	TimeCell,
	CellContainer,
} from "./tableRow.styles";
import { markEvent, unmarkEvent } from "../../store/calSlice";

const TableRow = ({ hour, events, currentDate, markedEvent }) => {
	const dispatch = useDispatch();

	const content = [];
	for (let i = 0; i < 7; i++) {
		const day = i === 6 ? 0 : i + 1;
		const eventPresent = events.find(
			(event) =>
				event.hours === hour &&
				new Date(event.year, event.month, event.date).getDay() === day
		);
		const eventMarked =
			markedEvent.hours === hour &&
			markedEvent.date === currentDate.date - currentDate.day + (day ? day : 7);
		content.push(
			<Cell key={"cell" + i}>
				{eventPresent && (
					<CellItem
						$eventPresent={eventPresent}
						$eventMarked={eventMarked}
						onClick={() => {
							if (eventPresent) {
								dispatch(
									markEvent({
										year: currentDate.year,
										month: currentDate.month,
										date: currentDate.date - currentDate.day + (day ? day : 7),
										hours: hour,
										minutes: 0,
									})
								);
							} else {
								dispatch(unmarkEvent());
							}
						}}
					/>
				)}
			</Cell>
		);
	}
	return (
		<Row>
			<TimeCell>{`${String(hour).replace(/\b(\d)\b/, "0$1")}:00`}</TimeCell>
			<CellContainer>{content}</CellContainer>
		</Row>
	);
};

export default TableRow;
