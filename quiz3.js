let typingIndicator=document.querySelectorAll("input[type=text]");

typingIndicator.forEach(function(inputElement) {
    inputElement.addEventListener("keyup",function(){
        let userName=document.getElementById("last-name").value+" "+document.getElementById("first-name").value;
        document.getElementById("txt-full-name").innerText="Full Name: "+userName;
    });   
});

document.getElementById("inquiry").addEventListener("keyup",function(){
    let userInquiry=document.getElementById("inquiry").value;
    document.getElementById("txt-inquiry").innerText="Inquiry: "+userInquiry;
});

document.getElementById("btn").addEventListener("click",function(){
    window.alert("Thanks for submitting an inquiry!");
});
