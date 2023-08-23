import { Button, FilterWrapper } from "./Filter.styles.js";
import { useState } from "react";
export const Filter = ({ onHandleFilter }) => {
  const [isSelected, setIsSelected] = useState("All");
  const handleFilter = (e) => {
    setIsSelected(e.target.textContent);
    onHandleFilter(e.target.textContent);
  };

  return (
    <FilterWrapper>
      <Button $isSelected={isSelected === "All"} onClick={handleFilter}>
        All
      </Button>
      <Button $isSelected={isSelected === "Active"} onClick={handleFilter}>
        Active
      </Button>
      <Button $isSelected={isSelected === "Completed"} onClick={handleFilter}>
        Completed
      </Button>
    </FilterWrapper>
  );
};
