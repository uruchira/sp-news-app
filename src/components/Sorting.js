import useGlobalState from "../hooks/useGlobalState";
import { SORTING_OPTIONS } from "../constants";

const Sorting = () => {
  const { sortingOption, setSortingOption } = useGlobalState();

  function onOptionChange(event) {
    setSortingOption(event.target.value);
  }

  return (
    <>
      <select value={sortingOption} onChange={onOptionChange}>
        {SORTING_OPTIONS.map(({ id, value, label }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Sorting;
