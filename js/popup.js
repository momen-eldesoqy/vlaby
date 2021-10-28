export function popup (popupname , openBtn , innerName , closeBtn )
{
    let popup = document.getElementsByClassName(popupname)[0];
    //show popup
    document.getElementById(openBtn).onclick = function(){
        popup.classList.remove("hidden");
    }
    //hide popup
    popup.onclick = function(){
        this.classList.add("hidden");
    }
    // stop propagation
    document.getElementsByClassName(innerName)[0].onclick = function(e){
        e.stopPropagation()
    }
    //close button
    document.getElementById(closeBtn).onclick = function(){
        popup.classList.add("hidden");
    }

}

export function changeTbas(tabName)
{
    let tab = document.getElementsByClassName(tabName);
    for(var i=0;i<tab.length;i++)
    {
        tab[i].onclick = function(){
            this.classList.add("active");
            document.getElementsByClassName(this.getAttribute("data-class"))[0].classList.remove("hidden");
            for(var i =0 ; i<tab.length;i++)
            {
                if(tab[i] != this)
                {
                    tab[i].classList.remove("active");
                    document.getElementsByClassName(tab[i].getAttribute("data-class"))[0].classList.add("hidden");
                }
            }
        }
    }
}

export function confirmPopup(confirmName ,openBtn , innerName ,yesBtn , noBtn , newpopup , newinner , closebtn )
{
    let confirm = document.getElementsByClassName(confirmName)[0];
    let opened = document.getElementsByClassName(newpopup)[0];
    document.getElementById(openBtn).onclick = function(){
        confirm.classList.remove('hidden');
    }
    confirm.onclick = function(){
        this.classList.add('hidden');
    }
    document.getElementsByClassName(innerName)[0].onclick = function(e){
        e.stopPropagation();
    }
    document.getElementById(noBtn).onclick = function(){
        confirm.classList.add('hidden');
    }
    document.getElementById(yesBtn).onclick = function(){
        confirm.classList.add('hidden');
        opened.classList.remove('hidden');
    }
    document.getElementById(closebtn).onclick = function(){
        opened.classList.add('hidden');
    }
    opened.onclick = function(){
        this.classList.add('hidden');
    }
    document.getElementsByClassName(newinner)[0].onclick = function(e){
        e.stopPropagation();
    }
}

export function range(rangeName , value)
{
    let elem = document.getElementById(rangeName);
    let target = document.getElementById(value);
    let rangeValue = function()
    {
        var newValue = elem.value;
        target.value = newValue;
    }
    target.onkeyup = function()
    {
        elem.value = this.value ;
    }
    elem.addEventListener("input", rangeValue);
}
