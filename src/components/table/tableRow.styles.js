import styled from "styled-components";

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;
export const TimeCell = styled.div`
	display: flex;
	flex-basis: 100px;
	flex-grow: 0;
	justify-content: center;
	color: #c2c2c2;
	font-size: 0.5em;
	width: 0;
	line-height: 0px;
`;
export const CellContainer = styled.div`
	display: flex;
	flex-grow: 1;
	flex-basis: 640px;
	justify-content: flex-end;
`;
export const Cell = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1 / 1;
	border: 1px solid #ebebeb;
`;
export const CellItem = styled.div`
	background-color: ${(props) => (props.$eventPresent ? "#ecedff" : null)};
	background-color: ${(props) =>
		props.$eventPresent && props.$eventMarked ? "#b4b8ff" : null};
	width: 90%;
	aspect-ratio: 1 / 1;
	cursor: pointer;
	transition: 0.1s;

	&:hover {
		transform: scale(1.05);
	}
`;
