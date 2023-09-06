var currentScene = "StartDiv";
var Unterbrust;
var Oberbrust;
var Körbchen;
var Brallets;


function Hide(Hide, ShowObj, WhatToDo) {

    //Wenn man was eingeben soll aber falsche Daten eingeben tut
    if (Hide == "Unterbrustumfang" && (document.getElementById("Unterbrust").value == null || document.getElementById("Unterbrust").value < 63 || document.getElementById("Unterbrust").value > 97)) {
        //also mach das Textfeld blau oder so
        document.getElementById("Unterbrust").style.backgroundColor = "#74afb0";
        if (window.screen.availWidth > 1200) {
            document.getElementById("ErrorUnter").style.opacity = "1";
        }
        setTimeout(() => {      //warte eine Sekunde lang und mache dann folgenden Code:
            document.getElementById("Unterbrust").style.transition = "background-color 500ms";
            document.getElementById("Unterbrust").style.backgroundColor = "white";
            document.getElementById("ErrorUnter").style.opacity = "0";
        }, 1000);
        return;
    }
    if (Hide == "Oberbrustweite" && (document.getElementById("Oberbrust").value == null || document.getElementById("Oberbrust").value < 77 || document.getElementById("Oberbrust").value > 121)) {
        //also mach das Oberbrustweite Textfeld rot

        document.getElementById("Oberbrust").style.backgroundColor = "#74afb0";
        if (window.screen.availWidth > 1200) {
            document.getElementById("ErrorOber").style.opacity = "1";
        }
        setTimeout(() => { //warte eine Sekunde lang und mache dann folgenden Code:
            document.getElementById("Oberbrust").style.transition = "background-color 500ms";
            document.getElementById("Oberbrust").style.backgroundColor = "white";
            document.getElementById("ErrorOber").style.opacity = "0";
        }, 500);
        return;
    }

    if (Hide == "Oberbrustweite") //wenn wir also Oberbrustweite verstecken wollen
    {
        Oberbrust = document.getElementById("Oberbrust").value; //nehmen wir die Eingegebene Zahl
        switch (Unterbrust) { //und machen, je nachdem, was drin war, etwas.
            case 70:   //wenn die Unterbrust 70 war
                if (Oberbrust < 82 || Oberbrust > 96) //dann muss Oberbrust zwischen einem Wert sein, ansonsten...
                { //...wird die Fehlermeldung angezeigt.
                    OberbrustError();
                }
                break;
            case 75:
                if (Oberbrust < 87 || Oberbrust > 101) {
                    OberbrustError();
                }
                break;
            case 80:
                if (Oberbrust < 92 || Oberbrust > 106) {
                    OberbrustError();
                }
                break;
            case 85:
                if (Oberbrust < 97 || Oberbrust > 111) {
                    OberbrustError();
                }
                break;
            case 90:
                if (Oberbrust < 102 || Oberbrust > 116) {
                    OberbrustError();
                }
                break;
            case 95:
                if (Oberbrust < 107 || Oberbrust > 121) {
                    OberbrustError();
                }
                break;
        }
    }




    //Ende der Eingabetests
    //Jetzt wird also geschaut, ob es denn was zu verstecken gibt.
    var elementHide; //wir erstellen, weil fehlender Typisierung in js eine Variable
    if (Hide != "") {
        elementHide = document.getElementById(Hide); //und suchen nach dem Objekt mit dem Namen, den wir im OnClick eingegeben haben, was sich verstecken soll.

        // console.log("ElementToHide is:" + Hide);
    }
    else { //und wenn da nix drin steht, dann haben wir wohl auf das Mey Logo gedrückt
        Unterbrust = 0;
        Oberbrust = 0;
        elementHide = document.getElementById(currentScene);
        //console.log("Hide Something:" + currentScene);

    }
    elementHide.style.opacity = "0"; //machs unsichtbar
    elementHide.style.transition = "opacity 500ms"; //über 500ms
    document.getElementById(ShowObj).style.display = "block"; //und das Objekt, welches sichtbar werden soll danach, visuell existent
    setTimeout(() => { //und nach 500 ms
        elementHide.style.visibility = "hidden"; // nochmal richtig verstecken
        elementHide.style.display = "none"; //und das Element komplett unsichtbar machen
        currentScene = ShowObj; //ändern, was jetzt die aktuelle Szene ist.
        Show(ShowObj); //und das andere Objekt in einer Funktion sichtbar machen lassen
        // console.log("current scene is: " + currentScene);
    }, 500);




    //BG Bilder
    Render = document.getElementById("Shop");
    var img;
    switch (Hide) { //und je nachdem was gehided werden soll, passiert was anderes: Bilder werden versteckt
        case "StartDiv":
            img = document.getElementById("Img1");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img2");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            break;
        case "Oberbrustweite":
            img = document.getElementById("Img3");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            break;
        case "Ergebnis":
            img = document.getElementById("Img4");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            break;
        case "": //Mey Logo
            img = document.getElementById("Img1");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img2");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img3");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img4");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            Render.style.opacity = "0";
            break;
    }

 //Das ist etwas verwirrend: Hier werden im Hide jetzt die Gifs sichtbar gemacht. Egal es tut.
    // Videos
    gif1 = document.getElementById("Gif1");
    gif2 = document.getElementById("Gif2");
    if (WhatToDo == "Gif1") {    //also Gif1 muss sichtbar gemacht werden.
        setTimeout(() => {
            gif1.style.visibility = "visible";
            gif1.style.opacity = "1";
            gif1.style.transition = "opacity 500ms";
            gif1.style.display = "block";
        }, 500);
    }
    if (WhatToDo == "Gif2") {
        gif1.style.opacity = "0";
        gif2.style.visibility = "visible";
        setTimeout(() => {
            //  console.log("Gif2Show");
            gif1.style.visibility = "hidden";
            gif1.style.display = "none";
            gif2.style.visibility = "visible";
            gif2.style.opacity = "1";
            gif2.style.transition = "opacity 500ms";
            gif2.style.display = "block";
        }, 500);
    }
    if (WhatToDo == "Render") {
        setTimeout(() => {
            Render.style.visibility = "visible";
            Render.style.opacity = "1";
        }, 500);
    }

    if (WhatToDo == "hide") {
        gif2.style.opacity = "0";
        gif1.style.opacity = "0";
        setTimeout(() => {
            gif1.style.visibility = "hidden";
            gif2.style.visibility = "hidden";
            gif2.style.display = "none";
            //  console.log("Gif2Hide");
        }, 500);
    }
}



