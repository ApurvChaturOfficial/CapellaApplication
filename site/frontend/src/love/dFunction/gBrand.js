import beehive from "src/love/iTemplate/assets/images/business/beehive.png";
import andromeda from "src/love/iTemplate/assets/images/business/andromeda.png";
import pinwheel from "src/love/iTemplate/assets/images/business/pinwheel.png";
import tadpole from "src/love/iTemplate/assets/images/business/tadpole.png";
import aquila from "src/love/iTemplate/assets/images/business/aquila.png";
import bellatrix from "src/love/iTemplate/assets/images/business/bellatrix.png";
import capella from "src/love/iTemplate/assets/images/business/capella.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: beehive,
			name: "Beehive Corporation",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand