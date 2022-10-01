import React from "react";
import cx from "classnames";
import { VisibilityFilters } from "../types/constants/visibilityFilterType";
import { setFilter } from "../reducers/visibilityFilterSlice";
import { AppState, AppDispatch } from "../store/index";
import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { useSelector, useDispatch } from "react-redux";
import styles from "./VisibilityFilter.module.css";

export const VisibilityFilter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const activeFilter: VisibilityFilterTypes = useSelector(
    (state: AppState) => state.ui.visibilityFilter
  );
  return (
    <>
      {(
        Object.keys(VisibilityFilters) as Array<keyof typeof VisibilityFilters>
      ).map((filterKey) => {
        const currentFilter = VisibilityFilters[filterKey];
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

export default VisibilityFilter;
