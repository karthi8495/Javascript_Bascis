function raincheck(rain){
    var raining = rain
    if(raining == true){
        //console.log("Stay indoors!!!")
        return "Stay indoors!!!"
    }else {
        //console.log("Go out!!!")
        return "Go out!!!"
    }
}
var status = raincheck(true)
console.log(status)