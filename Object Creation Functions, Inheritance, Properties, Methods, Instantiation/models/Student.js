var Person = function (name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  Person.prototype.sayHello = function(){
    alert("Hello, "+this.name+"!");
  };
};

var Student = function(studentId,credits){
  Person.call(this);

  Student.prototype = new Person('Daniel',22,'daniel@gamil.com');

  Student.prototype.constructor = Student;

  Student.prototype.showCredits = function(){
    alert("credits: " + credits);
  };

};
