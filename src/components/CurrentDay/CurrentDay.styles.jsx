import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const Root = styled.div`
	display: flex;
	flex-direction: row;
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Icons = styled.img`
	width: 20rem;
	height: 20rem;
`;

export const City = styled(Typography)`
	&.css-ahj2mt-MuiTypography-root {
		font-size: 2rem;
		margin: none;
	}
`;

export const Temp = styled(Typography)`
	&.css-ahj2mt-MuiTypography-root {
		font-size: 3rem;
		margin: none;
	}
`;
