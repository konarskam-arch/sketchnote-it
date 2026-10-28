'use strict';
(function () {
  var editor = document.getElementById('editor');
  if (!editor) return;
  var initial = editor.value;
  var preview = document.getElementById('preview');
  var status = document.getElementById('exercise-status');
  function render() {
    // First policy wins: placed before all learner-controlled markup.
    var policy = "default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; font-src 'none'; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";
    preview.srcdoc = '<!doctype html><meta http-equiv="Content-Security-Policy" content="' + policy + '"><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;padding:20px;background:#101a2b;color:#e7edf8;color-scheme:dark;overflow-wrap:anywhere}a{pointer-events:none}</style>' + editor.value;
  }
  document.getElementById('run').addEventListener('click', function () { render(); status.textContent = 'Podgląd został zaktualizowany.'; });
  document.getElementById('reset').addEventListener('click', function () { editor.value = initial; render(); status.textContent = 'Przywrócono kod początkowy.'; });
  document.getElementById('check').addEventListener('click', function () {
    // Template parsing is inert: learner markup never enters the page DOM.
    var template = document.createElement('template'); template.innerHTML = editor.value;
    var heading = template.content.querySelector('h1');
    var paragraphs = Array.from(template.content.querySelectorAll('p')).filter(function(p){ return p.textContent.trim(); });
    var issues = [];
    if (!heading || heading.textContent.trim() !== 'Moja przygoda z IT') issues.push('Zmień treść h1 na „Moja przygoda z IT”.');
    if (paragraphs.length < 2) issues.push('Dodaj co najmniej dwa niepuste akapity p.');
    render(); status.textContent = issues.length ? issues.join(' ') : 'Świetnie! Nagłówek i dwa akapity są gotowe. Zadanie wykonane.';
  });
  var quiz = document.getElementById('quiz-form');
  var correct = ['1','2','0'];
  var explanations = ['body zawiera widoczną treść dokumentu.', 'h1 oznacza główny nagłówek strony.', 'UTF-8 to kodowanie obsługujące m.in. polskie znaki.'];
  quiz.addEventListener('submit', function(event) {
    event.preventDefault(); var score = 0;
    correct.forEach(function(answer,i) {
      var selected = quiz.querySelector('input[name="q'+i+'"]:checked');
      var ok = selected && selected.value === answer; if(ok) score++;
      document.getElementById('q-feedback-'+i).textContent = (ok ? 'Dobrze! ' : 'Wróć do tego: ') + explanations[i];
    });
    document.getElementById('quiz-result').textContent = 'Twój wynik: '+score+'/3. '+(score===3?'Brawo! Podstawy masz opanowane.':'Przeczytaj wyjaśnienia i spróbuj ponownie.');
  });
  quiz.addEventListener('reset', function() { document.getElementById('quiz-result').textContent = ''; document.querySelectorAll('.question-feedback').forEach(function(el){el.textContent='';}); });
  render();
})();
