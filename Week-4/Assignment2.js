var Person = function() {

};
Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
}

// TODO: create the class Teacher and a method teach

var Teacher = function() {

};

Teacher.prototype.teach = function(subject){
    this.subject = subject
    console.log(this.name,"is now teaching",this.subject)
}
// console.log(Teacher.prototype)
Object.setPrototypeOf(Teacher.prototype,Person.prototype)

var him = new Teacher();
him.initialize('Payas',24)
him.teach("Inheritance");   //! Payas is now teaching Inheritance.