var count = 0; //this is what the number of doritos you start out with.

var picHeight = 60; //this is the var of the starting height of the first gun you have.

var button = document.getElementById("countButton"); //this is the "Noscope!!!" button

var display = document.getElementById("displayCount"); //this is the text that displays ur doritos

var backgroundmus = document.getElementById("backgroundmus"); //this is the var for the background music, AKA Darude - Sandstorm.

var pictureChange = document.getElementById("imageChange"); //this is the var for the id for the pictures of guns that change as you increase in points.

button.addEventListener("click", doCount); //this is the button for the function "doCount"

var adChange = document.getElementById("adChange"); //this is actually the var for the hitmarker sound effect, sorry for the confusion :P .

var scrollButton = document.getElementById("scrollButton"); //this is the var for the boss (marqueed button).



function doCount() { //this is the counting function for the noscope button (it gives you points) 
    count++;
    display.innerHTML = count;

    if (count > 1) { //simple if statement to make a sound effect play each time the noscope button is pressed.
        adChange.src ="hitmarker.wav";
}

    if (count < 500) { //if the count is below 500 then the height of the pictures increase by one per button press.
        picHeight ++;
}

        pictureChange.height=picHeight;
    if (count > 50) { // if count is above 50 then the gun is upgraded and the count rate increases by 1
        pictureChange.src ="http://www.bushmaster.com/img/firearms/90942_XM15_3gun.png";
        count++;
}

    if (count < 10000) { //if the count is below 10,000 than the boss is hidden
        document.getElementById('scrollButton').style.visibility='hidden';
     
}
    if (count > 100) { // if count is above 100 then the gun is upgraded and the count rate increases by 1
        pictureChange.src="http://vignette1.wikia.nocookie.net/vaultarmory/images/2/2b/Assassin_Rifle.png/revision/latest?cb=20110904005627";
        count++;
}
    if (count > 500) { // if count is above 500 then the gun is upgraded and the count rate increases by 1
        pictureChange.src="http://images1-1.gamewise.co/115072-full.png";
        count++;
}
    if (count > 1000) { // if count is above 1000 then the gun is upgraded and the count rate increases by 1
        pictureChange.src="http://ghostselite.com/wp-content/uploads/2013/12/sc-20101-620x350.jpg";
        pictureChange.height=375;
        count++;
}
    if (count > 2000) { // if count is above 2000 then the gun is upgraded and the count rate increases by 1
        pictureChange.src="http://www.thespecialistsltd.com/files/Charleville-Musket.jpg";
        count++;

}
    
    if (count > 5000) { // if count is above 5000 then the gun is upgraded and the count rate increases by 1
        pictureChange.src="http://img1.wikia.nocookie.net/__cb20130620090900/callofduty/images/b/b9/Ray_Gun_Mark_II_third_person_BOII.png";
        count++;
}
    if (count > 10000) { // if count is above 10,000 then the boss appears and the count increases by one. Also, the gun image is replaced with an image holding directions.
        pictureChange.src="shootbutton.jpg";
        count++;
        document.getElementById('scrollButton').style.visibility='visible';
}

}
