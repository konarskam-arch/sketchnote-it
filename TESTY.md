# Weryfikacja wersji 1.0

## Wykonane sprawdzenia

- Poprawność składni JavaScript: PASS (parser Node.js).
- Istnienie 82 lokalnych odwołań w 7 dokumentach HTML: PASS.
- Początkowy podgląd i aktualizacja po kliknięciu: PASS w teście logiki z zastępczym DOM.
- Sprawdzanie niepełnego i poprawnego zadania: PASS w teście logiki z zastępczym DOM.
- Przywrócenie początkowego kodu: PASS w teście logiki.
- Wynik quizu 3/3 oraz 0/3, wyjaśnienia i reset: PASS w teście logiki.
- Polityka blokująca skrypty umieszczona przed kodem użytkownika: PASS, sprawdzenie generowanego srcdoc.
- Pusty sandbox, brak bibliotek zewnętrznych i lokalna struktura plików: sprawdzenie źródeł.

## Ograniczenie weryfikacji

Nie udało się uruchomić połączenia z przeglądarką testową w tym środowisku. Nie wykonano oględzin renderowania ani testów interakcji i skuteczności izolacji w prawdziwej przeglądarce. Testy logiki nie zastępują takich testów. Układ zawiera reguły responsywne dla 720 i 1000 px, ale wymaga wizualnego odbioru przed publiczną publikacją.

## Lista odbioru w przeglądarce

1. Otwórz index.html, przejdź przez wszystkie pięć działów i wróć linkiem do strony głównej.
2. Sprawdź szerokości 375, 768 i 1440 px: czytelność, brak poziomego przewijania, dostępność menu i przycisków.
3. W lekcji zmień h1 na „Moja przygoda z IT”, dodaj drugi akapit p i uruchom podgląd. Sprawdź wynik zadania i przywrócenie przykładu.
4. Odpowiedz poprawnie na quiz: body, h1, poprawne kodowanie. Oczekiwany wynik: 3/3. Zmień odpowiedzi na błędne: 0/3. Sprawdź reset.
5. Bez odpowiedzi formularz powinien wymagać uzupełnienia pytań.
6. W edytorze dodaj znacznik script z alert(1). W podglądzie nie może uruchomić się skrypt. Dodaj zewnętrzny obraz i iframe — zasoby powinny zostać zablokowane przez CSP (sprawdź też panel Network przeglądarki).
7. Przejdź stronę klawiszem Tab: widoczny fokus, działające przyciski i etykiety odpowiedzi.
8. Odśwież lekcję: kod i quiz wracają do stanu początkowego.
9. Po publikacji powtórz test pod adresem projektu GitHub Pages.
