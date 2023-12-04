import { createSlice } from "@reduxjs/toolkit";

const date = new Date();

const initialState = {
	currentDate: {
		year: date.getFullYear(),
		month: date.getMonth(),
		date: date.getDate(),
		day: date.getDay(),
	},
	markedEvent: {},
	events: [
		{
			year: date.getFullYear(),
			month: date.getMonth(),
			date: date.getDate(),
			hours: 9,
			minutes: 0,
		},
		{
			year: date.getFullYear(),
			month: date.getMonth(),
			date: date.getDate() + 2,
			hours: 14,
			minutes: 0,
		},
		{
			year: date.getFullYear(),
			month: date.getMonth(),
			date: date.getDate() + 4,
			hours: 12,
			minutes: 0,
		},
		{
			year: date.getFullYear(),
			month: date.getMonth(),
			date: date.getDate() + 8,
			hours: 11,
			minutes: 0,
		},
	],
};

const setCurrentDate = (state, action) => {
	const { year, month, date } = action.payload;
	const newCurrentDate = new Date(year, month, date);
	state.currentDate.day = newCurrentDate.getDay();
	state.currentDate.date = newCurrentDate.getDate();
	state.currentDate.month = newCurrentDate.getMonth();
	state.currentDate.year = newCurrentDate.getFullYear();
};

const calSlice = createSlice({
	name: "calendar",
	initialState,
	reducers: {
		previousWeek(state, action) {
			setCurrentDate(state, action);
			state.markedEvent = {};
		},
		nextWeek(state, action) {
			setCurrentDate(state, action);
			state.markedEvent = {};
		},
		setToday(state) {
			state.currentDate.day = date.getDay();
			state.currentDate.date = date.getDate();
			state.currentDate.month = date.getMonth();
			state.currentDate.year = date.getFullYear();
		},
		selectDate(state, action) {
			const { year, month, date, day } = action.payload;
			state.currentDate.day = day;
			state.currentDate.date = date;
			state.currentDate.month = month;
			state.currentDate.year = year;
		},
		addNewInterview(state, action) {
			const newInterviewDate = new Date(action.payload);
			state.events.push({
				year: newInterviewDate.getFullYear(),
				month: newInterviewDate.getMonth(),
				date: newInterviewDate.getDate(),
				hours: newInterviewDate.getHours(),
				minutes: newInterviewDate.getMinutes(),
			});
		},
		markEvent(state, action) {
			if (JSON.stringify(state.markedEvent) === "{}") {
				state.markedEvent.year = action.payload.year;
				state.markedEvent.month = action.payload.month;
				state.markedEvent.date = action.payload.date;
				state.markedEvent.hours = action.payload.hours;
				state.markedEvent.minutes = action.payload.minutes;
			} else {
				state.markedEvent = {};
			}
		},
		unmarkEvent(state) {
			state.markedEvent = {};
		},
		deleteInterview(state) {
			state.events.splice(
				state.events.findIndex((event) => {
					return (
						new Date(
							event.year,
							event.month,
							event.date,
							event.hours,
							event.minutes
						).getTime() ==
						new Date(
							state.markedEvent.year,
							state.markedEvent.month,
							state.markedEvent.date,
							state.markedEvent.hours,
							state.markedEvent.minutes
						).getTime()
					);
				}),
				1
			);
			state.markedEvent = {};
		},
	},
});

export const {
	nextWeek,
	previousWeek,
	setToday,
	selectDate,
	addNewInterview,
	markEvent,
	unmarkEvent,
	deleteInterview,
} = calSlice.actions;
export default calSlice.reducer;
