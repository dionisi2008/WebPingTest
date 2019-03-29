document.addEventListener("DOMContentLoaded", function () 
{
    class ServerElement extends HTMLElement
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