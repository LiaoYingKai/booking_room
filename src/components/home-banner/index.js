import React from 'react';
import './style.scss';
import bannerImage from '../../images/room_banner.png';
import BannerContent from './banner-content';

function Banner() {
	return (
		<div className="banner">
			<img src={bannerImage}></img>
			<BannerContent/>
		</div>
	);
}

export default Banner;
