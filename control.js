window.addEventListener('load', ()=>
{
    let openDoc = document.querySelector('.styled');
    openDoc.style.display = 'block';
    let closeLoad = document.querySelector('.loader');
    closeLoad.style.display = 'none';
})

window.addEventListener("resize", ()=>
{
    console.log(window.innerWidth)
    if(window.innerWidth <= 1080)
    {
        document.querySelector('.hamburger').style.display = "block";
        document.querySelector('.navigationBar').style.display = 'none'
        document.querySelector('.smallLogo').style.display='block'
        document.querySelector('.outOfPosition').style.display = 'none';
    }
    else
    {
        document.querySelector('.hamburger').style.display = "none";
        document.querySelector('.navigationBar').style.display = 'flex'
        document.querySelector('.smallLogo').style.display='none'
        document.querySelector('.outOfPosition').style.display = 'flex';
    }
})

document.querySelector('.hamburger').addEventListener("click", ()=>
{
    document.querySelector('.smallNavigationBar').style.display = 'flex';   
    document.querySelector('body').style.overflowY = 'hidden';
})

document.querySelector('.xButton').addEventListener('click', ()=>
{
    document.querySelector('.smallNavigationBar').style.display = 'none';   
    document.querySelector('body').style.overflowY = 'initial';
})


function changeSlides(idNumber)
{
    let myArray = document.querySelectorAll('.slide');
    for(let counter = 0; counter<myArray.length; counter++)
    {
        if(counter === idNumber)
        {

        }
        else
        {
            myArray[counter].style.display = 'none';
        }
    }
    myArray[idNumber].style.display = 'flex';
}