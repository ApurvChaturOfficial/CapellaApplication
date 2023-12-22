

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Stats page components
import TabsSimple from "src/love/iTemplate/layouts/sections/navigation/nav-tabs/components/TabsSimple";

// Stats page components code
import tabsSimpleCode from "src/love/iTemplate/layouts/sections/navigation/nav-tabs/components/TabsSimple/code";

function NavTabs() {
  return (
    <BaseLayout
      title="Nav Tabs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
        { label: "Nav Tabs" },
      ]}
    >
      <View title="Tabs simple" code={tabsSimpleCode}>
        <MKBox bgColor="white" py={6}>
          <TabsSimple />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default NavTabs;
