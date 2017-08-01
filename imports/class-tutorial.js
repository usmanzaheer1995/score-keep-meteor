class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi i am ${this.name}.`;
    }

    getPersonDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
};

class Employee extends Person {
    constructor(name, age, title) {
        super(name, age);
        this.title = title;
    }
    getGreeting() {
        if (this.title) {
            return `Hi i am ${this.name}. I work as a ${this.title}`;
        }
        else {
            return super.getGreeting();
        }
    }

    hasJob() {
        return !!this.title;    //boolean returned by using double exclamations(!!)
    }
}

class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'Assembly') {
        super(name, age);
        this.preferredLanguage = preferredLanguage;
    }
    getGreeting() {
        return `Hi! I am ${this.name}, I am a ${this.preferredLanguage} developer.`;
    }

}

let me = new Employee('Usman', 22, 'db admin');
console.log(me.getGreeting());

let person = new Employee('Usman');
console.log(person.getGreeting());

let programmer = new Programmer('Saqib', 23, 'Javascript');
console.log(programmer.getGreeting());

let programmer1 = new Programmer('Ahmad', 24);
console.log(programmer1.getGreeting());