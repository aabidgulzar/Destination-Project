let nm=document.getElementById('first-animation');
nm.addEventListener('submit',function(event){
    event.preventDefault();

    let q=event.target.elements['user'].value;

    let divv=document.getElementById('name-container')
    let h3=document.createElement('h1')
    h3.className='style';
    let h3t=document.createTextNode(`Hello ${q}`);
    h3.appendChild(h3t);
    divv.appendChild(h3);
    
    let removePage=document.getElementById('first-animation');
    removePage.className='removed';

});



let changeMode=false;

let a=document.getElementById('togglemode');
a.addEventListener('click',function(){
    changeMode=!changeMode
    if(changeMode){ 
    let element=document.body;
    element.className='darkmode';
        document.getElementById('togglemode').innerText='Light Mode';
    }
    else{
    let element=document.body;
    element.className='lightmode';
        document.getElementById('togglemode').innerText='Dark Mode';
    }
});


var detailsForm=document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit',handleFormSubmit);





function handleFormSubmit(event){
    event.preventDefault();//preventing default behaviour



//getting information from form elements
    var destName=event.target.elements['name'].value;

    var destLocation=event.target.elements['location'].value;

    var destPhoto=event.target.elements['photo'].value;

    var destDescription=event.target.elements['description'].value;


//removing updated information
    for(var i=0; i<detailsForm.length-1; i++){
        detailsForm.elements[i].value="";
    }


    //creating html elements to present data
    var destCard=creatDestinationCard(destName,destLocation,destPhoto,destDescription);


//changing html to my wish list
    var wishListContainer=document.getElementById('destination_container');
    if(wishListContainer.children.length===0){
        document.getElementById('tittle').innerHTML="My Wish List";
    }


//storing destCard in destination_container
document.querySelector('#destination_container').appendChild(destCard);

}





//creatng html destination_container elements
function creatDestinationCard(name,location,photoURL,description){

    //<div class="card"> </div>
    var card=document.createElement('div');
    card.className='card';

//importing random image
const getUrl = (id) => {
    return `https://picsum.photos/id/${id}/200/300`;
};

const getId = () => {
    return Math.round(Math.random()*1000);
};
//img tag
    var img=document.createElement('img');
    img.setAttribute('alt','Error photo');
    //checking is url present or not
    if(photoURL.length === 0){
        img.setAttribute('src',getUrl(getId()));
    }
    else{
        img.setAttribute('src',photoURL);
    }
    card.appendChild(img);

//another div
    var cardBody=document.createElement('div');
    cardBody.className="card-body";


//soring name
    var cardTitle=document.createElement('h3');
    cardTitle.innerText=name;
    cardBody.appendChild(cardTitle);


//storing location
    var cardSubTitle=document.createElement('h4');
    cardSubTitle.innerHTML=location;
    cardBody.appendChild(cardSubTitle);
    if(description.length!==0){
        var cardText = document.createElement('p');
        cardText.className="card-text";
        cardText.innerText=description;
        cardBody.appendChild(cardText);
    }


//button to remove data
    var cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText="Delete Destination";
    cardDeleteBtn.addEventListener('click',removeDestination);
    cardBody.appendChild(cardDeleteBtn);



    //storing cardBody in card
    card.appendChild(cardBody);


    //returning card
    return card;


}


function removeDestination(event){
    var card = event.target.parentElement.parentElement;
    card.remove();
}