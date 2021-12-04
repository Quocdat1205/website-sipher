import { createStore, action, Action, createTypedHooks } from "easy-peasy"

export interface StoreModel {
    sidebarOn: boolean
    setSidebarOn: Action<StoreModel, boolean>
    location: {
        code: string
        name: string
    }
    setLocation: Action<StoreModel, any>
}

const store = createStore<StoreModel>({
    sidebarOn: false,
    setSidebarOn: action((state, payload) => {
        state.sidebarOn = payload
    }),

    location: { code: "", name: "" },
    setLocation: action((state, payload) => {
        state.location = payload
    }),
})

export default store

const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
