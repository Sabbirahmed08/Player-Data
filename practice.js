const getData =() =>{
    const searchInput=document.getElementById('search-input');
    const inputValue=searchInput.value;
    searchInput.value='';
    
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => showResult(data.player))
}

const showResult= players =>{
    const getDiv=document.getElementById('show-results')
    getDiv.textContent='';
    // console.log(players)
    for(const player of players){
      const div=document.createElement('div')
    //   div.classList.add('color')
      div.innerHTML=`
      <div class="col">
       <div class="card h-100">
         <img src="${player.strThumb}" class="card-img-top" alt="Sorry for no picture">
       <div class="card-body">
        <h4 class="card-title">${player.strPlayer}</h4>
        <h6>National Team:  ${player.strNationality}</h6>
        <h6>Club: ${player.strTeam}</h6>
        <h6>Position: ${player.strPosition}</h6>
        <button onclick="getDetails('${player.idPlayer}')" class="btn-css">Details</button>
         
       </div>
       </div>
       </div>
      ` 
      getDiv.appendChild(div)
   }  
}
const getDetails =detailData =>{
    // console.log(detailData)
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${detailData}`
    fetch(url)
    .then(res => res.json())
    .then(data => detailsResult(data.players[0]))
}

const detailsResult = details =>{
   const showDetails=document.getElementById('show-details')
   console.log(details)
//    showDetails.textContent='';
   showDetails.innerHTML=`
    <img src="${details.strRender}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-title">${details.strPlayer}</h3>
    <h6 class="card-title">Born: ${details.dateBorn} (${details.strBirthLocation})</h6>
    <h6 class="card-title">Weight: ${details.strWeight}</h6>
    <h6 class="card-title">Height: ${details.strHeight}</h6>
    <h6 class="card-title">Nationality: ${details.strNationality}</h6>
    <h6 class="card-title">Game: ${details.strSport}</h6>
    <h6 class="card-title">Agent: ${details.strAgent}</h6>
    <h6 class="card-title">Position: ${details.strPosition}</h6>
    <h6 class="card-title">Number: ${details.strNumber}</h6>
    <p class="card-text">${details.strDescriptionEN.slice(0, 1000)}...</p>
    <p class="card-text"><small class="text-muted">Thank you</small></p>
    </div>

   `
 
}
