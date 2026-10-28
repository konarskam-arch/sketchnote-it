# Sketchnote IT — wersja 1.0

Responsywna platforma edukacyjna w języku polskim, napisana w HTML, CSS i JavaScript. Bez bibliotek, Firebase, kont, analityki i zewnętrznych czcionek.

## Uruchomienie w 30 sekund

1. Rozpakuj ZIP.
2. Otwórz folder sketchnote-it.
3. Otwórz index.html w aktualnej przeglądarce Chrome, Edge, Firefox lub Safari.
4. Wybierz „Zacznij od HTML5”. JavaScript musi być włączony dla edytora i quizu.

Nie potrzeba instalacji ani internetu. Wszystkie ścieżki są względne — strona działa także w podkatalogu GitHub Pages.

Opcjonalnie, jeżeli masz Python 3, uruchom w folderze z index.html:

    python -m http.server 8000

Następnie otwórz http://localhost:8000. Zakończ serwer przez Ctrl+C.

## Co zawiera wersja startowa

- Strona główna z mapą nauki i pięcioma działami.
- HTML5: wprowadzenie i pełna pierwsza lekcja z teorią, zadaniem, edytorem, podglądem i quizem.
- CSS3, JavaScript, SQL, INF.03: krótkie wprowadzenia, przykłady i mapy tematów. Dalsze interaktywne lekcje są planowane.
- Quiz: trzy pytania, wynik i wyjaśnienia; możliwe powtarzanie.
- Zadanie: sprawdzenie nagłówka i dwóch niepustych akapitów. To proste sprawdzenie celu ćwiczenia, nie pełny walidator HTML.
- Układ na telefon i komputer, widoczne oznaczenie fokusu, etykiety formularzy, odnośnik pomijania menu i obsługa ograniczonego ruchu.

## Pliki

    index.html               strona główna
    html5.html               wprowadzenie HTML5
    css3.html                wprowadzenie CSS3
    javascript.html          wprowadzenie JavaScript
    sql.html                 wprowadzenie SQL
    inf03.html               wprowadzenie INF.03
    lekcja-html5.html         interaktywna lekcja 01
    assets/style.css         wygląd i responsywność
    assets/app.js            edytor, zadanie i quiz
    assets/favicon.svg       lokalna ikona
    .nojekyll                publikacja statycznych plików
    README.md                ten przewodnik
    TESTY.md                 zakres i wyniki weryfikacji

## Publikacja w repozytorium GitHub

Repozytorium docelowe: https://github.com/konarskam-arch/sketchnote-it

1. Rozpakuj archiwum. Do repozytorium dodaj ZAWARTOŚĆ folderu sketchnote-it, aby index.html leżał bezpośrednio w głównym katalogu repozytorium. Nie przesyłaj samego ZIP-a ani folderu nadrzędnego.
2. W zakładce Code wybierz Add file → Upload files. Przeciągnij pliki i folder assets, następnie zapisz zmiany przez Commit changes. Upewnij się, że do repozytorium trafił również pusty plik .nojekyll (jeśli go brakuje, utwórz przez Add file → Create new file).
3. Otwórz Settings → Pages.
4. W Build and deployment wybierz Source: Deploy from a branch.
5. Wybierz gałąź main (lub faktyczną gałąź z plikami) i folder /(root), następnie Save.
6. Poczekaj na ukończenie publikacji. Status jest widoczny w Actions i Settings → Pages.
7. Standardowy adres tej witryny będzie mieć postać https://konarskam-arch.github.io/sketchnote-it/ — obowiązuje adres pokazany w Pages.

Jeśli repozytorium już ma pliki o tych samych nazwach, przed ich zastąpieniem zachowaj swoją kopię. Archiwum nie zawiera historii Git i nie zmienia ustawień repozytorium automatycznie. Wgrywanie plików do repozytorium i publikacja nie zostały wykonane w ramach przygotowania ZIP-a.

Opcjonalnie przez Git (w istniejącym lokalnym klonie, po skopiowaniu plików):

    git add .
    git commit -m "Dodaj pierwszą wersję Sketchnote IT"
    git push origin main

Konfiguracja Pages według oficjalnej dokumentacji: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Podgląd kodu i prywatność

- iframe ma pusty atrybut sandbox: brak zezwolenia na skrypty, wspólne pochodzenie, formularze, wyskakujące okna i nawigację okna nadrzędnego.
- srcdoc rozpoczyna się polityką CSP blokującą skrypty, połączenia sieciowe, zewnętrzne zasoby, ramki, obiekty, bazowy adres URL i wysyłanie formularzy. Dopuszczone są lokalne style oraz obrazy data:.
- Nie dodawaj allow-scripts ani allow-same-origin. Edytor tej wersji służy do HTML/CSS; nie uruchamia JavaScriptu użytkownika.
- Sprawdzanie ćwiczenia parsuje treść w odłączonym elemencie template; kod nie jest wstawiany do dokumentu platformy.
- Platforma nie używa cookies, localStorage ani usług gromadzących dane. Wynik quizu i kod istnieją tylko w pamięci bieżącej strony. Odświeżenie usuwa zmiany.
- Brak danych uczniów, kluczy API, poufnych materiałów i oficjalnych arkuszy egzaminacyjnych. Host publikacji może prowadzić własne logi HTTP.
- Izolacja iframe nie jest ochroną przed obciążeniem przeglądarki bardzo dużym dokumentem. Nie traktuj tej wersji jako środowiska do wykonywania dowolnego kodu.

Opis sandbox i srcdoc: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe

## Rozbudowa

Zmieniaj kolory w zmiennych na początku assets/style.css. Dodając lekcję, skopiuj szkielet lekcja-html5.html, nadaj unikalny tytuł, zmień treść i uzupełnij odnośniki w odpowiednim dziale. app.js uruchamia obsługę tylko na stronach z edytorem — nowa lekcja wymaga dostosowania zadania i quizu. Przed publikacją sprawdź każdy nowy odnośnik i testy z TESTY.md.

## Gdy coś nie działa

- Brak stylów: zachowaj folder assets obok index.html.
- Quiz prosi o odpowiedź: zaznacz jedną opcję w każdym z trzech pytań.
- Podgląd nie reaguje na pisanie: kliknij „Uruchom podgląd”.
- Obraz z internetu lub skrypt nie działa: podgląd celowo je blokuje.
- Pages pokazuje 404: sprawdź gałąź i folder publikacji oraz obecność index.html w katalogu głównym; zaczekaj na ukończenie zadania w Actions.
- Nieaktualny wygląd po publikacji: odśwież stronę z pominięciem pamięci podręcznej (Ctrl+F5).

Wersja przygotowana: 28 października 2026 r.

## Motyw ciemny
Cała platforma i domyślny podgląd lekcji używają ciemnego granatowego tła, jasnego tekstu oraz błękitnych, miętowych i fioletowych akcentów. Reguły motywu znajdują się na końcu assets/style.css.

