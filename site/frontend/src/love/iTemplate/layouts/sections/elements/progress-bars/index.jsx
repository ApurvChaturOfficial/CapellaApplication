

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// ProgressBars page components
import ProgressSimple from "src/love/iTemplate/layouts/sections/elements/progress-bars/components/ProgressSimple";

// ProgressBars page components code
import progressSimpleCode from "src/love/iTemplate/layouts/sections/elements/progress-bars/components/ProgressSimple/code";

function ProgressBars() {
  return (
    <BaseLayout
      title="Progress Bars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/progress-bars" },
        { label: "Progress Bars" },
      ]}
    >
      <View title="Progress bar simple" code={progressSimpleCode}>
        <ProgressSimple />
      </View>
    </BaseLayout>
  );
}

export default ProgressBars;
