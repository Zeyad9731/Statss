/*
=========================================================
ملعبنا — التعديل كله من الملف ده (app.js)
- غيّر الاسم والأرقام والصورة لكل لاعب تحت PLAYERS.
- ضع صور اللاعبين داخل مجلد images ثم اكتب المسار مثل: "images/ahmed.jpg"
- بيانات الحجوزات داخل BOOKINGS. كل حجز يحتوي 15 خانة.
- لا يوجد وضع إدارة أو أدوات تعديل داخل الموقع.
=========================================================
*/
const PLAYERS = [
  { name: "عبدالملك الفرماوي",photo: "images/abdelmalek-farmawy.jpg",matches: 1, goals: 7, assists: 3, booking: 1 },
  { name: "ابراهيم ماجد",    photo: "images/ibrahim-majed.jpg",    matches: 1, goals: 5, assists: 2, booking: 0 },
  { name: "ادم محمود",       photo: "images/adam-mahmoud.jpg",       matches: 1, goals: 5, assists: 1, booking: 0 },
  { name: " يسين",   photo: "images/yassin.jpg", matches: 1, goals: 1, assists: 2, booking: 0 },
  { name: "محمد اسماعيل",    photo: "images/mohamed-esmail.jpg",     matches: 1, goals: 1, assists: 2, booking: 0 },
  { name: "يوسف ابراهيم",    photo: "images/youssef-ibrahim.jpg",    matches: 1, goals: 1, assists: 2, booking: 0 }, 
  { name: "احمد صبحي",       photo: "images/ahmed-sobhy.jpg",        matches: 1, goals: 2, assists: 0, booking: 0 },
  { name: "ادهم",             photo: "images/adham.jpg",             matches: 1, goals: 0, assists: 2, booking: 0 },
 { name: "محمود المحمودي",  photo: "images/mahmoud-mahmoudy.jpg",   matches: 1, goals: 0, assists: 2, booking: 0 },
 { name: "محمد اسعد",       photo: "images/mohamed-asad.jpg",       matches: 1, goals: 1, assists: 0, booking: 0 },
  { name: "احمد حسام",       photo: "images/ahmed-hossam.jpg",       matches: 1, goals: 1, assists: 0, booking: 0 },
  { name: "عمار ياسر",       photo: "images/ammar-yasser.jpg",       matches: 1, goals: 0, assists: 1, booking: 0 },
  { name: "عبدالرحمن عصام",   photo: "images/abdelrahman-essam.jpg", matches: 1, goals: 0, assists: 0, booking: 0 },
 { name: "محمد عباس",       photo: "images/mohamed-abbas.jpg",      matches: 1, goals: 0, assists: 0, booking: 0 },
   { name: " تميم",   photo: "images/tamim.jpg", matches: 1, goals: 0, assists: 0, booking: 0 },
  { name: "زياد اسماعيل",    photo: "images/ziad-esmail.jpg",        matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "محمد اكرامي",     photo: "images/mohamed-ekramy.jpg",     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "زياد البحيري",    photo: "images/ziad-beheiry.jpg",       matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "يحيى سالم",       photo: "images/yahya-salem.jpg",        matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "محمد مصطفى",      photo: "images/mohamed-mostafa.jpg",    matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "مالك مطر",        photo: "images/malek-matar.jpg",        matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "عمر وحيد",        photo: "images/omar-waheed.jpg",        matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "مازن البربري",    photo: "images/mazen-barbary.jpg",      matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "عمر وليد",        photo: "images/omar-waleed.jpg",        matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "احمد سابق",       photo: "images/ahmed-sabek.jpg",        matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "يوسف غانم",       photo: "images/youssef-ghanem.jpg",     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "محمد طارق",       photo: "images/mohamed-tarek.jpg",     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "باسل وليد",       photo: "images/basel-waleed.jpg",      matches: 0, goals: 0, assists: 0, booking: 0 },
 
  
 
];

