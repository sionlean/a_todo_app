// CATEGORY
export const CATEGORY_INDEX = {
  FAMILY: "0",
  FRIENDS: "1",
  WORK: "2",
  OTHERS: "3"
};

export const CATEGORY_ALL = "All";

export const CATEGORIES = {
  [CATEGORY_INDEX.FAMILY]: {
    name: "Family",
    color: "#4D6D9A",
    icon: "fa fa-home"
  },
  [CATEGORY_INDEX.FRIENDS]: {
    name: "Friends",
    color: "#86B3D1",
    icon: "fa fa-users"
  },
  [CATEGORY_INDEX.WORK]: {
    name: "Work",
    color: "#99CED3",
    icon: "fa fa-briefcase"
  },
  [CATEGORY_INDEX.OTHERS]: {
    name: "Others",
    color: "#EDB5BF",
    icon: "fa fa-archive"
  }
};

// PRIORITY
export const PRIORITY_INDEX = {
  LOW: "0",
  MID: "1",
  HIGH: "2"
};

export const PRIORITY_LEVEL = {
  [PRIORITY_INDEX.LOW]: { name: "low Priority", color: "#ffffff" },
  [PRIORITY_INDEX.MID]: { name: "Mid Priority", color: "#fdfd96" },
  [PRIORITY_INDEX.HIGH]: { name: "High Priority", color: "#ff6961" }
};

// VIEW
export const VIEW = {
  BLOCK: "block",
  LIST: "list"
};

// THEME
export const THEME = {
  LIGHT: "light",
  DARK: "dark"
};
