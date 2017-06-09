var Person = function (name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  Person.prototype.sayHello = function(){
    alert("Hello, "+this.name+"!");
  };
};