// عدّل الحجوزات هنا. انسخ قالب الحجز لإضافة حجز آخر، وغيّر id والبيانات.
// اترك name فارغًا للخانة غير المستخدمة. كل حجز مستقل عن الآخر.
const BOOKINGS = [
  {
    id: 1,
    date: "23/10/2026",
    venue: "Strikers hub",
    slots: [
      { name: "عبدالملك الفرماوي", goals: 7, assists: 3, booking: 1},
      { name: "ابراهيم ماجد", goals: 5, assists: 2, booking: 0 },
      { name: "ادم محمود", goals: 5, assists: 1, booking: 0 },
      { name: " يسين", goals: 1, assists: 2, booking: 0 },
      { name: "محمد اسماعيل ", goals: 1, assists: 2, booking: 0 },
      { name: "يوسف ابراهيم  ", goals: 1, assists: 2, booking: 0 },
      { name: "احمد صبحي", goals: 2, assists: 0, booking: 0 },
      { name: "ادهم", goals: 0, assists: 2, booking: 0 },
      { name: "محمود المحمودي", goals: 0, assists: 2, booking: 0 },
      { name: "محمد اسعد", goals: 1, assists: 0, booking: 0 },
      { name: " احمد حسام", goals: 1, assists: 0, booking: 0 },
      { name: "عمار ياسر ", goals: 0, assists: 1, booking: 0 },
      { name: "عبدالرحمن عصام", goals: 0, assists: 0, booking: 0 },
      { name: " محمد عباس", goals: 0, assists: 0, booking: 0 },
      { name: " تميم", goals: 0, assists: 0, booking: 0 },
    ]
  }
];

let currentPage = "home";
const pageHistory = [];

function goBackPage() {
  const previous = pageHistory.pop() || "home";
  showPage(previous, true);
}

