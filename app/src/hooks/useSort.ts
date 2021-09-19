import { useContext } from "react";

import { SortContext } from "context";
import { useProvideSort } from "hooks";

export const useSort = (): ReturnType<typeof useProvideSort> => useContext(SortContext);
