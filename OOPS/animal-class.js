class Animal {
    constructor(name, color, leg, food, place) {
        this.name = name;
        this.color = color;
        this.leg = leg;
        this.food = food;
        this.place = place;
    }
    eat() {
        console.log(`${this.name} eat ${this.food}`);
    }
    live() {
        console.log(`${this.name} live in the ${this.place}`)
    }
}
let snake = new Animal("cobra", "black", "no leg", "small-species", "land");
let cow = new Animal("cow", " white - black", 4, "Grass", "shelter")
console.log(snake);
snake.eat();
snake.live();

console.log(cow)
cow.eat();
cow.live();