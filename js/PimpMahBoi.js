// M A I N //
$(document).ready(function() {
    StartUp(1);
    //STATS
    $("#StatStim").click(function() {
        $("#StatStim").text("Stimpak (0)");
    });
    $("#HPButton").click(function() {
        BattrryPercent();
    });
    //STATS Section
    $("#StatMenu").click(function() {
        StartUp(1);
        UpdateSub(1);
        $("#StatusScreen").show();
    });
    $("#StatusBtn").click(function() {
        UpdateSub(1);
        $("#StatusScreen").show();
        $("#SpecialScreen").hide();
        $("#PerkScreen").hide();
    });
    $("#PerksBtn").click(function() {
        //$("#StatSub").css("left", "-44.5%");
        UpdateSub(3);
        $("#StatusScreen").hide();
        $("#SpecialScreen").hide();
        $("#PerkScreen").show();
        SPECIALS(8);
    });
    $("#SpecialBtn").click(function() {
        //$("#StatSub").css("left", "-32.5%");
        UpdateSub(2);
        $("#StatusScreen").hide();
        $("#SpecialScreen").show();
        $("#PerkScreen").hide();
        SPECIALS(1);
    }); { //SPECIALS
        $("#STR").click(function() {
            SPECIALS(1);
        });
        $("#PER").click(function() {
            SPECIALS(2);
        });
        $("#END").click(function() {
            SPECIALS(3);
        });
        $("#CHR").click(function() {
            SPECIALS(4);
        });
        $("#INT").click(function() {
            SPECIALS(5);
        });
        $("#AGI").click(function() {
            SPECIALS(6);
        });
        $("#LCK").click(function() {
            SPECIALS(7);
        });
        $("#CODE").click(function() {
            SPECIALS(8);
        });
        $("#CRAFT").click(function() {
            SPECIALS(9);
        });
        $("#LINUX").click(function() {
            SPECIALS(10);
        });
        $("#PoS").click(function(){
          SPECIALS(12);
        });
        $("#GFk").click(function(){
          SPECIALS(11);
        });
    }

    //INV Section
    $("#InvMenu").click(function() {
        //$("#InvSub").css("left", "3.5%");
        StartUp(2);
        UpdateSub(4);
    });
    $("#WeaponBtn").click(function() {
        //$("#InvSub").css("left", "3.5%");
        UpdateSub(4);
        ItemListing(1);
    });
    $("#ApparelBtn").click(function() {
        //$("#InvSub").css("left", "-9.5%");
        UpdateSub(5);
        ItemListing(2);
    });
    $("#AidBtn").click(function() {
        //$("#InvSub").css("left", "-20%");
        UpdateSub(6);
        ItemListing(3);
    });
    $("#MiscBtn").click(function() {
        //$("#InvSub").css("left", "-28.5%");
        UpdateSub(7);
        ItemListing(4);
    });
    $("#JunkBtn").click(function() {
//        $("#InvSub").css("left", "-38.5%");
        UpdateSub(8);
        ItemListing(5);
    }); { //Items
        $("#SGItem").click(function() {
            $("#ItVal").text("250");
            $("#ItWg").text("10");
            $("#ItEf").text("75");
            $("#ItImg").html("<img src=\"img/ICONS/INV/WEAPONS/Sol\'s Shotty.png\">");
        });
        $("#RGItem").click(function() {
            $("#ItVal").text("2000");
            $("#ItWg").text("5");
            $("#ItEf").text("120");
            $("#ItImg").html("<img src=\"img/ICONS/INV/WEAPONS/red\'s pistol.png\">");
        });
        $("#AStem").click(function() {
            $("#ItVal").text("2500");
            $("#ItWg").text("10");
            $("#ItEf").text("150");
            $("#ItImg").html("<img src=\"img/ICONS/INV/WEAPONS/Aegis Sword.png\">");
        });
        $("#LGItem").click(function(){
            $("#ItVal").text("0");
            $("#ItWg").text("10");
            $("#ItEf").text("200");
            $("#ItImg").html("<img src=\"img/ICONS/INV/WEAPONS/love glove.png\">");
        });

        $("#JacketItem").click(function() {
            $("#ItVal").text("0");
            $("#ItWg").text("1");
            $("#ItEf").text("750");
            $("#ItImg").html("<img src=\"img/ICONS/INV/APPAREL/crew 729 vaultsuit.png\">");
        });
        $("#CartonExpansions").click(function() {
            $("#ItVal").text("50");
            $("#ItWg").text("3");
            $("#ItEf").text("180");
            $("#ItImg").html("<img src=\"img/ICONS/INV/APPAREL/metal chest piece.png\">");
        });
        $("#CAItem").click(function() {
            $("#ItVal").text("50");
            $("#ItWg").text("30");
            $("#ItEf").text("180");
            $("#ItImg").html("<img src=\"img/ICONS/INV/APPAREL/cage armor.png\">");
        });
        $("#RMItem").click(function() {
            $("#ItVal").text("50");
            $("#ItWg").text("30");
            $("#ItEf").text("180");
            $("#ItImg").html("<img src=\"img/ICONS/INV/APPAREL/red man\'s mask.png\">");
        });

        $("#FAidItem").click(function() {
            $("#ItVal").text("750");
            $("#ItWg").text("1");
            $("#ItEf").text("300");
            $("#ItImg").html("<img src=\"img/ICONS/INV/AID/first aid.png\">");
        });
        $("#CigItem").click(function() {
            $("#ItVal").text("750");
            $("#ItWg").text("1");
            $("#ItEf").text("300");
            $("#ItImg").html("<img src=\"img/ICONS/INV/AID/cigar.png\">");
        });
        $("#JetItem").click(function() {
            $("#ItVal").text("750");
            $("#ItWg").text("1");
            $("#ItEf").text("300");
            $("#ItImg").html("<img src=\"img/ICONS/INV/AID/jet.png\">");
        });
        $("#PsItem").click(function() {
            $("#ItVal").text("750");
            $("#ItWg").text("1");
            $("#ItEf").text("300");
            $("#ItImg").html("<img src=\"img/ICONS/INV/AID/psycho.png\">");
        });

        $("#RasPiItm").click(function() {
            $("#ItVal").text("4000");
            $("#ItWg").text("1");
            $("#ItEf").text("??");
            $("#ItImg").html("<img src=\"img/ICONS/INV/MISC/pie.png\">");
        });
        $("#BatItm").click(function() {
            $("#ItVal").text("900");
            $("#ItWg").text("5");
            $("#ItEf").html(BattrryPercent());
            $("#ItImg").html("<img src=\"img/ICONS/INV/MISC/10k mAH battery.png\">");
        });
        $("#PBItm").click(function() {
            $("#ItVal").text("0");
            $("#ItWg").text("8");
            $("#ItEf").text("?");
            $("#ItImg").html("<img src=\"img/ICONS/INV/MISC/pi boi.png\">");
        });
        $("#STItem").click(function() {
            $("#ItVal").text("0");
            $("#ItWg").text("8");
            $("#ItEf").text("?");
            $("#ItImg").html("<img src=\"img/ICONS/INV/MISC/skull torch lighter.png\">");
        });

        $("#BagItm").click(function() {
            $("#ItVal").text("975");
            $("#ItWg").text("15");
            $("#ItEf").text("?");
            $("#ItImg").html("<img src=\"img/ICONS/INV/JUNK/odds and ends.png\">");
        });
      $("#RPItem").click(function() {
          $("#ItVal").text("975");
          $("#ItWg").text("15");
          $("#ItEf").text("?");
          $("#ItImg").html("<img src=\"img/ICONS/INV/JUNK/shit fone.png\">");
      });

    }
    //DATA Section
    $("#DataMenu").click(function() {
        //$("#DataSub").css("left", "15.5%");
        StartUp(3);
        UpdateSub(9);
    });
    $("#CalBtn").click(function() {
//        $("#DataSub").css("left", "15.5%");
        UpdateSub(9);
        StartUp(3);
    });
    $("#ConBtn").click(function() {
        //$("#DataSub").css("left", "-.5%");
        UpdateSub(10);
        $("#CalendarScreen").hide();
        $("#AboutScreen").hide();
        $("#ContactScreen").show();
    });
    $("#AbtBtn").click(function() {
        //$("#DataSub").css("left", "-13.5%");
        UpdateSub(11);
        $("#CalendarScreen").hide();
        $("#ContactScreen").hide();
        $("#AboutScreen").show();

        //Buttons
    });

    //MAP Section
    $("#MapMenu").click(function() {
        StartUp(4);
    });

    //RADIO Section
    $("#RadioMenu").click(function() {
        StartUp(5);
    });
    $("#FRM").click(function() {
        SetStation(1);
    });
    $("#FRC").click(function() {
        SetStation(2);
    });
    $("#DCR").click(function() {
        SetStation(3);
    });
    $("#MNR").click(function() {
        SetStation(4);
    });
    $("#MRM").click(function() {
        SetStation( 5);
    });
    $("#THR").click(function(){
      SetStation(6);
    });

});

