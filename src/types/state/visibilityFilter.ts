import { VisibilityFilters } from "../constants/visibilityFilterType";

export type VisibilityFilterTypes =
  typeof VisibilityFilters[keyof typeof VisibilityFilters];
