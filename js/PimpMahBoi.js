// M A I N //
$(document).ready(function(){
  StartUp(1);
  //STATS
  $("#StatStim").click(function(){
    $("#StatStim").text("Stimpak (0)");
  });
  $("#HPButton").click(function(){
    BattrryPercent();
  });
  //STATS Section
  $("#StatMenu").click(function(){
    StartUp(1);
    $("#StatusScreen").show();
  });
  $("#StatusBtn").click(function(){
    $("#StatusScreen").show();
    $("#SpecialScreen").hide();
    $("#PerkScreen").hide();
  });
  $("#PerksBtn").click(function(){
    $("#StatusScreen").hide();
    $("#SpecialScreen").hide();
    $("#PerkScreen").show();
    SPECIALS(8);
  });
  $("#SpecialBtn").click(function(){
    $("#StatusScreen").hide();
    $("#SpecialScreen").show();
    $("#PerkScreen").hide();
    SPECIALS(1);
  });
{ //SPECIALS
  $("#STR").click(function(){
    SPECIALS(1);
  });
  $("#PER").click(function(){
    SPECIALS(2);
  });
  $("#END").click(function(){
    SPECIALS(3);
  });
  $("#CHR").click(function(){
    SPECIALS(4);
  });
  $("#INT").click(function(){
    SPECIALS(5);
  });
  $("#AGI").click(function(){
    SPECIALS(6);
  });
  $("#LCK").click(function(){
    SPECIALS(7);
  });
  $("#CODE").click(function(){
    SPECIALS(8);
  });
  $("#CRAFT").click(function(){
    SPECIALS(9);
  });
  $("#LINUX").click(function(){
    SPECIALS(10);
  });
}

  //INV Section
  $("#InvMenu").click(function(){
    StartUp(2);
  });
  $("#WeaponBtn").click(function(){
    ItemListing(1);
  });
  $("#ApparelBtn").click(function(){
    ItemListing(2);
  });
  $("#AidBtn").click(function(){
    ItemListing(3);
  });
  $("#MiscBtn").click(function(){
    ItemListing(4);
  });
  $("#JunkBtn").click(function(){
    ItemListing(5);
  });
  //Items
  $("#SGItem").click(function(){
    $("#ItVal").text("250");
    $("#ItWg").text("10");
    $("#ItEf").text("75");
  });
  $("#RGItem").click(function(){
    $("#ItVal").text("2000");
    $("#ItWg").text("5");
    $("#ItEf").text("120");
  });
  $("#AStem").click(function(){
    $("#ItVal").text("2500");
    $("#ItWg").text("10");
    $("#ItEf").text("150");
  });

  $("#JacketItem").click(function(){
    $("#ItVal").text("0");
    $("#ItWg").text("1");
    $("#ItEf").text("750");
  });

  $("#CartonExpansions").click(function(){
    $("#ItVal").text("50");
    $("#ItWg").text("3");
    $("#ItEf").text("180");
  });

  $("#FAidItem").click(function(){
    $("#ItVal").text("750");
    $("#ItWg").text("1");
    $("#ItEf").text("300");
  });

  $("#RasPiItm").click(function(){
    $("#ItVal").text("4000");
    $("#ItWg").text("1");
    $("#ItEf").text("??");
  });

  $("#BatItm").click(function(){
    $("#ItVal").text("900");
    $("#ItWg").text("5");
    $("#ItEf").html(BattrryPercent());
  });

  $("#PBItm").click(function(){
    $("#ItVal").text("0");
    $("#ItWg").text("8");
    $("#ItEf").text("?");
  });

  $("#BagItm").click(function(){
    $("#ItVal").text("975");
    $("#ItWg").text("15");
    $("#ItEf").text("?");
  });

  //DATA Section
  $("#DataMenu").click(function(){
    StartUp(3);
  });
  $("#CalBtn").click(function(){
    StartUp(3);
  });
  $("#ConBtn").click(function(){
    $("#CalendarScreen").hide();
    $("#AboutScreen").hide();
    $("#ContactScreen").show();
  });
  $("#AbtBtn").click(function(){
    $("#CalendarScreen").hide();
    $("#ContactScreen").hide();
    $("#AboutScreen").show();
  });

});

function ScreenTransition(Page){
  $(Page).effect("shake",{times:1,distance:3},"fast");

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
      break;
    case 2:
      $("#StatScreen").hide();
      $("#InvScreen").show();
      $("#DataScreen").hide();
      $("#MapScreen").hide();
      $("#RadioScreen").hide();
      ItemListing(1);
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
  }
  //StartUpEnd
}

function SPECIALS(Screen){
  switch (Screen) {
    default:
    case 1:
    $("#SDescription").html("How much Power do you even weild?<br />Like, holy shit, nigga 2stronk4me.<br /> Pls don't break me.");
    $("#SName").html("<b>STRENGTH</b>");
      break;
    case 2:
      $("#SName").html("<b>PERCEPTION</b>");
      $("#SDescription").html("Your scouting instincts tells what's<br />around you, making you more aware<br />of your surroundings.");
      break;
    case 3:
      $("#SName").html("<b>ENDURANCE</b>");
      $("#SDescription").html("'You are a wall, Solrac' - RedMan <br />How much damage can you endure?");
      break;
    case 4:
      $("#SName").html("<b>CHARISMA</b>");
      $("#SDescription").html("Normally, your Charisma level is acutually <br />calculated by your confidance, and sadly, <br />social standards.");
      break;
    case 5:
      $("#SName").html("<b>INTELIGANCE</b>");
      $("#SDescription").html("Well, Solrac can Make, Code and Design <br />Games...Your skills, and general wisdom?");
      break;
    case 6:
      $("#SName").html("<b>AGILITY</b>");
      $("#SDescription").html("How fast can you even move? Can you<br />run? CAN YOU LIFT? <b>CAN YOU EVEN!?</b>");
      break;
    case 7:
      $("#SName").html("<b>LUCK</b>");
      $("#SDescription").html("How much of a Lucky bastard are you?<br />Asked the Pip-Boy.");
      break;
    case 8:
      $("#PName").html("<b>PROGRAMMING</b>");
      $("#PDescription").html("The user of this Pip-Boy, is a coder.<br /> Othersie look for SolAZDev.tumblr.com");
      break;
    case 9:
      $("#PName").html("<b>CRAFTING & ART</b>");
      $("#PDescription").html("You are able to craft and make your own <br />stuff, be it physical, or 3D. You're also an <br />artist.");
      break;
    case 10:
      $("#PName").html("<b>LINUX</b>");
      $("#PDescription").html("For better, or worse. This user knows their<br />way inside Linux. <b>Beware, you have been warned.</br>");
      break;
  }
}

function ItemListing(Screen){
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

function BattrryPercent(){
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  var battery = navigator.battery || navigator.mozBattery;
  if(!isChrome){
    return battery.level * 100;
    $("#BatHealth").css('width',(battery.level * 100)+"%");
  }else{
    navigator.getBattery().then(function(batteryL) {
      return batteryL.level * 100;
      $("#BatHealth").css('width',batteryL.level*100+"%");
    });
  }
}
