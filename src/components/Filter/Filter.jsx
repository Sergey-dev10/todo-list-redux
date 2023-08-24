import { Button, FilterWrapper } from "./Filter.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { filterTasks } from "../../actions/filterActions.js";
export const Filter = () => {
  const dispatch = useDispatch();
  const filterType = useSelector((state) => state.filter.filterType);
  const handleFilter = (e) => {
    dispatch(filterTasks(e.target.textContent));
  };

  return (
    <FilterWrapper>
      <Button $isSelected={filterType === "All"} onClick={handleFilter}>
        All
      </Button>
      <Button $isSelected={filterType === "Active"} onClick={handleFilter}>
        Active
      </Button>
      <Button $isSelected={filterType === "Completed"} onClick={handleFilter}>
        Completed
      </Button>
    </FilterWrapper>
  );
};
