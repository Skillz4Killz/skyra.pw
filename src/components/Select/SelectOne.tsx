import React, { Fragment, useState, ReactNode, ChangeEvent } from 'react';
import { DialogActions, DialogContent, ListItemText, ListItem, List, Button } from '@material-ui/core';

import DialogTitle from 'components/DialogTitle';
import Dialog from 'components/Dialog';
import SearchBar from 'components/SearchBar';
import { toTitleCase } from 'meta/util';

export interface SelectOneProps {
	title: ReactNode;
	name: ReactNode;
	values: {
		name: string;
		value: string;
	}[];

	onChange(...args: any[]): void;
}

export default function SelectOne({ title, onChange, values, name = 'None' }: SelectOneProps) {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState('');
	const handleClose = () => setOpen(!open);

	return (
		<Fragment>
			<Button variant="contained" color="primary" onClick={() => setOpen(true)}>
				{title}: {name}
			</Button>
			<Dialog fullWidth maxWidth="xs" onClose={handleClose} open={open}>
				<DialogTitle onClose={handleClose}>{toTitleCase(title)}</DialogTitle>
				{values.length > 10 && <SearchBar onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />}
				<DialogContent dividers>
					<List component="nav">
						{values
							.filter(({ name, value }) => {
								if (!search) return true;
								return `${name} ${value}`.toLowerCase().includes(search);
							})
							.map(({ name, value }) => (
								<ListItem
									key={value}
									button
									onClick={() => {
										onChange(value);
										handleClose();
									}}
								>
									<ListItemText primary={name} />
								</ListItem>
							))}
					</List>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							onChange(null);
							handleClose();
						}}
						color="primary"
					>
						Reset
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
}