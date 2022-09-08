import styled from "styled-components";

export const Root = styled.div`
	border-style: solid;
	padding: 50px;
	margin: 20px;
	border-radius: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	min-width: 820px;
    
	-webkit-box-shadow: -1px 32px 38px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -1px 32px 38px 0px rgba(0, 0, 0, 0.75);
	box-shadow: -1px 32px 38px 0px rgba(0, 0, 0, 0.75);

	background: #8360c3; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#2ebf91,
		#8360c3
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#2ebf91,
		#8360c3
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
