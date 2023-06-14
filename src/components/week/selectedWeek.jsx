import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WeekDate, WeekDates } from "./selectedWeek.styles";
import { selectDate } from "../../store/calSlice";

const SelectedWeek = () => {
	const dispatch = useDispatch();
	const { year, month, date, day } = useSelector(
		(state) => state.calendarStore.currentDate
	);
	const content = [];
	for (let index = 0; index < 7; index++) {
		const data = new Date(
			year,
			month,
			day ? date - day + index + 1 : date - 6 + index
		);
		content.push(
			<WeekDate
				$today={
					!(data.getDate() - new Date().getDate()) &&
					!(data.getMonth() - new Date().getMonth())
				}
				$selected={!(date - data.getDate()) && !(month - data.getMonth())}
				key={index}
				onClick={() => {
					dispatch(
						selectDate({
							day: data.getDay(),
							date: data.getDate(),
							month: data.getMonth(),
							year: data.getFullYear(),
						})
					);
				}}
			>
				{data.getDate()}
			</WeekDate>
		);
	}

	return <WeekDates>{content}</WeekDates>;
};

export default SelectedWeek;
