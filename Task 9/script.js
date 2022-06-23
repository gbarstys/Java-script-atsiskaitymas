/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
    if (this.budget >= 100000000) {
    console.log(`${this.title} biudžetas viršyjo 100 mln. USD`);
} else {
    console.log(`${this.title} biudžetas neviršyjo 100 mln. USD`);
}
}
}

const movie1 = new Movie("Spider-Man: No Way Home", "Jon Watts", 200000000);
const movie2 = new Movie("Dog", "Reid Carolin", 15000000);

movie1.wasExpensive();
movie2.wasExpensive();



