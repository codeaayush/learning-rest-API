function getAjax(url, success) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  xhr.open("GET", url, true);
  xhr.setRequestHeader("x-rapidapi-host", "restcountries-v1.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "aae51ca0c2mshc7a83a8d124cd2bp1cc908jsne35c13960419");

  xhr.onreadystatechange = function() {
      if (xhr.readyState>3 && xhr.status==200) 
        success(xhr.responseText);
  };
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send();
  return xhr;
}

// example request
getAjax('https://restcountries-v1.p.rapidapi.com/all', function(data){
    const result = JSON.parse(data);
    const htmlResponse = result.map(function(country){
        return '<li>' + country.name + '<ul> <li>' + country.capital+ '</li></ul></li>'
    })
    console.log(htmlResponse);
   document.getElementById('app').innerHTML = '<ul>' + htmlResponse.join('') + '</ul>'

 });
 
/*
function country(){
  console.log(document.getElementById('button').value);}
  /*
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject ('Microsoft.XMLHTTP');
  xhr.open("GET", url, true);
  xhr.setRequestHeader("x-rapidapi-host", "restcountries-v1.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "aae51ca0c2mshc7a83a8d124cd2bp1cc908jsne35c13960419");
  xhr.onreadystatechange = function() {
    if (xhr.readyState==4 && xhr.status==200) 
      success(xhr.responseText);
};*/

