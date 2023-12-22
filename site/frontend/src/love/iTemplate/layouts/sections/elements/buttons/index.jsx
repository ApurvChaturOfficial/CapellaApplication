

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Buttons page components
import ButtonsGradient from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsGradient";
import ButtonsContained from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsContained";
import ButtonsOutlined from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsOutlined";
import ButtonsSizes from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsSizes";
import ButtonsIconLeft from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsIconLeft";
import ButtonsIconRight from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsIconRight";

// Buttons page components code
import buttonsGradientCode from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsGradient/code";
import buttonsContainedCode from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsContained/code";
import buttonsOutlinedCode from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsOutlined/code";
import buttonsSizesCode from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsSizes/code";
import buttonsIconLeftCode from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsIconLeft/code";
import buttonsIconRightCode from "src/love/iTemplate/layouts/sections/elements/buttons/components/ButtonsIconRight/code";

function Buttons() {
  return (
    <BaseLayout
      title="Buttons"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/buttons" },
        { label: "Buttons" },
      ]}
    >
      <View title="Buttons gradient" code={buttonsGradientCode}>
        <ButtonsGradient />
      </View>
      <View title="Buttons contained" code={buttonsContainedCode}>
        <ButtonsContained />
      </View>
      <View title="Buttons outlined" code={buttonsOutlinedCode}>
        <ButtonsOutlined />
      </View>
      <View title="Buttons sizes" code={buttonsSizesCode}>
        <ButtonsSizes />
      </View>
      <View title="Buttons icon left" code={buttonsIconLeftCode}>
        <ButtonsIconLeft />
      </View>
      <View title="Buttons icon right" code={buttonsIconRightCode}>
        <ButtonsIconRight />
      </View>
    </BaseLayout>
  );
}

export default Buttons;
