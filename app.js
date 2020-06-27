const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  set appetizers (appetizers) {
    this._courses.appetizers = appetizers;
  },
  get mains () {
    return this._courses.mains;
  },
  set mains (mains) {
    this._courses.mains = mains;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set desserts (desserts) {
    this._courses.desserts = desserts
  },
get courses () {
  return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
  }
},

addDishToCourse(courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice
  };

  return this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},

generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');

  const totalPrice = appetizer.price + main.price + dessert.price;

  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice} `;

}
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Grilled Salmon Lemon Kebobs', 5.80);
menu.addDishToCourse('appetizers', 'Hors d\'oeuvre', 10.25);


menu.addDishToCourse('mains', 'Pasta', 10.55);
menu.addDishToCourse('mains', 'Lasagne', 9.50);
menu.addDishToCourse('mains', 'Rogan Josh', 8.50);

menu.addDishToCourse('desserts', 'Red Velvet', 15.20);
menu.addDishToCourse('desserts', 'Carrot Cake', 7.50);
menu.addDishToCourse('desserts', 'Apple Pie', 5.50);

let meal = menu.generateRandomMeal();

console.log(meal);
