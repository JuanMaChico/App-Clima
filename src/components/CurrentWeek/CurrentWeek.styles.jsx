import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const Root = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 80%;
	height: 30%;
	background-color: rgba(52, 74, 97, 0.2);
	border-radius: 50px;
	margin-bottom: 1%;
`;

export const Days = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Icons = styled.img`
	width: 7rem;
	height: 7rem;
`;

export const Text = styled(Typography)`
	&.css-ahj2mt-MuiTypography-root {
		font-size: 0.9rem;
		margin: none;
	}
`;

export const Temp = styled(Typography)`
	&.css-ahj2mt-MuiTypography-root {
		font-size: 0.9rem;
		margin: none;
	}
`;
