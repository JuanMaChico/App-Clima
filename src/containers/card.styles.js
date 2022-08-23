import styled from "styled-components";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 70vw;
	height: 70vh;
	background-color: rgba(58, 95, 131, 0.4);
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

export const Sun = styled(WbSunnyIcon)`
	margin: 30px;
	&.css-tzssek-MuiSvgIcon-root {
		font-size: 8rem;
	}
`;

export const Place = styled(FmdGoodIcon)`
	&.css-tzssek-MuiSvgIcon-root {
		font-size: 1.3rem;
	}
`;
