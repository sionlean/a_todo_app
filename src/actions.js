export const ACTION_FILTER_UPDATE = "FILTER_CHANGE";
export const ACTION_ITEM_ADD = "ITEM_ADD";
export const ACTION_ITEM_RESET = "ITEM_RESET";
export const ACTION_ITEM_DELETE = "ITEM_DELETE";
export const ACTION_ITEM_TOGGLE = "ITEM_TOGGLE";
export const ACTION_VIEW_TOGGLE = "VIEW_TOGGLE";
export const ACTION_THEME_TOGGLE = "THEME_TOGGLE";
export const ACTION_ITEM_EDIT = "ITEM_EDIT";
export const ACTION_COMPLETED_DELETE = "COMPLETED_DELETE";
export const ACTION_SET_TIMER = "SET_TIMER";
export const ACTION_SET_TIMER_HOUR = "SET_TIMER_HOUR";
export const ACTION_SET_TIMER_MIN = "SET_TIMER_MIN";
export const ACTION_SET_TIMER_TEXT = "SET_TIMER_TEXT";
export const ACTION_UPDATE_TITLE = "UPDATE_TITLE";
export const ACTION_UPDATE_CATEGORY_INDEX = "UPDATE_CATEGORY_INDEX";
export const ACTION_UPDATE_PRIORITY_INDEX = "UPDATE_PRIORITY_INDEX";
export const ACTION_UPDATE_SIDENAV_HIDDEN = "UPDATE_SIDENAV_HIDDEN";
export const ACTION_UPDATE_USER_INPUT_HIDDEN_STATE =
  "UPDATE_USER_INPUT_HIDDEN_STATE";

export const filterUpdate = categoryIndex => ({
  type: ACTION_FILTER_UPDATE,
  value: categoryIndex
});

export const addItem = (title, categoryIndex, priorityIndex) => ({
  type: ACTION_ITEM_ADD,
  title,
  categoryIndex,
  priorityIndex
});

export const deleteItem = id => ({
  type: ACTION_ITEM_DELETE,
  id
});

export const resetItem = () => ({
  type: ACTION_ITEM_RESET
});

export const toggleItem = id => ({
  type: ACTION_ITEM_TOGGLE,
  id
});

export const updateView = () => ({
  type: ACTION_VIEW_TOGGLE
});

export const updateTheme = () => ({
  type: ACTION_THEME_TOGGLE
});

export const editItem = (id, newTitle) => ({
  type: ACTION_ITEM_EDIT,
  id,
  newTitle
});

export const deleteCompleted = () => ({
  type: ACTION_COMPLETED_DELETE
});

export const setTimerHour = hour => ({
  type: ACTION_SET_TIMER_HOUR,
  hour
});
export const setTimerMin = min => ({
  type: ACTION_SET_TIMER_MIN,
  min
});
export const setTimerText = text => ({
  type: ACTION_SET_TIMER_TEXT,
  text
});

export const setTimer = () => ({
  type: ACTION_SET_TIMER
});

export const updateCategoryIndex = categoryIndex => ({
  type: ACTION_UPDATE_CATEGORY_INDEX,
  categoryIndex
});

export const updatePriorityIndex = priorityIndex => ({
  type: ACTION_UPDATE_PRIORITY_INDEX,
  priorityIndex
});

export const updateTitle = title => ({
  type: ACTION_UPDATE_TITLE,
  title
});

export const updateUserInputHiddenState = () => ({
  type: ACTION_UPDATE_USER_INPUT_HIDDEN_STATE
});

export const updateSidenavHidden = () => ({
  type: ACTION_UPDATE_SIDENAV_HIDDEN
});

export const actions = {
  // This is used in conjunction with bindActionCreator
  filterUpdate,
  addItem,
  deleteItem,
  resetItem,
  toggleItem,
  updateView,
  updateTheme,
  editItem,
  deleteCompleted,
  setTimerHour,
  setTimerMin,
  setTimerText,
  setTimer,
  updateCategoryIndex,
  updatePriorityIndex,
  updateTitle,
  updateUserInputHiddenState,
  updateSidenavHidden
};
