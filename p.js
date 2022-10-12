let submitButton  = document.getElementById('submit');
document.addEventListener('ev',()=>{
 localStorage.getItem();
});
 let keys = Object.keys(localStorage);
 i = keys.length ;
let stringifiedDetailsOfPeople, detailsOfPeople ;
 Object.keys(localStorage).forEach((key)=>{
    if(key.match(/userDetails/g)){
         stringifiedDetailsOfPeople = localStorage.getItem(key);
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        addNewLineElement(detailsOfPeople);

    }
  });
 submitButton.addEventListener("click" ,(e)=>{
    e.preventDefault();
    let emailId = document.getElementById('email').value;
    let name  = document.getElementById('name').value;
    if(emailId.lemgth > 0 && name.length > 0 ){
        let object ={
            name:name , 
            email:emailId 
        };
        localStorage.setItem('userDetails' + emailId , JSON.stringify(object));

        addNewLineElement(object);
    }
 });

 function addEventListener(object) {
    let ul = document.getElementById('ListOfPeople');
    let li = document.createElement('li');
    li.appendChild(
        document.createTextNode(object.name+" "+object.emailId+" ")
    );
    let input = document.createElement("input");
 input.id = "pradeep" ; 
 input.type = "button" ; 
input.value = "Edit" ;
input.addEventListener("click" , () =>{
    document.getElementById("name").value = object.name ; 
    document.getElementById('email').value = object.emailId;
    li.remove();
});
input.className = "delete" ; 
input.style.border = " solid green" ;
li.appendChild(input);

let emailinput = document.createElement('input');
emailinput.type ='button';
emailinput.value = 'delete';
emailinput.addEventListener("click" ,() =>{
    localStorage.removeItem("userDetails" + object.emailId);
    li.remove();
})
emailinput.className = "delete";
emailinput.border = "solid red ";
li.appendChild(emailinput);
ul.appendChild(li);
 }