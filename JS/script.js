var slideIndex = 0;
showSlides();

function showSlides()
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots   = document.getElementsByClassName("dot");
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className +=" active";
    setTimeout(showSlides, 4000);
}


function passage(){
    document.getElementById("para1").innerHTML="Each participant that seeks to enter that year's competition must first submit an application to the programme, containing information about who is performing - whether a single person, a pair or trio of performers, or a small or large group - personal details regarding age, hometown,background, what experience they have for their talent. Eligibility for the contest is determined by what information is submitted for researchers to double-check - such information is required, per the programme's terms and conditions.Once an application is approved, the participant conducts a performance during an open audition close to where they reside (or can reach), whereupon if successful, they will be allocated a place in the second round, and at a venue that they can reach without issue. Once they arrive at the venue they are assigned to, the participant is then given a number, and remains within the venue's designated waiting area until called into the wings to prepare to perform.";
    document.getElementById("para2").innerHTML="Participants who pass their auditions and secure a place in the live rounds of the competitions are divided into groups and compete against each other to secure a place within the live final of the competition. Live episodes of the competition are held within a set venue - the location has varied, with the current arrangement focused on a venue within Colombo - with live episodes for each season being aired weekly on the system.The format of the live rounds, for the quarter-finals and semi-finals, sees each participant conducts a new performance of their act before the judges and the viewers within a 'performance' episode. In this episode, the judges can still give out feedback and comments about a participant's performance. While the episodes is being aired, the system provides the public  to vote for their act, with the results of these held in a separate 'results' episode.Those that make it into the season's final compete against each other to secure the most votes from the public, with the number of finalists varying between seasons - later seasons allow each finalist more than one performance and sometimes being joined by a previous winner or notable participant from a previous season.";
}
function tel3(){
    
        var array = ["Tel : (+94) 112254721","Fax : (+94) 112376543" ,"E-mail :info@lotustechnologies.lk"];
        var i;
        var x ="";
        for(i = 0; i < array.length; i++)
        {
            x = x + array[i] + "<br>";
        }
        document.getElementById("tele3").innerHTML = x;
}    
function tel2(){
    
    var array = ["Tel : (+94) 112235647","Fax :(+94) 112345785" ,"E-mail :md@asiabroadcasting.lk"];
    var i;
    var x ="";
    for(i = 0; i < array.length; i++)
    {
        x = x + array[i] + "<br>";
    }
    document.getElementById("tele2").innerHTML = x;
}    
function tel1(){
    
    var array = ["Tel : (+94) 112243456","Fax : (+94) 112234678" ,"E-mail :info@lotustechnologies.lk"];
    var i;
    var x ="";
    for(i = 0; i < array.length; i++)
    {
        x = x + array[i] + "<br>";
    }
    document.getElementById("tele1").innerHTML = x;
} 
function time(name){
    if(name == "tm1")
    {
        document.getElementById("contestant").src="IMAGES/maxresdefault.jpg";
        document.getElementById("id").innerHTML= "VOTE NO : G00012";
        document.getElementById("name").innerHTML="Name : ANNE MARIE";
        document.getElementById("time").innerHTML="Time : 7.30PM-7.33PM";
    }
    if(name == "tm2")
    {
        document.getElementById("contestant").src="IMAGES/chris-brown.jpg";
        document.getElementById("id").innerHTML= "VOTE NO  : G00013";
        document.getElementById("name").innerHTML="NAME : CHRIS BROWN";
        document.getElementById("time").innerHTML="TIME : 7.35PM-7.38PM";
    }
    if(name == "tm3")
    {
        document.getElementById("contestant").src="IMAGES/776598-charlie-puth-wallpapers-1920x1080-htc.jpg";
        document.getElementById("id").innerHTML= "VOTE NO : G00014";
        document.getElementById("name").innerHTML="NAME : CHALIE PUTH";
        document.getElementById("time").innerHTML="TIME : 7.45PM-7.48PM";
    }
    if(name == "tm4")
    {
        document.getElementById("contestant").src="IMAGES/C59FN0ZWMAAaG-O.jpg";
        document.getElementById("id").innerHTML= "VOTE NO : G00015";
        document.getElementById("name").innerHTML="NAME : ZAYN MALIK";
        document.getElementById("time").innerHTML="TIME: 7.50PM-7.53PM";
    }
    if(name == "tm5")
    {
        document.getElementById("contestant").src="IMAGES/ariana-grande.jpg";
        document.getElementById("id").innerHTML= "VOTE NO : G00016";
        document.getElementById("name").innerHTML="NAME : ARIANA GANDE";
        document.getElementById("time").innerHTML="TIME : 8.00PM-8.03PM";
    }
    if(name == "tm6")
    {
        document.getElementById("contestant").src="IMAGES/5d49bbdb36e03c0c14558d55.jpg";
        document.getElementById("id").innerHTML= "VOTE NO : G00017";
        document.getElementById("name").innerHTML="NAME : SHAWN MENDES";
        document.getElementById("time").innerHTML="TIME : 8.08PM-8.11PM";
    }


}   



