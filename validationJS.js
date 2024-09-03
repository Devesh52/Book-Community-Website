function setValues(event)
{
    document.getElementById('UserId').textContent.value = "";
}



function refresh()
{
    location.reload();
    var event = document.getElementById("sumbmitbtn").addEventListener(onclick, location.reload());
    if(event.returnValue)
    {
        setValues(event);
    }
    else {
        window.close();
    }

}



