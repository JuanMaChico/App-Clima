/**
 * @desc Dependencias
 */
import styled from 'styled-components';

/**
 * @desc Material design
 */
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

/**
 * @desc Componente Select
 */
export const Selected = styled(TextField)`
	& .MuiGrid-root {
		justify-content: center;
	}
	&.MuiFormControl-root {
		width: 30vw;
		margin-bottom: 20px;
		justify-content: center;
	}
	& .MuiFormHelperText-root {
		color: #000000;
	}
	& label {
		color: #000000;
	}
	& label.Mui-focused {
		color: #000000;
	}
	& .MuiSelect-selectMenu {
		color: #000000;
	}
	& .MuiOutlinedInput-root {
		& fieldset {
			border-color: #000000;
		}
		&:hover fieldset {
			border-color: #000000;
		}
		&.Mui-focused fieldset {
			border-color: #000000;
		}
	}
`;

export const ItemsMenu = styled(MenuItem)``;
