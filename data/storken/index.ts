import { createStore } from "storken";

export const [Storken, { useStorken }] = createStore({
  initialValues: {
    account: "" as any,
    balance: "" as any,
    testStorken: "" as any,
  },
});

export default { Storken, useStorken };
