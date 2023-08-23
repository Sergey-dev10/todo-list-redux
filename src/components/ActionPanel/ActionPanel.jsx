import { Info } from "../Info";
import { Filter } from "../Filter";
import { ToggleAddSearch } from "../ToggleAddSearch";
import { ActionPanelWrapper } from "./ActionPanel.styles.js";
export const ActionPanel = ({
  tasks,
  onHandleFilter,
  onHandleToggleAction,
}) => {
  return (
    <ActionPanelWrapper>
      <ToggleAddSearch onHandleToggleAction={onHandleToggleAction} />
      <Info tasks={tasks} />
      <Filter onHandleFilter={onHandleFilter} />
    </ActionPanelWrapper>
  );
};