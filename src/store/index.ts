import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

export interface StoreState {
  isSidebarVisible: boolean;
}

// Actions
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export interface ToggleSidebar {
  type: typeof TOGGLE_SIDEBAR;
}

export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });

// Reducer
export const reducer = (
  state: StoreState,
  action: ToggleSidebar,
): StoreState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        isSidebarVisible: !state.isSidebarVisible,
      });
    default:
      return state;
  }
};

// Store
export const initialState: StoreState = { isSidebarVisible: false };
export const store = createStore<StoreState, any, any, any>(
  reducer,
  initialState,
  devToolsEnhancer({}),
);
