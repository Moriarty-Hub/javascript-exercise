// TODO 15: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  basic_introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }

  introduce() {
    return this.basic_introduce();
  }
}
