import uuid from "uuid";

class CreateListItem {
  constructor(title, categoryIndex, priorityIndex) {
    this.id = uuid.v4();
    this.title = title;
    this.completed = false;
    this.categoryIndex = categoryIndex;
    this.priorityIndex = priorityIndex;
  }
}

export default CreateListItem;
