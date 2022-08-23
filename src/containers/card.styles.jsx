import styled from "styled-components";

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 95%;
	background-color: rgba(49, 80, 110, 0.4);
	border-radius: 35px;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Body = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Temp = styled.h2`
	margin: 10px;
	font-size: 4rem;
`;

export const City = styled.h2`
	margin: 10px;
`;
