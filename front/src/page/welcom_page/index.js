import "./index.css";

import Component from "../../component/page";
import {Button} from "../../component/button";

import {Footer} from "../../component/footer"
import Image from "../../component/image";



export function WelcomPage() {

	return (
<Component >
	<Image/>

	<Button buttonName="Sign Up" style={{"backgroundColor": "#775CE5", 
	"color":"white"}} link="/signup">
	 </Button>
<Button buttonName="Sign In" link="/signin">
	 </Button>
<Footer />

</Component>
	);}

