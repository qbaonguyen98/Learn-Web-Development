// callback is just a function as parameter

// example 1
var coffeeMachine = {
    makeCoffee: function(onFinish){             // for review:
        console.log('Making coffee...');        //  - coffeeMachine is an object
        onFinish();                             //  - makeCoffee is a method
    }                                           //  - onFinish is a callback
};

var buzzer = function() {
    console.log('Finished, beep beep !');
}

coffeeMachine.makeCoffee(buzzer);           // use buzzer as a callback