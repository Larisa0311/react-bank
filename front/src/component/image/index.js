import { HeaderWhite } from '../header';
import './index.css';

export default function Image() {
	return <><div className="image__page page__background--large">
		<HeaderWhite />
		<img className="image__image" src="/img/kerfin7_nea_2788.png" alt="money" />
		
		<h1 className='image__title'>Hello!</h1>
		<p className='image__text'>Welcome to bank app</p>
						
	</div></>;
}