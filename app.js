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
en:{splashTag:"Small steps. Big results.",heroCopy:"Step by step, for a healthier you.",calories:"Calories",protein:"Protein",exercise:"Exercise",netCalories:"Net calories",meals:"Meals",addExercise:"+ Exercise",progress:"Progress",week:"Week",month:"Month",averageCalories:"Average calories",averageProtein:"Average protein",weight:"Weight",waist:"Waist",addMeasurement:"+ Add measurement",badges:"Badges",doingAmazing:"You're doing amazing!",unlockMore:"Keep going to unlock more badges.",all:"All",nutrition:"Nutrition",activity:"Activity",journey:"Journey",more:"More",goals:"Goals",dailyCalories:"Daily calories",dailyProtein:"Daily protein",weightGoal:"Weight goal",language:"Language",data:"Data",exportBackup:"Export backup",restoreBackup:"Restore backup",exportCsv:"Export CSV",deleteAll:"Delete All Data",home:"Home",addFood:"Add Food",essentials:"Essentials",favourites:"Favourites",custom:"Custom",duration:"Duration (min)",caloriesBurned:"Calories burned",saveExercise:"Save Exercise",measurement:"Measurement",date:"Date",saveMeasurement:"Save Measurement"},
fr:{splashTag:"Petits pas. Grands résultats.",heroCopy:"Pas à pas, vers une meilleure santé.",calories:"Calories",protein:"Protéines",exercise:"Exercice",netCalories:"Calories nettes",meals:"Repas",addExercise:"+ Exercice",progress:"Progrès",week:"Semaine",month:"Mois",averageCalories:"Calories moyennes",averageProtein:"Protéines moyennes",weight:"Poids",waist:"Tour de taille",addMeasurement:"+ Ajouter une mesure",badges:"Badges",doingAmazing:"Tu fais un super travail !",unlockMore:"Continue pour débloquer plus de badges.",all:"Tous",nutrition:"Nutrition",activity:"Activité",journey:"Parcours",more:"Plus",goals:"Objectifs",dailyCalories:"Calories quotidiennes",dailyProtein:"Protéines quotidiennes",weightGoal:"Objectif de poids",language:"Langue",data:"Données",exportBackup:"Exporter une sauvegarde",restoreBackup:"Restaurer une sauvegarde",exportCsv:"Exporter en CSV",deleteAll:"Supprimer toutes les données",home:"Accueil",addFood:"Ajouter un aliment",essentials:"Essentiels",favourites:"Favoris",custom:"Personnalisé",duration:"Durée (min)",caloriesBurned:"Calories brûlées",saveExercise:"Enregistrer l'exercice",measurement:"Mesure",date:"Date",saveMeasurement:"Enregistrer la mesure"}
};
const MEAL_FR={Breakfast:"Petit-déjeuner",Lunch:"Déjeuner",Dinner:"Dîner",Snacks:"Encas",Drinks:"Boissons"};
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
function applyI18N(){$$("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));$$("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang()))}
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
 $("#homeCalories").textContent=Math.round(tt.eaten);$("#homeProtein").textContent=Math.round(tt.pro)+"g";$("#homeExercise").textContent=Math.round(tt.mins)+" min";$("#homeBurned").textContent=Math.round(tt.burned)+" kcal burned";$("#homeNet").textContent=Math.round(tt.net);
 $("#homeCalTarget").textContent=`/ ${calT} kcal`;$("#homeProteinTarget").textContent=`/ ${proT}g`;$("#homeNetTarget").textContent=`/ ${calT} kcal`;
 renderHomeGauges(tt,calT,proT);
 $("#helloText").textContent="Hello!";
 let state=mascotState(tt.net,tt.pro,calT,proT);$("#homeMascotImg").src=state.img;$("#homeMascotTitle").textContent=state.title;$("#homeMascotCopy").textContent=state.copy;
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
function mascotState(cal,pro,calT,proT){
 if(!foodItems(selectedDate).length)return {img:"curious.png",title:lang()==="fr"?"Prêt ?":"Ready when you are!",copy:lang()==="fr"?"Ajoutez votre premier repas de la journée.":"Add your first meal of the day."};
 let cr=cal/calT,pr=pro/proT;
 if(cr>=.9&&cr<=1.1&&pr>=.9)return {img:"excited.png",title:lang()==="fr"?"Super journée !":"You're on track!",copy:lang()==="fr"?"Tes apports sont proches de tes objectifs.":"Your intake is sitting nicely around your targets."};
 if(cr<.75||cr>1.25||pr<.65)return {img:"sad.png",title:lang()==="fr"?"On ajuste doucement.":"A little reset helps.",copy:lang()==="fr"?"Pas de stress. Regarde la tendance et avance pas à pas.":"No stress. Look at the trend and keep going step by step."};
 return {img:"happy.png",title:lang()==="fr"?"Presque !":"Nearly there!",copy:lang()==="fr"?"Quelques petits ajustements et tu seras proche de la cible.":"A few small adjustments will bring you closer to target."}
}
function mealCard(m,i){
 let icons=["breakfast.png","lunch.png","dinner.png","snacks.png","drinks.png"],items=foodItems(selectedDate).filter(x=>x.meal===m),cal=items.reduce((a,x)=>a+(+x.calories||0)*(+x.quantity||1),0),pro=items.reduce((a,x)=>a+(+x.protein||0)*(+x.quantity||1),0);
 return `<div class="meal-card"><div class="meal-header"><div class="meal-name"><span class="meal-icon"><img src="${icons[i]}" alt=""></span>${mealLabel(m)}</div><button class="meal-add" onclick="openFood('${m}')">+ ${lang()==="fr"?"Ajouter":"Add"}</button></div>
 <div class="meal-items">${items.length?items.map(x=>`<div class="food-row"><button onclick="editFood('${x.id}')"><strong>${esc(x.name)}${x.amount?` · ${x.amount}${x.amountUnit==="item"?(x.amount==1?" item":" items"):x.amountUnit}`:((+x.quantity||1)>1?` × ${x.quantity}`:"")}</strong><br><small>${Math.round((+x.calories||0)*(+x.quantity||1))} kcal · ${round1((+x.protein||0)*(+x.quantity||1))}g</small></button><span>›</span></div>`).join(""):`<div class="food-row"><small>${lang()==="fr"?"Rien d'enregistré":"Nothing logged yet"}</small></div>`}</div>
 <div class="meal-total"><span>${Math.round(cal)} kcal</span><span>${round1(pro)}g protein</span></div></div>`
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
 $("#avgCalories").textContent=avgC==null?"N/A":`${Math.round(avgC)} kcal`;$("#avgProtein").textContent=avgP==null?"N/A":`${round1(avgP)}g`;$("#avgCaloriesTarget").textContent=`Target ${db.settings.calories||2000}`;$("#avgProteinTarget").textContent=`Target ${db.settings.protein||160}g`;
 let s=progressState(avgC,avgP);$("#progressMascot").src=s.img;$("#progressHeadline").textContent=s.title;$("#progressMessage").textContent=s.copy;
 renderBarChart($("#calorieChart"),data,"cal",+db.settings.calories||2000,"calorie");
 renderBarChart($("#proteinChart"),data,"pro",+db.settings.protein||160,"protein");
 renderMeasurementCharts(bounds[0],bounds[1]);
 $$("[data-monthly-note]").forEach(n=>{n.hidden=period!=="month";n.textContent=lang()==="fr"?"ⓘ Les valeurs mensuelles de calories et de protéines correspondent à la moyenne par jour enregistré.":"ⓘ Monthly calorie and protein values show the average per logged day."});
}
function monthlyRange(n){let now=new Date(),out=[];for(let i=n-1;i>=0;i--){let d=new Date(now.getFullYear(),now.getMonth()-i,1),y=d.getFullYear(),m=d.getMonth(),key=`${y}-${String(m+1).padStart(2,"0")}`;let ds=loggedDays().filter(x=>x.startsWith(key));let cal=ds.length?ds.reduce((a,x)=>a+totals(x).net,0)/ds.length:0,pro=ds.length?ds.reduce((a,x)=>a+totals(x).pro,0)/ds.length:0;out.push({label:monthLabel(`${y}-${String(m+1).padStart(2,"0")}-01`),cal,pro,hasFood:ds.length>0})}return out}
function progressState(c,p){if(c==null||p==null)return {img:"curious.png",title:"Let's get started!",copy:"Log a few days and Saucisse will help you read the trend."};let ct=+db.settings.calories||2000,pt=+db.settings.protein||160,cr=c/ct,pr=p/pt;if(cr>=.95&&cr<=1.05&&pr>=.95)return {img:"excited.png",title:lang()==="fr"?"Super période !":"Great period!",copy:lang()==="fr"?"Tes moyennes sont très proches de tes objectifs.":"Your averages are sitting nicely around your targets."};if(cr<.8||cr>1.2||pr<.7)return {img:"sad.png",title:lang()==="fr"?"On garde le cap.":"Keep going.",copy:lang()==="fr"?"La tendance est encore loin de la cible, mais chaque période compte.":"The trend is still some way from target, but every period counts."};return {img:"happy.png",title:lang()==="fr"?"Presque !":"Nearly there!",copy:lang()==="fr"?"Tu n'es pas loin. Continue pas à pas.":"You're not far off. Keep going step by step."}}
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
   let title=key==="weight"?(lang()==="fr"?"Aucune donnée de poids":"No weight data yet"):(lang()==="fr"?"Aucune donnée de tour de taille":"No waist data yet");
   let copy=lang()==="fr"?"Ajoutez une mesure pour commencer à suivre votre évolution.":"Add a measurement to start tracking your progress.";
   const emptyImg=key==="waist"?"saucisse-curious-waist.png":"saucisse-scale.png";
   el.innerHTML=`<div class="measurement-empty"><img src="${emptyImg}" alt=""><strong>${title}</strong><span>${copy}</span></div>`;
   return
 }
 el.classList.remove("empty-chart");
 let vals=items.map(x=>+x[key]),max=Math.max(...vals)*1.05,min=Math.min(...vals)*.95,goal=key==="weight"?+db.settings.weightGoal||null:null;
 el.innerHTML=items.map((x,i)=>{let v=+x[key],pct=Math.max(12,Math.min(96,(v-min)/(max-min||1)*72+18)),color="var(--green)";
 if(key==="weight"&&i>0){let prev=+items[i-1][key];if(goal){let prevD=Math.abs(prev-goal),curD=Math.abs(v-goal);if(curD>prevD)color="var(--red)";else{let closeness=Math.max(0,1-curD/Math.max(Math.abs(+items[0][key]-goal),1));color=closeness>.66?"var(--green)":closeness>.33?"#9bcf53":"var(--orange)"}}else color=v>prev?"var(--red)":"var(--green)"}
 return `<div class="bar-item"><div class="bar-value">${round1(v)}</div><div class="bar-rail"><i class="bar-fill" style="height:${pct}%;background:${color}"></i></div><div class="bar-label">${shortDay(x.date)}</div></div>`}).join("")
}

