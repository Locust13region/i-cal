import { styled } from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	background-color: black;
	width: 100%;
`;
export const Container = styled.div`
	@media (min-width: 740px) {
		width: 740px;
		font-size: 40px;
	}
	@media (max-width: 740px) {
		width: 100%;
		font-size: 30px;
	}
	@media (max-width: 440px) {
		width: 100%;
		font-size: 20px;
	}
	display: flex;
	flex-direction: column;
	height: 100vh;
	box-sizing: border-box;
	background-color: white;
`;
export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 10px 30px;
`;
export const Title = styled.div``;
export const AddEvent = styled.div`
	color: red;
	cursor: pointer;
	font-size: 1.3em;
	font-weight: bold;
`;
export const Footer = styled(Header)`
	background-color: #f6f6f6;
	font-size: 0.7em;
	border-bottom: 1px solid #ebebeb;
	border-top: 1px solid #ebebeb;
`;
export const FooterToday = styled.div`
	color: red;
	cursor: pointer;
`;
export const FooterDelete = styled.div`
	color: red;
	cursor: pointer;
	display: ${(props) => (props.$markedEvent ? "block" : "none")};
`;
