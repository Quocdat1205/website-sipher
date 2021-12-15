import { createStore, action, Action, createTypedHooks } from "easy-peasy"

export interface StoreModel {
    sidebarOn: boolean
    setSidebarOn: Action<StoreModel, boolean>
}

const store = createStore<StoreModel>({
    sidebarOn: false,
    setSidebarOn: action((state, payload) => {
        state.sidebarOn = payload
    }),
})

export default store

const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreState = typedHooks.useStoreState
