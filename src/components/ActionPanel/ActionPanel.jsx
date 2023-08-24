import { Info } from "../Info";
import { Filter } from "../Filter";
import { ToggleAddSearch } from "../ToggleAddSearch";
import { ActionPanelWrapper } from "./ActionPanel.styles.js";
export const ActionPanel = ({ onHandleToggleAction }) => {
  return (
    <ActionPanelWrapper>
      <ToggleAddSearch onHandleToggleAction={onHandleToggleAction} />
      <Info />
      <Filter />
    </ActionPanelWrapper>
  );
};
