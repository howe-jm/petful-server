const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    let cat = pets.cats.show();
    let dog = pets.dogs.show();
    return { dog, cat };
  },

  getAll() {
    let cats = pets.cats.all();
    let dogs = pets.dogs.all();
    return { dogs, cats };
  },

  requeue(type, pet) {
    type === 'dog' ? pets.dogs.enqueue(pet) : pets.cats.enqueue(pet);
    return;
  },

  dequeue(type) {
    if (type === 'cat') {
      return pets.cats.dequeue();
    }
    if (type === 'dog') {
      return pets.dogs.dequeue();
    }
  },
};
