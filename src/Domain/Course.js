import { CourseCreatedDomainEvent } from "./CourseCreatedDomainEvent";

export class Course {
  constructor(id, name, duration) {
    this.domainEvents = [];
  }
  create() {
    const course = new Course(id, name, duration);
    course.record(new CourseCreatedDomainEvent(id, name, duration));
    return course;
  }

  record(domainEvent) {
    this.domainEvents.push(domainEvent);
  }
}