function ScreenTransition(Page) {
    $(Page).effect("shake", {
        times: 1,
        distance: 3
    }, "fast");

}

function StartUp(Screen) {
    switch (Screen) {
      default:
      case 1:
        BattrryPercent();
        $("#StatScreen").show();
        $("#StatScreen").show();
        $("#InvScreen").hide();
        $("#DataScreen").hide();
        $("#MapScreen").hide();
        $("#RadioScreen").hide();
        $("#SpecialScreen").hide();
        $("#PerkScreen").hide();

        $("#StatMenu").addClass("menu-option-selected");
        $("#InvMenu").removeClass("menu-option-selected");
        $("#DataMenu").removeClass("menu-option-selected");
        $("#MapMenu").removeClass("menu-option-selected");
        $("#RadioMenu").removeClass("menu-option-selected");
        UpdateSub(1);
        break;
        case 2:
            $("#StatScreen").hide();
            $("#InvScreen").show();
            $("#DataScreen").hide();
            $("#MapScreen").hide();
            $("#RadioScreen").hide();
            ItemListing(1);

            $("#StatMenu").removeClass("menu-option-selected");
            $("#InvMenu").addClass("menu-option-selected");
            $("#DataMenu").removeClass("menu-option-selected");
            $("#MapMenu").removeClass("menu-option-selected");
            $("#RadioMenu").removeClass("menu-option-selected");
            break;
        case 3:
                $("#StatScreen").hide();
            $("#InvScreen").hide();
            $("#DataScreen").show();
            $("#MapScreen").hide();
            $("#RadioScreen").hide();
            $("#CalendarScreen").show();
            $("#ContactScreen").hide();
            $("#AboutScreen").hide();

            $("#Date").html(new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear());
            $("#Hour").html(new Date().getHours() + ":" + new Date().getMinutes());

            $("#StatMenu").removeClass("menu-option-selected");
            $("#InvMenu").removeClass("menu-option-selected");
            $("#DataMenu").addClass("menu-option-selected");
            $("#MapMenu").removeClass("menu-option-selected");
            $("#RadioMenu").removeClass("menu-option-selected");
            break;
        case 4:
                $("#StatScreen").hide();
            $("#InvScreen").hide();
            $("#DataScreen").hide();
            $("#MapScreen").show();
            $("#RadioScreen").hide();
            getLocation();

            $("#StatMenu").removeClass("menu-option-selected");
            $("#InvMenu").removeClass("menu-option-selected");
            $("#DataMenu").removeClass("menu-option-selected");
            $("#MapMenu").addClass("menu-option-selected");
            $("#RadioMenu").removeClass("menu-option-selected");
            break;
        case 5:
                $("#StatScreen").hide();
            $("#InvScreen").hide();
            $("#DataScreen").hide();
            $("#MapScreen").hide();
            $("#RadioScreen").show();

            $("#StatMenu").removeClass("menu-option-selected");
            $("#InvMenu").removeClass("menu-option-selected");
            $("#DataMenu").removeClass("menu-option-selected");
            $("#MapMenu").removeClass("menu-option-selected");
            $("#RadioMenu").addClass("menu-option-selected");
            break;
    }
    //StartUpEnd
}