function badgeRequirement(id){
 const req={
 "first-step":["Log your first food entry.",()=>Math.min(1,db.foods.length),1],
 "getting-started":["Log food on 3 different days.",()=>Math.min(3,loggedDays().length),3],
 "one-week":["Log food on 7 different days.",()=>Math.min(7,loggedDays().length),7],
 "two-weeks":["Log food on 14 different days.",()=>Math.min(14,loggedDays().length),14],
 "month-motion":["Log food on 30 different days.",()=>Math.min(30,loggedDays().length),30],
 "full-day-pup":["Log breakfast, lunch and dinner on the same day.",()=>hasFullDay()?1:0,1],
 "protein-pup":["Meet your protein target on 1 day.",()=>Math.min(1,proteinHits()),1],
 "protein-pro":["Meet your protein target on 7 different days.",()=>Math.min(7,proteinHits()),7],
 "balanced-day":["Finish a day within ±5% of your calorie target and meet your protein target.",()=>Math.min(1,balancedDays()),1],
 "balanced-week":["Complete 7 logged days in a row with average calories within ±5% of target and average protein at or above target.",()=>balancedWeek()?1:0,1],
 "favourite-find":["Save your first food or drink as a Favourite.",()=>Math.min(1,db.favourites.length),1],
 "quick-pick-pup":["Add your first food from Essentials.",()=>db.foods.some(x=>x.sourceType==="essential")?1:0,1],
 "first-workout":["Log your first exercise session.",()=>Math.min(1,db.exercises.length),1],
 "active-pup":["Log 5 exercise sessions.",()=>Math.min(5,db.exercises.length),5],
 "exercise-expert":["Log 25 exercise sessions.",()=>Math.min(25,db.exercises.length),25],
 "progress-begins":["Record your first weight or waist measurement.",()=>Math.min(1,measurementDates()),1],
 "keeping-track":["Record weight or waist measurements on 5 different dates.",()=>Math.min(5,measurementDates()),5],
 "halfway-there":["Reach halfway from your starting weight to your goal weight.",()=>halfwayToGoal()?1:0,1],
 "goal-getter":["Reach your weight goal.",()=>goalReached()?1:0,1],
 "step-by-step":["Unlock the other 19 Saucisse badges.",()=>BADGES.slice(0,19).filter(b=>isBadgeUnlocked(b)).length,19]
 };
 return req[id]||["Keep going to unlock this badge.",()=>0,1]
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
function openBadge(id,celebration=false){
 let b=BADGES.find(x=>x.id===id);if(!b){console.warn("Badge not found",id);return;}let unlocked=isBadgeUnlocked(b),r=badgeRequirement(id),cur=r[1](),goal=r[2]();
 $("#badgeModalName").textContent=b.name;$("#badgeModalImg").src=b.img;
 $("#badgeModalStatus").textContent=unlocked?(celebration?"BADGE UNLOCKED!":"UNLOCKED"):"LOCKED";
 $("#badgeModalStatus").className="badge-status "+(unlocked?"unlocked":"locked");
 $("#badgeModalText").textContent=unlocked?`Well done! You have unlocked ${b.name}.`:r[0];
 $("#badgeModalProgress").textContent=unlocked?`Unlocked ${db.meta?.badgeUnlocks?.[id]||todayISO()}`:`Progress: ${cur} / ${goal}`;
 openModal("badgeModal")
}

function showBadgePopup(id,celebration=false){
 const b=BADGES.find(x=>x.id===id);if(!b)return;
 const unlocked=isBadgeUnlocked(b);
 const r=badgeRequirement(id),cur=r[1](),goal=r[2]();
 document.querySelector(".badge-popup-overlay")?.remove();
 const overlay=document.createElement("div");
 overlay.className="badge-popup-overlay";
 const unlockedDate=db.meta?.badgeUnlocks?.[id]||todayISO();
 overlay.innerHTML=`<div class="badge-popup-card" role="dialog" aria-modal="true">
   <button type="button" class="badge-popup-close" aria-label="Close">×</button>
   <img src="${b.img}" alt="">
   <div class="badge-popup-state ${unlocked?"unlocked":"locked"}">${unlocked?(celebration?"BADGE UNLOCKED!":"UNLOCKED"):"LOCKED"}</div>
   <h2>${b.name}</h2>
   <p>${unlocked?`Well done! You have unlocked <strong>${b.name}</strong>.`:r[0]}</p>
   <div class="badge-popup-progress">${unlocked?`Unlocked ${unlockedDate}`:`Progress: ${cur} / ${goal}`}</div>
   <button type="button" class="primary badge-popup-ok">OK</button>
 </div>`;
 document.body.appendChild(overlay);
 const close=()=>overlay.remove();
 overlay.querySelector(".badge-popup-close").onclick=close;
 overlay.querySelector(".badge-popup-ok").onclick=close;
 overlay.addEventListener("click",e=>{if(e.target===overlay)close()});
 requestAnimationFrame(()=>overlay.classList.add("show"));
}

function badgeShortDescription(id,unlocked){
 const text={
  "first-step":["Logged your first food","Log your first food"],
  "getting-started":["Logged on 3 different days","Log on 3 different days"],
  "one-week":["Logged on 7 different days","Log on 7 different days"],
  "two-weeks":["Logged on 14 different days","Log on 14 different days"],
  "month-motion":["Logged on 30 different days","Log on 30 different days"],
  "full-day-pup":["Logged breakfast, lunch and dinner","Log all 3 main meals in one day"],
  "protein-pup":["Met your protein target once","Meet your protein target once"],
  "protein-pro":["Met your protein target on 7 days","Meet your protein target on 7 days"],
  "balanced-day":["Hit a balanced calorie + protein day","Calories ±5% and protein target met"],
  "balanced-week":["Completed a balanced week","Keep a full week's averages on target"],
  "favourite-find":["Saved your first Favourite","Save your first Favourite"],
  "quick-pick-pup":["Used Essentials for a quick add","Add your first Essentials food"],
  "first-workout":["Logged your first workout","Log your first workout"],
  "active-pup":["Logged 5 workouts","Log 5 workouts"],
  "exercise-expert":["Logged 25 workouts","Log 25 workouts"],
  "progress-begins":["Started tracking measurements","Add your first measurement"],
  "keeping-track":["Recorded 5 measurement check-ins","Record measurements on 5 dates"],
  "halfway-there":["Reached halfway to your goal","Reach halfway to your weight goal"],
  "goal-getter":["Reached your weight goal","Reach your weight goal"],
  "step-by-step":["Collected every badge","Unlock the other 19 badges"]
 };
 return (text[id]||["Achievement unlocked","Keep going"])[unlocked?0:1]
}
function badgeCardProgress(id,unlocked){
 if(unlocked)return "✓ Unlocked";
 const r=badgeRequirement(id),cur=r[1](),goal=r[2]();
 return `${cur} / ${goal}`
}
function renderBadges(){
 try{
  syncBadgeUnlocks(false);
  let unlocked=BADGES.filter(b=>isBadgeUnlocked(b)).length;
  $("#badgeCount").textContent=`${unlocked} / 20 collected`;
  $("#badgeProgress").style.width=`${unlocked/20*100}%`;
  $("#badgeGrid").innerHTML=BADGES.filter(b=>badgeFilter==="all"||b.cat===badgeFilter).map(b=>{
    let ok=isBadgeUnlocked(b),desc="",prog="";
    try{desc=badgeShortDescription(b.id,ok);prog=badgeCardProgress(b.id,ok)}catch(err){console.warn("Badge card failed",b.id,err);desc=ok?"Achievement unlocked":"Keep going";prog=ok?"✓ Unlocked":"Locked"}
    return `<div class="badge ${ok?"unlocked":"locked"}">
      <div class="badge-art"><img src="${b.img}" alt="${b.name}" onerror="this.style.display='none'"></div>
      <strong>${b.name}</strong>
      <p class="badge-description">${desc}</p>
      <small class="${ok?"badge-success":"badge-progress-text"}">${prog}</small>
    </div>`
  }).join("")
 }catch(err){
  console.error("Badge page render failed",err);
  $("#badgeGrid").innerHTML=BADGES.map(b=>`<div class="badge locked"><div class="badge-art"><img src="${b.img}" alt="${b.name}" onerror="this.style.display='none'"></div><strong>${b.name}</strong><p class="badge-description">Locked</p><small>Locked</small></div>`).join("");
 }
}
function renderMore(){$("#settingCalories").value=db.settings.calories||2000;$("#settingProtein").value=db.settings.protein||160;$("#settingWeightGoal").value=db.settings.weightGoal??""}
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
     <div><strong>${f.name}</strong><small>${f.calories} kcal · ${f.protein}g protein · ${f.displayBasis}</small></div><span>›</span>
   </button>`).join("")}</div>
   <p class="food-source-note">Reference nutrition values are standard values. Amounts are calculated from the quantity you enter; packaged foods can differ, so use the label when available.</p>`;
   c.querySelectorAll("[data-essential-id]").forEach(b=>b.addEventListener("click",()=>openEssentialAmount(b.dataset.essentialId)));
 }
 if(foodTab==="favourites"){
   c.innerHTML=db.favourites.length?`<div class="food-list-card">${db.favourites.map(f=>`
   <button type="button" class="essential-row essential-select" data-favourite-id="${f.id}">
     <div><strong>${esc(f.name)}</strong><small>${round1(f.calories)} kcal · ${round1(f.protein)}g protein ${f.displayBasis?`· ${esc(f.displayBasis)}`:""}</small></div><span>›</span>
   </button>`).join("")}</div>`:`<div class="card food-empty">No favourites yet.</div>`;
   c.querySelectorAll("[data-favourite-id]").forEach(b=>b.addEventListener("click",()=>openFavouriteAmount(b.dataset.favouriteId)));
 }
 if(foodTab==="custom"){
   c.innerHTML=`<div class="custom-form">
   <label>Food name<input id="customName"></label>
   <div class="two"><label>Calories per item<input id="customCalories" type="number" inputmode="numeric"></label><label>Protein per item (g)<input id="customProtein" type="number" step="0.1" inputmode="decimal"></label></div>
   <div class="qty-line"><strong>Quantity</strong><div class="qty-ctrl"><button type="button" onclick="changeQty(-1)">−</button><b id="customQty">${qty}</b><button type="button" onclick="changeQty(1)">+</button></div></div>
   <div class="food-total-preview" id="customTotalPreview">0 kcal · 0g protein</div>
   <label class="check-save"><input id="favCheck" type="checkbox"> Save as favourite</label>
   <button class="primary" onclick="saveCustom()">Add to diary</button></div>`;
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
   <button type="button" class="back-mini" id="backEssentials">‹ Essentials</button>
   <h3>${f.name}</h3>
   <p class="nutrition-reference">${f.calories} kcal · ${f.protein}g protein <strong>${f.displayBasis}</strong></p>
   <label>Amount</label>
   <div class="amount-control">
     <button type="button" id="amountMinus">−</button>
     <div><input id="essentialAmount" type="number" inputmode="decimal" step="${f.step}" value="${amount}"><span>${unit==="item"?(amount==1?"item":"items"):unit}</span></div>
     <button type="button" id="amountPlus">+</button>
   </div>
   <div class="food-total-box"><span>Total</span><strong id="essentialTotal"></strong></div>
   <button class="primary" id="addEssentialToDiary">Add to diary</button>
 </div>`;
 const input=$("#essentialAmount");
 const update=()=>{let a=Math.max(f.basisUnit==="item"?1:0,+input.value||0),v=calcByAmount(f,a);$("#essentialTotal").textContent=`${v.calories} kcal · ${v.protein}g protein`;let span=input.nextElementSibling;if(span&&f.basisUnit==="item")span.textContent=a==1?"item":"items"};
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
   <button type="button" class="back-mini" id="backFavs">‹ Favourites</button>
   <h3>${esc(f.name)}</h3>
   <p class="nutrition-reference">${round1(f.calories)} kcal · ${round1(f.protein)}g protein <strong>${esc(pseudo.displayBasis)}</strong></p>
   <label>Amount</label>
   <div class="amount-control"><button type="button" id="amountMinus">−</button><div><input id="essentialAmount" type="number" inputmode="decimal" step="${step}" value="${amount}"><span>${unit==="item"?"item":unit}</span></div><button type="button" id="amountPlus">+</button></div>
   <div class="food-total-box"><span>Total</span><strong id="essentialTotal"></strong></div>
   <button class="primary" id="addEssentialToDiary">Add to diary</button>
 </div>`;
 let input=$("#essentialAmount"),update=()=>{let a=Math.max(unit==="item"?1:0,+input.value||0),v=calcByAmount(pseudo,a);$("#essentialTotal").textContent=`${v.calories} kcal · ${v.protein}g protein`};update();
 $("#backFavs").onclick=()=>{foodTab="favourites";renderFoodModal()};
 $("#amountMinus").onclick=()=>{input.value=Math.max(unit==="item"?1:0,(+input.value||0)-step);update()};
 $("#amountPlus").onclick=()=>{input.value=(+input.value||0)+step;update()};input.addEventListener("input",update);
 $("#addEssentialToDiary").onclick=()=>{let a=Math.max(unit==="item"?1:0,+input.value||0),v=calcByAmount(pseudo,a);mergeFood({id:uid(),date:selectedDate,meal:selectedMeal,name:f.name,calories:v.calories,protein:v.protein,quantity:1,amount:a,amountUnit:unit,basis:basis,sourceType:"favourite",favouriteId:f.id,displayBasis:pseudo.displayBasis});closeModal("foodModal");save()}
}
function updateCustomPreview(){let c=+($("#customCalories")?.value||0),p=+($("#customProtein")?.value||0);let el=$("#customTotalPreview");if(el)el.textContent=`${round1(c*qty)} kcal · ${round1(p*qty)}g protein`}
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
 $("#editFoodId").value=x.id;$("#editFoodName").value=x.name;$("#editFoodMeal").value=x.meal;
 let unit=x.amountUnit||"item",amount=x.amount??(x.quantity||1);
 $("#editFoodAmount").value=amount;$("#editFoodUnit").textContent=unit==="item"?(amount==1?"item":"items"):unit;
 $("#editFoodCalories").value=round1(x.calories||0);$("#editFoodProtein").value=round1(x.protein||0);
 $("#editFoodBasisNote").textContent=x.displayBasis?`Reference: ${x.displayBasis}`:"";
 openModal("editFoodModal")
}
function editFood(id){openEditFood(id)}
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
$("#applyCustomRange").onclick=()=>{let s=$("#customStart").value,e=$("#customEnd").value;if(!s||!e||s>e){alert(lang()==="fr"?"Choisissez une plage de dates valide.":"Choose a valid date range.");return}customStart=s;customEnd=e;period="custom";renderProgress()};
$$("[data-filter]").forEach(b=>b.onclick=()=>{badgeFilter=b.dataset.filter;$$("[data-filter]").forEach(x=>x.classList.toggle("active",x===b));renderBadges()});
$$("[data-foodtab]").forEach(b=>b.onclick=()=>{foodTab=b.dataset.foodtab;renderFoodModal()});
$("#addMeasurement").onclick=()=>{$("#measureDate").value=todayISO();$("#measureWeight").value="";$("#measureWaist").value="";openModal("measurementModal")};$("#saveMeasurement").onclick=()=>{db.measurements.push({id:uid(),date:$("#measureDate").value||todayISO(),weight:+$("#measureWeight").value||null,waist:+$("#measureWaist").value||null});closeModal("measurementModal");save()};
$("#settingCalories").onchange=()=>{db.settings.calories=+$("#settingCalories").value||2000;save()};$("#settingProtein").onchange=()=>{db.settings.protein=+$("#settingProtein").value||160;save()};$("#settingWeightGoal").onchange=()=>{db.settings.weightGoal=+$("#settingWeightGoal").value||null;save()};
$("#exportBackup").onclick=()=>download(`step-by-step-backup-${todayISO()}.json`,JSON.stringify(db,null,2));
$("#restoreBackup").onchange=async e=>{let f=e.target.files[0];if(!f)return;try{let x=JSON.parse(await f.text());if(!x.settings||!Array.isArray(x.foods))throw 0;if(confirm("Replace the data on this device with this backup?")){db=normalizeDb(x);save()}}catch{alert("Invalid backup.")}e.target.value=""};
$("#exportCsv").onclick=()=>{let rows=[["date","meal","food","quantity","calories_per_item","protein_g_per_item"],...db.foods.map(x=>[x.date,x.meal,x.name,x.quantity,x.calories,x.protein])];download(`step-by-step-food-${todayISO()}.csv`,rows.map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(",")).join("\n"),"text/csv")};
$("#deleteAll").onclick=()=>{if(confirm("Delete ALL Step by Step! data on this device?")&&confirm("Final confirmation: delete everything?")){localStorage.removeItem(KEY);db=fresh();selectedDate=todayISO();save()}};

