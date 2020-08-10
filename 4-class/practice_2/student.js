// TODO 11: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass1 = klass;
  }

  get klass() {
    return this.klass1;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.klass}.`;
  }
}
