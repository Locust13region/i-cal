import styled from "styled-components";

export const CalendarHeader = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #f6f6f6;
	border-top: 1px solid #ebebeb;
	border-bottom: 1px solid #ebebeb;
`;
export const EmptyBlock = styled.div`
	display: flex;
	flex-basis: 100px;
	flex-grow: 0;
`;
export const WeekContainer = styled.div`
	display: flex;
	flex-basis: 640px;
	flex-grow: 1;
	flex-direction: column;
`;
export const WeekDays = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	font-size: 0.6em;
	font-weight: bold;
	padding: 5px 0px;
`;
export const WeekDay = styled.div`
	display: flex;
	width: 0;
	justify-content: center;
	align-items: center;
`;
export const WeekSelector = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	font-size: 0.5em;
	font-weight: bold;
`;
export const Selectors = styled.div`
	color: red;
	font-size: 2.5em;
	width: 14%;
	padding-bottom: 10px;
	cursor: pointer;
	text-align: center;
`;
