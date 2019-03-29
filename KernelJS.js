function Error_Message(message, errorstate)
{
    var Error_Message_Element = document.getElementsByTagName("error-message")[0];
    Error_Message_Element.MessageSend(message, errorstate);
}

function NextUserGood(Login, Password)
{
    var logi = "Denis";
    var pass = "78987811";
    if (Login == logi & Password == pass)
    {        
        LoadApplication(Login);

        return true;
    }
    else
    {
        return false;
    }
}

function LoadApplication(LoginUserNext)
{
    document.body.append(document.createElement("server-element"));
}

var Users = new Map();
var ListHosts = new Map();

class Users_class
{
    constructor (Login, Password, IP)
    {
        this.login = Login;
        this.Password = Password;
        this.IP = IP;
    }

}


function LoadedUsersAPI (GetLoadUsersAPI = [])
{
    
    for (var shag = 0; shag <= GetLoadUsersAPI.length - 1; shag++)
    {        
        let ListPatramUser = GetLoadUsersAPI[shag].split(" ");
        AddListUsers(ListPatramUser[0], ListPatramUser[1], ListPatramUser[2]);        
    }
}

document.addEventListener("DOMContentLoaded", function () 
{
    var LoaderAPI = new XMLHttpRequest();
    LoaderAPI.open("GET", "/APIUsers.txt", true);
    LoaderAPI.send(null);
    LoaderAPI.addEventListener('loadend', function ()
    {
        LoadedUsersAPI(LoaderAPI.responseText.split('\n'));
    });
    
})


