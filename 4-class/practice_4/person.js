// TODO 15: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name1 = name;
    this.age1 = age;
  }

  get name() {
    return this.name1;
  }

  get age() {
    return this.age1;
  }

  basic_introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }

  introduce() {
    return this.basic_introduce();
  }
}
