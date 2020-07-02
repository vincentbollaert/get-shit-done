import { configureStore } from '@reduxjs/toolkit'

import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(reducers))
}

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export default store

