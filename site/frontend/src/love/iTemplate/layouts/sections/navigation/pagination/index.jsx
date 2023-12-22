

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";

// Sections components
import BaseLayout from "src/love/iTemplate/layouts/sections/components/BaseLayout";
import View from "src/love/iTemplate/layouts/sections/components/View";

// Stats page components
import PaginationSimple from "src/love/iTemplate/layouts/sections/navigation/pagination/components/PaginationSimple";

// Stats page components code
import paginationSimpleCode from "src/love/iTemplate/layouts/sections/navigation/pagination/components/PaginationSimple/code";

function Pagination() {
  return (
    <BaseLayout
      title="Pagination"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/pagination" },
        { label: "Pagination" },
      ]}
    >
      <View title="Pagination simple" code={paginationSimpleCode}>
        <MKBox py={3}>
          <PaginationSimple />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Pagination;
