import styled from "styled-components";

export const TableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;
	-ms-overflow-style: none; /* IE и Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none;
	} /*Chrome, Safari и Opera*/
`;
