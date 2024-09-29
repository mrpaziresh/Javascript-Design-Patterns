function createUser(name, age) {
    return {
        name,
        age
    };
};

const userOne = createUser("Alex", 24);
const userTwo = createUser("Joe", 37);

console.log({
    userOne,
    userTwo
})