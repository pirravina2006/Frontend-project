let destination=document.querySelector('.destination');
let next=document.querySelector('.nextBtn');
let prev=document.querySelector('.prevBtn');
let arr=[
    './images/Destinations/azhimala.webp',
    './images/Destinations/kedarnath-temple.webp',
    './images/Destinations/marinaBeach.jpg',
    './images/Destinations/meghalaya-temple.webp',
    './images/Destinations/rameshwaram-temple.webp',
];

let index=0;
function addBgImg(){
    //destination.style.backgroundImage=`url(${bgImgs[currentbgImgIndex]})`;
    console.log(`url(${arr[index]})`);
}

next.addEventListener('click',function(){
    index++;
    if(index==arr.length){
        index=0;
    }
    // console.log(index);
    addBgImg();
})

prev.addEventListener('click',function(){
    if (index=0){
        index=arr.length;
    }
    index--;
    // console.log(index);
    addBgImg();
})