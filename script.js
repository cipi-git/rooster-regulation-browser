// playful interactions & robust checks
const card = document.querySelector('.card');
const btnAnnounce = document.getElementById('btn-announce');
const hourInput = document.getElementById('hour');
const btnCheck = document.getElementById('btn-check');
const roosterCall = document.getElementById('roosterCall');
const hourResult = document.getElementById('hourResult');
const toast = document.getElementById('toast');

// core logic
const Rooster = {
  announceDawn() {
    return "🐓 Cock-a-doodle-doo!";
  },
  timeAtDawn(hour) {
    if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
      return "⚠️ Invalid hour. Must be between 0–23.";
    }
    return `Hour is ${hour}`;
  }
};

// rotating backgrounds (pick any you like)
const bgs = [
  "linear-gradient(135deg,#ff7a00,#ff3e7f)",
  "linear-gradient(135deg,#16a34a,#22d3ee)",
  "linear-gradient(135deg,#dc2626,#f97316)",
  "linear-gradient(135deg,#0ea5e9,#6366f1)",
  "linear-gradient(135deg,#9333ea,#f43f5e)"
];
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
function nextBg(){ document.body.style.background = pick(bgs); }

// helpers
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1100);
}
function burst(){
  card.classList.remove('burst');
  void card.offsetWidth;      // reflow to retrigger animation
  card.classList.add('burst');
}
function handleCheck(){
  const raw = hourInput.value;
  if (raw === ""){
    hourResult.textContent = "⚠️ Please enter an hour (0–23).";
    return;
  }
  const hour = Number(raw);
  hourResult.textContent = Rooster.timeAtDawn(hour);
}

// events
btnAnnounce.addEventListener('click', () => {
  roosterCall.textContent = Rooster.announceDawn();
  burst();
  showToast("Rooster yelled!");
  nextBg(); // <-- change background every time we press the rooster button
});

btnCheck.addEventListener('click', handleCheck);

hourInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleCheck();
});

// optional keyboard feedback on buttons
document.querySelectorAll('button').forEach(b => {
  b.addEventListener('keydown', (e)=>{
    if (e.key === ' ' || e.key === 'Enter'){ b.classList.add('active'); }
  });
  b.addEventListener('keyup', ()=> b.classList.remove('active'));
});
