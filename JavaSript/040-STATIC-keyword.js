// static = keyword that defines properties or methods that belongs to a class itself rather than the objects created from that class (class owns, anything static, not the objects)

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * /*Math.pow(radius, 2)*/ radius * radius;
  }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(2));
console.log(MathUtil.getCircumference(2));
console.log(MathUtil.getArea(2));

//ex2
class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;

    User.userCount++;
  }

  static getUserCount() {
    console.log(`Users ${this.userCount}`);
  }
  sayHello() {
    console.log(`Hello my username is ${this.username}`);
  }
}

const user1 = new User("John");
console.log(user1.username);

const user2 = new User("Cena");
console.log(user2.username);

const user3 = new User("Rajesh Dai");
console.log(user3.username);

console.log(User.userCount);
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
