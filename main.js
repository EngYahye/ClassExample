class student{
    ID="C119004";
    Name="Yahye Ali Yusuf";
    Class="CA192";
    Mbile= 617455789;

    getData(){
        return `ID: ${this.ID}
Name: ${this.Name}
class: ${this.Class}
mobile: ${this.Mbile}`
                
    }
}

const std=new student();
console.log(std.getData())

const Rectangle=class{
    constructor(heigth,width){
        this.heigth=heigth
        this.width=width
    }

    Area(){
        return `Area is: ${this.heigth*this.width}`
    }
}

console.log(new Rectangle(4,3).Area())