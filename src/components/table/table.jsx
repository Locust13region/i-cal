import { useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { TableWrapper } from "./table.styles";
import TableRow from "./tableRow";

function getEvetns(eventsArr, selectedDate) {
	const { year, month, date, day } = selectedDate;

	const monday = new Date(
		year,
		month,
		day ? date - day + 1 : date - 6
	).getTime();
	const sunday = new Date(year, month, day ? date - day + 7 : date).getTime();

	return eventsArr.filter((event) => {
		const eventDate = new Date(event.year, event.month, event.date).getTime();
		return monday <= eventDate && eventDate <= sunday;
	});
}
const Table = () => {
	const rowTimeRef = useRef(null);

	useLayoutEffect(() => {
		const rowTimeNode = rowTimeRef.current;
		rowTimeNode.childNodes[new Date().getHours()].scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	}, []);

	const { events, currentDate, markedEvent } = useSelector(
		(state) => state.calendarStore
	);
	const eventsOfCurrentWeek = getEvetns(events, currentDate);
	const content = [];
	for (let i = 0; i < 24; i++) {
		content.push(
			<TableRow
				key={"row" + i}
				hour={i}
				markedEvent={markedEvent}
				currentDate={currentDate}
				events={eventsOfCurrentWeek}
			/>
		);
	}
	return <TableWrapper ref={rowTimeRef}>{content}</TableWrapper>;
};

export default Table;
