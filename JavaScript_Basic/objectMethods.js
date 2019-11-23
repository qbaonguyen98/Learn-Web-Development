// A method is actually a no-name function, which is assigned to a key of objects

var myDog = {
    name: 'Milu',
    type: 'Corgi',
    age: 1,
    bark: function(){
        console.log('Gau Gau, my name is ', this.name);     // this is the object that contains this method
    },
    grow: function(years){
        this.age += years;
        return this.age;
    }
};

console.log(myDog);
console.log(myDog.bark, '\r\n');
myDog.bark();

console.log('Now, Milu \'s age is ', myDog.age);
console.log('After 2 years, its age is ', myDog.grow(2), '\r\n');

// another example
var rectangle = {
    width: 9,
    height: 11,
    getWidth: function(){
      return this.width;
    },
    getHeight: function(){
      return this.height;
    },
    getArea: function(width, height){
      return width*height;
    }
};
  
console.log('width = ', rectangle.getWidth());
console.log('height = ', rectangle.getHeight());
console.log('S = ', rectangle.getArea(rectangle.getWidth(), rectangle.getHeight()));