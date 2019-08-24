import React, { Component, } from 'react';
import PropTyeps from 'prop-types';
import LogoSvg from '../../icon/logo_block.svg';
import { Icon } from 'antd';
import './style.scss';

const propTypes = {
	imageUrl: PropTyeps.array,
};

class RoomInfoBanner extends Component {
	constructor() {
		super();
		this.state = {
			renderImage: '',
		};
	}
	render() {
		const { renderImage } = this.state;

		return (
			<div className="room-info-banner">
				<Icon component={LogoSvg} className="room-info-banner__logo"></Icon>
				<img src={renderImage}></img>
			</div>
		);
	}
	componentDidUpdate() {
		const { imageUrl } = this.props;

		this.setState({
			renderImage: imageUrl[0],
		});
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.imageUrl !== this.props.imageUrl) return true;
		if (nextState.renderImage !== this.state.renderImage) return true;
		return  false;
	}
}

RoomInfoBanner.propTypes = propTypes;

export default RoomInfoBanner;