import './ToDoListItem.css';
import React from 'react';

const ToDoListItem = (props) => {
	const {
		title,
		description,
		...otherProps
	} = props;

	return (
		<div className="ToDoListItem" {...otherProps}>
			<div className="ToDoListItem-title">{title}</div>
			<div className="ToDoListItem-description">{description}</div>
		</div>
	);
};

export default ToDoListItem;
