function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  
  
  function showPosition(position) {
          var i=position.coords.latitude;
          var j=position.coords.longitude;
          document.getElementById("lat").value=i;
          document.getElementById("lon").value=j;
          
  
          //$.ajax({url: "https://api.openweathermap.org/data/2.5/weather?lat="+i+"&lon="+j+"&APPID=dc0d323b4933f0c038f261425b17038e",
          $.ajax({url: "https://api.openweathermap.org/data/2.5/weather?lat="+i+"&lon="+j+"&APPID=cd34f692e856e493bd936095b256b337",
              success: function(res){
                  if(res.weather[0].main === "mist")
                  document.getElementById("weather").value=7;
                  else if(res.weather[0].main === "clear")
                  {
                      document.getElementById("weather").value=1;
                      document.getElementById("roadsc").value=1;
                  }
                  else if(res.weather[0].main === "Rain")
                      {
                          document.getElementById("weather").value=2;
                          document.getElementById("roadsc").value=2;
                      }
                  else if(res.weather[0].main === "Snow")
                  {
                      document.getElementById("weather").value=3;
                      document.getElementById("roadsc").value=3;
                  }
                  else if(res.weather[0].main === "Clouds")
                  {
                      document.getElementById("weather").value=4;
                      document.getElementById("roadsc").value=7;
                  }
                  
                    var d = new Date();
                      var n = d.getHours();
                      if(n>=19 || n<=6)
                    document.getElementById("light").value=4;
                    else if(n>6 || n<18)
                        document.getElementById("light").value=1;
  
                    var d = d.getDay();
                    document.getElementById("day").value=d+1;
  
          }});
      }
      }
  
          document.addEventListener('DOMContentLoaded', function() {
              document.getElementById('submitBtn').addEventListener('click', function(e) {
                  e.preventDefault();
                  $('#result').html('1');
              console.log($('#gender').val());
  
                  $.post(
                      '/',
                      {
                          Did_Police_Officer_Attend: $('#Did_Police_Officer_Attend').val(),
                          age_of_driver: Math.log(parseInt($('#age_of_driver').val())),
                          vehicle_type: $('#vehicle_type').val(), 
                          age_of_vehicle: Math.log(parseInt($('#age_of_vehicle').val())),
                          engine_cc: $('#engine_cc').val(),
                          day: $('#day').val()[0],
                          weather: $('#weather').val()[0],
                          light: $('#light').val()[0],
                          roadsc: $('#roadsc').val()[0],
                          gender: $('#gender').val()[0],
                          speedl: $('#speedl').val()      
                      },
                      function(data) {
                          $('#result').html(data);
                          console.log(data);
                      }
                  );
              });
  
               document.getElementById('smsbutton').addEventListener('click', function(e) {
                      e.preventDefault();
                      $('#result').html('Loading...');
                          console.log($('#gender').val());
  
                      $.post(
                          '/sms/',
                          {
                              Did_Police_Officer_Attend: $('#Did_Police_Officer_Attend').val(),
                              age_of_driver: Math.log(parseInt($('#age_of_driver').val())),
                              vehicle_type: $('#vehicle_type').val(),
                              age_of_vehicle: Math.log(parseInt($('#age_of_vehicle').val())),
                              engine_cc: $('#engine_cc').val(),
                              day: $('#day').val()[0],
                              weather: $('#weather').val()[0],
                              light: $('#light').val()[0],
                              roadsc: $('#roadsc').val()[0],
                              gender: $('#gender').val()[0],
                              speedl: $('#speedl').val()
                          },
                          function(data) {
                              $('#result').html(data);
                              console.log(data);
                          }
                      );
                  });
              
          });