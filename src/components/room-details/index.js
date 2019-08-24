import React from 'react';
import PropTypes from 'prop-types';
import WiFiSvg from '../../icon/wiFi.svg';
import BreezeSvg from '../../icon/breeze.svg';
import BreakfastSvg from '../../icon/breakfast.svg';
import MountainRangeSvg from '../../icon/mountain-range.svg';
import BarSvg from '../../icon/bar.svg';
import DogSvg from '../../icon/dog.svg';
import RefrigeratorSvg from '../../icon/dog.svg';
import RoomServiceSvg from '../../icon/room_service.svg';
import SmokeFreeSvg from '../../icon/no-smoke-symbol.svg';
import SofaSvg from '../../icon/dog.svg';
import TelevisionSvg from '../../icon/phone.svg';
import ChildFriendlySvg from '../../icon/crawling-baby-silhouette.svg';
import { Icon } from 'antd';
import cx from 'classnames';
import './style.scss';

const iconContrast = {
	'Air-Conditioner': {
		component: BreezeSvg,
		name: '空調',
	},
	'Wi-Fi': {
		component: WiFiSvg,
		name: 'Wi-Fi',
	},
	'Breakfast': {
		component: BreakfastSvg,
		name: '早餐',
	},
	'Great-View': {
		component: MountainRangeSvg,
		name: '漂亮的視野',
	},
	'Mini-Bar': {
		component: BarSvg,
		name: 'Mini Bar'
	},
	'Pet-Friendly': {
		component: DogSvg,
		name: '寵物攜帶',
	},
	'Refrigerator': {
		component: RefrigeratorSvg,
		name: '冰箱',
	},
	'Room-Service': {
		component: RoomServiceSvg,
		name: 'Room Service'
	},
	'Smoke-Free': {
		component: SmokeFreeSvg,
		name: '可以吸菸'
	},
	'Sofa': {
		component: SofaSvg,
		name: '沙發',
	},
	'Television': {
		component: TelevisionSvg,
		name: '電話'
	},
	'Child-Friendly': {
		component: ChildFriendlySvg,
		name: '適合兒童',
	},
};

const propTypes = {
	amenities: PropTypes.object,
	style: PropTypes.object,
};

function RoomDetails({ amenities, style }) {
	return (
		<div className="room-details" style={style}>
			{
				amenities ? 
					Object.keys(amenities).map(item => (
						<div key={item} className={cx({ 'room-details--disabled': !amenities[item] })}>
							<Icon component={iconContrast[item].component} width={'20px'} hieght={'20px'}></Icon>
							<span>{iconContrast[item].name}</span>
						</div> 
					)) : null
			}
		</div>
		
	);
}

RoomDetails.propTypes = propTypes;

export default RoomDetails;