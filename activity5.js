let value = prompt("Enter a value:");
let i=0;

while (i < 1){
    if (isNaN(value)||(value<0)){
        value = prompt("Please enter a positive numeric value");
    } else {
        for (let j=0;j<=value;j++){
            if(j%2==0) console.log(j + " is even\n" );
            else console.log(j + " is odd\n" );
        }
        i++;
    }
}

