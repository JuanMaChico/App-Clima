import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const Root = styled.div`
	border-radius: 20px;

	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
`;
export const Container = styled.div``;

export const Icons = styled.img``;

export const City = styled(Typography)`
	&.MuiTypography-root {
		font-size: 20px;
	}
`;

export const Temp = styled(Typography)`
	&.MuiTypography-root {
		font-size: 50px;
	}
`;
