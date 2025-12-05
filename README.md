# 🎬 Movie App

Una Single Page Application (SPA) sviluppata in **React** che utilizza le API di **TheMovieDB** per permettere agli utenti di cercare, visualizzare dettagli e salvare film preferiti.  

---

## 📖 User Story

Un utente appassionato di cinema che vuole cercare, vedere dettagli e salvare film può usare questa piattaforma semplificata per scoprire cosa guardare.

---

## 🎯 MVP Scope

### Home Page
- Mostra almeno due sezioni di film da TMDB:
  - Popular
  - Top Rated
  - Trending
  - Upcoming
- Movie card cliccabili con poster e titolo.
- Bottone per la ricerca
- Bottone per la Home
- Bottone per i preferiti

### Search Page
- Campo di ricerca che aggiorna automaticamente i risultati.
- Visualizzazione dei film corrispondenti con poster e titolo.

### Movie Details Page
- Informazioni dettagliate:
  - Titolo
  - Poster
  - Trama
  - Rating
  - Generi
  - Data di uscita
- **Super bonus**: trailer YouTube cliccando sul poster.

### Favorites Page
- Lista di film salvati in **localStorage**.
- Possibilità di aggiungere/rimuovere dai preferiti.

### SPA Navigation
- Navigazione gestita da **state React**, senza reload della pagina.

---

## 🌟 Funzioni Creative

- **Swiper con carosello**: visualizzazione interattiva di diversi film nella homepage.
- **Scoperta casuale**: permette di trovare titoli inaspettati e ampliare la propria visione.
- **Filtri per genere**: possibilità di filtrare i film in base al genere selezionato.

---

## 🛠️ Tecnologie Utilizzate

- **React** (Hooks, State Management)
- **TheMovieDB API**
- **CSS Modules** (a scelta per lo styling)
- **localStorage** (persistenza dei preferiti)
- **Swiper.js** (per il carosello interattivo)

---

## 🚀 Installazione e Avvio

1. Clona il repository:
   ```bash
    git clone https://github.com/AlessandroDimaria/Portale_Di_Cinema_GB.git
```