import * as Resources from '@assets/locales/i18nextLocalesLoader'

export class Student {
    static firstName: string = 'Your First Name: ';
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

export function greeter(person: Person) {
    const title = Resources.en.common.application.title
    return title + ", Hello, " + Student.firstName + person.firstName + " " + person.lastName;
}
