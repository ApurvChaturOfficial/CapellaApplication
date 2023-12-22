

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Features page components
import FeaturesOne from "src/love/iTemplate/layouts/sections/page-sections/featuers/components/FeaturesOne";

// Features page components code
import featuresOneCode from "src/love/iTemplate/layouts/sections/page-sections/featuers/components/FeaturesOne/code";

function Features() {
  return (
    <BaseLayout
      title="Features"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/features" },
        { label: "Features" },
      ]}
    >
      <View title="Features 1" code={featuresOneCode}>
        <FeaturesOne />
      </View>
    </BaseLayout>
  );
}

export default Features;
