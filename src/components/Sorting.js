import useGlobalState from "../hooks/useGlobalState";
import { SORTING_OPTIONS } from "../constants";

import { BaseSelect } from "../styles/elements";

const Sorting = () => {
  const { sortingOption, setSortingOption } = useGlobalState();

  function onOptionChange(event) {
    setSortingOption(event.target.value);
  }

  return (
    <>
      <BaseSelect value={sortingOption} onChange={onOptionChange}>
        {SORTING_OPTIONS.map(({ id, value, label }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </BaseSelect>
    </>
  );
};

export default Sorting;
