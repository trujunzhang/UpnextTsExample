// import {RandToken} from "@src/lib/vendors/node-rand-token";
import {greeter, Student} from "@src/lib/Student";

export default () => {
    // const token = new RandToken().generate(42)
    let user = new Student("Jane", "M.", "User");
    let token = greeter(user);
    return <div>Welcome to next.js using typescript!, token is {token}</div>;
};