function Show(Show) { //hier wird beschrieben, wie welche Szene sichtbar gemacht werden muss. Zugegeben, der Teil darüber mit Show Gif und so sollte vermutlich hier rein, aber es tut alles. Und daher ändere ich nix dran.
    elementShow = document.getElementById(Show);
    elementShow.style.opacity = "1";
    elementShow.style.transition = "opacity 500ms";
    elementShow.style.visibility = "visible";


    var img;    
    switch (Show) {  //je nach Sichtbaren Panel soll etwas gemacht werden
        case "Unterbrustumfang":
            if (window.screen.availWidth > 1200) { //wenn der Bildschirm eine bestimmte breite hat
                img = document.getElementById("Img3");
                img.style.opacity = "1";
                img.style.transition = "opacity 500ms";
            }
            break;
        case "Ergebnis":
            img = document.getElementById("Img4");
            img.style.opacity = "1";
            img.style.transition = "opacity 500ms";
            break;
        case "StartDiv":
            img = document.getElementById("Img1");
            img.style.opacity = "1";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img2");
            img.style.opacity = "1";
            img.style.transition = "opacity 500ms";
            break;
    }

    currentScene = Show;    //und nochmal CurrentScene einstellen
}

function GifShow(WhatToDo) {        //wenn wir Gifs speichern wollen
    gif1 = document.getElementById("Gif1");
    gif2 = document.getElementById("Gif2");
    if (WhatToDo == "Gif1") {
        setTimeout(() => {
            gif1.style.visibility = "visible";
            gif1.style.opacity = "1";
            gif1.style.transition = "opacity 500ms";
        }, 500);
    }
    if (WhatToDo == "Gif2") {
        gif1.style.opacity = "0";
        gif2.style.visibility = "visible";
        setTimeout(() => {
            //  console.log("Gif2Show");
            gif1.style.visibility = "hidden";
            gif2.style.visibility = "visible";
            gif2.style.opacity = "1";
            gif2.style.transition = "opacity 500ms";
        }, 500);
    }
    if (WhatToDo == "hide") {
        gif2.style.opacity = "0";
        setTimeout(() => {
            gif2.style.visibility = "hidden";
            //  console.log("Gif2Hide");
        }, 500);
    }
}

