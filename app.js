function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');}
const rotation=['Lower A','Upper A','Lower B','Upper B'];
const todaysWorkout=rotation[new Date().getDate()%4];
document.getElementById('workoutContent').innerHTML='<div class="card"><h3>'+todaysWorkout+'</h3><ul>'+workouts[todaysWorkout].map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';
document.getElementById('mealContent').innerHTML='<div class="card"><ul>'+meals.map(x=>'<li>'+x+'</li>').join('')+'</ul><p><strong>2200 kcal | 130g protein target</strong></p></div>';
let p='';for(let i=1;i<=14;i++){p+='<div class="card">Day '+i+'</div>';}document.getElementById('plannerContent').innerHTML=p;
function saveCheckin(){localStorage.setItem('protein',document.getElementById('protein').value);localStorage.setItem('calories',document.getElementById('calories').value);document.getElementById('checkinResult').innerText='Saved!';}
