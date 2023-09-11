import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slideImageOne from "../images/slide-1.jpeg";
import slideImageTwo from "../images/slide-2.jpeg";
import slideImageThree from "../images/slide-3.jpeg";

export default class Carousel extends Component {
  	render() {
		const generateDynamicBackground = (backgroundImage) => {
			return {
				background: `linear-gradient(125deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 99%), url(${backgroundImage})`,
				backgroundSize: 'cover',
				position: 'relative',
			};
		};

		const settings = {
			dots: true,
			infinite: true,
			lazyLoad: true,
			fade: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: true
		};

		const sliders = [
			{
				image: slideImageOne,
				heading: 'One',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			{
				image: slideImageTwo,
				heading: 'Two',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			{
				image: slideImageThree,
				heading: 'Three',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			}
		]

		return (
			<div>
				<Slider {...settings}>
					{
						sliders.map((slide, index) => (
							<div key={index}>
								<div 
									className='slider'
									style={generateDynamicBackground(slide.image)}
								>
									<div className='slider-text'>
										<h1 className='slider-heading'>{slide.heading}</h1>
										<p className='slider-body'>{slide.text}</p>
									</div>
								</div>
							</div>	
						))
					}
				</Slider>
			</div>
		);
	};
}