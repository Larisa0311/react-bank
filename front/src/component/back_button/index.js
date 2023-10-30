import "./index.css";

export default function BackButton() {
	const handleClick = () => {
		return window.history.back();
			}

	return (
	<><div className="back__button" 
	 onClick={handleClick}
	>
	<img src="/svg/back_button.svg" alt="<" width="24" height="24"/>
</div></>);
}