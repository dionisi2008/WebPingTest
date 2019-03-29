document.addEventListener("DOMContentLoaded", function () 
{
    class NextUserClass extends HTMLElement
    {
        constructor()
        {
            super();            
            this.style.position = "absolute";
            this.style.backgroundColor = "rgb(226, 226, 226)";
            this.style.borderRadius = "5px";
            this.style.boxShadow = '0 0 15px rgb(121, 121, 121)';
            this.style.width = "340px";
            this.style.top = "0px";
            this.style.transition = "5s";
            this.style.height = "340px";
            this.style.opacity = "0";

            var LabelNextUserElement = document.createElement("label");
            LabelNextUserElement.id = "LabelNextUser";
            LabelNextUserElement.innerText = "Авторизация";
            LabelNextUserElement.style.position = "absolute";
            LabelNextUserElement.style.fontFamily = "Arial, Helvetica, sans-serif";
            LabelNextUserElement.style.top = "45px";
            LabelNextUserElement.style.width = "100%";
            LabelNextUserElement.style.textAlign = "center";
            LabelNextUserElement.style.color = "rgb(90, 90, 90)";
            LabelNextUserElement.style.fontWeight = "800";
            LabelNextUserElement.style.fontSize = "30px";
            this.append(LabelNextUserElement);

            var InputLoginElement = document.createElement("input");            
            InputLoginElement.value = this.getAttribute("login");            
            InputLoginElement.id = "InputLogin";
            InputLoginElement.setAttribute("type", "text");
            InputLoginElement.setAttribute("placeholder", "Логин");
            InputLoginElement.style.position = "absolute";
            InputLoginElement.style.outline = "none";
            InputLoginElement.style.border = "none";
            InputLoginElement.style.top = "100px";
            InputLoginElement.style.left = "40px";
            InputLoginElement.style.height = "50px";
            InputLoginElement.style.fontSize = "20px";
            InputLoginElement.style.textAlign = "center";
            InputLoginElement.style.fontWeight = "800";
            this.append(InputLoginElement);

            var InputPasswordElement = document.createElement("input");
            InputPasswordElement.value = this.getAttribute("password");
            InputPasswordElement.id = "InputPassword";
            InputPasswordElement.setAttribute("type", "password");
            InputPasswordElement.setAttribute("placeholder", "Пароль");
            InputPasswordElement.style.cssText = InputLoginElement.style.cssText;
            InputPasswordElement.style.top = "170px";
            this.append(InputPasswordElement);
            
            var ButtonElement = document.createElement("button");
            ButtonElement.innerText = "Вход";
            ButtonElement.style.position = "absolute";
            ButtonElement.style.top = "240px";
            ButtonElement.style.left = "40px";
            ButtonElement.style.width = "253px";
            ButtonElement.style.height = "50px";
            ButtonElement.style.border = "none";
            ButtonElement.style.backgroundColor = "rgb(189, 189, 247)";
            ButtonElement.style.borderRadius = "5px";
            ButtonElement.style.fontWeight = "800";
            ButtonElement.style.fontSize = "18px";
            ButtonElement.style.color = "rgb(233, 235, 255)";
            ButtonElement.style.outline = "none";
            var RootElement = this;
            ButtonElement.addEventListener("click", function () 
            {                
                if (NextUserGood(InputLoginElement.value, InputPasswordElement.value))  
                {                    
                    RootElement.style.opacity = "0";
                    RootElement.style.top = "-340px";
                    Error_Message("Успешная авторизация", false);
                }
                else
                {
                    RootElement.style.boxShadow = '0 0 15px Red';
                    Error_Message("Не верный логин или пароль", true);
                }
            });
            
                
            
            this.append(ButtonElement);
            
            

            }
    }
    customElements.define("next-user", NextUserClass);
    var GetElementNextForm = document.getElementsByTagName("next-user")[0];
    GetElementNextForm.style.left = (document.body.clientWidth / 2) - (getComputedStyle(GetElementNextForm).width.split('p')[0] / 2) + "px";
    var top_pos = (window.innerHeight / 2) - (getComputedStyle(GetElementNextForm).height.split('p')[0] / 2);        
    GetElementNextForm.style.top = top_pos + "px";
    GetElementNextForm.style.opacity = "1";
});

window.onresize = function ()
{    
    var GetElementNextForm = document.getElementsByTagName("next-user")[0];
    if (getComputedStyle(GetElementNextForm).opacity != "0")
    {
        GetElementNextForm.style.left = (document.body.clientWidth / 2) - (getComputedStyle(GetElementNextForm).width.split('p')[0] / 2) + "px";
        GetElementNextForm.style.top = (window.innerHeight / 2) - (getComputedStyle(GetElementNextForm).height.split('p')[0] / 2) + "px";
    }
};