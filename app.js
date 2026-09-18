const KEY="nourish-v2";
const LEGACY="nourish-v1";
const MEALS=["Breakfast","Lunch","Dinner","Snacks","Drinks"];
const ESSENTIALS=[
{id:"egg-boiled-medium",name:"Boiled egg",calories:72,protein:7.1,basis:1,basisUnit:"item",displayBasis:"1 medium egg (~50g)",defaultAmount:1,step:1,source:"CoFID-backed"},
{id:"banana",name:"Banana, flesh only",calories:81,protein:1.2,basis:100,basisUnit:"g",displayBasis:"per 100g",defaultAmount:100,step:10,source:"CoFID-backed"},
{id:"apple",name:"Apple, flesh and skin",calories:51,protein:0.6,basis:100,basisUnit:"g",displayBasis:"per 100g",defaultAmount:130,step:10,source:"CoFID-backed"},
{id:"rice-white-boiled",name:"White long grain rice, boiled",calories:131,protein:2.8,basis:100,basisUnit:"g",displayBasis:"per 100g cooked",defaultAmount:180,step:10,source:"CoFID-backed"},
{id:"chicken-breast-grilled",name:"Chicken breast, grilled, skinless",calories:148,protein:32,basis:100,basisUnit:"g",displayBasis:"per 100g cooked",defaultAmount:150,step:10,source:"CoFID-backed"},
{id:"salmon-grilled",name:"Salmon, farmed, grilled",calories:239,protein:24.6,basis:100,basisUnit:"g",displayBasis:"per 100g cooked",defaultAmount:120,step:10,source:"CoFID-backed"},
{id:"potato-boiled",name:"Potato, boiled, flesh only",calories:74,protein:1.8,basis:100,basisUnit:"g",displayBasis:"per 100g cooked",defaultAmount:175,step:10,source:"CoFID-backed"},
{id:"porridge-oats",name:"Porridge oats, dry",calories:381,protein:10.9,basis:100,basisUnit:"g",displayBasis:"per 100g dry",defaultAmount:40,step:5,source:"CoFID-backed"},
{id:"wholemeal-bread",name:"Wholemeal bread, average",calories:217,protein:9.4,basis:100,basisUnit:"g",displayBasis:"per 100g",defaultAmount:36,step:5,source:"CoFID-backed"},
{id:"semi-skimmed-milk",name:"Semi-skimmed milk",calories:46,protein:3.5,basis:100,basisUnit:"ml",displayBasis:"per 100ml",defaultAmount:200,step:10,source:"CoFID-backed"},
{id:"cheddar",name:"Cheddar cheese",calories:416,protein:25.4,basis:100,basisUnit:"g",displayBasis:"per 100g",defaultAmount:30,step:5,source:"CoFID-backed"}
];
const I18N={
en:{
 splashTag:"Small steps. Big results.",heroCopy:"I’m Saucisse, and I’m here to help you get fitter! Let’s do this together, step by step!",hello:"Hello!",
 calories:"Calories",protein:"Protein",exercise:"Exercise",netCalories:"Net calories",meals:"Meals",addExercise:"+ Exercise",progress:"Progress",
 past7:"Past 7 days",monthly:"Monthly",custom:"Custom",from:"From",to:"To",apply:"Apply",selectedPeriod:"Selected period",
 averageCalories:"Average net calories",averageProtein:"Average protein",target:"Target",weight:"Weight",waist:"Waist",addMeasurement:"+ Add measurement",
 editMeasurement:"Edit measurement",saveMeasurement:"Save measurement",deleteMeasurement:"Delete measurement",tapBar:"Tap a bar to edit",
 badges:"Badges",doingAmazing:"You're doing amazing!",unlockMore:"Keep going to unlock more badges.",all:"All",nutrition:"Nutrition",activity:"Activity",journey:"Journey",
 more:"More",goals:"Goals",dailyCalories:"Daily calories",dailyProtein:"Daily protein",weightGoal:"Weight goal",language:"Language",data:"Data",
 exportBackup:"Export backup",restoreBackup:"Restore backup",exportCsv:"Export CSV",deleteAll:"Delete All Data",home:"Home",addFood:"Add Food",essentials:"Essentials",
 favourites:"Favourites",customFood:"Custom",duration:"Duration (min)",caloriesBurned:"Calories burned",saveExercise:"Save Exercise",measurement:"Measurement",date:"Date",
 foodName:"Food name",meal:"Meal",amount:"Amount",quantity:"Quantity",saveFavourite:"Save as favourite",addDiary:"Add to diary",total:"Total",reference:"Reference",
 caloriesPerItem:"Calories per item",proteinPerItem:"Protein per item (g)",editFood:"Edit Food",saveChanges:"Save changes",deleteDiary:"Delete from diary",
 noFavourites:"No favourites yet.",sourceNote:"Reference nutrition values are standard values. Amounts are calculated from the quantity you enter; packaged foods can differ, so use the label when available.",
 locked:"Locked",unlocked:"Unlocked",collected:"collected",progressWord:"Progress",days:"days",workouts:"workouts",checkIns:"check-ins",
 noWeight:"No weight data yet",noWaist:"No waist data yet",measurementEmpty:"Add a measurement to start tracking your progress.",
 invalidRange:"Choose a valid date range.",replaceBackup:"Replace the data on this device with this backup?",invalidBackup:"Invalid backup.",deleteAll1:"Delete ALL Step by Step! data on this device?",deleteAll2:"Final confirmation: delete everything?",
 deleteMeasurementConfirm:"Delete this measurement?",deleteFoodConfirm:"Delete this food from the diary?",nothingLogged:"Nothing logged yet",add:"Add",burned:"kcal burned",
 proteinWord:"protein",item:"item",items:"items",backEssentials:"‹ Essentials",backFavourites:"‹ Favourites",activityGym:"Gym",activityWalking:"Walking",activityRunning:"Running",activityYoga:"Yoga",activityOther:"Other"
},
fr:{
 splashTag:"Petits pas. Grands résultats.",heroCopy:"Moi, c’est Saucisse, et je suis là pour t’aider à te remettre en forme ! Allez, faisons ça ensemble, pas à pas !",hello:"Hello!",
 calories:"Calories",protein:"Protéines",exercise:"Exercice",netCalories:"Calories nettes",meals:"Repas",addExercise:"+ Exercice",progress:"Progrès",
 past7:"7 derniers jours",monthly:"Mensuel",custom:"Personnalisé",from:"Du",to:"Au",apply:"Appliquer",selectedPeriod:"Période sélectionnée",
 averageCalories:"Moyenne des calories nettes",averageProtein:"Moyenne des protéines",target:"Objectif",weight:"Poids",waist:"Tour de taille",addMeasurement:"+ Ajouter une mesure",
 editMeasurement:"Modifier la mesure",saveMeasurement:"Enregistrer la mesure",deleteMeasurement:"Supprimer la mesure",tapBar:"Appuyez sur une barre pour la modifier",
 badges:"Badges",doingAmazing:"Tu fais un super travail !",unlockMore:"Continue pour débloquer d’autres badges.",all:"Tous",nutrition:"Nutrition",activity:"Activité",journey:"Parcours",
 more:"Plus",goals:"Objectifs",dailyCalories:"Calories quotidiennes",dailyProtein:"Protéines quotidiennes",weightGoal:"Objectif de poids",language:"Langue",data:"Données",
 exportBackup:"Exporter une sauvegarde",restoreBackup:"Restaurer une sauvegarde",exportCsv:"Exporter en CSV",deleteAll:"Supprimer toutes les données",home:"Accueil",addFood:"Ajouter un aliment",essentials:"Essentiels",
 favourites:"Favoris",customFood:"Personnalisé",duration:"Durée (min)",caloriesBurned:"Calories brûlées",saveExercise:"Enregistrer l’exercice",measurement:"Mesure",date:"Date",
 foodName:"Nom de l’aliment",meal:"Repas",amount:"Quantité",quantity:"Quantité",saveFavourite:"Ajouter aux favoris",addDiary:"Ajouter au journal",total:"Total",reference:"Référence",
 caloriesPerItem:"Calories par unité",proteinPerItem:"Protéines par unité (g)",editFood:"Modifier l’aliment",saveChanges:"Enregistrer les modifications",deleteDiary:"Supprimer du journal",
 noFavourites:"Aucun favori pour le moment.",sourceNote:"Les valeurs nutritionnelles sont des valeurs de référence. Les quantités sont calculées selon la quantité saisie ; pour les produits emballés, utilisez l’étiquette lorsqu’elle est disponible.",
 locked:"Verrouillé",unlocked:"Débloqué",collected:"débloqués",progressWord:"Progression",days:"jours",workouts:"entraînements",checkIns:"mesures",
 noWeight:"Aucune donnée de poids",noWaist:"Aucune donnée de tour de taille",measurementEmpty:"Ajoutez une mesure pour commencer à suivre votre évolution.",
 invalidRange:"Choisissez une plage de dates valide.",replaceBackup:"Remplacer les données de cet appareil par cette sauvegarde ?",invalidBackup:"Sauvegarde invalide.",deleteAll1:"Supprimer TOUTES les données Step by Step! de cet appareil ?",deleteAll2:"Dernière confirmation : tout supprimer ?",
 deleteMeasurementConfirm:"Supprimer cette mesure ?",deleteFoodConfirm:"Supprimer cet aliment du journal ?",nothingLogged:"Rien d’enregistré",add:"Ajouter",burned:"kcal brûlées",
 proteinWord:"protéines",item:"unité",items:"unités",backEssentials:"‹ Essentiels",backFavourites:"‹ Favoris",activityGym:"Salle de sport",activityWalking:"Marche",activityRunning:"Course",activityYoga:"Yoga",activityOther:"Autre"
}
}
const MEAL_FR={Breakfast:"Petit-déjeuner",Lunch:"Déjeuner",Dinner:"Dîner",Snacks:"Encas",Drinks:"Boissons"};
const ESSENTIAL_FR={
 "egg-boiled-medium":["Œuf dur","1 œuf moyen (~50 g)"],"banana":["Banane, chair seulement","pour 100 g"],"apple":["Pomme, chair et peau","pour 100 g"],
 "rice-white-boiled":["Riz blanc long grain, cuit","pour 100 g cuits"],"chicken-breast-grilled":["Blanc de poulet grillé, sans peau","pour 100 g cuits"],
 "salmon-grilled":["Saumon d’élevage, grillé","pour 100 g cuits"],"potato-boiled":["Pomme de terre bouillie, chair seulement","pour 100 g cuits"],
 "porridge-oats":["Flocons d’avoine, secs","pour 100 g secs"],"wholemeal-bread":["Pain complet, moyenne","pour 100 g"],
 "semi-skimmed-milk":["Lait demi-écrémé","pour 100 ml"],"cheddar":["Cheddar","pour 100 g"]
};
const BADGE_COPY={
 en:{
  "first-step":["First Step","Log your first food entry.","Logged your first food entry"],
  "getting-started":["Getting Started","Log food on 3 different days.","Logged food on 3 different days"],
  "one-week":["One Week","Log food on 7 different days.","Logged food on 7 different days"],
  "two-weeks":["Two Weeks Strong","Log food on 14 different days.","Logged food on 14 different days"],
  "month-motion":["Month in Motion","Log food on 30 different days.","Logged food on 30 different days"],
  "full-day-pup":["Full Day Pup","Log breakfast, lunch and dinner on the same day.","Logged breakfast, lunch and dinner in one day"],
  "protein-pup":["Protein Pup","Meet your protein target once.","Met your protein target once"],
  "protein-pro":["Protein Pro","Meet your protein target on 7 different days.","Met your protein target on 7 different days"],
  "balanced-day":["Balanced Day","Finish a day within ±5% of your calorie target and meet your protein target.","Completed a balanced calorie and protein day"],
  "balanced-week":["Balanced Week","Keep a full week's average calories within ±5% of target and average protein at or above target.","Completed a balanced week"],
  "favourite-find":["Favourite Find","Save your first food or drink as a Favourite.","Saved your first Favourite"],
  "quick-pick-pup":["Quick Pick Pup","Add your first food from Essentials.","Added your first food from Essentials"],
  "first-workout":["First Workout","Log your first exercise session.","Logged your first workout"],
  "active-pup":["Active Pup","Log 5 exercise sessions.","Logged 5 workouts"],
  "exercise-expert":["Exercise Expert","Log 25 exercise sessions.","Logged 25 workouts"],
  "progress-begins":["Progress Begins","Record your first weight or waist measurement.","Started tracking measurements"],
  "keeping-track":["Keeping Track","Record weight or waist measurements on 5 different dates.","Recorded measurements on 5 different dates"],
  "halfway-there":["Halfway There","Reach halfway from your starting weight to your goal weight.","Reached halfway to your weight goal"],
  "goal-getter":["Goal Getter","Reach your weight goal.","Reached your weight goal"],
  "step-by-step":["Step by Step!","Unlock the other 19 Saucisse badges.","Unlocked every Saucisse badge"]
 },
 fr:{
  "first-step":["Premier pas","Enregistrez votre premier aliment.","Premier aliment enregistré"],
  "getting-started":["C’est parti !","Enregistrez des aliments pendant 3 jours différents.","Aliments enregistrés pendant 3 jours différents"],
  "one-week":["Une semaine","Enregistrez des aliments pendant 7 jours différents.","Aliments enregistrés pendant 7 jours différents"],
  "two-weeks":["Deux semaines au top","Enregistrez des aliments pendant 14 jours différents.","Aliments enregistrés pendant 14 jours différents"],
  "month-motion":["Un mois en mouvement","Enregistrez des aliments pendant 30 jours différents.","Aliments enregistrés pendant 30 jours différents"],
  "full-day-pup":["Journée complète","Enregistrez le petit-déjeuner, le déjeuner et le dîner le même jour.","Petit-déjeuner, déjeuner et dîner enregistrés le même jour"],
  "protein-pup":["Pup protéines","Atteignez votre objectif de protéines une fois.","Objectif de protéines atteint une fois"],
  "protein-pro":["Pro des protéines","Atteignez votre objectif de protéines pendant 7 jours différents.","Objectif de protéines atteint pendant 7 jours différents"],
  "balanced-day":["Journée équilibrée","Terminez une journée à ±5 % de votre objectif calorique et atteignez votre objectif de protéines.","Journée équilibrée en calories et protéines"],
  "balanced-week":["Semaine équilibrée","Gardez la moyenne calorique de la semaine à ±5 % de l’objectif et la moyenne de protéines au niveau ou au-dessus de l’objectif.","Semaine équilibrée terminée"],
  "favourite-find":["Coup de cœur","Ajoutez votre premier aliment ou boisson aux favoris.","Premier favori enregistré"],
  "quick-pick-pup":["Choix express","Ajoutez votre premier aliment depuis les Essentiels.","Premier aliment ajouté depuis les Essentiels"],
  "first-workout":["Premier entraînement","Enregistrez votre première séance d’exercice.","Première séance d’exercice enregistrée"],
  "active-pup":["Pup actif","Enregistrez 5 séances d’exercice.","5 séances d’exercice enregistrées"],
  "exercise-expert":["Expert de l’exercice","Enregistrez 25 séances d’exercice.","25 séances d’exercice enregistrées"],
  "progress-begins":["Le progrès commence","Enregistrez votre première mesure de poids ou de tour de taille.","Suivi des mesures commencé"],
  "keeping-track":["Suivi régulier","Enregistrez des mesures de poids ou de tour de taille à 5 dates différentes.","Mesures enregistrées à 5 dates différentes"],
  "halfway-there":["À mi-chemin","Atteignez la moitié du chemin entre votre poids de départ et votre objectif.","Mi-chemin vers l’objectif de poids atteint"],
  "goal-getter":["Objectif atteint","Atteignez votre objectif de poids.","Objectif de poids atteint"],
  "step-by-step":["Step by Step!","Débloquez les 19 autres badges de Saucisse.","Tous les badges de Saucisse débloqués"]
 }
};
function essentialName(f){return lang()==="fr"&&ESSENTIAL_FR[f.id]?ESSENTIAL_FR[f.id][0]:f.name}
function essentialBasis(f){return lang()==="fr"&&ESSENTIAL_FR[f.id]?ESSENTIAL_FR[f.id][1]:f.displayBasis}
function foodDisplayName(x){if(x?.sourceType==="essential"&&x.essentialId){let f=ESSENTIALS.find(e=>e.id===x.essentialId);if(f)return essentialName(f)}return x?.name||""}
function foodDisplayBasis(x){if(x?.sourceType==="essential"&&x.essentialId){let f=ESSENTIALS.find(e=>e.id===x.essentialId);if(f)return essentialBasis(f)}return x?.displayBasis||""}
function badgeCopy(id){return (BADGE_COPY[lang()]&&BADGE_COPY[lang()][id])||BADGE_COPY.en[id]||[id,"",""]}

