var myHttp= new XMLHttpRequest()
var mealsList=[]
myHttp.open("get","https://www.themealdb.com/api/json/v1/1/search.php?s=")
myHttp.send()

myHttp.addEventListener("readystatechange",function(){
    if(myHttp.readyState==4 && myHttp.status==200){
        mealsList=JSON.parse(myHttp.response).meals;
        display()
    }
   
})

function display(){
    var temp=""
    for(var i = 0; i < mealsList.length; i++){
        temp+=`<div class="col-md-3 main-item">
  
    <img src="`+mealsList[i].strMealThumb+`" class="w-100">
    <div class="layer">
    <p>`+mealsList[i].strMeal+`</p>
    </div>
</div>` 
    }
   

document.getElementById("myRow").innerHTML=temp
}



function displayingredients(){
    var temp2=""
    for(var i = 0; i < mealsList.length; i++){
        temp2+=`    <div class="col-md-4">
        <img src="`+mealsList[i].strMealThumb+`" class="w-100"">
    </div>
    <div class="col-md-8">
        <h2>instructions</h2>
        <p>`+mealsList[i].strInstructions+`</p>
        <p>area:`+mealsList[i].strArea+`</p>
        <p>category:`+mealsList[i].strCategory+`</p>
        <h3>Recipes:</h3>
        <div class="d-flex parent">
            <div class="recipe">`+mealsList[i].strMeasure1+`</div>
            <div class="recipe">`+mealsList[i].strMeasure2+`</div>
            <div class="recipe">`+mealsList[i].strMeasure3+`</div>
            <div class="recipe">`+mealsList[i].strMeasure4+`</div>
            <div class="recipe">`+mealsList[i].strMeasure5+`</div>
            <br>
            <br>
            <h3>tags:</h3>
            <button>`+mealsList[i].strTags+`</button>
            <br>
            
            <button>
            <a href="`+mealsList[i].strSource+`">source</a></button>
            <button>
            <a href="`+mealsList[i].strYoutube+`">youtube</a></button>
        </div>
    </div>`
    }
    document.getElementById("myrow2").innerHTML=temp2
}

  
var myHttp2= new XMLHttpRequest()
var categoryList=[]
myHttp2.open("get","https://www.themealdb.com/api/json/v1/1/categories.php")
myHttp2.send()

myHttp2.addEventListener("readystatechange",function(){
    if(myHttp2.readyState==4 && myHttp2.status==200){
        categoryList=JSON.parse(myHttp2.response).categories;
        displayCategory()
    }
  
})




function displayCategory(){
    var demo=""
    for(var i = 0; i < categoryList.length; i++){
    demo+=`<div class="col-md-3 c g-3">
    <img src="`+categoryList[i].strCategoryThumb+`">
    <div class="layer2">
    <h2>`+categoryList[i].strCategory+`</h2>
    <p>`+categoryList[i].strCategoryDescription+`</p>
    </div>
    </div>`
    }
   

document.getElementById("category").innerHTML=demo
}


var myHttp3= new XMLHttpRequest()
var areaList=[]
myHttp3.open("get","https://www.themealdb.com/api/json/v1/1/search.php?s=")
myHttp3.send()

myHttp3.addEventListener("readystatechange",function(){
    if(myHttp3.readyState==4 && myHttp3.status==200){
        areaList =JSON.parse(myHttp3.response).meals;
        displayarea()
    }
   
})

function displayarea(){
    var demo2=""
    for(var i = 0; i < areaList.length; i++){
    demo2+=`<div class="col-md-3">
    <i class="fa-solid fa-city fa-3x"></i>
    <h2>`+areaList[i].strArea +`</h2>
</div>`
    }
   

document.getElementById("area").innerHTML=demo2
}


var myHttp4= new XMLHttpRequest()
var ingredientsList=[]
myHttp4.open("get","https://www.themealdb.com/api/json/v1/1/list.php?i=list")
myHttp4.send()

myHttp4.addEventListener("readystatechange",function(){
    if(myHttp4.readyState==4 && myHttp4.status==200){
        ingredientsList =JSON.parse(myHttp4.response).meals;
        displayingredients2()
    }
   
})


function displayingredients2(){
    var demo3=""
    for(var i = 0; i < 20; i++){
    demo3+=`<div class="col-md-3 desc">
    <i class="fa-solid fa-bowl-food fa-3x"></i>
    <h2>`+ingredientsList[i].strIngredient+`</h2>
    <p>`+ingredientsList[i].strDescription+`</p>
    </div>`
    }
   

document.getElementById("ingredients").innerHTML=demo3
}



let iconOuterWidth=$(".black-side").outerWidth()
$(".x").click(()=>{
    if($(".main-side").css("left")=="0px"){
        $(".main-side").animate({"left":-iconOuterWidth},500)
        $(".fa-align-justify").fadeIn()
        $(".fa-xmark").fadeOut()
    }
    else{
        $(".main-side").animate({"left":0},500)
        $(".fa-xmark").fadeIn()
        $(".fa-align-justify").fadeOut()
    }
    
})






const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const age=document.getElementById("age");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});

const setError=(element,message) =>{
    const inputcontrol=element.parentElement;
    const errorDisplay=inputcontrol.querySelector('.error');
    errorDisplay.innerText=message;
    inputcontrol.categoryList.add('error');
    inputcontrol.categoryList.remove('success');
}
const setSuccess= element=>{
    const inputcontrol=element.parentElement;
    const errorDisplay=inputcontrol.querySelector('.error');
    errorDisplay.innerText='';
    inputcontrol.categoryList.add('success');
    inputcontrol.categoryList.remove('error');
}

const isValidateEmail= email=>{
    const re=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs=()=>{
    const usernamevalue=username.value.trim();
    const emailvalidate=email.value.trim();
    const phonevalidate=phone.value.trim();
    const agevalidate=age.value.trim();
    const passwordvalidate=password.value.trim();
    const password2validate=password2.value.trim();

    if(usernamevalue===''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }
    if(emailValue===''){
        setError(email, 'Email is required');
    }  else if (!isValidateEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
}

if(passwordValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
} else {
    setSuccess(password);
}

if(password2Value === '') {
    setError(password2, 'Please confirm your password');
} else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
} else {
    setSuccess(password2);
}



$(document).ready(function(){
    $(".loading-screen").fadeOut(2000)
})