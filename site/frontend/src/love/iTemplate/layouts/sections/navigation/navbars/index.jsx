

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Stats page components
import NavbarDark from "src/love/iTemplate/layouts/sections/navigation/navbars/components/NavbarDark";

// Stats page components code
import navbarDarkCode from "src/love/iTemplate/layouts/sections/navigation/navbars/components/NavbarDark/code";

function Navbars() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <View title="Navbar dark" code={navbarDarkCode}>
        <MKBox py={6}>
          <NavbarDark />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Navbars;
