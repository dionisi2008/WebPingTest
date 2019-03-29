document.addEventListener("DOMContentLoaded", function () 
{

    MenuSelect1.style = getComputedStyle(document.getElementById("MenuSelect1"));
    document.getElementById("MenuSelect1").style.background = "none";
    document.getElementById("MenuSelect2").style.background = "none";
    document.getElementById("MenuSelect3").style.background = "rgb(189, 189, 189)";
    document.getElementById("ConfigServerWindo").style.display = "none";
    document.getElementById("ServerControlPanel").style.top = (window.innerHeight / 2) - (getComputedStyle(document.getElementById("ServerControlPanel")).height.split("p")[0] / 2) + "px";
    document.getElementById("ServerControlPanel").style.opacity = "1";



    document.getElementById("ServerControlPanel").style.left = (window.innerWidth / 2) - (getComputedStyle(document.getElementById("ServerControlPanel")).width.split("p")[0] / 2) + "px";


    document.getElementById("ServerElement").addEventListener("click", function ()
    {        
        document.getElementById("ServerControlPanel").style.top = (window.innerHeight / 2) - (getComputedStyle(document.getElementById("ServerControlPanel")).height.split("p")[0] / 2) + "px";
        document.getElementById("ServerControlPanel").style.left = (window.innerWidth / 2) - (getComputedStyle(document.getElementById("ServerControlPanel")).width.split("p")[0] / 2) + "px";
        document.getElementById("ServerControlPanel").style.opacity = "1";
    });




    document.getElementById("ServerControlPanelWindoClose").addEventListener("click", function ()
    {
        document.getElementById("ServerControlPanel").style.top = "-800px";
        document.getElementById("ServerControlPanel").style.opacity = "0";
    });












    document.getElementById("MenuSelect1").addEventListener("click", function ()
    {
        document.getElementById("ConfigServerWindo").style.display = "block";
        MenuSelect1.style = getComputedStyle(document.getElementById("MenuSelect1"));
        document.getElementById("MenuSelect1").style.background = "rgb(189, 189, 189)";
        document.getElementById("MenuSelect2").style.background = "none";
        document.getElementById("MenuSelect3").style.background = "none";
        document.getElementById("UsersServerWindo").style.display = "none";
    });











    
    document.getElementById("MenuSelect2").addEventListener("click", function ()
    {

        MenuSelect1.style = getComputedStyle(document.getElementById("MenuSelect1"));
        document.getElementById("MenuSelect1").style.background = "none";
        document.getElementById("MenuSelect2").style.background = "rgb(189, 189, 189)";
        document.getElementById("MenuSelect3").style.background = "none";
        document.getElementById("ConfigServerWindo").style.display = "none";
        document.getElementById("UsersServerWindo").style.display = "flex";
    });





    document.getElementById("MenuSelect3").addEventListener("click", function ()
    {
      
        document.getElementById("MenuSelect1").style.background = "none";
        document.getElementById("MenuSelect2").style.background = "none";
        document.getElementById("MenuSelect3").style.background = "rgb(189, 189, 189)";        
        document.getElementById("ConfigServerWindo").style.display = "none";
        document.getElementById("UsersServerWindo").style.display = "none";
        document.getElementById('AddNewHostForm').style.display = 'flex';
    });

    


    document.getElementById('AddNewHostForm').getElementsByTagName('button')[1].addEventListener('click', function ()
    {
        
    });




    var ElementPanelControlUser = document.getElementsByClassName('PanelControlUser')[0].getElementsByTagName('button');
    ElementPanelControlUser[0].addEventListener("click", function ()
    {
        console.log(document.getElementsByClassName('WindoUserChang')[0]);
        document.getElementsByClassName('WindoUserChang')[0].style.display = 'block';
    });


    //Нажатие Кнопки удаления пользователей
    var ElementPanelControlUser = document.getElementsByClassName('PanelControlUser')[0].getElementsByTagName('button')[1].addEventListener('click', function ()
    {
        for (var shag = 0; shag <= document.getElementsByClassName('ObjectUser').length -1; shag++)
        {
            if (document.getElementsByClassName('ObjectUser')[shag].getElementsByTagName('input')[0].checked)
            {
                Users.delete(document.getElementsByClassName('ObjectUser')[shag].getElementsByTagName('label')[0].innerText);
                document.getElementsByClassName('ObjectUser')[shag].remove();                
            }
        }


    });

    document.getElementsByClassName('WindoUserChang')[0].getElementsByTagName('button')[0].addEventListener('click', function ()
    {
        document.getElementsByClassName('WindoUserChang')[0].style.display = "none";
    });

    document.getElementsByClassName('WindoUserChang')[0].getElementsByTagName('button')[1].addEventListener('click', function ()
    {
        var ListWriteInfo = document.getElementsByClassName('WindoUserChang')[0].getElementsByTagName('input');
        if (ListWriteInfo[0].value != '' | ListWriteInfo[1].value != '')
        {
            if (ListWriteInfo[1].value == ListWriteInfo[2].value)
            {
                AddListUsers(ListWriteInfo[0].value, ListWriteInfo[1].value, ListWriteInfo[3].value);
                document.getElementsByClassName('WindoUserChang')[0].style.display = 'none';
                ListWriteInfo[0].value = '';
            }
            else
            {
                alert("Не совпадают пароли!");
            }
        }
        else
        {
            alert('Не заполнены все строки ввода')
        }
        
    });



});

window.addEventListener("resize", function ()
{
 if (getComputedStyle(document.getElementById("ServerControlPanel")).opacity == "1")
 {
    document.getElementById("ServerControlPanel").style.top = (window.innerHeight / 2) - (getComputedStyle(document.getElementById("ServerControlPanel")).height.split("p")[0] / 2) + "px";
    document.getElementById("ServerControlPanel").style.left = (window.innerWidth / 2) - (getComputedStyle(document.getElementById("ServerControlPanel")).width.split("p")[0] / 2) + "px";
 }
});

function  AddListUsers(NameUser, PasswordUser, ip)
{
    var cloud_Users = document.getElementById("UsersServerWindo");
    var New_section = document.createElement("section");
    Users.set(NameUser, [PasswordUser, ip]);
    New_section.className = "ObjectUser";
    var img_block = document.createElement("img");
    img_block.src = './scr/Male User-595b40b65ba036ed117d3de6.svg';
    var label_block = document.createElement("label");
    label_block.innerText = NameUser;
    var ElementObjectUserInput = document.createElement('input');
    ElementObjectUserInput.type = 'checkbox';    
    New_section.append(img_block);
    New_section.append(label_block);
    New_section.append(ElementObjectUserInput);
    cloud_Users.append(New_section);
}