function SPECIALS(Screen) {
    switch (Screen) {
        default:
        case 1:
          $("#SDescription").html("How much Power do you even weild?<br />Like, holy shit, nigga 2stronk4me.<br /> Pls don't break me.");
          $("#SName").html("<b>STRENGTH</b>");
          $("#SImg").html("<img src=\"img/ICONS/STATS/SPECIAL/S.png\">");
        break;
        case 2:
            $("#SName").html("<b>PERCEPTION</b>");
            $("#SDescription").html("Your scouting instincts tells what's<br />around you, making you more aware<br />of your surroundings.");
            $("#SImg").html("<img src=\"img/ICONS/STATS/SPECIAL/P.png\">");
            break;
        case 3:
            $("#SName").html("<b>ENDURANCE</b>");
            $("#SDescription").html("'You are a wall, Solrac' - RedMan <br />How much damage can you endure?");
            $("#SImg").html("<img src=\"img/ICONS/STATS/SPECIAL/E.png\">");
            break;
        case 4:
            $("#SName").html("<b>CHARISMA</b>");
            $("#SDescription").html("Normally, your Charisma level is acutually <br />calculated by your confidance, and sadly, <br />social standards.");
            $("#SImg").html("<img src=\"img/ICONS/STATS/SPECIAL/C.png\">");
            break;
        case 5:
            $("#SName").html("<b>INTELIGANCE</b>");
            $("#SDescription").html("Well, Solrac can Make, Code and Design <br />Games...Your skills, and general wisdom?");
            $("#SImg").html("<img src=\"img/ICONS/STATS/SPECIAL/I.png\">");
            break;
        case 6:
            $("#SName").html("<b>AGILITY</b>");
            $("#SDescription").html("How fast can you even move? Can you<br />run? CAN YOU LIFT? <b>CAN YOU EVEN!?</b>");
            $("#SImg").html("<img src=\"img/ICONS/STATS/SPECIAL/A.png\">");
            break;
        case 7:
            $("#SName").html("<b>LUCK</b>");
            $("#SDescription").html("How much of a Lucky bastard are you?<br />Asked the Pip-Boy.");
            $("#SImg").html("<img src=\"img/ICONS/STATS/SPECIAL/L.png\">");
            break;
        case 8:
            $("#PName").html("<b>PROGRAMMING</b>");
            $("#PDescription").html("The user of this Pip-Boy, is a coder.<br /> Othersie look for SolAZDev.tumblr.com");
            $("#PImg").html("<img src=\"img/ICONS/STATS/PERKS/programing perk.png\">");
            break;
        case 9:
            $("#PName").html("<b>CRAFTING & ART</b>");
            $("#PDescription").html("You are able to craft and make your own <br />stuff, be it physical, or 3D. You're also an <br />artist.");
            $("#PImg").html("<img src=\"img/ICONS/STATS/PERKS/crafting perk.png\">");
            break;
        case 10:
            $("#PName").html("<b>LINUX</b>");
            $("#PDescription").html("For better, or worse. This user knows <br />their way inside Linux. <b>Beware, you<br />have been warned.</br>");
            $("#PImg").html("<img src=\"img/ICONS/STATS/PERKS/linux master race perk.png\">");
            //$("#PImg").html("<img src=\"img/ICONS/STATS/PERKS/linux master race perk2.png\">");
            break;
        case 11:
            $("#PName").html("<b>GHOUL FUCKER</b>");
            $("#PDescription").html("Beyond the worse of fetishes, the half<br />dead  will never be bored with you<br />around!");
            $("#PImg").html("<img src=\"img/ICONS/STATS/PERKS/ghoul fucker perk.png\">");
          break;
        case 12:
            $("#PName").html("<b>PEDDLER OF SINS</b>");
            $("#PDescription").html("The outstanding will to toss everything<br />for some cash, even if it's partially your<br />dignity.");
            $("#PImg").html("<img src=\"img/ICONS/STATS/PERKS/peddler of sins perk.png\">");
            break;
    }
}

