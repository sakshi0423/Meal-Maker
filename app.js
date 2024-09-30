const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
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
        let dishes = this._courses[courseName];
        let index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'Mozzarella Sticks', 4.99);
menu.addDishToCourse('appetizers', 'Potstickers', 6.99);
menu.addDishToCourse('appetizers', 'Loaded Fries', 5.99);
menu.addDishToCourse('mains', 'Burger', 12.99);
menu.addDishToCourse('mains', 'Spaghetti', 14.99);
menu.addDishToCourse('mains', 'Wrap', 8.99);
menu.addDishToCourse('desserts', 'Ice Cream', 4.99);
menu.addDishToCourse('desserts', 'Brownie', 6.99);
menu.addDishToCourse('desserts', 'Chocolate Lava Cake', 9.99);

const meal = menu.generateRandomMeal();
console.log(meal);