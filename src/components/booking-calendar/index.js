import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Icon, Input, DatePicker,  } from 'antd';
import Modal from '../../components/modal';
import SuccessfulSvg from '../../icon/tick-inside-circle.svg';
import './style.scss';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

const { RangePicker } = DatePicker;
const propTypes = {
	booking: PropTypes.array,
};
const defaultProps = { 
	booking: [],
};

// TODO 要實作：預約時間 預約成功或失敗的彈跳視窗
class BookingCalendar extends Component {
	constructor() {
		super();
		this.state = {
			isBookingModalVisible: true,
			bookingInfo: {
				name: '',
				tel: '',
				date: [],
			},
		};
		this._renderDateCell = this._renderDateCell.bind(this);
		this._renderTitle = this._renderTitle.bind(this);
		this._handleToggleBookingModal = this._handleToggleBookingModal.bind(this);
		this._handleChangeName = this._handleChangeName.bind(this);
		this._handleChangeTel = this._handleChangeTel.bind(this);
		this._handleChangeDate = this._handleChangeDate.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
		this._handleCancel = this._handleCancel.bind(this);
	}
	_handleChangeName(value) {
		const bookingInfo = Object.assign({}, this.state.bookingInfo);

		bookingInfo.name = value;
		this.setState({
			bookingInfo
		});
	}
	_handleChangeTel(value) {
		const bookingInfo = Object.assign({}, this.state.bookingInfo);

		bookingInfo.tel = value;
		this.setState({
			bookingInfo
		});
	}
	_handleChangeDate(moment) {
		// 處理 moment
		const bookingInfo = Object.assign({}, this.state.bookingInfo);
		console.log(moment)
		// bookingInfo.date = [];
		// this.setState({
		// 	bookingInfo
		// });
	}
	_handleToggleBookingModal() {
		this.setState({
			isBookingModalVisible: !this.state.isBookingModalVisible
		});
	}
	_handleSubmit() {
		console.log(this.state.bookingInfo);
	}
	_handleCancel() {
		this._handleToggleBookingModal();
		this.setState({
			bookingInfo: {
				name: '',
				tel: '',
				date: [],
			},
		});
	}
	_renderDateCell(value) {
		const { booking } = this.props;
		const { _handleToggleBookingModal } = this;
		const today = new Date();

		if (!booking) return;

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
		const isBookingDate = booking.map(item => {
			const date = new Date(item.date);

			return `${date.getMonth() + 1}-${date.getDate()}`;
		})
			.includes(`${value.month() + 1}-${value.date()}`);

		if (isBookingDate) {
			return (
				<div className="date booking-date">
					{value.date()}
				</div>
			);
		}

		return (
			<div className="date" onClick={_handleToggleBookingModal}>
				{value.date()}
			</div>
		);
	}
	_renderTitle({ value, onChange, }) {
		function changeMonth(valueClone, nextMonth) {
			valueClone.month(nextMonth);
			onChange(valueClone);
			// onChange(month);
		}

		return (
			<div className="booking-calendar__title">
				<Icon type="left" onClick={() => { changeMonth(value.clone(), value.month() - 1); }}/>
				{value.year()} / {value.month() + 1}
				<Icon type="right" onClick={() => { changeMonth(value.clone(), value.month() + 1); }}/>
			</div>
		);
	}
	render() {
		const { _renderDateCell,
			_renderTitle,
			_handleToggleBookingModal,
			_handleChangeName,
			_handleChangeTel,
			_handleChangeDate,
			_handleSubmit,
			_handleCancel,
		} = this;
		const { isBookingModalVisible, bookingInfo, } = this.state;
		const { name, tel, } = bookingInfo;
		
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
					onClickCancel={_handleCancel}
					onClickOK={_handleSubmit}
					className={"booking"}
				>
					<div className="booking__name">
						姓名 <Input value={name} onChange={(event) => {_handleChangeName(event.target.value); }}></Input>
					</div>
					<div className="booking__phone">
						電話 <Input value={tel} onChange={(event) => { _handleChangeTel(event.target.value); }}></Input>
					</div>
					<div className="booking__time">
						預約起迄 <RangePicker onChange={(value) => { _handleChangeDate(value); }}></RangePicker>
					</div>
					<div className="booking__detail">
						<div>平日時段<span> 1夜</span></div>
						<div>假日時段<span> 1夜</span></div>
					</div>
					<div className="booking__total">
						&#61; NT.1234
					</div>
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

BookingCalendar.propTypes = propTypes;
BookingCalendar.defaultProps = defaultProps;

function mapStateToProps(state) {
	return {
		booking: state.roomInfo.booking,
	};
}

export default connect(mapStateToProps)(BookingCalendar);