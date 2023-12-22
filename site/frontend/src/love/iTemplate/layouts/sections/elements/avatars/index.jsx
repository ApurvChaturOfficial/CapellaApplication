

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Avatars page components
import AvatarGroup from "src/love/iTemplate/layouts/sections/elements/avatars/components/AvatarGroup";
import AvatarSize from "src/love/iTemplate/layouts/sections/elements/avatars/components/AvatarSize";

// Avatars page components code
import avatarGroupCode from "src/love/iTemplate/layouts/sections/elements/avatars/components/AvatarGroup/code";
import avatarSizeCode from "src/love/iTemplate/layouts/sections/elements/avatars/components/AvatarSize/code";

function Avatars() {
  return (
    <BaseLayout
      title="Avatars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/avatars" },
        { label: "Avatars" },
      ]}
    >
      <View title="Avatar Group" code={avatarGroupCode}>
        <AvatarGroup />
      </View>
      <View title="Avatar Size" code={avatarSizeCode}>
        <AvatarSize />
      </View>
    </BaseLayout>
  );
}

export default Avatars;
