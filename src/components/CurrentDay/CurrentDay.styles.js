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
	justify-content: space-around;
`;

export const Text = styled(Typography)`
	&.css-ahj2mt-MuiTypography-root {
		font-size: 2rem;
	}
`;
