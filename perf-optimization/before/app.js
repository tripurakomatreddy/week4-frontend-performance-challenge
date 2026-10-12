// Unminified, blocking JavaScript with heavy computations and no optimization

console.log('App.js loaded - this blocks parsing');

// Simulate heavy computation on load (bad practice)
function heavyComputation() {
  let result = 0;
  for (let i = 0; i < 5000000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  return result;
}

// Run heavy work immediately (blocks main thread)
const computationResult = heavyComputation();
console.log('Heavy computation done:', computationResult);

// Inefficient DOM manipulation
function populateStats() {
  const statsContainer = document.getElementById('stats');
  if (!statsContainer) return;

  const stats = [
    { number: '150+', label: 'Destinations' },
    { number: '50k+', label: 'Happy Travelers' },
    { number: '12', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction' }
  ];

  // Building HTML with string concatenation in a loop (inefficient)
  let html = '';
  for (let i = 0; i < stats.length; i++) {
    html += '<div class="stat-item">';
    html += '<div class="number">' + stats[i].number + '</div>';
    html += '<div class="label">' + stats[i].label + '</div>';
    html += '</div>';
  }
  statsContainer.innerHTML = html;
}

// Wait for DOM then run (but script is in head so may fail without defer)
document.addEventListener('DOMContentLoaded', function() {
  populateStats();
  
  // Attach many event listeners inefficiently
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', function() {
      this.style.border = '2px solid #ff6b35';
    });
    cards[i].addEventListener('mouseleave', function() {
      this.style.border = 'none';
    });
  }
});

function showAlert() {
  alert('Welcome to TravelExplorer! Start your adventure today.');
}

function handleSubmit(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
}

// Unused functions that bloat the file
function unusedFunction1() { return Math.random() * 100; }
function unusedFunction2() { console.log('unused'); }
function unusedFunction3(a, b) { return a + b; }
function unusedFunction4() { document.body.style.background = 'red'; }
function unusedFunction5() { return [1,2,3,4,5].map(x => x * 2); }
function unusedFunction6() { for(let i=0;i<1000;i++){} }
function unusedFunction7() { return new Date().toISOString(); }
function unusedFunction8() { localStorage.setItem('test', 'value'); }
function unusedFunction9() { return window.innerWidth; }
function unusedFunction10() { console.table({a:1,b:2}); }
