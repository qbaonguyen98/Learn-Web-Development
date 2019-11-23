/*  tất cả các function (bao gồm cả normal function và constructor function) đều
    đều thực chất là một object => cũng có property
    - prototype là 1 property luôn có sẵn của 1 function
    - prototype cũng là 1 object, trong nó có 1 property là constructor
    - constructor này là 1 object và cũng chính là constructor function ban đầu
                    (kiểu như nó là 1 vòng khép kín)
*/
// example 1:
function Mouse(color, weight){
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
    // ẩn trong function này sẽ là 1 prototype
}
console.log(Mouse.prototype);                       // constructor
console.log(Mouse.prototype.constructor);           // function Mouse
console.log(Mouse.prototype.constructor === Mouse); // true

// với những object được tạo ra bằng từ khóa new + constructor function
// => chúng cùng chia sẻ property là prototype

Mouse.prototype.sleep = function(){     // add property into prototype
    console.log('Sleeping ...');        // ALSO MEAN: add method to constructor function
};
console.log(Mouse.prototype);           // constructor + sleep

var jerry = new Mouse('orange', 20);
var mickey = new Mouse('black', 30);
// both jerry and and mickey have sleep() method

jerry.sleep();          // can use jerry.prototype.sleep();
mickey.sleep();

// WHY USE IT ? => Because it helps to save memory

// if we define methods normally in constuctor function,
// whenever creating a new object, it creates methods in different blocks of memory


// example 2: Tiger eats rabbits

// constuctor function for Tiger
function Tiger(name){
    this.name = name;
    this.stomach = [];
}
Tiger.prototype.eat = function (rabbit){
    this.stomach.push(rabbit);
    rabbit.die();
}; 

// constructor function for Rabbit
function Rabbit(color){
    this.color = color;
    this.dead = false;  
};
Rabbit.prototype.die = function(){
    this.dead = true;
};

// let's feed the Tiger
var rabbit1 = new Rabbit('white');
var rabbit2 = new Rabbit('brown');
console.log(rabbit1, rabbit2);          // the rabbits are still alive (dead = false)

var girlFriend = new Tiger('girlFriend');   
console.log(girlFriend);                // this tiger is hungry
                                        // her stomach has nothing  (Array(0))
// time to eat
girlFriend.eat(rabbit1);
girlFriend.eat(rabbit2);

// girlFriend.stomach.forEach(function(food){
//     console.log(food);
// });                                     // there are 2 dead rabbits in her stomach now
console.log(girlFriend);



