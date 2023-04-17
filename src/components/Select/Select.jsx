/**
 * @Desc Dependencias
 */
import React, { useState } from 'react';

/**
 * @Desc Estilos
 */
import { Selected, ItemsMenu } from './Select.styled';

function Select(props) {
	const [open, setOpen] = useState(false);

	const {
		value = '',
		label = '',
		helperText = 'Seleccione Ciudad',
		handleChange = () => {},
		options = [],
		error = false,
		readOnly,
	} = props;

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<Selected
			select
			variant="outlined"
			label={label}
			InputProps={readOnly}
			helperText={helperText}
			error={error}
			open={open}
			onClose={handleClose}
			onOpen={handleOpen}
			value={value}
			onChange={(event) => {
				handleChange(event.target.value);
			}}
		>
			{options.map((option, i) => {
				return (
					<ItemsMenu value={option} key={option + i}>
						{option}
					</ItemsMenu>
				);
			})}
		</Selected>
	);
}

export default Select;
