export class CourseCreatedDomainEvent {
  construct(id, name, duration) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
  eventName() {
    return "course.created";
  }
}
