import styled from "styled-components";

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 98vw;
	height: 98vh;
	background: #108dc7; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#ef8e38,
		#108dc7
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#ef8e38,
		#108dc7
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
