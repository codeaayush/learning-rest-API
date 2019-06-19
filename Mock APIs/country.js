

var form = document.getElementById('ajax');
// Adds a listener for the "submit" event.
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var text = document.getElementById("name").value;
  var url = 'https://restcountries-v1.p.rapidapi.com/name/'+ text;
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  xhr.open("GET", url, true);
  xhr.setRequestHeader("x-rapidapi-host", "restcountries-v1.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "aae51ca0c2mshc7a83a8d124cd2bp1cc908jsne35c13960419");

  xhr.onreadystatechange = function() {
      if (xhr.readyState  === 4 && xhr.status === 200) {
        if(xhr.responseText){
          const result = JSON.parse(xhr.responseText);
          const htmlResponse = result.map(function(country){
              return '<li>' + country.name + '<ul> <li>' + country.capital+ '</li></ul></li>'
          })
          console.log(htmlResponse);
         document.getElementById('app').innerHTML = '<ul>' + htmlResponse.join('') + '</ul>'
        } else {
          console.log('data is coming null');
        }

      }
  };
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send();

});
