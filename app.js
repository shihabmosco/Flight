let body = document.querySelector('.tDada');
let tableCount = 10;

apiCall();
// let fnName = () => {
//   //arrow fn
// }

async function apiCall(){
  //asyncronous call
    let response = await fetch('./airlines.json');
    let data = await response.json();

    //template literals
    
    // let arr = [{zj:34},{sh:10}];
    // arr = Object.values(arr).sort(function(a, b){return a - b});
 

let tables = data.slice(0,tableCount).map(e => {

 return (`<table class="table">
    <thead>
        <tr>
            <th colspan="2" class="head">${e.Airport.Name}</th>
        </tr>
        <tr>
        <th scope="col">Total flights</th>
        <th scope="col">Total minutes delayed</th>
        <th scope="col">Time label</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${e.Statistics.Flights.Total}</th>
        <td>${e.Statistics["Minutes Delayed"].Total}</td>
        <td>${e.Time.Label}</td>
      </tr>
     
    </tbody>
  </table>`);
})


  body.innerHTML += tables;
}

function loadMore(){
    tableCount += 10;
    apiCall();
}