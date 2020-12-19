const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    const person = people.show();
    return person;
  },

  enqueue(person) {
    console.log(people.all());
    return people.enqueue(person);
  },

  dequeue() {
    return people.dequeue();
  },
};
