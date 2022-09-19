import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";
import { setFilter } from "../redux/visibilityFilterSlice";
import { RootState, VisibilityFilterTypes } from "../redux/types";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import styles from "./VisibilityFilters.module.css";

const VisibilityFilters: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const activeFilter: VisibilityFilterTypes = useSelector(
    (state: RootState) => state.visibilityFilter
  );
  return (
    <>
      {(
        Object.keys(VISIBILITY_FILTERS) as Array<
          keyof typeof VISIBILITY_FILTERS
        >
      ).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              styles.filter,
              currentFilter === activeFilter && styles.filterActive
            )}
            onClick={() => dispatch(setFilter(currentFilter))}
          >
            {currentFilter}
          </span>
        );
      })}
    </>
  );
};

export default VisibilityFilters;
