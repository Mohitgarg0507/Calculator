class calculation {
    //var previousnumber;
    //var currentnumber;
    constructor(previousnumber, currentnumber,operand) {
      this.previousnumber = previousnumber;
      this.currentnumber = currentnumber;
      this.operand = operand;
    }
    update_number(append_number){
        if(this.operand=="n"){
            if(this.previousnumber === "0"){
                this.previousnumber = append_number;
            }else{
                this.previousnumber = this.previousnumber + append_number;
            }
        }else{
            if(this.currentnumber=== "0"){
                this.currentnumber=append_number;
            }else{
                this.currentnumber = this.currentnumber + append_number;
            }
        }
        this.update_display();
    }
    update_display(){
        if(this.operand == "n"){
            document.querySelector(".output").innerText = this.previousnumber;
        }else{
            document.querySelector(".output").innerText = this.currentnumber;
        }
    }
    delete_last_char(){
        var temp = document.querySelector(".output").innerText;
        if(a==0){
    
        }else{
            temp = temp.slice(0,-1);
            if(temp.length==0){
                temp="0";
                document.querySelector(".output").innerText = 0;
            }else{
                document.querySelector(".output").innerText = temp;
            }
        }
        if(this.operand=="n"){
            this.previousnumber = temp;
        }else{
            this.currentnumber = temp;
        }
    }
    operation(calc_oper){
        if(this.operand == "n"){
            this.operand = calc_oper;
            this.update_display();
        }else{
            this.solution_calc();
            this.operand = calc_oper;
        }
    }
    clear_all(){
        this.operand = "n";
        this.currentnumber = "0";
        this.previousnumber = "0";
        this.update_display();
    }
    append_dot(){
        if(this.operand == "n"){
            if(this.previousnumber.includes(".")){

            }else{
                this.previousnumber = this.previousnumber + ".";
            }
        }else{
            if(this.currentnumber.includes(".")){

            }else{
                this.currentnumber = this.currentnumber + ".";
            }
        }
        this.update_display();
    }
    solution_calc(){
        if(this.operand == "n"){
            this.update_display();
        }else{
            if(this.operand == "+"){
                var x = parseFloat(this.previousnumber);
                var y = parseFloat(this.currentnumber);
                var ans = x + y;
                this.previousnumber = ans.toString();
                this.currentnumber = "0";
                this.operand = "n";
                this.update_display();
            }
            if(this.operand == "-"){
                var x = parseFloat(this.previousnumber);
                var y = parseFloat(this.currentnumber);
                var ans = x - y;
                this.previousnumber = ans.toString();
                this.currentnumber = "0";
                this.operand = "n";
                this.update_display();
            }
            if(this.operand == "*"){
                var x = parseFloat(this.previousnumber);
                var y = parseFloat(this.currentnumber);
                var ans = x * y;
                this.previousnumber = ans.toString();
                this.currentnumber = "0";
                this.operand = "n";
                this.update_display();
            }
            if(this.operand == "÷"){
                var x = parseFloat(this.previousnumber);
                var y = parseFloat(this.currentnumber);
                var ans = x / y;
                this.previousnumber = ans.toString();
                this.currentnumber = "0";
                this.operand = "n";
                this.update_display();
            }
        }
    }
    
};
const a = new calculation("0","0","n");
const numbers_calc = document.querySelectorAll(".numbers");
const operations_calc = document.querySelectorAll(".operations");
const delete_calc = document.querySelector(".delete");
const equal_calc = document.querySelector(".equal");
const all_clear_calc = document.querySelector(".all_clear");
const dot_calc = document.querySelector(".dot");

numbers_calc.forEach(button => {
    button.addEventListener('click', () => {
      a.update_number(button.innerText);
      console.log(button.innerText);
    });
});
operations_calc.forEach(button => {
    button.addEventListener('click', () => {
      a.operation(button.innerText);
      console.log(button.innerText);
    });
});
delete_calc.addEventListener('click',() =>{
    a.delete_last_char();
    console.log(delete_calc.innerText);
});
equal_calc.addEventListener('click',() =>{
    console.log(equal_calc.innerText);
    a.solution_calc();
});
all_clear_calc.addEventListener('click',() =>{
    console.log(all_clear_calc.innerText);
    a.clear_all();
});
dot_calc.addEventListener('click',() =>{
    console.log(dot_calc.innerText);
    a.append_dot();
});