function BrustInfo(Info) {      //interpretieren der Daten. Wir runden Unterbrust auf die Tabelle auf oder ab
    if (Info == "Unterbrust") {
        Unterbrust = document.getElementById(Info).value;
        if (Unterbrust == null || Unterbrust < 63 || Unterbrust > 97) {
            Unterbrust = null;
            //Error
            console.log("ErrorUnterbrust");
        }
        else {

            if (Unterbrust >= 63 && Unterbrust <= 67) {
                Unterbrust = 65;
            }
            if (Unterbrust >= 68 && Unterbrust <= 72) {
                Unterbrust = 70;
            }
            if (Unterbrust >= 73 && Unterbrust <= 77) {
                Unterbrust = 75;
            }
            if (Unterbrust >= 78 && Unterbrust <= 82) {
                Unterbrust = 80;
            }
            if (Unterbrust >= 83 && Unterbrust <= 87) {
                Unterbrust = 85;
            }
            if (Unterbrust >= 88 && Unterbrust <= 92) {
                Unterbrust = 90;
            }
            if (Unterbrust >= 93 && Unterbrust <= 97) {
                Unterbrust = 95;
            }
            console.log(Unterbrust);
        }
    }


    if (Info == "Oberbrust") {
        console.log("Brustinfos");
        Oberbrust = document.getElementById(Info).value;
        //  console.log(Oberbrust);
        if (Oberbrust == null || Oberbrust < 77 || Oberbrust > 121) {
            Oberbrust = null;
            //Error
            console.log("Error");
        }
        else {
            console.log("For Switch Unterbrist ist: " + Unterbrust);
            switch (Unterbrust) { //hier berechnen wir jetzt die Ausgabe beim Ergebnis Panel.
                case 65:
                    if (Oberbrust == 79 || Oberbrust == 81 || Oberbrust == 83 || Oberbrust == 85 || Oberbrust == 87 || Oberbrust == 89) {
                        switch (Oberbrust) {
                            case "79": Körbchen = "A/B"; Brallets = "XS"; break;
                            case "81": Körbchen = "B/C"; Brallets = "XS"; break;
                            case "83": Körbchen = "C/D"; Brallets = "XS"; break;
                            case "85": Körbchen = "D/E"; Brallets = "XS/S"; break;
                            case "87": Körbchen = "E/F"; Brallets = "S/Sondergröße"; break;
                            case "89": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        console.log("65 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 77 && Oberbrust <= 79) { Körbchen = "A"; Brallets = "XS"; }
                        if (Oberbrust >= 79 && Oberbrust <= 81) { Körbchen = "B"; Brallets = "XS"; }
                        if (Oberbrust >= 81 && Oberbrust <= 83) { Körbchen = "C"; Brallets = "XS"; }
                        if (Oberbrust >= 83 && Oberbrust <= 85) { Körbchen = "D"; Brallets = "XS"; }
                        if (Oberbrust >= 85 && Oberbrust <= 87) { Körbchen = "E"; Brallets = "S"; }
                        if (Oberbrust >= 87 && Oberbrust <= 89) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 89 && Oberbrust <= 91) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;

                case 70:
                    if (Oberbrust == 84 || Oberbrust == 86 || Oberbrust == 88 || Oberbrust == 90 || Oberbrust == 92 || Oberbrust == 94) {
                        switch (Oberbrust) {
                            case "84": Körbchen = "A/B"; Brallets = "XS"; break;
                            case "86": Körbchen = "B/C"; Brallets = "XS"; break;
                            case "88": Körbchen = "C/D"; Brallets = "S"; break;
                            case "90": Körbchen = "D/E"; Brallets = "S"; break;
                            case "92": Körbchen = "E/F"; Brallets = "S/Sondergröße"; break;
                            case "94": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        console.log("70 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 82 && Oberbrust <= 84) { Körbchen = "A"; Brallets = "XS"; }
                        if (Oberbrust >= 84 && Oberbrust <= 86) { Körbchen = "B"; Brallets = "XS"; }
                        if (Oberbrust >= 86 && Oberbrust <= 88) { Körbchen = "C"; Brallets = "S"; }
                        if (Oberbrust >= 88 && Oberbrust <= 90) { Körbchen = "D"; Brallets = "S"; }
                        if (Oberbrust >= 90 && Oberbrust <= 92) { Körbchen = "E"; Brallets = "S"; }
                        if (Oberbrust >= 92 && Oberbrust <= 94) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 94 && Oberbrust <= 96) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
                case 75:
                    if (Oberbrust == 89 || Oberbrust == 91 || Oberbrust == 93 || Oberbrust == 95 || Oberbrust == 97 || Oberbrust == 99) {
                        switch (Oberbrust) {
                            case "89": Körbchen = "A/B"; Brallets = "S"; break;
                            case "91": Körbchen = "B/C"; Brallets = "S"; break;
                            case "93": Körbchen = "C/D"; Brallets = "S/M"; break;
                            case "95": Körbchen = "D/E"; Brallets = "M"; break;
                            case "97": Körbchen = "E/F"; Brallets = "M/Sondergröße"; break;
                            case "99": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        // console.log("75 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 87 && Oberbrust <= 89) { Körbchen = "A"; Brallets = "S"; }
                        if (Oberbrust >= 89 && Oberbrust <= 91) { Körbchen = "B"; Brallets = "S"; }
                        if (Oberbrust >= 91 && Oberbrust <= 93) { Körbchen = "C"; Brallets = "S"; }
                        if (Oberbrust >= 93 && Oberbrust <= 95) { Körbchen = "D"; Brallets = "M"; }
                        if (Oberbrust >= 95 && Oberbrust <= 97) { Körbchen = "E"; Brallets = "M"; }
                        if (Oberbrust >= 97 && Oberbrust <= 99) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 99 && Oberbrust <= 101) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
                case 80:
                    if (Oberbrust == 94 || Oberbrust == 96 || Oberbrust == 98 || Oberbrust == 100 || Oberbrust == 102 || Oberbrust == 104) {
                        switch (Oberbrust) {
                            case "94": Körbchen = "A/B"; Brallets = "S/M"; break;
                            case "96": Körbchen = "B/C"; Brallets = "M"; break;
                            case "98": Körbchen = "C/D"; Brallets = "M"; break;
                            case "100": Körbchen = "D/E"; Brallets = "M/L"; break;
                            case "102": Körbchen = "E/F"; Brallets = "Sondergröße"; break;
                            case "104": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        //   console.log("80 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 92 && Oberbrust <= 94) { Körbchen = "A"; Brallets = "S"; }
                        if (Oberbrust >= 94 && Oberbrust <= 96) { Körbchen = "B"; Brallets = "M"; }
                        if (Oberbrust >= 96 && Oberbrust <= 98) { Körbchen = "C"; Brallets = "M"; }
                        if (Oberbrust >= 98 && Oberbrust <= 100) { Körbchen = "D"; Brallets = "M"; }
                        if (Oberbrust >= 100 && Oberbrust <= 102) { Körbchen = "E"; Brallets = "L"; }
                        if (Oberbrust >= 102 && Oberbrust <= 104) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 104 && Oberbrust <= 106) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
                case 85:
                    if (Oberbrust == 99 || Oberbrust == 101 || Oberbrust == 103 || Oberbrust == 105 || Oberbrust == 107 || Oberbrust == 109) {

                        switch (Oberbrust) {
                            case "99": Körbchen = "A/B"; Brallets = "M/L"; break;
                            case "101": Körbchen = "B/C"; Brallets = "L"; break;
                            case "103": Körbchen = "C/D"; Brallets = "L"; break;
                            case "105": Körbchen = "D/E"; Brallets = "L/XL"; break;
                            case "107": Körbchen = "E/F"; Brallets = "Sondergröße"; break;
                            case "109": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        //     console.log("85 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 97 && Oberbrust <= 99) { Körbchen = "A"; Brallets = "M"; }
                        if (Oberbrust >= 99 && Oberbrust <= 101) { Körbchen = "B"; Brallets = "L"; }
                        if (Oberbrust >= 101 && Oberbrust <= 103) { Körbchen = "C"; Brallets = "L"; }
                        if (Oberbrust >= 103 && Oberbrust <= 105) { Körbchen = "D"; Brallets = "L"; }
                        if (Oberbrust >= 105 && Oberbrust <= 107) { Körbchen = "E"; Brallets = "XL"; }
                        if (Oberbrust >= 107 && Oberbrust <= 109) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 109 && Oberbrust <= 111) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
                case 90:
                    if (Oberbrust == 104 || Oberbrust == 106 || Oberbrust == 108 || Oberbrust == 110 || Oberbrust == 112 || Oberbrust == 114) {

                        switch (Oberbrust) {
                            case "104": Körbchen = "A/B"; Brallets = "L/XL"; break;
                            case "106": Körbchen = "B/C"; Brallets = "XL"; break;
                            case "108": Körbchen = "C/D"; Brallets = "XL"; break;
                            case "110": Körbchen = "D/E"; Brallets = "XL"; break;
                            case "112": Körbchen = "E/F"; Brallets = "Sondergröße"; break;
                            case "114": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        //     console.log("90 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 102 && Oberbrust <= 104) { Körbchen = "A"; Brallets = "L"; }
                        if (Oberbrust >= 104 && Oberbrust <= 106) { Körbchen = "B"; Brallets = "XL"; }
                        if (Oberbrust >= 106 && Oberbrust <= 108) { Körbchen = "C"; Brallets = "XL"; }
                        if (Oberbrust >= 108 && Oberbrust <= 110) { Körbchen = "D"; Brallets = "XL"; }
                        if (Oberbrust >= 110 && Oberbrust <= 112) { Körbchen = "E"; Brallets = "XL"; }
                        if (Oberbrust >= 112 && Oberbrust <= 114) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 114 && Oberbrust <= 116) { Körbchen = "G"; Brallets = "Sondergröße"; }

                    }
                    break;
                case 95:
                    if (Oberbrust == 109 || Oberbrust == 111 || Oberbrust == 113 || Oberbrust == 115 || Oberbrust == 117 || Oberbrust == 119) {

                        switch (Oberbrust) {
                            case "109": Körbchen = "A/B"; Brallets = "XL"; break;
                            case "111": Körbchen = "B/C"; Brallets = "Sondergröße"; break;
                            case "113": Körbchen = "C/D"; Brallets = "Sondergröße"; break;
                            case "115": Körbchen = "D/E"; Brallets = "Sondergröße"; break;
                            case "117": Körbchen = "E/F"; Brallets = "Sondergröße"; break;
                            case "119": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        //       console.log("95 Korb switch");
                    } else {
                        if (Oberbrust >= 107 && Oberbrust <= 109) { Körbchen = "A"; Brallets = "XL"; }
                        if (Oberbrust >= 109 && Oberbrust <= 111) { Körbchen = "B"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 111 && Oberbrust <= 113) { Körbchen = "C"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 113 && Oberbrust <= 115) { Körbchen = "D"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 115 && Oberbrust <= 117) { Körbchen = "E"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 117 && Oberbrust <= 119) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 119 && Oberbrust <= 121) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
            }
        }
    }
    if (Oberbrust != null && Unterbrust != null) { //wenn die Größe für Brallets existiert:
        document.getElementById("BHSize").innerHTML = Unterbrust + Körbchen;
        if (Brallets != "Sondergröße") { // machs sichtbar
            document.getElementById("BralletsSize").innerHTML = Brallets;
            document.getElementById("BralletsSize").style.opacity = "1";
            document.getElementById("BralletsText").style.opacity = "1";
        }
        else {   //anonsten unsichtbar
            document.getElementById("BralletsText").style.opacity = "0";
            document.getElementById("BralletsSize").style.opacity = "0";
        }
        console.log("BralletsSize is: " + Brallets);
        console.log("BHSize is: " + Unterbrust + Körbchen);
    }
    return false;
}


var bigSize;
var smallSize;
function OpenArticle(Nr) {      //wenn man auf einen Artikel drückt im letzten Panel
    if (window.screen.availableWidth > 1200) { //skaliere das abhängig der Bildschirmbreite
        smallSize = "10%";
        bigSize = "60%";

    }
    else {
        smallSize = "17%";
        bigSize = "75%";
    }


    article = document.getElementById(Nr);
    info = article.querySelector('.Info'); //wir speichern jede Info Klasse
    ImgDiv = article.querySelector('.ImgDiv');
    PreVis = ImgDiv.querySelector('.PreVis');
    ShopImage = document.getElementById("ShopImage");
    if (article.style.height != bigSize) { //machs groß
        article.style.height = bigSize;
        info.style.minHeight = "24%"
        ImgDiv.style.width = "46%";
        ShopImage.src = 'Bilder/RenderProdukt.png';
        switch (Nr) {
            case 1: PreVis.src = 'Bilder/74202-365_set_800x1200.webp'; //und ändere das Bild
                break;
            case 2: PreVis.src = 'Bilder/74185-74_set_800x1200.webp';
                break;
            case 3: PreVis.src = 'Bilder/74118-79_set_800x1200.webp'
                break
            case 4: PreVis.src = 'Bilder/74443-75_set_800x1200.webp';
                break;
            case 5: PreVis.src = 'Bilder/74039-46_set_800x1200.webp';
                break;
        }

    }
    else { //oder wenns schon groß ist... machs klein
        ShopImage.src = 'Bilder/Render.png';
        article.style.height = smallSize;
        info.style.minHeight = "100%"
        ImgDiv.style.width = "20%";
        switch (Nr) {
            case 1: PreVis.src = 'Bilder/74202-365_detail01_800x1200.webp'; //und ändere das Bild zurück
                break;
            case 2: PreVis.src = 'Bilder/74185-74_detail02_800x1200.webp';
                break;
            case 3: PreVis.src = 'Bilder/74118-79_detail01_800x1200.webp';
                break
            case 4: PreVis.src = 'Bilder/74443-75_800x1200.webp';
                break;
            case 5: PreVis.src = 'Bilder/74039-46_800x1200.webp';
                break;
        }
    }

    for (var i = 1; i < 6; i++) {   //und wenn man was groß macht, dann soll jedes andere Panel, das schon groß ist, klein werden.
        if (i != Nr) {
            article = document.getElementById(i);
            info = article.querySelector('.Info');
            ImgDiv = article.querySelector('.ImgDiv');
            PreVis = ImgDiv.querySelector('.PreVis');

            article.style.height = smallSize;
            info.style.minHeight = "100%"
            ImgDiv.style.width = "20%";
        }
    }
}


function OberbrustError() {
    document.getElementById("Oberbrust").style.backgroundColor = "#74afb0";
    document.getElementById("ErrorOber").style.opacity = "1";
    setTimeout(() => {  //warte eine 500ms bzw 1/2 Sekunden lang und mache dann folgenden Code:
        document.getElementById("Oberbrust").style.transition = "background-color 500ms";
        document.getElementById("Oberbrust").style.backgroundColor = "white";
        document.getElementById("ErrorOber").style.opacity = "0";
    }, 500);
    return;
}

