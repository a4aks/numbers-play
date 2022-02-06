// function GrandParents(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//  }

//  GrandParents.prototype.greet = function(){
//      console.log(`Hey my name is ${this.name} and my age is ${this.age}`)
//  }

//  function Parents(name, age, gender){
//      GrandParents.call(this, name, age, gender)
//  }

//  Parents.prototype = Object.create(GrandParents.prototype)
//  var father = new Parents("Ashok",55, "Male")
//  var mother = new Parents("Neelam", 50, "Female");
//  father.greet();
//  mother.greet();
//  console.log(father, mother)

//  console.log(father.__proto__ === Parents.prototype)
//  console.log(Parents.__proto__ === GrandParents.prototype)

class GrandParents {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet(){
        console.log(`Hey my name is ${this.name} and my age is ${this.age}`)
    }
}

class parents extends GrandParents{
    constructor(name,age,gender,profession){
        super(name,age,gender);
        this.profession = profession;
    }
}
class me extends parents{
    constructor(name,age,gender,profession){
        super(name,age,gender,profession);
    }
}

let person1 = new me("Ashish","30","Male","Coder");
person1.greet();