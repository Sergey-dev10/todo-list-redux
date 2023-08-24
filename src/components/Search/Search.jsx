import { FormWrapper, InputWrapper } from "./Search.styles.js";
import { useDispatch } from "react-redux";
import { searchTasks } from "../../actions/searchActions.js";
export const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(searchTasks(e.target.value));
  };

  return (
    <FormWrapper>
      <InputWrapper type="text" placeholder="Search" onChange={handleSearch} />
    </FormWrapper>
  );
};
