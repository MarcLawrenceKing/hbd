const themMessages = [
  'Harold: YOHOOOOO ISASHIBURIIII-DESUU!!!! Happy Birthday to you mareng Arsad um.... Diko alam sasabihin ko kasi kilala mo naman na ako di ako nabati sa mga special occasions kahit sa bdays ng mga tropa. Pero kahit ganun gusto kolang sabihin na more blessings to come, still keep what you are doing right now, kung needed nang help nandito lang ang buong tropa ready to help and Enjoy your whole day!!! Once again, OTANJOBI OMEDETOUUUU 🥳🥳🎊🎉🎂',

  'Eli: HELLO ARSAD BIRTHDAY MO NA NAMAN,＼⁠(⁠°⁠o⁠°⁠)⁠／ nakakailan ka na ha, last mo na to ems. Wala ako masabi naka ilang letter nako sayo di ka ba nagsasawa, nag procrastinate pako buong araw bago gawin to. Anyway(⁠‘⁠◉⁠⌓⁠◉⁠’⁠) HAPPY BIRTHDAY May your day be filled with joy, laughter, and lots of love.',
  
  'Eli(1): Huyyy nichat gpt ko lang yan wag kang ano UHM sana hapi ka today everyday kasi nadadamay kami mag puyat pag nag ooverthink ka and ano thank you sa pagbibigay ng sagot nung ABM pa tayo WHAHAHAHAᕙ⁠(⁠ ⁠ ⁠•⁠ ⁠‿⁠ ⁠•⁠ ⁠ ⁠)⁠ᕗ', 
  
  'Eli(2): sana makagraduate ka with high grades syempre ako din, alam ko naman makakasurvive ka oblicon. As i am writing this letter HUUY༎ຶ⁠‿⁠༎ຶ  namimiss ko na kau, pero i know naman na mas nakakasama mo na mga college frens mo pero das oki mag stay padin naman tayo as mag totropa, kasi wala kang choice masyado ka nang maraming nalalaman ipapatumba kita.', 

  'Eli(3): Sana mas mag grow kayo ni ano as a couple huuy sino, ay hi Marc kung nababasa mo to stay strong po ipapatumba din kita para couple goals kayo.ಥ⁠‿⁠ಥ Ahm always remember na nandito lang kami for you and support ka namin and matanda ka na so you know always be careful wink wink.', 

  'Eli(4): Unahin mo yung pag aaral mo hindi yung iinom ka tas di kami kasama  WHAHAHAH. Mooore birthdays to cum bastos mo talaga. Ang wish ko sayo ay sana madiligan ka na HUUY grabe 2 hours ko to tinype ang kapal naman ng muka mo sino ka ba, labyu bye.',

  "Carl cutie: Happy birthday Norjanah.🙂 Sana masaya ka.🙂 Sana mas maging masaya ka.🙂 Sana ma enjoy mo tong araw na to.🙂 Sana mag ingat ka.🙂 Sana makamit mo mga pangarap mo.🙂 Sana mag bago ka na.🙂 Sana wag ka mag bago.🙂 Sana yumaman ka.🙂 Sana d pa lalong kumapal muka mo.🙂",
  
  "Carl cutie(1): Stay humble naman paminsan minsan. Sana lang naman.🙂 Sana malibre moko.🙂 Sana maging mentally stable ka na.🙂 Sana maging physically healthy ka na.🙂 Sana maging financially stable ka na. 🙂 Eme kahit nag aaway pa rin tau minsan I'm thankful na napapatawad pa rin kita at mahaba pa rin ang pasensya ko sayo.", 
  
  "Carl cutie(2): Sana d magbago un Sana d ren magbago ung pakikitungo natin sa isat isa. Ikaw pinaka minamahal kong alaga tandaan mo yan. Sabihan ka man nila na bobo, tanga, inutil, clout chaser. Baka tama sila pero andito lang kami (sila) para sau tandaan mo yan (ata) Goodluck.🙂",

  "Girlie: Hiiii arsaddd!! Happy 19th birthday sa bunso naminnn!! First of all syempre I'm wishing you more blessings to come and more birthdays that you can celebrate sa future. I hope you're doing well right now and that you're happy sa kung ano mang ginagawa mo ngayon hahaha.",

  "Girlie(1): I know that you have someone you can lean on to pag feeling mo sinusubok ka naman ng mundo, pero sana maalala mo na I'm always here (ready to listen and mag advice na din kung kinakailangan hahaha).",

  "Girlie(2): Super dalang natin mag usap this past few months and sometimes feeling ko may barrier na sa pagitan natin, pero alam ko naman na may kanya-kanya tayong priorities na need natin unahin kaya focus tayo don. Always believe in yourself and trust yourself. You're pretty na so wag mo masyadong intindihin yung sinasabi ng iba towards you.",
  
  "Girlie(3): You are fine. :> And my another wish is sana maachieve mo yung dream/goals mo sa buhay, hindi man agad pero alam ko kaya mo yannn!! Baby steps arsad :> As long as na hindi tayo titigil sa pag achieve nyon kaya natin yon." ,
  
  "Girlie(4): I BELIEVE HAHAHA (Ito pinanghahawakan ko ngayon, kaya sana ikaw din.) Yan yung wish ko for you kasi gusto ko realistic hahaha. Againn!! Happy birthday! Enjoy mo na last year mo as a teenage girl kasi next year iba na simula ng number ng age mo hahaha. Yun langgg!!! Happy birthday and enjoy your day bibi!! Imy<3",

  "Jayvee: Happy birthday kuky, sa tagal na nating magkaibigan what are the things I didn't tell you? Hahaha, but one thing is for sure— I want to say that I hope you receive all the love and support that you deserve. You know naman na nandito lang ako and mga friends mo palagi. I hope matupad lahat ng wish mo sa life! 🎉",

  'Lorah: Happy Birthday my freny arsad, sana ay ma enjoy mo ang special day mon tulad ng pagigimg a special friend mo sa amin yieee chos hahaha😆. Sana lagi kang masaya and positive😌, sana matupad lahat ng mga pangarap mo sa buhay bago sama mo na kmi hahaha. Ayun lng thank you ksi pumasok ka sa buhay namin as a close friend, wag ka sanamg magbabago😆 stay safe mag iingat palagi sa labas and stay healthy lab u mwah mwah😘. Happy Birthday ulit bhie🥳💖',

  "Yshen: Hampiiee Birthday Kukita, wala na ako gaano madabi kasi nasabi ko naman na lahat. Pero always remember na andito lang ako palagi to support and comfort you along the way. Hindi man tayo lagi nagkakausap pero one thing for sure ung bond is kasing tibay ng mukha mo eme." ,
  
  "Yshen(1): Mahal na mahal kita teh kahit hindi mo ko mabigyan ng oras kimmi. Aral ka ng mabuti teh tama na ang drama matanda ka na kaya mo na yan. Ano pa ba 🤔 nawa'y magkita na tayo please lang kasi same lang tayo ng campus like duh. Ayun lang naman Happy Birthday sa pinakamaganda kong Habibi maaga ka man humarot pero Labyu saur much. Muwaps",
  
  "Nica: (Salamat sa liwanag mo, muling magkakakulay ang pasko) Pero bago magpasko, tatanda muna ng isang taon ang aming bunso. HAPPY 19TH BIRTHDAY KUKITAAA!!! Nakakatuwa kasi dati inaanticipate pa lang natin ung college life pero look at you now huhu you're a city girl na and I'm really happy that you're living your life beyond Imus.",
  
  "Nica(1): Wag mo pababayaan sarili mo dyan ah tatampalin kita if gagawin mo yan, need pa natin mag reunion... Awe namimiss tuloy kita... Tara MOA. Anyways, keep up the good work sa collegeeeee so proud of you so muchhhh. Don't let anyone or anything distract you from finishing your degree and having your dream career, tatampalin ko din kung sino man makakapag distract sayo. I wish you all the bestest Kukyyyy. I love you! Enjoy your day to the fullest, Happiest Birthday our bibi gurl mwahhhhh."
  //Add more messages as needed
];

let shownThemMessages = [];

function displayThemMessages() {
  // Check if all messages have been shown
  if (shownThemMessages.length === themMessages.length) {
    resetThemMessages();
    displayThemMessages();
    return;
  }

  // Select a random message that hasn't been shown recently
  let selectedThemMessage;
  do {
    selectedThemMessage = themMessages[Math.floor(Math.random() * themMessages.length)];
  } while (shownThemMessages.includes(selectedThemMessage));

  // Show the message
  document.getElementById('them-message').textContent = selectedThemMessage;

  // Add the message to the list of shown messages
  shownThemMessages.push(selectedThemMessage);
}
function resetThemMessages() {
  shownThemMessages = [];
}