import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const propTypes = {
	title: PropTypes.string,
	buttonText: PropTypes.string,
	hasCancelButton: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.number
	]),
	isOpen: PropTypes.bool,
	onClickOK: PropTypes.func,
	onClickCancel: PropTypes.func,
};

const defaultProps = {
	isOpen: false,
	title: '',
	buttonText: '確認',
	hasCancelButton: false,
	children: '',
	onClickOK: () => {},
	onClickCancel: () => {},
};

function Modal({ title, buttonText, hasCancelButton, children, isOpen, onClickCancel, onClickOK, }) {
	return (
		<div className={cx("modal", { 'modal-open': isOpen })} >
			<div className="modal-content">
				<div className="modal-content__title">
					{title}
				</div>
				<div className="modal-content__separate">
					\ \ \ 
				</div>
				<div className="modal-content__children">
					{children}
				</div>
				<div className="modal-content__button-group">
					<button 
						className={cx({ 'invisible': !hasCancelButton })} 
						onClick={onClickCancel}
					> 取消 </button>
					<button 
						onClick={onClickOK}
					> {buttonText} </button>
				</div>
			</div>
		</div>
	);
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;