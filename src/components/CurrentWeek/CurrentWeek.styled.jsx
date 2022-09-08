import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const Root = styled.div`
	border-radius: 70px;

	width: 100%;
	min-width: 820px;

	display: flex;
	align-items: center;
	justify-content: space-around;
	align-content: center;
`;

export const Days = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;

	margin: 20px;
`;

export const Icons = styled.img``;

export const Text = styled(Typography)`
	&.MuiTypography-root {
        font-style: italic;
	}
`;

export const Temp = styled(Typography)`
	&.MuiTypography-root {
		font-weight: 600;
	}
`;