const BADGES=[
{id:"first-step",name:"First Step",cat:"journey",test:()=>loggedDays().length>=1,img:"badge-first-step.png"},
{id:"getting-started",name:"Getting Started",cat:"journey",test:()=>loggedDays().length>=3,img:"badge-getting-started.png"},
{id:"one-week",name:"One Week",cat:"journey",test:()=>loggedDays().length>=7,img:"badge-one-week.png"},
{id:"two-weeks",name:"Two Weeks Strong",cat:"journey",test:()=>loggedDays().length>=14,img:"badge-two-weeks-strong.png"},
{id:"month-motion",name:"Month in Motion",cat:"journey",test:()=>loggedDays().length>=30,img:"badge-month-in-motion.png"},
{id:"full-day-pup",name:"Full Day Pup",cat:"nutrition",test:()=>hasFullDay(),img:"badge-full-day-pup.png"},
{id:"protein-pup",name:"Protein Pup",cat:"nutrition",test:()=>proteinHits()>=1,img:"badge-protein-pup.png"},
{id:"protein-pro",name:"Protein Pro",cat:"nutrition",test:()=>proteinHits()>=7,img:"badge-protein-pro.png"},
{id:"balanced-day",name:"Balanced Day",cat:"nutrition",test:()=>balancedDays()>=1,img:"badge-balanced-day.png"},
{id:"balanced-week",name:"Balanced Week",cat:"nutrition",test:()=>balancedWeek(),img:"badge-balanced-week.png"},
{id:"favourite-find",name:"Favourite Find",cat:"nutrition",test:()=>db.favourites.length>=1,img:"badge-favourite-find.png"},
{id:"quick-pick-pup",name:"Quick Pick Pup",cat:"nutrition",test:()=>db.foods.some(x=>x.sourceType==="essential"),img:"badge-quick-pick-pup.png"},
{id:"first-workout",name:"First Workout",cat:"activity",test:()=>db.exercises.length>=1,img:"badge-first-workout.png"},
{id:"active-pup",name:"Active Pup",cat:"activity",test:()=>db.exercises.length>=5,img:"badge-active-pup.png"},
{id:"exercise-expert",name:"Exercise Expert",cat:"activity",test:()=>db.exercises.length>=25,img:"badge-exercise-expert.png"},
{id:"progress-begins",name:"Progress Begins",cat:"progress",test:()=>measurementDates()>=1,img:"badge-progress-begins.png"},
{id:"keeping-track",name:"Keeping Track",cat:"progress",test:()=>measurementDates()>=5,img:"badge-keeping-track.png"},
{id:"halfway-there",name:"Halfway There",cat:"progress",test:()=>halfwayToGoal(),img:"badge-halfway-there.png"},
{id:"goal-getter",name:"Goal Getter",cat:"progress",test:()=>goalReached(),img:"badge-goal-getter.png"},
{id:"step-by-step",name:"Step by Step!",cat:"progress",test:()=>BADGES.slice(0,19).every(b=>safeBadgeTest(b)),img:"badge-step-by-step.png"}
];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const todayISO=()=>new Date().toISOString().slice(0,10);
let selectedDate=todayISO(),period="last7",foodTab="custom",selectedMeal="Breakfast",badgeFilter="all",qty=1,selectedEssentialId=null;
let customStart=addDays(todayISO(),-6),customEnd=todayISO();
let db=load();

