import { createStore, action, Action, createTypedHooks } from "easy-peasy"

export interface StoreModel {
    sidebarOn: boolean
    setSidebarOn: Action<StoreModel, boolean>
    initialLoading: boolean
    setInitialLoading: Action<StoreModel, boolean>
}

const store = createStore<StoreModel>({
    sidebarOn: false,
    setSidebarOn: action((state, payload) => {
        state.sidebarOn = payload
    }),

    initialLoading: true,
    setInitialLoading: action((state, payload) => {
        state.initialLoading = payload
    }),
})

export default store

const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
