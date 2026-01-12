import { Category } from '../types';

// Simulating the "Pre-population" of the database
export const getCategories = (): Category[] => [
  {
    id: 1,
    title: 'Historia i Kampus',
    description: 'Pytania o historię uczelni, rebranding oraz lokalizację w Gdańsku.',
    iconName: 'history',
    questions: [
      {
        id: 101,
        text: 'Pod jaką nazwą funkcjonowała uczelnia przed zmianą na Uniwersytet WSB Merito?',
        answers: [
          { id: 1, text: 'Wyższa Szkoła Administracji', isCorrect: false },
          { id: 2, text: 'Wyższa Szkoła Bankowa', isCorrect: true },
          { id: 3, text: 'Gdańska Szkoła Biznesu', isCorrect: false },
          { id: 4, text: 'Politechnika Merito', isCorrect: false },
        ],
      },
      {
        id: 102,
        text: 'Przy jakiej głównej ulicy w Gdańsku znajduje się siedziba uczelni?',
        answers: [
          { id: 1, text: 'Aleja Grunwaldzka', isCorrect: true },
          { id: 2, text: 'Ulica Długa', isCorrect: false },
          { id: 3, text: 'Wały Jagiellońskie', isCorrect: false },
          { id: 4, text: 'Ulica Kartuska', isCorrect: false },
        ],
      },
      {
        id: 103,
        text: 'W którym roku powstała pierwsza Wyższa Szkoła Bankowa (Poznań), dając początek grupie?',
        answers: [
          { id: 1, text: '1994', isCorrect: true },
          { id: 2, text: '2005', isCorrect: false },
          { id: 3, text: '1989', isCorrect: false },
          { id: 4, text: '2010', isCorrect: false },
        ],
      },
      {
        id: 104,
        text: 'W którym roku WSB rozpoczęła swoją działalność dydaktyczną w Gdańsku?',
        answers: [
          { id: 1, text: '1998', isCorrect: true },
          { id: 2, text: '2004', isCorrect: false },
          { id: 3, text: '1990', isCorrect: false },
          { id: 4, text: '2015', isCorrect: false },
        ],
      },
      {
        id: 105,
        text: 'W jakiej dzielnicy Gdańska znajduje się główny kampus uczelni?',
        answers: [
          { id: 1, text: 'Oliwa', isCorrect: false },
          { id: 2, text: 'Wrzeszcz', isCorrect: true },
          { id: 3, text: 'Przymorze', isCorrect: false },
          { id: 4, text: 'Śródmieście', isCorrect: false },
        ],
      },
      {
        id: 106,
        text: 'W którym roku nastąpił oficjalny rebranding i zmiana nazwy na Uniwersytet WSB Merito?',
        answers: [
          { id: 1, text: '2020', isCorrect: false },
          { id: 2, text: '2021', isCorrect: false },
          { id: 3, text: '2023', isCorrect: true },
          { id: 4, text: '2019', isCorrect: false },
        ],
      },
      {
        id: 107,
        text: 'Jaki status prawny posiada uczelnia WSB Merito?',
        answers: [
          { id: 1, text: 'Uczelnia Publiczna (Państwowa)', isCorrect: false },
          { id: 2, text: 'Uczelnia Niepubliczna', isCorrect: true },
          { id: 3, text: 'Spółka Skarbu Państwa', isCorrect: false },
          { id: 4, text: 'Fundacja', isCorrect: false },
        ],
      },
      {
        id: 108,
        text: 'Jak nazywa się system online służący do obsługi toku studiów dla studentów?',
        answers: [
          { id: 1, text: 'USOS', isCorrect: false },
          { id: 2, text: 'Extranet', isCorrect: true },
          { id: 3, text: 'E-Dziekanat', isCorrect: false },
          { id: 4, text: 'MoodleOnly', isCorrect: false },
        ],
      },
      {
        id: 109,
        text: 'Co było głównym powodem zmiany statusu z "Wyższej Szkoły" na "Uniwersytet"?',
        answers: [
          { id: 1, text: 'Tylko zmiana marketingowa', isCorrect: false },
          { id: 2, text: 'Wykupienie innej uczelni', isCorrect: false },
          { id: 3, text: 'Uzyskanie wysokich kategorii naukowych w ewaluacji', isCorrect: true },
          { id: 4, text: 'Decyzja prezydenta miasta', isCorrect: false },
        ],
      },
      {
        id: 110,
        text: 'Jaki kolor dominuje w identyfikacji wizualnej marki WSB Merito?',
        answers: [
          { id: 1, text: 'Czerwony', isCorrect: false },
          { id: 2, text: 'Granatowy', isCorrect: true },
          { id: 3, text: 'Zielony', isCorrect: false },
          { id: 4, text: 'Fioletowy', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Kierunki i Studia',
    description: 'Sprawdź swoją wiedzę o ofercie dydaktycznej i podejściu praktycznym.',
    iconName: 'study',
    questions: [
      {
        id: 201,
        text: 'Co w języku łacińskim oznacza słowo "Merito"?',
        answers: [
          { id: 1, text: 'Szybko i tanio', isCorrect: false },
          { id: 2, text: 'Mądrze i nowocześnie', isCorrect: false },
          { id: 3, text: 'Słusznie, zasłużenie', isCorrect: true },
          { id: 4, text: 'Mbankowość i finanse', isCorrect: false },
        ],
      },
      {
        id: 202,
        text: 'Jaki jest główny wyróżnik programu studiów na WSB Merito?',
        answers: [
          { id: 1, text: 'Tylko teoria książkowa', isCorrect: false },
          { id: 2, text: 'Praktyczność i elastyczność', isCorrect: true },
          { id: 3, text: 'Brak zajęć online', isCorrect: false },
          { id: 4, text: 'Egzaminy tylko ustne', isCorrect: false },
        ],
      },
      {
        id: 203,
        text: 'Który z poniższych kierunków jest silnie rozwijany w ofercie IT uczelni?',
        answers: [
          { id: 1, text: 'Informatyka', isCorrect: true },
          { id: 2, text: 'Medycyna', isCorrect: false },
          { id: 3, text: 'Archeologia', isCorrect: false },
          { id: 4, text: 'Rolnictwo', isCorrect: false },
        ],
      },
      {
        id: 204,
        text: 'Jaki tytuł zawodowy uzyskuje się po ukończeniu studiów inżynierskich?',
        answers: [
          { id: 1, text: 'Magister', isCorrect: false },
          { id: 2, text: 'Licencjat', isCorrect: false },
          { id: 3, text: 'Inżynier', isCorrect: true },
          { id: 4, text: 'Doktor', isCorrect: false },
        ],
      },
      {
        id: 205,
        text: 'Czy uczelnia oferuje prestiżowe studia menedżerskie typu MBA?',
        answers: [
          { id: 1, text: 'Tak, posiada bogatą ofertę MBA', isCorrect: true },
          { id: 2, text: 'Nie, to domena tylko uczelni publicznych', isCorrect: false },
          { id: 3, text: 'Tylko dla studentów zagranicznych', isCorrect: false },
          { id: 4, text: 'MBA zostało wycofane w 2010 roku', isCorrect: false },
        ],
      },
      {
        id: 206,
        text: 'Jak nazywa się popularny europejski program wymiany studenckiej dostępny na uczelni?',
        answers: [
          { id: 1, text: 'Work and Travel', isCorrect: false },
          { id: 2, text: 'Erasmus+', isCorrect: true },
          { id: 3, text: 'Camp America', isCorrect: false },
          { id: 4, text: 'Student Exchange Global', isCorrect: false },
        ],
      },
      {
        id: 207,
        text: 'Czy w ofercie uczelni znajduje się kierunek "Psychologia w biznesie"?',
        answers: [
          { id: 1, text: 'Nie', isCorrect: false },
          { id: 2, text: 'Tak', isCorrect: true },
          { id: 3, text: 'Tylko jako kurs weekendowy', isCorrect: false },
          { id: 4, text: 'Tylko dla doktorantów', isCorrect: false },
        ],
      },
      {
        id: 208,
        text: 'Ile zazwyczaj trwają studia I stopnia inżynierskie na tej uczelni?',
        answers: [
          { id: 1, text: '3 lata (6 semestrów)', isCorrect: false },
          { id: 2, text: '3,5 roku (7 semestrów)', isCorrect: true },
          { id: 3, text: '5 lat (jednolite)', isCorrect: false },
          { id: 4, text: '2 lata', isCorrect: false },
        ],
      },
      {
        id: 209,
        text: 'Jak nazywa się jednostka uczelni pomagająca studentom w znalezieniu stażu lub pracy?',
        answers: [
          { id: 1, text: 'Dziekanat', isCorrect: false },
          { id: 2, text: 'Kwestura', isCorrect: false },
          { id: 3, text: 'Biuro Karier', isCorrect: true },
          { id: 4, text: 'Biuro Rekrutacji', isCorrect: false },
        ],
      },
      {
        id: 210,
        text: 'Czy studia podyplomowe są dostępne dla osób posiadających tytuł licencjata?',
        answers: [
          { id: 1, text: 'Nie, tylko dla magistrów', isCorrect: false },
          { id: 2, text: 'Tak, licencjat uprawnia do podjęcia studiów podyplomowych', isCorrect: true },
          { id: 3, text: 'Tylko jeśli licencjat był zrobiony na WSB', isCorrect: false },
          { id: 4, text: 'Tylko dla osób po 40 roku życia', isCorrect: false },
        ],
      },
    ],
  },
];