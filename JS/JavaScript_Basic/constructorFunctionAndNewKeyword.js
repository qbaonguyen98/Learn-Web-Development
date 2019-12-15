// Constructor Function là 1 cách để tạo object linh hoạt hơn, kết hợp với từ khóa new
// constructor function cũng có thể nhận tham số vào như các function bth

// example 1:
function Mouse(color, weight){              // constructor function, tên thường viết hoa chữ cái đầu
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
};

var mouse1 = new Mouse('white', 0.2);       // declare new object with dynamic properties
var mouse2 = new Mouse('black', 0.5);

console.log(mouse1, mouse2);

// example 2:   make the 2 following program return the same result
//  1
var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
};
var m1 = {name: 'mouse1'};
var m2 = {name: 'mouse2'};
var m3 = {name: 'mouse3'};

tom.eat(m1).eat(m2).eat(m3);        // this call method chaining, we can use it because the method return its object
console.log('Tom');
console.log(tom);

//  2 - constructor function
delete tom.stomach;             // delete property from obj
tom['stomach'] = [];            // add property into obj
function MouseToEat (name){
    this.name = name;
};

var mouse_1 = MouseToEat('mouse1');
var mouse_2 = MouseToEat('mouse2');
var mouse_3 = MouseToEat('mouse3');

tom.eat(mouse_1).eat(mouse_2).eat(mouse_3);
console.log('Tom');
console.log(tom);