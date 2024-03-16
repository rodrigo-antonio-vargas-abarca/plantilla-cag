import { TabContent } from "reactstrap";
import { AllTabPane } from "./AllTabPane";
import { HeaderTabContentType } from "@data/props/Layout";
import { UpdateTab } from "./UpdateTab";
import { AlertTabPane } from "./AlertTabPane";

export const HeaderTabContent = ({ tabs }: HeaderTabContentType) => {
  return (
    <TabContent activeTab={tabs} id="pills-tabContent">
      <AllTabPane />
      <UpdateTab />
      <AlertTabPane />
    </TabContent>
  );
};
