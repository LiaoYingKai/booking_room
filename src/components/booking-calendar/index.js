import React, { Component, } from 'react';
import { Calendar, Icon } from 'antd';
import './style.scss';
import 'antd/dist/antd.css';

// TODO 要實作： 預約時段跳出 pop up， 選擇月份， disabled 已經被選的日期
class BookingCalendar extends Component {
	constructor() {
		super();
		this._renderDateCell = this._renderDateCell.bind(this);
		this._renderTitle = this._renderTitle.bind(this);
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
		const { _renderDateCell, _renderTitle } = this;

		return (
			<div className="booking-calendar">
				<div className="booking-calendar--style">
					<Calendar 
						fullscreen={false} 
						dateFullCellRender={_renderDateCell}
						headerRender={_renderTitle}
					/>
				</div>
				<button>預約時段</button>
			</div>

		);
	}
}

export default BookingCalendar;