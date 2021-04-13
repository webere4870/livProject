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

function upOrDown(addOrSub)
{
    let currentSlide =0;
    let selector = document.querySelectorAll('.labelRow input');
    for(let counter =0; counter < selector.length; counter++)
    {
        if(selector[counter].checked === true)
        {
            currentSlide = counter;
        }
    }

    console.log(currentSlide);

    if(addOrSub === 'plus')
    {
        if(currentSlide === selector.length -1)
        {
            currentSlide = 0;
        }
        else
        {
            currentSlide = currentSlide + 1;
        }
    }
    else{
        if(currentSlide === 0)
        {
            currentSlide = selector.length -1;
        }
        else
        {
            currentSlide = currentSlide -1;
        }
    }
    selector[currentSlide].checked = true;
    changeSlides(currentSlide);
}