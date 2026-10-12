// Another blocking script with more bloat

console.log('Extra.js loaded');

// More heavy work
(function() {
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    arr.push({ id: i, value: Math.random() });
  }
  // Sort unnecessarily
  arr.sort((a, b) => a.value - b.value);
  console.log('Extra computation finished, array length:', arr.length);
})();

// Simulate analytics that runs sync
function trackPageView() {
  // Fake network call simulation with loop
  let sum = 0;
  for (let i = 0; i < 2000000; i++) {
    sum += i % 7;
  }
  console.log('Analytics tracked, sum:', sum);
}

trackPageView();
