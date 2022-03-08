import { Course } from "../../Domain/Course";

export class CourseCreator {
  constructor(courseRepository, eventBus) {
    this.courseRepository = courseRepository;
    this.eventBus = eventBus;
  }
  invoke(courseId, courseName, courseDuration) {
    const course = new Course().create(courseId, courseName, courseDuration);
    this.courseRepository.save(course);

    // AQUI podríamos registrar los eventos de dominio en prometheus con un middleware
    this.eventBus.publish(course.domainEvents);
  }
}
