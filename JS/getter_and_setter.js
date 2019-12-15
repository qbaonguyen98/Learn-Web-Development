// GETTER -------------------------------------------
var person1 = {
	firstName: "John",
	lastName : "Doe",
	language : "english",
	get lang() {
		return this.language.toUpperCase();
	}
};

console.log(person1.lang);

// SETTER -------------------------------------------
var person2 = {
	firstName: "John",
	lastName : "Doe",
	language : "",
	set lang(lang) {
		this.language = lang.toUpperCase();
	}
};

person2.lang = "vietnamese";

console.log(person2.language);