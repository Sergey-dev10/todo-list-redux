import { FaSearch, FaPlus } from "react-icons/fa";
import { ButtonWrapper, Button } from "./ToggleAddSearch.styles.js";
import { useState } from "react";
export const ToggleAddSearch = ({ onHandleToggleAction }) => {
  const [isActive, setIsActive] = useState("add");
  const handleToggleAction = (e) => {
    setIsActive(e.currentTarget.value);
    onHandleToggleAction(e.currentTarget.value);
  };

  return (
    <ButtonWrapper>
      <Button
        $isActive={isActive === "add"}
        value="add"
        onClick={handleToggleAction}
      >
        <FaPlus />
      </Button>
      <Button
        $isActive={isActive === "search"}
        value="search"
        onClick={handleToggleAction}
      >
        <FaSearch />
      </Button>
    </ButtonWrapper>
  );
};