import { FaSearch, FaPlus } from "react-icons/fa";
import { ButtonWrapper, Button } from "./ToggleAddSearch.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleButtons } from "../../actions/toggleButtonsActions.js";
import { searchTasks } from "../../actions/searchActions.js";
export const ToggleAddSearch = () => {
  const dispatch = useDispatch();
  const action = useSelector((state) => state.toggle.action);
  const handleToggleAction = (e) => {
    const action = e.currentTarget.value;
    if (action === "add") {
      dispatch(searchTasks(""));
    }
    dispatch(toggleButtons(action));
  };

  return (
    <ButtonWrapper>
      <Button
        $isActive={action === "add"}
        value="add"
        onClick={handleToggleAction}
      >
        <FaPlus />
      </Button>
      <Button
        $isActive={action === "search"}
        value="search"
        onClick={handleToggleAction}
      >
        <FaSearch />
      </Button>
    </ButtonWrapper>
  );
};
