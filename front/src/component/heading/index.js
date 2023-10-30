import "./index.css";

export function Heading({ title, info }) {
	return (<>
	<div className="heading">
	<h1 className="heading__title">{title}</h1>	
	<p className="heading__info">{info}</p>
	</div>
	</>)
}