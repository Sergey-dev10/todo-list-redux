import { Info } from "../Info";
import { Filter } from "../Filter";
import { ToggleAddSearch } from "../ToggleAddSearch";
import { ActionPanelWrapper } from "./ActionPanel.styles.js";
export const ActionPanel = () => {
  return (
    <ActionPanelWrapper>
      <ToggleAddSearch />
      <Info />
      <Filter />
    </ActionPanelWrapper>
  );
};
