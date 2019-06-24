import uuid from "uuid";

export class CreateListItem {
  constructor(title, categoryIndex, priorityIndex) {
    this.id = uuid.v4();
    this.title = title;
    this.completed = false;
    this.categoryIndex = categoryIndex;
    this.priorityIndex = priorityIndex;
  }
}

export class CreateDefaultTime {
  constructor(hour, min, text) {
    this.hour = hour;
    this.min = min;
    this.text = text;
  }
}
