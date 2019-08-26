import React, { Component, } from 'react';
import { Calendar, Icon } from 'antd';
import Modal from '../../components/modal';
import SuccessfulSvg from '../../icon/tick-inside-circle.svg';
import './style.scss';
import 'antd/dist/antd.css';

// TODO 要實作： 預約時段跳出 pop up， 選擇月份， disabled 已經被選的日期
class BookingCalendar extends Component {
	constructor() {
		super();
		this.state = {
			isBookingModalVisible: false,
		};
		this._renderDateCell = this._renderDateCell.bind(this);
		this._renderTitle = this._renderTitle.bind(this);
		this._handleToggleBookingModal = this._handleToggleBookingModal.bind(this);
	}
	_handleToggleBookingModal() {
		this.setState({
			isBookingModalVisible: !this.state.isBookingModalVisible
		});
	}
	_renderDateCell(value) {
		const today = new Date();
		
		if (value.month() < (today.getMonth())) {
			return (
				<div className="date over-date">
					{value.date()}
				</div>
			);
		}

		if (value.date() < today.getDate() && value.month() < (today.getMonth() + 1))  {
			return (
				<div className="date over-date">
					{value.date()}
				</div>
			);
		}
		if (value.date() === 26 || value.date() === 27) {
			return (
				<div className="date booking-date">
					{value.date()}
				</div>
			);
		}
		return (
			<div className="date">
				{value.date()}
			</div>
		);
	}
	_renderTitle({ value, type, onChange, onTypeChange }) {
		return (
			<div className="booking-calendar__title">
				<Icon type="left" />
				{value.year()} / {value.month() + 1}
				<Icon type="right" />
			</div>
		);
	}
	render() {
		const { _renderDateCell, _renderTitle, _handleToggleBookingModal } = this;
		const { isBookingModalVisible } = this.state;

		return (
			<div className="booking-calendar">
				<div className="booking-calendar--style">
					<Calendar 
						fullscreen={false} 
						dateFullCellRender={_renderDateCell}
						headerRender={_renderTitle}
					/>
				</div>
				<button onClick={_handleToggleBookingModal}>預約時段</button>
				<Modal
					title={"預約時段"}
					isOpen={isBookingModalVisible}
					hasCancelButton={true}
					buttonText={"確定預約"}
					onClickCancel={_handleToggleBookingModal}
					onClickOK={_handleToggleBookingModal}
				>
				</Modal>
				<Modal
					title={"預約成功"}
					isOpen={false}
					buttonText={"確定預約"}
					onClickOK={_handleToggleBookingModal}
				>
					<Icon component={SuccessfulSvg}/>
				</Modal>
				<Modal
					title={"預約失敗"}
					isOpen={false}
					buttonText={"返回"}
					onClickOK={_handleToggleBookingModal}
				>
					預約時間已被人預訂
				</Modal>
			</div>

		);
	}
}

export default BookingCalendar;