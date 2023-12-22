

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Badges page components
import BadgesGradient from "src/love/iTemplate/layouts/sections/elements/badges/components/BadgesGradient";
import BadgesSimple from "src/love/iTemplate/layouts/sections/elements/badges/components/BadgesSimple";
import BadgesSimpleRounded from "src/love/iTemplate/layouts/sections/elements/badges/components/BadgesSimpleRounded";

// Badges page components code
import badgesGradientCode from "src/love/iTemplate/layouts/sections/elements/badges/components/BadgesGradient/code";
import badgesSimpleCode from "src/love/iTemplate/layouts/sections/elements/badges/components/BadgesSimple/code";
import badgesSimpleRoundedCode from "src/love/iTemplate/layouts/sections/elements/badges/components/BadgesSimpleRounded/code";

function Badges() {
  return (
    <BaseLayout
      title="Badges"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/badges" },
        { label: "Badges" },
      ]}
    >
      <View title="Badges gradient" code={badgesGradientCode}>
        <BadgesGradient />
      </View>
      <View title="Badges simple" code={badgesSimpleCode}>
        <BadgesSimple />
      </View>
      <View title="Badges simple rounded" code={badgesSimpleRoundedCode}>
        <BadgesSimpleRounded />
      </View>
    </BaseLayout>
  );
}

export default Badges;