function ItemListing(Screen) {
    $("#ItVal").text("0");
    $("#ItWg").text("0");
    $("#ItEf").text("0");
    $("#ItImg").html("");
    switch (Screen) {
        default:
            case 1:
            $("#WeaponList").show();
        $("#DefList").hide();
        $("#AidList").hide();
        $("#MiscList").hide();
        $("#JunkList").hide();
        break;
        case 2:
                $("#WeaponList").hide();
            $("#DefList").show();
            $("#AidList").hide();
            $("#MiscList").hide();
            $("#JunkList").hide();
            break;
        case 3:
                $("#WeaponList").hide();
            $("#DefList").hide();
            $("#AidList").show();
            $("#MiscList").hide();
            $("#JunkList").hide();
            break;
        case 4:
                $("#WeaponList").hide();
            $("#DefList").hide();
            $("#AidList").hide();
            $("#MiscList").show();
            $("#JunkList").hide();
            break;
        case 5:
                $("#WeaponList").hide();
            $("#DefList").hide();
            $("#AidList").hide();
            $("#MiscList").hide();
            $("#JunkList").show();
            break;
    }
}

function BattrryPercent() {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var battery = navigator.battery || navigator.mozBattery;
    if (!isChrome) {
	console.log("Batter at "+battery.level*100);
        $("#BatHealth").css('width', (battery.level * 100) + "%");
        $("#BatAP").text(""+parseInt(battery.level*100)+"/100");
        return battery.level * 100;
    } else {
        navigator.getBattery().then(function(batteryL) {
            $("#BatHealth").css('width', batteryL.level * 100 + "%");
            $("#BatAP").text(""+parseInt(batteryL.level*100)+"/100");
            return batteryL.level * 100;
        });
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            showPosition(pos);
            $("#LocTxt").text("Lat: " + pos.coords.latitude + " - Long: " + pos.coords.longitude);
        });
    }
}

