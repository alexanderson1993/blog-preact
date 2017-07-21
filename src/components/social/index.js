import { h } from 'preact';
import style from './style.scss';

const buttons = [{
	title: 'Cash.me',
	icon: 'usd',
	link: 'http://Cash.me/$alexanderson1993'
},
{
	title: 'Facebook',
	icon: 'facebook',
	link: 'http://www.facebook.com/alexanderson1993'
},
{
	title: 'Github',
	icon: 'github',
	link: 'https://github.com/alexanderson1993'
},
{
	title: 'Instagram',
	icon: 'instagram',
	link: 'https://instagram.com/alexanderson1993'
},
{
	title: 'Keybase',
	icon: 'key',
	link: 'http://keybase.io/alexanderson1993'
},
{
	title: 'Medium',
	icon: 'medium',
	link: 'https://medium.com/@alexanderson1993'
},
{
	title: 'Mormon.org',
	icon: 'smile-o',
	link: 'http://mormon.org/me/824W'
},
{
	title: 'Snapchat',
	icon: 'snapchat',
	link: 'https://www.snapchat.com/add/ralex1993'
},
{
	title: 'Twitter',
	icon: 'twitter',
	link: 'http://www.twitter.com/ralex1993'
}];

export default ({ className }) => <div className={`${className} ${style.icons}`}>{buttons.map(b => <Icon {...b} />)}</div>;

const Icon = ({ title, icon, link }) => {
	const props = {
		href: link,
		target: '_blank',
		className: style.social,
		title
	};
	return <a {...props}><span className={`${style.icon} ${style[icon]}`} /></a>;
};

