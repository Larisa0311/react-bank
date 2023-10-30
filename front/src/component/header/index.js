import "./index.css";

const time = new Date().toLocaleString('en-us', {hour: "numeric", minute: "numeric",});

export function Header() {
	return (
		<><div className="header">
		<span className="header__time header__time--black">{time.slice(-time.length, -2)}</span>
		<span className="header__icons">
			<img className="header__icon" src="/svg/callular_connection_black.svg" alt='Connection'/>
			<img className="header__icon" src='/svg/wifi_black.svg' alt='Wifi'/>
			<img className="header__icon" src="/svg/battery_black.svg" alt='Battery' />
		</span>
	</div>
	</>);
	};

	export function HeaderWhite() {
			return <><div className="header">
			<span className="header__time header__time--white">{time.slice(-time.length, -2)}</span>
			<span className="header__icons">
				<img className="header__icon" src="/svg/cellular_connection.svg" alt='Connection'/>
				<img className="header__icon" src='/svg/wifi.svg' alt='Wifi'/>
				<img className="header__icon" src="/svg/battery.svg" alt='Battery' />
			</span>
		</div></>
	}