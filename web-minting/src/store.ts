import { createStore, action, Action, createTypedHooks } from "easy-peasy";

interface StoreModel {}

const store = createStore<StoreModel>({});
const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
export default store;