$("#editFoodAmount").addEventListener("input",()=>{
 let id=$("#editFoodId").value,x=db.foods.find(f=>f.id===id);if(!x)return;
 let newAmount=Math.max(x.amountUnit==="item"?1:0,+$("#editFoodAmount").value||0),oldAmount=+x.amount||(+x.quantity||1);
 if(oldAmount>0){
   $("#editFoodCalories").value=round1((+x.calories||0)*(newAmount/oldAmount));
   $("#editFoodProtein").value=round1((+x.protein||0)*(newAmount/oldAmount));
 }
 $("#editFoodUnit").textContent=(x.amountUnit||"item")==="item"?(newAmount==1?"item":"items"):(x.amountUnit||"");
});
$("#saveFoodEdit").onclick=()=>{
 let id=$("#editFoodId").value,x=db.foods.find(f=>f.id===id);if(!x)return;
 x.name=$("#editFoodName").value.trim()||x.name;x.meal=$("#editFoodMeal").value;
 x.amount=Math.max((x.amountUnit||"item")==="item"?1:0,+$("#editFoodAmount").value||0);
 x.quantity=1;x.calories=+$("#editFoodCalories").value||0;x.protein=+$("#editFoodProtein").value||0;
 closeModal("editFoodModal");save()
};
$("#deleteFoodEdit").onclick=()=>{
 let id=$("#editFoodId").value;if(confirm(lang()==="fr"?"Supprimer cet aliment du journal ?":"Delete this food from the diary?")){
   db.foods=db.foods.filter(f=>f.id!==id);closeModal("editFoodModal");save()
 }
};

function revealApp(){let splash=$("#splash"),appEl=$("#app");if(appEl)appEl.classList.remove("hidden");if(splash){splash.classList.add("hide");setTimeout(()=>splash.remove(),400)}}
function boot(){try{render()}catch(err){console.error("Step by Step boot error",err);let box=document.createElement("div");box.className="boot-error";box.innerHTML="<strong>Step by Step! had trouble loading.</strong><br>Please refresh the page. Your saved data has not been deleted.";document.body.appendChild(box)}finally{setTimeout(revealApp,900)}}
if("serviceWorker" in navigator)navigator.serviceWorker.register("./sw.js").catch(console.warn);
boot();
