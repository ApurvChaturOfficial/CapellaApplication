

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Inputs page components
import InputDynamic from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputDynamic";
import InputStatic from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputStatic";
import InputOutlined from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputOutlined";
import InputIcon from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputIcon";
import InputSuccess from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputSuccess";
import InputError from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputError";
import InputDisabled from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputDisabled";

// Inputs page components code
import inputDynamicCode from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputDynamic/code";
import inputStaticCode from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputStatic/code";
import inputOutlinedCode from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputOutlined/code";
import inputIconCode from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputIcon/code";
import inputSuccessCode from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputSuccess/code";
import inputErrorCode from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputError/code";
import inputDisabledCode from "src/love/iTemplate/layouts/sections/input-areas/inputs/components/InputDisabled/code";

function Inputs() {
  return (
    <BaseLayout
      title="Inputs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/inputs" },
        { label: "Inputs" },
      ]}
    >
      <View title="Input dynamic" code={inputDynamicCode}>
        <InputDynamic />
      </View>
      <View title="Input static" code={inputStaticCode}>
        <InputStatic />
      </View>
      <View title="Input outlined" code={inputOutlinedCode}>
        <InputOutlined />
      </View>
      <View title="Input icon" code={inputIconCode}>
        <InputIcon />
      </View>
      <View title="Input success" code={inputSuccessCode}>
        <InputSuccess />
      </View>
      <View title="Input error" code={inputErrorCode}>
        <InputError />
      </View>
      <View title="Input disabled" code={inputDisabledCode}>
        <InputDisabled />
      </View>
    </BaseLayout>
  );
}

export default Inputs;
