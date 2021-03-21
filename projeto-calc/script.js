
const values = []

const Calc = {

    Display1: document.getElementById("display1"),
    Display2: document.getElementById("display2"),
    operator: document.getElementById("oper"),
    DisplayRes: document.getElementById("dispRes"),
    res:0,

    num1() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 1
        } else {
            this.Display2.value += 1
        }
        
    },
    num2() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 2
        } else {
            this.Display2.value += 2
        }
    },
    num3() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 3
        } else {
            this.Display2.value += 3
        }
    },
    num4() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 4
        } else {
            this.Display2.value += 4
        }
        
    },
    num5() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 5
        } else {
            this.Display2.value += 5
        }
    },
    num6() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 6
        } else {
            this.Display2.value += 6
        }
    },
    num7() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 7
        } else {
            this.Display2.value += 7
        }
        
    },
    num8() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 8
        } else {
            this.Display2.value += 8
        }
    },
    num9() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 9
        } else {
            this.Display2.value += 9
        }
    },
    num0() {
        if(this.operator.innerHTML == "") {
            this.Display1.value += 0
        } else {
            this.Display2.value += 0
        }
    },
    soma(){
        this.operator.innerHTML= "+"
        values.unshift(Number(this.Display1.value))
    },
    subtrai(){
        this.operator.innerHTML= "-"
        values.unshift(Number(this.Display1.value))
    },
    multi(){
        this.operator.innerHTML= "x"
        values.unshift(Number(this.Display1.value))
    },

    mostraRes() {
        values.unshift(Number(this.Display2.value))
        if (this.operator.innerHTML == "+") {
            this.res =  Number(values[0] + values[1])
            this.DisplayRes.value = this.res
        } else if (this.operator.innerHTML == "-") {
            this.res =  Number(values[1] - values[0])
            this.DisplayRes.value = this.res
        } else if (this.operator.innerHTML == "x") {
            this.res =  Number(values[0] * values[1])
            this.DisplayRes.value = this.res
        }
    },

    limpar() {
        this.Display1.value = ""
        this.Display2.value = ""
        this.res = 0
        this.DisplayRes.value = ""
        this.operator.innerHTML = ""
    }
        
}
   

