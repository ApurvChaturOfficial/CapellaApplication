

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Modals page components
import SimpleModal from "src/love/iTemplate/layouts/sections/attention-catchers/modals/components/SimpleModal";

// Modals page components code
import simpleModalCode from "src/love/iTemplate/layouts/sections/attention-catchers/modals/components/SimpleModal/code";

function Modals() {
  return (
    <BaseLayout
      title="Modals"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/modals" },
        { label: "Modals" },
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;
