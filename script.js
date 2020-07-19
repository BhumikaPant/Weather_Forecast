const button=document.querySelector('button')
console.log(button)
button.addEventListener('click',getDetails);

function getDetails(e)
{ e.preventDefault();
    const pin=document.querySelector('#pin');
    
    var xhr=new XMLHttpRequest();
    //weatherapi=`https://cors-anywhere-herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=244713,in&appid=4b8bf4c3e0c5fa72550dc51c23be1798`;
    weatherapi=`http://api.openweathermap.org/data/2.5/weather?zip=${pin.value},in&units=metric&appid=4b8bf4c3e0c5fa72550dc51c23be1798`;
    
    
    xhr.open('GET',weatherapi,true);
    xhr.onload=function(){
        if(this.status==200){
            var res=JSON.parse(xhr.responseText)
             console.log(res);
            
            document.querySelector('#city').innerHTML=res.name;
            document.querySelector('#weather').innerHTML=res.weather[0].main;
            document.querySelector('#temp').innerHTML=res.main.temp+" °C";
            document.querySelector('#speed').innerHTML=res.wind.speed+" wind speed";
            
            let date=new Date(res.dt*1000);
           // console.log(date.getDate());
            document.querySelector('#date').innerHTML=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
        }

    }
    xhr.send();

}