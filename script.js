// Page Elements
const inputField = document.getElementById('city');
const submitBtn = document.getElementById('button');

// Foursquare API Info
const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';

const url = 'https://api.foursquare.com/v2/venues/explore?near='
// // WEATHER API Info
const weatherUrl = 'http://api.weatherstack.com/current?access_key='
const weatherApi = '50057eb07fa3ce11fe506b08f0cdc624'


// Add AJAX functions here:

const getVenues = async (event) => {
event.preventDefault()    
 // return new Promise ((resolve,reject) => {
  const city = inputField.value
  const urlToFetch = `${url + city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20220128` 
  console.log(urlToFetch)
  try { //SOVYETLER BIRLIGI!!!
      let response = await fetch(urlToFetch)
if (response.ok) {
    let jsonResponse = await response.json()
    console.log(jsonResponse); 
    let venues = jsonResponse.response.groups[0].items
    console.log(venues);
    

    return venues;
}

  } catch (error) {
      console.log(error);
  } 
  // } ) 
  
}

const getForecast = async () => {
  const urlToFetch =   
  try {
      
  } catch (error) {
      
  }
}

submitBtn.addEventListener('click',getVenues) 




// Execute function
