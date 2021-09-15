import { createStore, action, Action, createTypedHooks } from "easy-peasy";

interface StoreModel {
	total: number;
	setTotal: Action<StoreModel, number>;
}

const store = createStore<StoreModel>({
	total: 0,
	setTotal: action((state, payload) => {
		state.total = payload;
	}),
});
const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
export default store;