function showPage(page, fromBack = false) {
  if (!fromBack && page !== currentPage) pageHistory.push(currentPage);
  currentPage = page;
  document.querySelectorAll(".page").forEach(el => el.classList.remove("active"));
  document.getElementById(page + "Page").classList.add("active");
  document.querySelectorAll(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.page === page));
  document.getElementById("crumbTitle").textContent = ({home:"الرئيسية",players:"اللاعبون",bookings:"إحصائيات الحجوزات"})[page];
  if (page === "players") renderPlayers();
  if (page === "bookings") renderBooking();
  document.querySelectorAll(".page-back").forEach(button => button.remove());
  if (page !== "home") {
    const activeHead = document.querySelector(`#${page}Page .page-head`);
    if (activeHead) {
      const back = document.createElement("button");
      back.className = "page-back";
      back.type = "button";
      back.innerHTML = "<span aria-hidden=\"true\">→</span> رجوع";
      back.onclick = goBackPage;
      activeHead.prepend(back);
    }
  }
  window.scrollTo({top:0,behavior:"smooth"});
}
function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function avatarHTML(player, extraClass="") {
  const fallback = `<span class="avatar ${extraClass}">${esc((player.name || "?").trim().charAt(0) || "?")}</span>`;
  if (!player.photo) return fallback;
  return `<img class="avatar ${extraClass}" src="${esc(player.photo)}" alt="صورة ${esc(player.name)}" onerror="this.outerHTML='<span class=&quot;avatar ${extraClass}&quot;>${esc((player.name || '?').trim().charAt(0) || '?')}</span>'">`;
}
function leaders() {
  return {
    goals: Math.max(0, ...PLAYERS.map(p => Number(p.goals) || 0)),
    assists: Math.max(0, ...PLAYERS.map(p => Number(p.assists) || 0))
  };
}
function renderPlayers() {
  const q = (document.getElementById("playerSearch")?.value || "").trim().toLowerCase();
  const max = leaders();
  const rows = PLAYERS.map((p,i)=>({p,i})).filter(x=>x.p.name.toLowerCase().includes(q));
  document.getElementById("shownCount").textContent = rows.length;
  document.getElementById("playersBody").innerHTML = rows.map(({p,i})=>{
    const isScorer = Number(p.goals) === max.goals && max.goals > 0;
    const isCreator = Number(p.assists) === max.assists && max.assists > 0;
    const rate = Number(p.matches) > 0 ? Math.min(100, Number(p.goals)/Number(p.matches)*100) : 0;
    return `<tr><td class="rank-col">${String(i+1).padStart(2,"0")}</td><td><div class="player-cell">${avatarHTML(p)}<div><div class="player-name">${esc(p.name)}</div><div class="player-badges">${isScorer?'<span class="badge gold">♛ الأكثر تسجيلاً</span>':""}${isCreator?'<span class="badge blue">✦ الأكثر صناعة</span>':""}</div></div></div></td><td class="num-cell">${Number(p.matches)||0}</td><td class="num-cell goal">${Number(p.goals)||0}</td><td class="num-cell assist">${Number(p.assists)||0}</td><td class="num-cell">${Number(p.booking)||0}</td><td><span class="rate-track"><span style="width:${rate}%"></span></span><span style="color:#9cac9f;font:10px Arial">${p.matches?((Number(p.goals)/Number(p.matches)).toFixed(1)):"0.0"}</span></td></tr>`;
  }).join("");
}
function renderHome() {
  document.getElementById("homePlayers").textContent = PLAYERS.length;
  document.getElementById("sideCount").textContent = PLAYERS.length;
  document.getElementById("homeGoals").textContent = PLAYERS.reduce((sum,p)=>sum+(Number(p.goals)||0),0);
  document.getElementById("homeAssists").textContent = PLAYERS.reduce((sum,p)=>sum+(Number(p.assists)||0),0);
  document.getElementById("homeBookings").textContent = BOOKINGS.length;
  const maxGoals = leaders().goals;
  const top = PLAYERS.find(p => maxGoals > 0 && Number(p.goals) === maxGoals);
  document.getElementById("topScorerHome").innerHTML = top
    ? `${avatarHTML(top,"large")}<div><b>${esc(top.name)}</b><small>متصدر قائمة الهدافين</small></div><span class="goal-chip">${Number(top.goals)||0} ⚽</span>`
    : `<span class="avatar large">?</span><div><b>لسه المنافسة مفتوحة</b><small>أول جون هيبدأ الحكاية</small></div><span class="goal-chip">0 ⚽</span>`;
}
let currentBooking = 0;
function moveBooking(direction) {
  const next = currentBooking + direction;
  if (next < 0 || next >= BOOKINGS.length) return;
  currentBooking = next; renderBooking();
}
function renderBooking() {
  if (!BOOKINGS.length) {
    document.getElementById("bookingTitle").textContent = "مفيش حجوزات لسه";
    document.getElementById("bookingCounter").innerHTML = "00 <span>/ 00</span>";
    document.getElementById("bookingBody").innerHTML = "";
    return;
  }
  currentBooking = Math.max(0, Math.min(currentBooking, BOOKINGS.length-1));
  const b = BOOKINGS[currentBooking];
  const slots = Array.from({length:15},(_,i)=>b.slots?.[i] || {name:"",goals:0,assists:0,booking:0});
  const filled = slots.filter(s=>s.name?.trim()).length;
  document.getElementById("bookingTitle").textContent = "الحجز رقم " + String(b.id).padStart(2,"0");
  document.getElementById("bookingSubtitle").textContent = `${b.date || "التاريخ غير محدد"} • ${b.venue || "الملعب غير محدد"}`;
  document.getElementById("bookingCounter").innerHTML = String(currentBooking+1).padStart(2,"0") + ` <span>/ ${String(BOOKINGS.length).padStart(2,"0")}</span>`;
  document.getElementById("bookingPlayers").innerHTML = `${filled} <small>/ 15</small>`;
  document.getElementById("bookingGoals").textContent = slots.reduce((s,p)=>s+(Number(p.goals)||0),0);
  document.getElementById("bookingAssists").textContent = slots.reduce((s,p)=>s+(Number(p.assists)||0),0);
  const special = slots.filter(s=>Number(s.booking)>0 && s.name).sort((a,b)=>Number(b.booking)-Number(a.booking))[0];
  document.getElementById("bookingSpecial").textContent = special?.name || "—";
  document.getElementById("bookingBody").innerHTML = slots.map((s,i)=>`<tr><td class="rank-col">${String(i+1).padStart(2,"0")}</td><td><span class="${s.name?'':'booking-empty'}">${s.name?esc(s.name):"— خانة فارغة —"}</span></td><td class="num-cell goal">${Number(s.goals)||0}</td><td class="num-cell assist">${Number(s.assists)||0}</td><td class="num-cell">${Number(s.booking)||0}</td></tr>`).join("");
}
renderHome(); renderPlayers(); render