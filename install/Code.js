function SeveSetting()
{
    var Reuest = new XMLHttpRequest();
    Reuest.open("POST", "/");
    Reuest.send(document.getElementById("IP_Adress").value + "\n" + document.getElementById("Port_Adress").value + "\n" +  document.getElementById("Login_Admin").value + "\n" + document.getElementById("Password_Admin").value + "\n");
                    
}