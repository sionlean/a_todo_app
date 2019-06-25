import { combineReducers } from "redux";
import { CreateDefaultTime, CreateListItem } from "./CreateListItem";
import {
  CATEGORY_ALL,
  VIEW,
  THEME,
  CATEGORY_INDEX,
  PRIORITY_INDEX
} from "./Constants";
import {
  ACTION_FILTER_UPDATE,
  ACTION_ITEM_ADD,
  ACTION_ITEM_DELETE,
  ACTION_ITEM_RESET,
  ACTION_ITEM_TOGGLE,
  ACTION_VIEW_TOGGLE,
  ACTION_THEME_TOGGLE,
  ACTION_ITEM_EDIT,
  ACTION_COMPLETED_DELETE,
  ACTION_SET_TIMER_HOUR,
  ACTION_SET_TIMER_MIN,
  ACTION_SET_TIMER_TEXT,
  ACTION_SET_TIMER,
  ACTION_UPDATE_TITLE,
  ACTION_UPDATE_CATEGORY_INDEX,
  ACTION_UPDATE_PRIORITY_INDEX,
  ACTION_UPDATE_USER_INPUT_HIDDEN_STATE
} from "./actions";

const DEFAULT_ITEM = new CreateListItem(
  "hi",
  CATEGORY_INDEX.FAMILY,
  PRIORITY_INDEX.LOW
);

const items = (state = [DEFAULT_ITEM], action) => {
  switch (action.type) {
    case ACTION_ITEM_ADD:
      const newItem = new CreateListItem(
        action.title,
        action.categoryIndex,
        action.priorityIndex
      );
      const newItemList = [...state, newItem];
      return newItemList;

    case ACTION_ITEM_DELETE:
      const updatedList = state.filter(item => item.id !== action.id);
      return updatedList;
    case ACTION_ITEM_RESET:
      return [];
    case ACTION_ITEM_TOGGLE:
      return state.map(item => ({
        ...item,
        completed: item.id === action.id ? !item.completed : item.completed
      }));
    case ACTION_ITEM_EDIT:
      const newItems = [...state];
      for (let i = 0; i < state.length; i++) {
        if (newItems[i].id === action.id) {
          newItems[i].title = action.newTitle;
        }
      }
      return newItems;
    case ACTION_COMPLETED_DELETE:
      return state.filter(item => item.completed !== true);
    default:
      return state;
  }
};

const filterCategory = (state = CATEGORY_ALL, action) => {
  switch (action.type) {
    case ACTION_FILTER_UPDATE:
      return action.value;
    default:
      return state;
  }
};

const updateView = (state = VIEW.LIST, action) => {
  switch (action.type) {
    case ACTION_VIEW_TOGGLE:
      let newView = state === VIEW.LIST ? VIEW.BLOCK : VIEW.LIST;
      return newView;
    default:
      return state;
  }
};

const updateTheme = (state = THEME.LIGHT, action) => {
  switch (action.type) {
    case ACTION_THEME_TOGGLE:
      return state === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    default:
      return state;
  }
};

const DEFAULT_TIME = new CreateDefaultTime("", "", "");

const setTimer = (state = DEFAULT_TIME, action) => {
  switch (action.type) {
    case ACTION_SET_TIMER_HOUR:
      return {
        ...state,
        hour: action.hour
      };
    case ACTION_SET_TIMER_MIN:
      return {
        ...state,
        min: action.min
      };
    case ACTION_SET_TIMER_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ACTION_SET_TIMER:
      const time = state.min * 3000 + state.hour * 3600000;
      setTimeout(() => {
        alert(state.text);
      }, time);
      return DEFAULT_TIME;
    //If you use "state", it will not rerender as it is pointing to the same state (Even if inner value has change)
    //By using DEFAULT_TIME, state would have changed to something else when you typed in, hence causing it to be able to rerender when DEFAULT_STATE is used
    default:
      return state;
  }
};

const updateTitle = (state = "", action) => {
  switch (action.type) {
    case ACTION_UPDATE_TITLE:
      return action.title;
    default:
      return state;
  }
};

const updateCategoryIndex = (state = "3", action) => {
  switch (action.type) {
    case ACTION_UPDATE_CATEGORY_INDEX:
      return action.categoryIndex;
    default:
      return state;
  }
};

const updatePriorityIndex = (state = "0", action) => {
  switch (action.type) {
    case ACTION_UPDATE_PRIORITY_INDEX:
      return action.priorityIndex;
    default:
      return state;
  }
};

const updateUserInputHiddenState = (state = "false", action) => {
  switch (action.type) {
    case ACTION_UPDATE_USER_INPUT_HIDDEN_STATE:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filterCategory,
  updateView,
  updateTheme,
  setTimer,
  updateTitle,
  updateCategoryIndex,
  updatePriorityIndex,
  updateUserInputHiddenState
}); //This will export an object to the store via index.js

// const store = createStore(reducers);
// Essentially, Store = obeject created by reducers (STATE);
