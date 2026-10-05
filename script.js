//comandos nativos importantes usados para um código mais limpo
//eval()
//ele pega o texto e trata como se fosse um código
const display=document.getElementById("display")
const results=document.getElementById("results")
let last_input=null
let number="number"
let string="string"
let ispossible=false

function Appendtodisplay(input){
    console.log(typeof(input))

    if(typeof(input)==number){
        display.value+=`${input}`
        console.log(input)
        last_input=input
    }else if(typeof(last_input)==number){
        ispossible=true
        display.value+=`${input}`
        console.log(input)
        last_input=input
    }else if(typeof(last_input)==string){
        let newtype=display.value
        display.value=""
        for(let i=0;i<newtype.length-1;i++){
            display.value+=`${newtype[i]}`
        }
        display.value+=`${input}`
    }
}

function ClearDisplay(){
    display.value=``
}
function InnerResult(){
    let newtype=display.value
    if(display.value===""){
        return
    }
    if(ispossible){
    display.value=eval(display.value)
    console.log(display.value)
    console.log(display.value)
    if(display.value!=""){
    results.innerHTML+=`<p>${newtype}<br><span class="x">${display.value}</span></p> `
    }
    ClearDisplay()
    last_input=null
    ispossible=false}
}