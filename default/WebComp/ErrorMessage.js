
document.addEventListener("DOMContentLoaded", function () 
{
    class ErrorMessage extends HTMLElement
    {
        
        constructor()
        {
            super();            
            this.style.position = "absolute";
            this.style.top = "0px";
            this.style.left = "0px";
            this.style.width = "100%";
            this.style.height = "40px";            
            this.style.backgroundColor = 'Grey';
            this.style.boxShadow = "0 0 15px black";
            
            var ErrorLabelelem = document.createElement("label");
            ErrorLabelelem.id = "ErrorLabel";
            ErrorLabelelem.innerText = "Сервер контроля в норме";
            ErrorLabelelem.style.fontWeight = "800";
            ErrorLabelelem.style.margin = "10px";
            ErrorLabelelem.style.top = "10px";
            ErrorLabelelem.style.left = "10px";
            ErrorLabelelem.style.transition = "5s";
            ErrorLabelelem.style.color = "White";
            
            this.append(ErrorLabelelem)
            
            
        }

        MessageSend(Message, ErrorState)
        {
            var LabelErrorElem = this.getElementsByTagName("label")[0];            
            LabelErrorElem.innerText = Message;
            if (ErrorState == true)
            {
                this.style.backgroundColor = "Red";
            }
            else if(ErrorState == false)
            {
                this.style.backgroundColor = "Green";
            }
            else if(ErrorState == null)
            {
                this.style.backgroundColor = "Grey";
            }
            
        }
    }
    customElements.define("error-message", ErrorMessage)
});