function fresh(){return {settings:{calories:2000,protein:160,weightGoal:null,lang:"en"},foods:[],exercises:[],measurements:[],favourites:[],meta:{}}}
function normalizeDb(x){
 const f=fresh(),src=x&&typeof x==="object"?x:{};
 return {
  settings:{...f.settings,...(src.settings&&typeof src.settings==="object"?src.settings:{})},
  foods:Array.isArray(src.foods)?src.foods:[],
  exercises:Array.isArray(src.exercises)?src.exercises:[],
  measurements:Array.isArray(src.measurements)?src.measurements:[],
  favourites:Array.isArray(src.favourites)?src.favourites:[],
  meta:src.meta&&typeof src.meta==="object"?src.meta:{}
 }
}
function load(){try{let raw=localStorage.getItem(KEY);if(raw)return normalizeDb(JSON.parse(raw));let old=localStorage.getItem(LEGACY);if(old)return normalizeDb(JSON.parse(old));}catch(e){console.warn("Could not read saved data",e)}return fresh()}
function save(){localStorage.setItem(KEY,JSON.stringify(db));render();syncBadgeUnlocks(true)}
function lang(){return db.settings.lang||"en"}function t(k){return I18N[lang()][k]||k}
function applyI18N(){
 document.documentElement.lang=lang();
 $$("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
 $$("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang()));
 const acts={Gym:"activityGym",Walking:"activityWalking",Running:"activityRunning",Yoga:"activityYoga",Other:"activityOther"};
 $$("#activityType option").forEach(o=>{if(acts[o.value])o.textContent=t(acts[o.value])});
 $$("#editFoodMeal option").forEach(o=>o.textContent=mealLabel(o.value));
}
function mealLabel(m){return lang()==="fr"?MEAL_FR[m]:m}
function uid(){return crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random()}
function addDays(ds,n){let d=new Date(ds+"T12:00:00");d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)}
function fmtDay(ds){return new Date(ds+"T12:00:00").toLocaleDateString(lang()==="fr"?"fr-FR":"en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"})}
function shortDay(ds){
 let d=new Date(ds+"T12:00:00");
 return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}`
}
function monthLabel(ds){
 let d=new Date(ds+"T12:00:00");
 let m=d.toLocaleDateString(lang()==="fr"?"fr-FR":"en-GB",{month:"short"}).replace(".","");
 return `${m.charAt(0).toUpperCase()+m.slice(1)} ${String(d.getFullYear()).slice(-2)}`
}
function foodItems(d){return db.foods.filter(x=>x.date===d)}function exItems(d){return db.exercises.filter(x=>x.date===d)}
function totals(d){let f=foodItems(d),e=exItems(d);let eaten=f.reduce((a,x)=>a+(+x.calories||0)*(+x.quantity||1),0),pro=f.reduce((a,x)=>a+(+x.protein||0)*(+x.quantity||1),0),burned=e.reduce((a,x)=>a+(+x.burned||0),0),mins=e.reduce((a,x)=>a+(+x.minutes||0),0);return {eaten,pro,burned,mins,net:eaten-burned}}
function loggedDays(){return [...new Set(db.foods.map(x=>x.date))].sort()}
function proteinHits(){return loggedDays().filter(d=>totals(d).pro>=(+db.settings.protein||160)).length}
function hasFullDay(){return loggedDays().some(d=>["Breakfast","Lunch","Dinner"].every(m=>db.foods.some(x=>x.date===d&&x.meal===m)))}
function balancedDays(){let calT=+db.settings.calories||2000,proT=+db.settings.protein||160;return loggedDays().filter(d=>{let t=totals(d);return t.net>=calT*.95&&t.net<=calT*1.05&&t.pro>=proT}).length}
function balancedWeek(){
 let calT=+db.settings.calories||2000,proT=+db.settings.protein||160,days=loggedDays();
 for(let end of days){
   let week=[];for(let i=6;i>=0;i--)week.push(addDays(end,-i));
   if(!week.every(d=>foodItems(d).length>0))continue;
   let avgCal=week.reduce((a,d)=>a+totals(d).net,0)/7;
   let avgPro=week.reduce((a,d)=>a+totals(d).pro,0)/7;
   if(avgCal>=calT*.95&&avgCal<=calT*1.05&&avgPro>=proT)return true;
 }
 return false
}
function measurementDates(){return new Set(db.measurements.filter(x=>x.weight||x.waist).map(x=>x.date)).size}
function halfwayToGoal(){let m=[...db.measurements].filter(x=>x.weight).sort((a,b)=>a.date.localeCompare(b.date));if(m.length<2||!db.settings.weightGoal)return false;let start=+m[0].weight,cur=+m.at(-1).weight,g=+db.settings.weightGoal;if(start===g)return true;return Math.abs(cur-g)<=Math.abs(start-g)/2}
function goalReached(){let m=[...db.measurements].filter(x=>x.weight).sort((a,b)=>a.date.localeCompare(b.date));if(!m.length||!db.settings.weightGoal)return false;let start=+m[0].weight,cur=+m.at(-1).weight,g=+db.settings.weightGoal;return start>g?cur<=g:cur>=g}

function render(){
 applyI18N();renderHome();renderProgress();renderBadges();renderMore()
}
function renderHome(){
 $("#selectedDateLabel").textContent=fmtDay(selectedDate);
 let tt=totals(selectedDate),calT=+db.settings.calories||2000,proT=+db.settings.protein||160;
 $("#homeCalories").textContent=Math.round(tt.eaten);$("#homeProtein").textContent=Math.round(tt.pro)+"g";$("#homeExercise").textContent=Math.round(tt.mins)+" min";$("#homeBurned").textContent=`${Math.round(tt.burned)} ${t("burned")}`;$("#homeNet").textContent=Math.round(tt.net);
 $("#homeCalTarget").textContent=`/ ${calT} kcal`;$("#homeProteinTarget").textContent=`/ ${proT}g`;$("#homeNetTarget").textContent=`/ ${calT} kcal`;
 renderHomeGauges(tt,calT,proT);
 $("#helloText").textContent=t("hello");
 let state=mascotState(tt,calT,proT);$("#homeMascotImg").src=state.img;$("#homeMascotTitle").textContent=state.title;$("#homeMascotCopy").textContent=state.copy;
 $("#mealSections").innerHTML=MEALS.map((m,i)=>mealCard(m,i)).join("")
}
function renderHomeGauges(tt,calT,proT){
 let net=Math.max(0,+tt.net||0),pro=Math.max(0,+tt.pro||0);
 let netPct=Math.min(100,calT>0?net/calT*100:0),proPct=Math.min(100,proT>0?pro/proT*100:0);
 let netOver=net>calT,proMet=pro>=proT;
 $("#netGaugeValue").textContent=`${Math.round(tt.net)} / ${calT} kcal`;
 $("#netGaugeFill").style.width=`${netPct}%`;$("#netGaugeFill").style.background=netOver?"var(--red)":"var(--green)";
 $("#netGaugeNote").textContent=netOver?(lang()==="fr"?`${Math.round(net-calT)} kcal au-dessus de l’objectif`:`${Math.round(net-calT)} kcal over target`):(lang()==="fr"?`${Math.round(netPct)} % de l’objectif`:`${Math.round(netPct)}% of target`);
 $("#proteinGaugeValue").textContent=`${Math.round(pro)} / ${proT} g`;
 $("#proteinGaugeFill").style.width=`${proPct}%`;$("#proteinGaugeFill").style.background=proMet?"var(--green)":"var(--red)";
 $("#proteinGaugeNote").textContent=proMet?(lang()==="fr"?"Objectif protéines atteint":"Protein target reached"):(lang()==="fr"?`${Math.max(0,Math.round(proT-pro))} g restants`:`${Math.max(0,Math.round(proT-pro))} g to go`);
}
function mascotState(tt,calT,proT){
 const hasFood=foodItems(selectedDate).length>0,net=+tt.net||0,pro=+tt.pro||0,mins=+tt.mins||0;
 const isToday=selectedDate===todayISO(),hour=new Date().getHours(),late=!isToday||hour>=18;
 if(!hasFood)return {img:"curious.png",title:lang()==="fr"?"Prêt quand tu veux !":"Ready when you are!",copy:lang()==="fr"?"Commence quand tu veux. Chaque petit pas compte.":"Start whenever you're ready. Every little step counts."};
 if(net>calT)return {img:"sad.png",title:lang()==="fr"?"Un peu au-dessus, et ce n’est pas grave.":"A little over today, and that's okay.",copy:lang()==="fr"?(pro>=proT?"Tu as quand même atteint ton objectif de protéines. Une journée ne définit pas tes progrès.":"Une journée ne définit pas tes progrès. Demain sera une nouvelle étape."):(pro>=proT?"You still hit your protein goal. One day doesn't define your progress.":"One day doesn't define your progress. Tomorrow is another step.")};
 if(!late){
  if(pro>=proT||net>=calT*.75)return {img:"excited.png",title:lang()==="fr"?"Ça avance bien !":"Looking good!",copy:lang()==="fr"?"Ta journée est encore en cours. Continue comme ça !":"Your day is still in progress. Keep it going!"};
  return {img:"curious.png",title:lang()==="fr"?"On continue !":"Keep going!",copy:lang()==="fr"?"Je suis encore en train de découvrir ta journée avec toi.":"I'm still getting the full picture of your day with you."};
 }
 if(pro>=proT&&net>=calT*.9)return {img:"happy.png",title:lang()==="fr"?"Super équilibre aujourd’hui !":"Great balance today!",copy:lang()==="fr"?"Bien joué, tes calories et tes protéines sont dans une très bonne zone.":"Well done, your calories and protein are in a really good place."};
 if(mins===0)return {img:"sleepy.png",title:lang()==="fr"?"Journée tranquille ?":"Taking it easy today?",copy:lang()==="fr"?"Le repos fait aussi partie du parcours. On reprend pas à pas.":"Rest is part of the journey too. We'll keep going step by step."};
 if(pro<proT)return {img:"excited.png",title:lang()==="fr"?"Presque !":"Nearly there!",copy:lang()==="fr"?"Les calories sont bien placées. Un peu plus de protéines compléterait bien la journée.":"Calories are looking good. A little more protein would round out the day."};
 return {img:"happy.png",title:lang()==="fr"?"Belle journée !":"Nice day!",copy:lang()==="fr"?"Continue comme ça, pas à pas.":"Keep it going, step by step."}
}
function mealCard(m,i){
 let icons=["breakfast.png","lunch.png","dinner.png","snacks.png","drinks.png"],items=foodItems(selectedDate).filter(x=>x.meal===m),cal=items.reduce((a,x)=>a+(+x.calories||0)*(+x.quantity||1),0),pro=items.reduce((a,x)=>a+(+x.protein||0)*(+x.quantity||1),0);
 return `<div class="meal-card"><div class="meal-header"><div class="meal-name"><span class="meal-icon"><img src="${icons[i]}" alt=""></span>${mealLabel(m)}</div><button class="meal-add" onclick="openFood('${m}')">+ ${lang()==="fr"?"Ajouter":"Add"}</button></div>
 <div class="meal-items">${items.length?items.map(x=>`<div class="food-row"><button onclick="editFood('${x.id}')"><strong>${esc(foodDisplayName(x))}${x.amount?` · ${x.amount}${x.amountUnit==="item"?` ${x.amount==1?t("item"):t("items")}`:x.amountUnit}`:((+x.quantity||1)>1?` × ${x.quantity}`:"")}</strong><br><small>${Math.round((+x.calories||0)*(+x.quantity||1))} kcal · ${round1((+x.protein||0)*(+x.quantity||1))}g ${t("proteinWord")}</small></button><span>›</span></div>`).join(""):`<div class="food-row"><small>${t("nothingLogged")}</small></div>`}</div>
 <div class="meal-total"><span>${Math.round(cal)} kcal</span><span>${round1(pro)}g ${t("proteinWord")}</span></div></div>`
}
function dateRange(start,end){
 let out=[];if(!start||!end||start>end)return out;let d=start,guard=0;
 while(d<=end&&guard<3700){let t=totals(d);out.push({label:shortDay(d),date:d,cal:t.net,pro:t.pro,hasFood:foodItems(d).length>0});d=addDays(d,1);guard++}
 return out
}
function selectedBounds(){
 let today=todayISO();
 if(period==="last7")return [addDays(today,-6),today];
 if(period==="custom")return [customStart,customEnd];
 let now=new Date(today+"T12:00:00"),s=new Date(now.getFullYear(),now.getMonth()-11,1),start=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-01`;
 return [start,today]
}
function periodLabel(start,end){
 if(period==="month")return lang()==="fr"?"12 derniers mois":"Last 12 months";
 let opts={day:"numeric",month:"short",year:"numeric"},loc=lang()==="fr"?"fr-FR":"en-GB";
 return `${new Date(start+"T12:00:00").toLocaleDateString(loc,opts)} – ${new Date(end+"T12:00:00").toLocaleDateString(loc,opts)}`
}
function renderProgress(){
 let bounds=selectedBounds(),data=period==="month"?monthlyRange(12):dateRange(bounds[0],bounds[1]);
 let actualDays=loggedDays().filter(d=>d>=bounds[0]&&d<=bounds[1]),avgC=actualDays.length?actualDays.reduce((a,d)=>a+totals(d).net,0)/actualDays.length:null,avgP=actualDays.length?actualDays.reduce((a,d)=>a+totals(d).pro,0)/actualDays.length:null;
 $("#periodSummaryLabel").textContent=periodLabel(bounds[0],bounds[1]);
 $("#avgCalories").textContent=avgC==null?"N/A":`${Math.round(avgC)} kcal`;$("#avgProtein").textContent=avgP==null?"N/A":`${round1(avgP)}g`;$("#avgCaloriesTarget").textContent=`${t("target")} ${db.settings.calories||2000}`;$("#avgProteinTarget").textContent=`${t("target")} ${db.settings.protein||160}g`;
 let s=progressState(avgC,avgP);$("#progressMascot").src=s.img;$("#progressHeadline").textContent=s.title;$("#progressMessage").textContent=s.copy;
 renderBarChart($("#calorieChart"),data,"cal",+db.settings.calories||2000,"calorie");
 renderBarChart($("#proteinChart"),data,"pro",+db.settings.protein||160,"protein");
 renderMeasurementCharts(bounds[0],bounds[1]);
 $$("[data-monthly-note]").forEach(n=>{n.hidden=period!=="month";n.textContent=lang()==="fr"?"ⓘ Les valeurs mensuelles de calories et de protéines correspondent à la moyenne par jour enregistré.":"ⓘ Monthly calorie and protein values show the average per logged day."});
}
function monthlyRange(n){let now=new Date(),out=[];for(let i=n-1;i>=0;i--){let d=new Date(now.getFullYear(),now.getMonth()-i,1),y=d.getFullYear(),m=d.getMonth(),key=`${y}-${String(m+1).padStart(2,"0")}`;let ds=loggedDays().filter(x=>x.startsWith(key));let cal=ds.length?ds.reduce((a,x)=>a+totals(x).net,0)/ds.length:0,pro=ds.length?ds.reduce((a,x)=>a+totals(x).pro,0)/ds.length:0;out.push({label:monthLabel(`${y}-${String(m+1).padStart(2,"0")}-01`),cal,pro,hasFood:ds.length>0})}return out}
function progressState(c,p){
 if(c==null||p==null)return {img:"curious.png",title:lang()==="fr"?"Commençons !":"Let's get started!",copy:lang()==="fr"?"Enregistre quelques jours et Saucisse t’aidera à lire la tendance.":"Log a few days and Saucisse will help you read the trend."};
 let ct=+db.settings.calories||2000,pt=+db.settings.protein||160,cr=c/ct,pr=p/pt;
 if(c>ct*1.05)return {img:"sad.png",title:lang()==="fr"?"Un peu au-dessus, et ce n’est pas grave.":"A little over, and that's okay.",copy:lang()==="fr"?"Une période ne définit pas tes progrès. Regarde la tendance et continue pas à pas.":"One period doesn't define your progress. Look at the trend and keep going step by step."};
 if(cr>=.95&&cr<=1.05&&pr>=1)return {img:"happy.png",title:lang()==="fr"?"Super période !":"Great period!",copy:lang()==="fr"?"Tes moyennes sont très proches de tes objectifs.":"Your averages are sitting nicely around your targets."};
 if(pr<.75||cr<.8)return {img:"curious.png",title:lang()==="fr"?"On continue !":"Keep going!",copy:lang()==="fr"?"La tendance est encore en construction. Chaque entrée nous donne une meilleure image.":"The trend is still taking shape. Every entry gives us a better picture."};
 return {img:"excited.png",title:lang()==="fr"?"Presque !":"Nearly there!",copy:lang()==="fr"?"Tu n’es pas loin. Continue pas à pas.":"You're not far off. Keep going step by step."}
}
function renderBarChart(el,data,key,target,type){
 let max=Math.max(target,...data.filter(x=>x.hasFood).map(x=>x[key]),1)*1.15,isDaily=period!=="month";
 el.classList.toggle("empty-chart",!data.some(x=>x.hasFood));
 el.innerHTML=data.map(x=>{let dow="";if(isDaily&&x.date){dow=new Date(x.date+"T12:00:00").toLocaleDateString(lang()==="fr"?"fr-FR":"en-GB",{weekday:"short"}).replace(".","");dow=dow.charAt(0).toUpperCase()+dow.slice(1)}if(!x.hasFood)return `<div class="bar-item na"><div class="bar-dow">${dow}</div><div class="bar-value">N/A</div><div class="bar-rail"></div><div class="bar-label">${x.label}</div></div>`;
 let val=x[key],pct=Math.max(4,Math.min(100,val/max*100)),color=type==="calorie"?(val<=target?"var(--green)":"var(--red)"):(val>=target?"var(--green)":"var(--red)");
 return `<div class="bar-item"><div class="bar-dow">${dow}</div><div class="bar-value">${Math.round(val)}</div><div class="bar-rail"><i class="bar-fill" style="height:${pct}%;background:${color}"></i></div><div class="bar-label">${x.label}</div></div>`}).join("")
}
function renderMeasurementCharts(start,end){
 let ms=[...db.measurements].filter(x=>x.date>=start&&x.date<=end).sort((a,b)=>a.date.localeCompare(b.date)),weights=ms.filter(x=>x.weight),waists=ms.filter(x=>x.waist);
 renderMeasureBars($("#weightChart"),weights,"weight");renderMeasureBars($("#waistChart"),waists,"waist")
}
function renderMeasureBars(el,items,key){
 if(!items.length){
   el.classList.add("empty-chart");
   let title=key==="weight"?t("noWeight"):t("noWaist");
   el.innerHTML=`<div class="measurement-empty"><img src="saucisse-curious-measurement.png" alt="Saucisse"><strong>${title}</strong><span>${t("measurementEmpty")}</span></div>`;
   return
 }
 el.classList.remove("empty-chart");
 let vals=items.map(x=>+x[key]),min=Math.min(...vals),max=Math.max(...vals),span=Math.max(max-min,1);
 el.innerHTML=items.map((x,i)=>{
   let v=+x[key],pct=items.length===1?58:Math.max(32,Math.min(92,32+((v-min)/span)*60));
   let color="var(--blue)";
   if(i>0){let prev=+items[i-1][key];color=v<prev?"var(--green)":v>prev?"var(--red)":"var(--blue)"}
   return `<button type="button" class="bar-item measurement-entry" onclick="openMeasurementEdit('${x.id}')"><div class="bar-value">${round1(v)}</div><div class="bar-rail"><i class="bar-fill" style="height:${pct}%;background:${color}"></i></div><div class="bar-label">${shortDay(x.date)}</div></button>`
 }).join("")
}
function badgeRequirement(id){
 const req={
 "first-step":[()=>Math.min(1,db.foods.length),1,"days"],"getting-started":[()=>Math.min(3,loggedDays().length),3,"days"],"one-week":[()=>Math.min(7,loggedDays().length),7,"days"],
 "two-weeks":[()=>Math.min(14,loggedDays().length),14,"days"],"month-motion":[()=>Math.min(30,loggedDays().length),30,"days"],"full-day-pup":[()=>hasFullDay()?1:0,1,null],
 "protein-pup":[()=>Math.min(1,proteinHits()),1,"days"],"protein-pro":[()=>Math.min(7,proteinHits()),7,"days"],"balanced-day":[()=>Math.min(1,balancedDays()),1,null],
 "balanced-week":[()=>balancedWeek()?1:0,1,null],"favourite-find":[()=>Math.min(1,db.favourites.length),1,null],"quick-pick-pup":[()=>db.foods.some(x=>x.sourceType==="essential")?1:0,1,null],
 "first-workout":[()=>Math.min(1,db.exercises.length),1,"workouts"],"active-pup":[()=>Math.min(5,db.exercises.length),5,"workouts"],"exercise-expert":[()=>Math.min(25,db.exercises.length),25,"workouts"],
 "progress-begins":[()=>Math.min(1,measurementDates()),1,"checkIns"],"keeping-track":[()=>Math.min(5,measurementDates()),5,"checkIns"],"halfway-there":[()=>halfwayToGoal()?1:0,1,null],
 "goal-getter":[()=>goalReached()?1:0,1,null],"step-by-step":[()=>BADGES.slice(0,19).filter(b=>isBadgeUnlocked(b)).length,19,null]
 };
 const r=req[id]||[()=>0,1,null],copy=badgeCopy(id);
 return [copy[1],r[0],r[1],r[2]]
}
function safeBadgeTest(b){try{return !!b.test()}catch(err){console.warn("Badge test failed",b?.id,err);return false}}
function syncBadgeUnlocks(showCelebration=false){
 db.meta=db.meta||{};db.meta.badgeUnlocks=db.meta.badgeUnlocks||{};
 let newly=[];
 BADGES.forEach(b=>{if(safeBadgeTest(b)&&!db.meta.badgeUnlocks[b.id]){db.meta.badgeUnlocks[b.id]=todayISO();newly.push(b)}});
 localStorage.setItem(KEY,JSON.stringify(db));
 if(showCelebration&&newly.length){ /* achievement is shown directly in the badge book */ }
}
function isBadgeUnlocked(b){return !!(db.meta?.badgeUnlocks?.[b.id]||safeBadgeTest(b))}
function badgeCardProgress(id,unlocked){
 if(unlocked)return `✓ ${t("unlocked")}`;
 const r=badgeRequirement(id),cur=r[1](),goal=r[2],unitKey=r[3];
 if(goal<=1)return t("locked");
 return `${cur} / ${goal}${unitKey?` ${t(unitKey)}`:""}`
}
function renderBadges(){
 try{
  syncBadgeUnlocks(false);
  let unlocked=BADGES.filter(b=>isBadgeUnlocked(b)).length;
  $("#badgeCount").textContent=`${unlocked} / 20 ${t("collected")}`;
  $("#badgeProgress").style.width=`${unlocked/20*100}%`;
  $("#badgeGrid").innerHTML=BADGES.filter(b=>badgeFilter==="all"||b.cat===badgeFilter).map(b=>{
    let ok=isBadgeUnlocked(b),copy=badgeCopy(b.id),req=badgeRequirement(b.id);
    return `<div class="badge ${ok?"unlocked":"locked"}">
      <div class="badge-art"><img src="${ok?b.img:"badge-locked.png"}" alt="${esc(copy[0])}"></div>
      <strong>${copy[0]}</strong>
      <p class="badge-description">${ok?copy[2]:req[0]}</p>
      <small class="${ok?"badge-success":"badge-progress-text"}">${badgeCardProgress(b.id,ok)}</small>
    </div>`
  }).join("")
 }catch(err){
  console.error("Badge render failed",err);
  $("#badgeGrid").innerHTML=BADGES.map(b=>{let c=badgeCopy(b.id);return `<div class="badge locked"><div class="badge-art"><img src="badge-locked.png" alt=""></div><strong>${c[0]}</strong><p class="badge-description">${c[1]}</p><small>${t("locked")}</small></div>`}).join("")
 }
}
function showPage(id){$$(".page").forEach(p=>p.classList.toggle("active",p.id===id));$$("nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));if(id==="progressPage")renderProgress();if(id==="badgesPage")renderBadges()}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}function round1(n){return Math.round((+n||0)*10)/10}
function openModal(id){$("#"+id).classList.add("open")}function closeModal(id){$("#"+id).classList.remove("open")}

function openFood(meal){selectedMeal=meal;foodTab="custom";qty=1;selectedEssentialId=null;renderFoodModal();openModal("foodModal")}
function renderFoodModal(){
 $$(".food-tabs button").forEach(b=>b.classList.toggle("active",b.dataset.foodtab===foodTab));
 let c=$("#foodTabContent");
 if(foodTab==="essentials"){
   c.innerHTML=`<div class="food-list-card">${ESSENTIALS.map((f,i)=>`
   <button type="button" class="essential-row essential-select" data-essential-id="${f.id}">
     <div><strong>${essentialName(f)}</strong><small>${f.calories} kcal · ${f.protein}g ${t("proteinWord")} · ${essentialBasis(f)}</small></div><span>›</span>
   </button>`).join("")}</div>
   <p class="food-source-note">${t("sourceNote")}</p>`;
   c.querySelectorAll("[data-essential-id]").forEach(b=>b.addEventListener("click",()=>openEssentialAmount(b.dataset.essentialId)));
 }
 if(foodTab==="favourites"){
   c.innerHTML=db.favourites.length?`<div class="food-list-card">${db.favourites.map(f=>`
   <button type="button" class="essential-row essential-select" data-favourite-id="${f.id}">
     <div><strong>${esc(f.name)}</strong><small>${round1(f.calories)} kcal · ${round1(f.protein)}g ${t("proteinWord")} ${f.displayBasis?`· ${esc(f.displayBasis)}`:""}</small></div><span>›</span>
   </button>`).join("")}</div>`:`<div class="card food-empty">${t("noFavourites")}</div>`;
   c.querySelectorAll("[data-favourite-id]").forEach(b=>b.addEventListener("click",()=>openFavouriteAmount(b.dataset.favouriteId)));
 }
 if(foodTab==="custom"){
   c.innerHTML=`<div class="custom-form">
   <label>${t("foodName")}<input id="customName"></label>
   <div class="two"><label>${t("caloriesPerItem")}<input id="customCalories" type="number" inputmode="numeric"></label><label>${t("proteinPerItem")}<input id="customProtein" type="number" step="0.1" inputmode="decimal"></label></div>
   <div class="qty-line"><strong>${t("quantity")}</strong><div class="qty-ctrl"><button type="button" onclick="changeQty(-1)">−</button><b id="customQty">${qty}</b><button type="button" onclick="changeQty(1)">+</button></div></div>
   <div class="food-total-preview" id="customTotalPreview">0 kcal · 0g protein</div>
   <label class="check-save"><input id="favCheck" type="checkbox"> ${t("saveFavourite")}</label>
   <button class="primary" onclick="saveCustom()">${t("addDiary")}</button></div>`;
   $("#customCalories").addEventListener("input",updateCustomPreview);
   $("#customProtein").addEventListener("input",updateCustomPreview);
   updateCustomPreview();
 }
}
function mergeFood(obj){
 let same=db.foods.find(x=>x.date===selectedDate&&x.meal===selectedMeal&&x.name.toLowerCase()===obj.name.toLowerCase()&&+x.calories===+obj.calories&&+x.protein===+obj.protein&&String(x.amountUnit||"item")===String(obj.amountUnit||"item"));
 if(same){
   if(obj.amountUnit&&obj.amountUnit!=="item"){
     same.amount=(+same.amount||0)+(+obj.amount||0);
     same.quantity=1;
     same.calories=+obj.calories;
     same.protein=+obj.protein;
     same.basis=+obj.basis||100;
   }else{
     same.quantity=(+same.quantity||1)+(+obj.quantity||1);
   }
 }else db.foods.push(obj)
}
function calcByAmount(food,amount){
 let ratio=(+amount||0)/(+food.basis||1);
 return {calories:round1((+food.calories||0)*ratio),protein:round1((+food.protein||0)*ratio)}
}
function openEssentialAmount(id){
 let f=ESSENTIALS.find(x=>x.id===id);if(!f)return;
 selectedEssentialId=id;
 let unit=f.basisUnit==="item"?"item":f.basisUnit;
 let amount=f.defaultAmount||f.basis;
 let c=$("#foodTabContent");
 c.innerHTML=`<div class="amount-editor">
   <button type="button" class="back-mini" id="backEssentials">${t("backEssentials")}</button>
   <h3>${essentialName(f)}</h3>
   <p class="nutrition-reference">${f.calories} kcal · ${f.protein}g ${t("proteinWord")} <strong>${essentialBasis(f)}</strong></p>
   <label>${t("amount")}</label>
   <div class="amount-control">
     <button type="button" id="amountMinus">−</button>
     <div><input id="essentialAmount" type="number" inputmode="decimal" step="${f.step}" value="${amount}"><span>${unit==="item"?(amount==1?t("item"):t("items")):unit}</span></div>
     <button type="button" id="amountPlus">+</button>
   </div>
   <div class="food-total-box"><span>${t("total")}</span><strong id="essentialTotal"></strong></div>
   <button class="primary" id="addEssentialToDiary">${t("addDiary")}</button>
 </div>`;
 const input=$("#essentialAmount");
 const update=()=>{let a=Math.max(f.basisUnit==="item"?1:0,+input.value||0),v=calcByAmount(f,a);$("#essentialTotal").textContent=`${v.calories} kcal · ${v.protein}g ${t("proteinWord")}`;let span=input.nextElementSibling;if(span&&f.basisUnit==="item")span.textContent=a==1?t("item"):t("items")};
 update();
 $("#backEssentials").onclick=()=>{foodTab="essentials";renderFoodModal()};
 $("#amountMinus").onclick=()=>{input.value=Math.max(f.basisUnit==="item"?1:0,(+input.value||0)-f.step);update()};
 $("#amountPlus").onclick=()=>{input.value=(+input.value||0)+f.step;update()};
 input.addEventListener("input",update);
 $("#addEssentialToDiary").onclick=()=>{
   let a=Math.max(f.basisUnit==="item"?1:0,+input.value||0);
   let v=calcByAmount(f,a);
   let obj={id:uid(),date:selectedDate,meal:selectedMeal,name:f.name,calories:v.calories,protein:v.protein,quantity:1,amount:a,amountUnit:f.basisUnit,basis:f.basis,sourceType:"essential",essentialId:f.id,displayBasis:f.displayBasis};
   mergeFood(obj);closeModal("foodModal");save()
 }
}
function openFavouriteAmount(id){
 let f=db.favourites.find(x=>x.id===id);if(!f)return;
 // Favourites saved from custom foods are item-based by default.
 let basis=f.basis||1,unit=f.amountUnit||"item",step=unit==="item"?1:10,amount=unit==="item"?1:(f.defaultAmount||basis);
 let pseudo={...f,basis,basisUnit:unit,step,defaultAmount:amount,displayBasis:f.displayBasis||(unit==="item"?"per item":`per ${basis}${unit}`)};
 selectedEssentialId=null;
 let c=$("#foodTabContent");
 c.innerHTML=`<div class="amount-editor">
   <button type="button" class="back-mini" id="backFavs">${t("backFavourites")}</button>
   <h3>${esc(f.name)}</h3>
   <p class="nutrition-reference">${round1(f.calories)} kcal · ${round1(f.protein)}g ${t("proteinWord")} <strong>${esc(pseudo.displayBasis)}</strong></p>
   <label>${t("amount")}</label>
   <div class="amount-control"><button type="button" id="amountMinus">−</button><div><input id="essentialAmount" type="number" inputmode="decimal" step="${step}" value="${amount}"><span>${unit==="item"?t("item"):unit}</span></div><button type="button" id="amountPlus">+</button></div>
   <div class="food-total-box"><span>${t("total")}</span><strong id="essentialTotal"></strong></div>
   <button class="primary" id="addEssentialToDiary">${t("addDiary")}</button>
 </div>`;
 let input=$("#essentialAmount"),update=()=>{let a=Math.max(unit==="item"?1:0,+input.value||0),v=calcByAmount(pseudo,a);$("#essentialTotal").textContent=`${v.calories} kcal · ${v.protein}g ${t("proteinWord")}`};update();
 $("#backFavs").onclick=()=>{foodTab="favourites";renderFoodModal()};
 $("#amountMinus").onclick=()=>{input.value=Math.max(unit==="item"?1:0,(+input.value||0)-step);update()};
 $("#amountPlus").onclick=()=>{input.value=(+input.value||0)+step;update()};input.addEventListener("input",update);
 $("#addEssentialToDiary").onclick=()=>{let a=Math.max(unit==="item"?1:0,+input.value||0),v=calcByAmount(pseudo,a);mergeFood({id:uid(),date:selectedDate,meal:selectedMeal,name:f.name,calories:v.calories,protein:v.protein,quantity:1,amount:a,amountUnit:unit,basis:basis,sourceType:"favourite",favouriteId:f.id,displayBasis:pseudo.displayBasis});closeModal("foodModal");save()}
}
function updateCustomPreview(){let c=+($("#customCalories")?.value||0),p=+($("#customProtein")?.value||0);let el=$("#customTotalPreview");if(el)el.textContent=`${round1(c*qty)} kcal · ${round1(p*qty)}g ${t("proteinWord")}`}
function changeQty(n){qty=Math.max(1,qty+n);let q=$("#customQty");if(q)q.textContent=qty;updateCustomPreview()}
function saveCustom(){
 let name=$("#customName").value.trim();if(!name)return;
 let perCal=+$("#customCalories").value||0,perPro=+$("#customProtein").value||0;
 let obj={id:uid(),date:selectedDate,meal:selectedMeal,name,calories:round1(perCal*qty),protein:round1(perPro*qty),quantity:1,amount:qty,amountUnit:"item",basis:1,sourceType:"custom",perItemCalories:perCal,perItemProtein:perPro,displayBasis:"per item"};
 mergeFood(obj);
 if($("#favCheck").checked&&!db.favourites.some(f=>f.name.toLowerCase()===name.toLowerCase()))db.favourites.push({id:uid(),name,calories:perCal,protein:perPro,basis:1,amountUnit:"item",displayBasis:"per item"});
 qty=1;closeModal("foodModal");save()
}
function openEditFood(id){
 let x=db.foods.find(f=>f.id===id);if(!x)return;
 $("#editFoodId").value=x.id;$("#editFoodName").value=foodDisplayName(x);$("#editFoodMeal").value=x.meal;
 let unit=x.amountUnit||"item",amount=x.amount??(x.quantity||1);
 $("#editFoodAmount").value=amount;$("#editFoodUnit").textContent=unit==="item"?(amount==1?t("item"):t("items")):unit;
 $("#editFoodCalories").value=round1(x.calories||0);$("#editFoodProtein").value=round1(x.protein||0);
 let displayBasis=foodDisplayBasis(x);$("#editFoodBasisNote").textContent=displayBasis?`${t("reference")}: ${displayBasis}`:"";
 openModal("editFoodModal")
}
function editFood(id){openEditFood(id)}
function openMeasurementForm(id=null){
 let x=id?db.measurements.find(m=>m.id===id):null;
 $("#measureId").value=x?.id||"";
 $("#measureDate").value=x?.date||todayISO();
 $("#measureWeight").value=x?.weight??"";
 $("#measureWaist").value=x?.waist??"";
 $("#measurementModalTitle").textContent=x?t("editMeasurement"):t("measurement");
 $("#saveMeasurement").textContent=x?t("saveChanges"):t("saveMeasurement");
 $("#deleteMeasurement").hidden=!x;
 openModal("measurementModal")
}
function openMeasurementEdit(id){openMeasurementForm(id)}
function download(name,text,type="application/json"){let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}

$$("nav button").forEach(b=>b.onclick=()=>showPage(b.dataset.page));$$("[data-close]").forEach(b=>b.onclick=()=>closeModal(b.dataset.close));
$$("[data-lang]").forEach(b=>b.onclick=()=>{db.settings.lang=b.dataset.lang;save()});
$("#prevDay").onclick=()=>{selectedDate=addDays(selectedDate,-1);renderHome()};$("#nextDay").onclick=()=>{selectedDate=addDays(selectedDate,1);renderHome()};$("#calendarJump").onclick=()=>{let v=prompt("YYYY-MM-DD",selectedDate);if(v&&/^\d{4}-\d{2}-\d{2}$/.test(v)){selectedDate=v;renderHome()}};
$("#exerciseBtn").onclick=()=>openModal("exerciseModal");$("#saveExercise").onclick=()=>{db.exercises.push({id:uid(),date:selectedDate,type:$("#activityType").value,minutes:+$("#exerciseMinutes").value||0,burned:+$("#exerciseBurned").value||0});$("#exerciseMinutes").value="";$("#exerciseBurned").value="";closeModal("exerciseModal");save()};
$$("[data-period]").forEach(b=>b.onclick=()=>{
 period=b.dataset.period;$$("[data-period]").forEach(x=>x.classList.toggle("active",x===b));
 $("#customRangeControls").hidden=period!=="custom";renderProgress()
});
$("#customStart").value=customStart;$("#customEnd").value=customEnd;
$("#applyCustomRange").onclick=()=>{let s=$("#customStart").value,e=$("#customEnd").value;if(!s||!e||s>e){alert(t("invalidRange"));return}customStart=s;customEnd=e;period="custom";renderProgress()};
$$("[data-filter]").forEach(b=>b.onclick=()=>{badgeFilter=b.dataset.filter;$$("[data-filter]").forEach(x=>x.classList.toggle("active",x===b));renderBadges()});
$$("[data-foodtab]").forEach(b=>b.onclick=()=>{foodTab=b.dataset.foodtab;renderFoodModal()});
$$(".add-measurement-btn").forEach(b=>b.onclick=()=>openMeasurementForm());
$("#saveMeasurement").onclick=()=>{
 let id=$("#measureId").value,payload={date:$("#measureDate").value||todayISO(),weight:+$("#measureWeight").value||null,waist:+$("#measureWaist").value||null};
 if(id){let x=db.measurements.find(m=>m.id===id);if(x)Object.assign(x,payload)}else db.measurements.push({id:uid(),...payload});
 closeModal("measurementModal");save()
};
$("#deleteMeasurement").onclick=()=>{let id=$("#measureId").value;if(id&&confirm(t("deleteMeasurementConfirm"))){db.measurements=db.measurements.filter(m=>m.id!==id);closeModal("measurementModal");save()}};
$("#settingCalories").onchange=()=>{db.settings.calories=+$("#settingCalories").value||2000;save()};$("#settingProtein").onchange=()=>{db.settings.protein=+$("#settingProtein").value||160;save()};$("#settingWeightGoal").onchange=()=>{db.settings.weightGoal=+$("#settingWeightGoal").value||null;save()};
$("#exportBackup").onclick=()=>download(`step-by-step-backup-${todayISO()}.json`,JSON.stringify(db,null,2));
$("#restoreBackup").onchange=async e=>{let f=e.target.files[0];if(!f)return;try{let x=JSON.parse(await f.text());if(!x.settings||!Array.isArray(x.foods))throw 0;if(confirm(t("replaceBackup"))){db=normalizeDb(x);save()}}catch{alert(t("invalidBackup"))}e.target.value=""};
$("#exportCsv").onclick=()=>{let rows=[["date","meal","food","quantity","calories_per_item","protein_g_per_item"],...db.foods.map(x=>[x.date,x.meal,x.name,x.quantity,x.calories,x.protein])];download(`step-by-step-food-${todayISO()}.csv`,rows.map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(",")).join("\n"),"text/csv")};
$("#deleteAll").onclick=()=>{if(confirm(t("deleteAll1"))&&confirm(t("deleteAll2"))){localStorage.removeItem(KEY);db=fresh();selectedDate=todayISO();save()}};

$("#editFoodAmount").addEventListener("input",()=>{
 let id=$("#editFoodId").value,x=db.foods.find(f=>f.id===id);if(!x)return;
 let newAmount=Math.max(x.amountUnit==="item"?1:0,+$("#editFoodAmount").value||0),oldAmount=+x.amount||(+x.quantity||1);
 if(oldAmount>0){
   $("#editFoodCalories").value=round1((+x.calories||0)*(newAmount/oldAmount));
   $("#editFoodProtein").value=round1((+x.protein||0)*(newAmount/oldAmount));
 }
 $("#editFoodUnit").textContent=(x.amountUnit||"item")==="item"?(newAmount==1?t("item"):t("items")):(x.amountUnit||"");
});
$("#saveFoodEdit").onclick=()=>{
 let id=$("#editFoodId").value,x=db.foods.find(f=>f.id===id);if(!x)return;
 x.name=$("#editFoodName").value.trim()||x.name;x.meal=$("#editFoodMeal").value;
 x.amount=Math.max((x.amountUnit||"item")==="item"?1:0,+$("#editFoodAmount").value||0);
 x.quantity=1;x.calories=+$("#editFoodCalories").value||0;x.protein=+$("#editFoodProtein").value||0;
 closeModal("editFoodModal");save()
};
$("#deleteFoodEdit").onclick=()=>{
 let id=$("#editFoodId").value;if(confirm(t("deleteFoodConfirm"))){
   db.foods=db.foods.filter(f=>f.id!==id);closeModal("editFoodModal");save()
 }
};

function revealApp(){let splash=$("#splash"),appEl=$("#app");if(appEl)appEl.classList.remove("hidden");if(splash){splash.classList.add("hide");setTimeout(()=>splash.remove(),400)}}
function boot(){try{render()}catch(err){console.error("Step by Step boot error",err);let box=document.createElement("div");box.className="boot-error";box.innerHTML=lang()==="fr"?"<strong>Step by Step! a rencontré un problème de chargement.</strong><br>Actualisez la page. Vos données enregistrées n’ont pas été supprimées.":"<strong>Step by Step! had trouble loading.</strong><br>Please refresh the page. Your saved data has not been deleted.";document.body.appendChild(box)}finally{setTimeout(revealApp,900)}}
if("serviceWorker" in navigator)navigator.serviceWorker.register("./sw.js").catch(console.warn);
boot();
