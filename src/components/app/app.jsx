import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Week from "../week";
import {
	setToday,
	addNewInterview,
	deleteInterview,
} from "../../store/calSlice";
import Table from "../table/table";
import {
	Wrapper,
	Container,
	Header,
	Title,
	AddEvent,
	Footer,
	FooterToday,
	FooterDelete,
} from "./app.styles";

const validateInput = (str) => {
	return str.match(
		/^202[2-9][.\\/-](0[1-9]|1[0-2])[.\\/-](0[1-9]|[12][0-9]|3[01])[ ](0?[0-9]|1[0-9]|2[0-3]):([0][0]):?([0][0])?$/
	);
};
const checkExist = (str, arr) => {
	const checkingDate = new Date(str);
	return arr.find((item) => {
		const { year, month, date, hours, minutes } = item;
		return (
			checkingDate.getTime() ==
			new Date(year, month, date, hours, minutes).getTime()
		);
	});
};
const confirmNew = (newInterview, events) => {
	if (!newInterview) {
		alert("You entered an invalid date or time!");
		return null;
	} else {
		if (!validateInput(newInterview)) {
			alert("You entered an invalid date or time!");
			return null;
		} else {
			if (!(new Date(newInterview) > new Date())) {
				alert("You entered an old date!");
				return null;
			} else {
				if (checkExist(newInterview, events)) {
					alert("Entered time is already occupied!");
					return null;
				} else {
					return newInterview;
				}
			}
		}
	}
};
function App() {
	const dispatch = useDispatch();
	const { events, markedEvent } = useSelector((state) => state.calendarStore);
	return (
		<Wrapper>
			<Container>
				<Header>
					<Title>Interview calendar</Title>
					<AddEvent
						onClick={() => {
							const newInterview = prompt(
								"Enter event time: YYYY-MM-DD HH:00",
								new Date(
									new Date().setDate(new Date().getDate() + 1)
								).toLocaleDateString("en-ca") +
									" " +
									new Date().getHours() +
									":00"
							);
							confirmNew(newInterview, events)
								? dispatch(addNewInterview(newInterview))
								: null;
						}}
					>
						+
					</AddEvent>
				</Header>
				<Week />
				<Table />
				<Footer>
					<FooterToday
						onClick={() => {
							dispatch(setToday());
						}}
					>
						Today
					</FooterToday>
					<FooterDelete
						$markedEvent={markedEvent.date}
						onClick={() => {
							dispatch(deleteInterview());
						}}
					>
						Delete
					</FooterDelete>
				</Footer>
			</Container>
		</Wrapper>
	);
}

export default App;
