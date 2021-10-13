import { createStore, action, Action, createTypedHooks } from "easy-peasy"

export interface StoreModel {
	sidebarOn: boolean
	setSidebarOn: Action<StoreModel, boolean>
	subscribeModal: boolean
	setSubscribeModal: Action<StoreModel, boolean>
	initialLoading: boolean
	setInitialLoading: Action<StoreModel, boolean>
	worldSipherPage: string
	setWorldSipherPage: Action<StoreModel, string>
}

const store = createStore<StoreModel>({
	sidebarOn: false,
	setSidebarOn: action((state, payload) => {
		state.sidebarOn = payload
	}),
	subscribeModal: false,
	setSubscribeModal: action((state, payload) => {
		state.subscribeModal = payload
	}),
	initialLoading: true,
	setInitialLoading: action((state, payload) => {
		state.initialLoading = payload
	}),
	worldSipherPage: "theworld",
	setWorldSipherPage: action((state, payload) => {
		state.worldSipherPage = payload
	}),
})

export default store

const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
