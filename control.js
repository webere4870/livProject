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

    let arrayOfColumns = document.querySelectorAll('.changeOrder');

    // if(window.innerWidth < 860)
    // {
    //     for(let counter =0; counter < arrayOfColumns.length; counter++)
    //     {
    //         arrayOfColumns[counter].style.order = '1';
    //     }
    // }
    // else
    // {
    //     for(let counter =0; counter < arrayOfColumns.length; counter++)
    //     {
    //         arrayOfColumns[counter].style.order = '-1';
    //     }
    // }
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
        
    if(window.innerWidth)
    {
        for(let counter = 0; counter < myArray.length; counter++)
    {
        let heading = document.querySelectorAll('.carouselCover h1')[counter];
        let background = document.querySelectorAll('.carouselCover')[counter];
        let button = document.querySelectorAll('.carouselCover button')[counter];
        if(parseInt(document.querySelectorAll('.carouselItem')[counter].style.order) === 2)
        {
            heading.style.display = 'block';
            background.style.background = 'rgba(0,0,0,0.5)';
            button.style.display = 'block';
        }
        else
        {
            heading.style.display = 'block';
            background.style.background = 'rgba(0,0,0,0.5)';
            button.style.display = 'none';
        }
    }
       
    }
    
}

function closeGallery()
{
    let myArray = document.querySelectorAll('.galleryPage');
    for(let counter =0; counter < myArray.length; counter++)
    {
        myArray[counter].style.display = 'none';
    }
}

function openGallery(galleryID)
{
    let openSlide = document.getElementById(galleryID);
    openSlide.style.display = 'flex';
}

function clickToReveal(id, info)
{
    let revealedPic = document.getElementById(id);
}

async function cardFlip(id)
{
    let flipCard = document.getElementById(id);
    flipCard.style.transform = 'rotateY(180deg)';
    let myGuy = await returnBlank();
    flipCard.style.transform = 'rotateY(0deg)';
}

function returnBlank()
{
    return new Promise((resolve)=>
    {
        setTimeout(() => {
            resolve('resolved');
          }, 5000);
    })
}
