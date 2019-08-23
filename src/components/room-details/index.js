import React from 'react';
import PropTypes from 'prop-types';
import WifiSvg from '../../icon/wifi.svg';
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
import ChildFriendlySvg from '../../crawling-baby-silhouette.svg';
import { Icon } from 'antd';

const iconContrast = {
	'Air-Conditioner': {
		component: BreezeSvg,
		name: '空調',
	},
	'Wi-fi': {
		component: WifiSvg,
		name: 'Wi-fi',
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

function RoomDetails({ amenities }) {
	return (
		<Icon component={WifiSvg}></Icon>
	);
}

export default RoomDetails;