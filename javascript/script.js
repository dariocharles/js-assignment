// Index Page
function userInfo() {
                
    var myForm = document.mainForm;
              
    let fname = myForm.fname.value;
    let lname = myForm.lname.value;
    let email = myForm.email.value;
    let address = myForm.address.value;
    let city = myForm.city.value;
    let province = myForm.province.value;
    
    
    if (fname == null || fname == "") {
        alert("Please enter your First Name!");
    } else {
        document.getElementById("full_name").innerText = fname + " " + lname;
        document.getElementById("email_address").innerText = email;
        document.getElementById("address_address").innerText = address;
        document.getElementById("city_city").innerText = city;
        document.getElementById("prov_prov").innerText = province;


        if (myForm.membership.value == "p") {
            document.getElementById('mem').innerHTML = "Premium Membership";
        } else if  (myForm.membership.value == "s") {
            document.getElementById('mem').innerHTML = "Standard Membership";
        } else {
            document.getElementById('mem').innerHTML = "Basic Membership";
        }
    } 
} 


// Excel Page
document.getElementById("button").addEventListener("click", myExcelFuns);

function myExcelFuns() {
    
    var userInputStr = document.getElementById("numbers").value;

    if (userInputStr) {
        console.log(userInputStr);
        userInputStr = userInputStr.trim();
        let userNumberArray = userInputStr.split(/\s+/);
        console.log(userNumberArray);
        let result;


        let emptyArray = [];
        for (let i = 0; i < userNumberArray.length; i++) {  
            let newArrayValues = parseInt(userNumberArray[i]);
            emptyArray.push(newArrayValues);
        }    
        console.log(emptyArray);    

// Trying to figure out how to prevent extra spaces before using .split(/\s+/)
            // let finalArray;
            //     if (emptyArray=== Number && emptyArray === !" "){
            //         for (let i = 0; i < emptyArray.length; i++) {
            //             // emptyArray.push()
            //             // finalArray.push(emptyArray);
            //             console.log("Scooby Doo");
            //         }
            //         //  emptyArray.push();
            //         //  console.log("Scooby Doo");
            //      } else {
            //          alert("Only one space between numbers please!")
            //       }
            // }


                        //    Sum
                        if (document.getElementById("sum").checked) {
                            
                           result = 0;
                            for (var i = 0; i < emptyArray.length; i++) {
                                result += emptyArray[i];
                            }
                            console.log(result);

                        // Average
                        } else if (document.getElementById("avg").checked) {
                            
                            let addUp = 0;
                            for (var i = 0; i < emptyArray.length; i++) {
                                addUp += emptyArray[i];
                                result = addUp / emptyArray.length;
                            }                            
                            console.log(result);
                        
                        // Max
                        } else if (document.getElementById("max").checked) {
                            
                            let min = emptyArray.sort((a,b) => a-b);
                            let max = min.reverse();
                            console.log(max);
                            result = max[0];


                        // Min
                        } else {
                            let min = emptyArray.sort((a,b) => a-b);
                            console.log(min);
                            result = min[0];
                        
                        }
                                     
                        document.getElementById("span").innerHTML = result; 
    } else {
        alert("Please input your numbers with spaces!");
    } 
} 