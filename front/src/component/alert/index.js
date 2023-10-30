import "./index.css";

export function AlertLink({info, link, page}) {
	return (<>
	<div className="alert">
		<p className="alert__info">{info}
		<a href={link} className="alert__link">{page}</a>
		</p>
	</div>
	</>);
}

export function Alert({err}) {
	return (<div className="alert__error">
		<img src='/svg/rectangle.svg' className="alert__error--image" alt='err'/>
		<span className="alert__error--text">{err}</span>
	</div>);
}