function showPosition(position) { //Straight from W3CShcools~
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon);
    mapholder = document.getElementById('MapArea')

    var myOptions = {
        center: latlon,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    }

    var map = new google.maps.Map(document.getElementById("MapArea"), myOptions);
    var marker = new google.maps.Marker({
        position: latlon,
        map: map,
        title: "You are here!"
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function GetStation(StationID) {
    switch (StationID) {
        default:
            case 1:
              return "http://46.101.243.245:8000/falloutfm1.ogg";
              $("#RStationL").html("Streaming Fallout Main Station.... &#160;"); //Didi't work for some reason
            break;
        case 2:
                return "http://46.101.243.245:8000/falloutfm6.ogg";
            break;
        case 3:
                return "http://46.101.243.245:8000/falloutfm7.ogg";
            break;
        case 4:
                return "http://3333.live.streamtheworld.com:80/SAM05AAC285_SC"
            break;
        case 5:
                return "http://8653.live.streamtheworld.com:80/SAM04AAC179_SC"
            break;
        case 6:
                return "http://stream.gensokyoradio.net:8000/stream/1/"
          break;
    }
}

function SetStation(StationID) {
    var audio = document.getElementById('RadioMain');
    audio.innerHTML = "<source src=" + GetStation(StationID) + " >";
    console.log(audio.innerHTML);
    audio.autoplay = true;
    audio.load();
    audio.play();
}

function sleep(msec) {
  var start = new Date().getTime();
  for(var i=0; i<1e7; i++){
    if((new Date().getTime() - start)>msec){
      break;
    }
  }
}

function UpdateSub(SubMenu){
  var p1,p2,p3,p4,p5 = 0;
  switch (SubMenu) {
    default:
    case 1: //STATUS
      $("#StatSub").css("left",String(parseFloat($("#StatMenu").css("left"))+$("#StatMenu").width()/2-$("#StatusBtn").width()/2)+"px");
    break;
    case 2: //SPECIAL
      $("#StatSub").css("left",String(parseFloat($("#StatMenu").css("left"))+$("#StatMenu").width()/2-$("#StatSub").width()/2+10)+"px");
    break;
    case 3:
      $("#StatSub").css("left",String(parseFloat($("#StatMenu").css("left"))+$("#StatMenu").width()/2-$("#StatSub").width()/2-$("#SpecialBtn").width()-25-$("PerksBtn").width()/2+6)+"px");
    break;
///////////INV
    case 4: //Weapons
      $("#InvSub").css("left",String(parseFloat($("#InvMenu").css("left"))+$("#InvMenu").width()/2-$("#WeaponBtn").width()/2)+"px");
      break;
    case 5: //Apparel
      $("#InvSub").css("left",String(parseFloat($("#InvMenu").css("left"))+$("#InvMenu").width()/2-$("#WeaponBtn").width()-70-$("ApparelBtn").width()/2)+"px");
      break;
    case 6://Aid
      $("#InvSub").css("left",String(parseFloat($("#InvMenu").css("left"))+$("#InvMenu").width()/2-$("#WeaponBtn").width()-70-$("#ApparelBtn").width()-$("#AidBtn").width()/2)+"px");
      break;
    case 7://Misc
      $("#InvSub").css("left",String(parseFloat($("#InvMenu").css("left"))+$("#InvMenu").width()/2-$("#WeaponBtn").width()-70-$("#ApparelBtn").width()-$("#AidBtn").width()-32-$("#MiscBtn").width()/2)+"px");
      break;
    case 8://Junk
      $("#InvSub").css("left",String(parseFloat($("#InvMenu").css("left"))+$("#InvMenu").width()/2-$("#WeaponBtn").width()-70-$("#ApparelBtn").width()-$("#AidBtn").width()-32-$("#MiscBtn").width()-35-$("#JunkBtn").width()/2)+"px");
      break;
    ///////DATA
    case 9://Calendar
      $("#DataSub").css("left",String(parseFloat($("#DataMenu").css("left"))+$("#DataMenu").width()/2-$("#CalBtn").width()/2)+"px");
      break;
    case 10://Contacts
      $("#DataSub").css("left",String(parseFloat($("#DataMenu").css("left"))+$("#DataMenu").width()/2-$("#CalBtn").width()-30-$("#ConBtn").width()/2)+"px");
      break;
    case 11:
      $("#DataSub").css("left",String(parseFloat($("#DataMenu").css("left"))+$("#DataMenu").width()/2-$("#CalBtn").width()-30-$("#ConBtn").width()-40-$("#AbtBtn").width()/2)+"px");
      break;
  }
}
