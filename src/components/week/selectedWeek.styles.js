import styled from "styled-components";

export const WeekDates = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;
export const WeekDate = styled.div`
	display: flex;
	flex-grow: 1;
	width: 0;
	max-width: 60px;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	cursor: pointer;
	color: ${(props) => (props.$today ? "red" : null)};
	color: ${(props) => (props.$selected ? "white" : null)};
	background-color: ${(props) =>
		props.$selected && !props.$today ? "black" : null};
	background-color: ${(props) =>
		props.$selected && props.$today ? "red" : null};
	transition: 0.1s;

	&:hover {
		transform: scale(1.05);
	}
`;
