
const loadData= () =>{
    const searchTxt=document.getElementById('search-box')
const playerName=searchTxt.value;
searchTxt.value='';
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.player))
}
const displayData= (players) =>{
    // console.log(players);
    const searchTxt=document.getElementById('search-box')
    const playerName=searchTxt.value;
    const playerDetails=document.getElementById('player-details')
    playerDetails.textContent='';
    if(isNaN(playerName)){
      console.log('sadasdasds')
    }
    else{
      for(const player of players) {
        console.log(player.strThumb);
        const div = document.createElement('div');
         div.classList.add('cards');
         div.innerHTML=`
         <label>
         <input class="hidden-btn" type="checkbox" />
         <div class="flip-card">
           <div class="front">
             <img src="${player.strThumb}" alt="Player Image" />
             <h1>${player.strPlayer}</h1>
             <h5>Sports:<span style="color:#499bef;">${player.strSport}</span> Nationality:<span style="color:#499bef;;">${player.strNationality}</span></h5>
             <p class="btn btn-outline-primary" >See Details</p>
           </div>
           <div class="back">
             <h1>${player.strPlayer}</h1>
             <hr />
             <p>${player.strDescriptionEN.slice(0,200)}</p>
             <hr />
             <p class="btn btn-outline-primary">Back</p>
           </div>
         </div>
       </label>
         `
         playerDetails.appendChild(div)
 
     }
    }
    
  }
