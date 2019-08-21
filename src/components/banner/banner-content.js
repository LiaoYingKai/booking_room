import React from 'react';
import { Icon } from 'antd';
import FacebookSvg from '../../icon/facebook-square-brands.svg';
import InstagramSvg from '../../icon/instagram-brands.svg';
import LogoSvg from '../../icon/logo_white.svg';
import AddressSvg from '../../icon/home-solid.svg';
import PhoneSvg from '../../icon/phone-alt-solid.svg';
import EmailSvg from '../../icon/envelope-solid.svg';

function BannerContent() {
	return (
		<div className="banner-content">
			<div className="banner-content__logo">
				<Icon component={LogoSvg} />
			</div>
			<div className="banner-content__info">
				<div className="banner-content__info-community">
					<Icon component={FacebookSvg}/>
					<Icon component={InstagramSvg}/>
				</div>
				<div className="banner-content__info-detail">
					<div>
						<Icon component={AddressSvg} />
						<p>02-17264937</p>
					</div>
					<div>
						<Icon component={PhoneSvg}/>
						<p>whitespace@whitespace.com.tw</p>
					</div>
					<div>
						<Icon component={EmailSvg}/>
						<p>台北市羅斯福路十段30號</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BannerContent;
