import { Injectable } from '@angular/core';
import { Comic } from '../shared/models/Comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor() { }

  getComicById(id: Number): Comic {
    return this.getAll().find(comic => comic.id == id)!;
  }

  getAll(): Comic[] {
    return [
      {
        id: 1,
        name: "Iron Man Epic Collection: Age of Innocence",
        year: 2024,
        price: 20,
        numberOfPages: 100,
        publishedBy: "Marvel Universe",
        description: "With Iron Man revealed as a traitor in their midst, the Avengers turn to…a younger Tony Stark! But will Teen Tony join their cross-dimensional mission? And when Iron Man battles Iron Man, who will prove themselves invincible? Finding his way in the modern day, Teen Tony joins Captain America and Thor in battle with the Zodiac, and faces a chilling encounter with Frostbite! But young love leads to a date with disaster — and when Tony’s cousin Morgan Stark sets his sights on all the Iron Man armors, War Machine lends a hand!",
        imageUrl: "/assets/images/Iron-Man-gli-Avengers-05.jpg",
      },
      {
        id: 2,
        name: "Star Trek Library Collection, Vol. 3",
        year: 2024,
        price: 15,
        numberOfPages: 130,
        publishedBy: "IDW Publishing",
        description: "Delve into the history of IDW’s Star Trek comics! Discover series you may have missed or revisit some old favorites in Year Four, Year Four—The Enterprise Experiment, and Alien Spotlight one-shots featuring Vulcans and the Gorn. The Star Trek Library Collection is a comprehensive line of books that will collect every Star Trek miniseries published by IDW! In Volume 3, read a selection of the Alien Spotlight one-shots and the entirety of the Star Trek: Year Four series.",
        imageUrl: "/assets/images/starTrek.jpg",
      },
      {
        id: 3,
        name: "Alan Scott: The Green Lantern",
        year: 2024,
        price: 10,
        numberOfPages: 60,
        publishedBy: "DC Universe",
        description: "The JSA s greatest hero faces his greatest villain, in a powerful story of courage showcasing DC s original Green Lantern in an all-new light! The Green Lantern is the most powerful member of the JSA, beloved by all of America, but his personal life is a well-kept secret. Both his public and private life are threatened when he s framed by a mysterious killer, and the victims are people from his past!",
        imageUrl: "/assets/images/greenLantern.jpg",
      },
      {
        id: 4,
        name: "Deadpool Wolverine #1",
        year: 2024,
        price: 22,
        numberOfPages: 130,
        publishedBy: "Marvel Universe X-Men",
        description: "The most unlikely team-up turned most demanded one, DEADPOOL and WOLVERINE are BACK! Together again and ready to blow your minds in this ongoing series that hits like a never-ending action movie - with the fate of the world in the balance!",
        imageUrl: "/assets/images/deadPool.jpg",
      },
      {
        id: 5,
        name: "Moon Knight: The Trial of Marc Spector",
        year: 2024,
        price: 20,
        numberOfPages: 55,
        publishedBy: "Marvel Universe",
        description: "As Acts of Vengeance from a dark alliance of villains wreak havoc on the Marvel Universe, Moon Knight deals with chaos on the streets — and faces unfamiliar foes including Flag-Smasher, Killer Shrike and the Ringer! Marc Spector joins deadly mercenaries to free Burunda from its ruthless dictator: his old nemesis, Bushman!",
        imageUrl: "/assets/images/moonKnight.jpg",
      },
      {
        id: 6,
        name: "Night Thrasher: Remix",
        year: 2024,
        price: 10,
        numberOfPages: 80,
        publishedBy: "Marvel Universe",
        description: "Nineties sensation Night Thrasher - breakout star of the New Warriors - headlines his first series in thirty years! It's time to thrash the night! Dwayne Taylor's days as the skateboarding super hero Night Thrasher are long over. But when the death of a loved one draws him back to New York City, Dwayne finds the past difficult to outrun.",
        imageUrl: "/assets/images/nightThrasher.jpg",
      },
      {
        id: 7,
        name: "Elseworlds: Batman Vol. 2",
        year: 2024,
        price: 30,
        numberOfPages: 60,
        publishedBy: "Batman DC",
        description: "In Elseworlds, heroes are taken from their usual settings and put into strange times and places some that have existed, or might have existed, and others that can t, couldn t or shouldn t exist. The result: heroes you know in worlds you don t. Gotham City is caught in a vortex of corruption and decay, and those who feed on blood and despair are about to suck any remaining life from her dying veins.",
        imageUrl: "/assets/images/batmanElseworlds.jpg",
      },
      {
        id: 8,
        name: "Fantastic Four Epic Collection: World's Greatest Comic Magazine",
        year: 2024,
        price: 30,
        numberOfPages: 64,
        publishedBy: "Marvel Universe",
        description: "In 1961, Stan Lee and Jack Kirby lit the fuse of the greatest revolution in comic book history - the Marvel Age of Comics - and it started right here, in the pages of the Fantastic Four! With the space race on, Reed Richards, Ben Grimm, Sue Storm and Johnny Storm shoot for the stars...but after their craft is bombarded by cosmic rays, they return to Earth with the startling powers of the Fantastic Four! These weren't just any super heroes, though - the Fantastic Four were a realistic, relatable, bickering and loveable family that couldn't pay their rent and didn't always love their superpowers.",
        imageUrl: "/assets/images/fantasticFour.jpg"
      },
      {
        id: 9,
        name: "Stranger Things: The Voyage",
        year: 2024,
        price: 20,
        numberOfPages: 96,
        publishedBy: "Dark Horse Books Stranger Things",
        description: "In this new Stranger Things story arc, the Demogorgon is a long way from Hawkins, Indiana and a Russian scientist is desperately trying to get their quarry home aboard an ocean freighter. Captain Jacoby is too broke to reject a shady deal from a group of Russians looking to get from Alaska back to Kamchatka on his freighter ship, The Persephone. Things get turned upside down when a crew member gets butchered. The captain and his crew suspect something strange is at play and must root out a monster while a vicious storm rages all around them in the middle of the ocean.",
        imageUrl: "/assets/images/strangerThingsComic.png"
      },
      {
        id: 10,
        name: "Harley Quinn Vol. 1: Girl in a Crisis",
        year: 2024,
        price: 15,
        numberOfPages: 144,
        publishedBy: "DC Comics Harley Quinn",
        description: "Ever have one of those days where ya just can t catch a break? A day where you re really trying not to get into trouble while your girlfriend is out of town, but then some jerk attacks you at brunch, you get arrested for some teensy-weensy property damage, and you re sentenced to community service? Well Harley Quinn has and it s enough to make a gal start seeing cartoon fishies every which way and such! And when Harley finds out she's been cursed, she'll need to use magic and travel the Multiverse and deal with...cartoon fish and higher beings?!",
        imageUrl: "/assets/images/harleyComic.png"
      },
      {
        id: 11,
        name: "Star Wars: The Mandalorian",
        year: 2024,
        price: 15,
        numberOfPages: 144,
        publishedBy: "Titan Comics Star Wars",
        description: "A deluxe collector's hardcover edition exploring the Star Wars saga on with features and interviews covering the first appearance of Boba Fett in the infamous Star Wars Holiday Special, the Droids and Ewoks cartoons - through to The Clone Wars and Star Wars Rebels and up to the present day - The Mandalorian, The Book of Boba Fett, and Obi-Wan Kenobi.",
        imageUrl: "/assets/images/mandalorian.jpg"
      },
      {
        id: 12,
        name: "Wonder Woman: Earth One",
        year: 2024,
        price: 10,
        numberOfPages: 376,
        publishedBy: "DC Comics Wonder Woman",
        description: "Graphic novels to read anywhere: DC Compact Comics collect DC s bestselling, most iconic stories in a new size! For years, Diana of Paradise Island yearned to leave the only home she knew behind for adventures that laid beyond its shores. Now, after a fateful meeting with Air Force pilot Steve Trevor, the Amazon Warrior finds herself in Man s World. And she is ready for anything that it may throw at her.",
        imageUrl: "/assets/images/wonderWomanComic.jpg"
      },
      {
        id: 13,
        name: "Batman/Superman: World's Finest Vol. 4: Return to Kingdom Come",
        year: 2024,
        price: 21,
        numberOfPages: 144,
        publishedBy: "DC Comics Superman",
        description: "Acclaimed writer Mark Waid returns to the world of Kingdom Come alongside artist Dan Mora in an epic adventure uniting two DC universes! Superman s former protege, Boy Thunder, is in danger and the only way to rescue him is to bridge the World s Finest universe with one that includes a jaded Superman, a broken Batman, and a war-hungry Wonder Woman .this is the world of Kingdom Come. Up against the villainous Magog, the World s Finest team find themselves trapped in a world on its way to an apocalyptic future. Will those who once were friends become foes and what will it take to save both universes?",
        imageUrl: "/assets/images/supermanComic.jpg"
      },
      {
        id: 14,
        name: "Naruto: Konoha's Story--The Steam Ninja Scrolls: The Manga",
        year: 2024,
        price: 10,
        numberOfPages: 200,
        publishedBy: "VIZ Media Naruto",
        description: "A comedic story set in the universe of Naruto that features Kakashi, Guy, and Mirai Sarutobi, along with the rest of the new generation!Sarutobi Mirai has a lot to live up to as the granddaughter of Konoha’s Third Hokage and the daughter of Sarutobi Asuma, the hero who gave up his life during the Great Ninja War. But as everyone continues to expect great things from her, she struggles to separate herself from her family’s legacy and find her own way. Mirai’s journey escorting Kakashi and Guy takes an unexpected turn when their route is cut off by a massive landslide.",
        imageUrl: "/assets/images/narutoComic.jpg"
      }
    ]
  }

  getAllComicsBySearchTerm(searchTerm: String) {
    return this.getAll().filter(comic => comic.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllComicsByCategory(category: string): Comic[] {
    return this.getAll().filter(comic => comic.publishedBy.toLowerCase().includes(category.toLowerCase()));
  }
}
