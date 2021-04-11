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