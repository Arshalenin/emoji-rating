const starsEle=document.querySelectorAll('.fa-star')
const emojiEles=document.querySelectorAll('.far')
const colors=["red","orange","lightblue","lightgreen","green"]
updateRating(0)

starsEle.forEach((star,index)=>
    {
        star.addEventListener('click',()=>
        {
           updateRating(index)
        })
    })

    function updateRating(index)
    {
        starsEle.forEach((ele,i)=>
        {
            if(i<index+1)
            {
                ele.classList.add('active')
            }
            else{
                ele.classList.remove('active')
            }
        });

        emojiEles.forEach(emoji=>
        {
            emoji.style.transform=`translateX(-${index*50}px)`;
            emoji.style.color=colors[index]
        })
    }

   