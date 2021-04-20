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


function openSlideInfo(slideId)
{
    let mySlide = document.getElementById(slideId);
    mySlide.style.display = 'flex';
    document.getElementById('closeInfo').style.display = 'block'
}

function closeAllInfo()
{
    let myArray = document.querySelectorAll('.slideInfo');
    myArray.forEach((thisIndex)=>
    {
        thisIndex.style.display='none';
    })
    document.getElementById('closeInfo').style.display = 'none';
}

function leftOrRight(direction)
{
    let emptyArray = [];
    let myArray = document.querySelectorAll('.carouselItem');
    if(direction==='minus')
    {
       for(let counter =0; counter < myArray.length; counter++)
       {
            if(parseInt(document.querySelectorAll('.carouselItem')[counter].style.order) === myArray.length - 1)
            {
                document.querySelectorAll('.carouselItem')[counter].style.order = '0';
            }
            else
            {
                let myTemporary = parseInt(document.querySelectorAll('.carouselItem')[counter].style.order);
                myTemporary++;
                document.querySelectorAll('.carouselItem')[counter].style.order = myTemporary.toString();
            }
       }
    }
    else
    {
        for(let counter =0; counter < myArray.length; counter++)
       {
            if(parseInt(document.querySelectorAll('.carouselItem')[counter].style.order) === 0)
            {
                document.querySelectorAll('.carouselItem')[counter].style.order = (myArray.length -1).toString();
            }
            else
            {
                let myTemporary = parseInt(document.querySelectorAll('.carouselItem')[counter].style.order);
                myTemporary--;
                document.querySelectorAll('.carouselItem')[counter].style.order = myTemporary.toString();
            }
       }
    }

    for(let counter = 0; counter < myArray.length; counter++)
    {
        if(parseInt(document.querySelectorAll('.carouselItem')[counter].style.order) === 2)
        {
            
        }
    }
}

function fake()
{
    for(let counter = 0; counter < myArray.length; counter++)
    {
        console.log(document.querySelectorAll('.carouselItem')[counter].style.order);
    }
    for(let counter =0; counter < myArray.length; counter++)
    {
        let newInt;
        let temp = document.querySelectorAll('.carouselItem')[counter].style.order;
        let integer = parseInt(temp);
        if(integer === myArray.length - 1)
        {
            newInt = 0;
        }
        else
        {
            newInt = integer++;
        }
        let newStringInt = newInt.toString();
        document.querySelectorAll('.carouselItem')[counter].style.order = newStringInt;
    }
    
    for(let counter = 0; counter < myArray.length; counter++)
    {
        console.log(document.querySelectorAll('.carouselItem')[counter].style.order);
    }
}