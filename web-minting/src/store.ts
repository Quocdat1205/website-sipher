import { createStore, action, Action, createTypedHooks } from "easy-peasy";

export interface StoreModel {}

const store = createStore<StoreModel>({});

export default store;

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
