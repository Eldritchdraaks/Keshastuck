module.exports = {
   title: "Ke$hastuck Music", 
   summary: "Replaces some music with Ke$hastuck mashups.",
   author: "Eldritchdraaks",
   modVersion: 0.2,
   description: `Replaces some flash music with mashups made for the 2012 Ke$hastuck meme.`,

// User selects the songs they want from the settings menu, one per flash.

   settings: {
      radio: [{
         model: "wvascend",
         label: "'Explore'",
         desc: "Used in <a href='/mspa/002657'>[S] WV: Ascend</a>",
         options: [{
            value: "wvascendclinteastwood",
            label: "Gorillaz - 'Clint Eastwood'",
            desc: "------------"
            }]
         },{
         model: "enter",
         label: "'Sburban Jungle'",
         desc: "Used in <a href='/mspa/003049'>[S] Enter</a>",
         options: [{
            value: "enterdieyoung",
            label: "Ke$ha - 'Die Young'"
            },{
            value: "enterbadromance",
            label: "Lady Gaga - 'Bad Romance'"
            },{
            value: "enterpaparazzi",
            label: "Lady Gaga - 'Paparazzi'",
            desc: "------------"
            }]
         },{
         model: "makeherpay",
         label: "'Crystamanthequins'",
         desc: "Used in <a href='/mspa/004478'>[S] Make her pay</a>",
         options: [{
            value: "makeherpayprimadonnagirl",
            label: "Marina and the Diamonds - 'Primadonna Girl'",
            desc: "------------"
            }]
         },{
         model: "jadeenter",
         label: "'Umbral Ultimatum'",
         desc: "Used in <a href='/mspa/004827'>[S] Jade: Enter</a>",
         options: [{
            value: "jadeenterstupidhoe",
            label: "Nicki Minaj - 'Stupid Hoe'",
            desc: "------------"
            }]
         },{
         model: "wake",
         label: "'MeGoLoVania'",
         desc: "Used in <a href='/mspa/005197'>[S] Wake</a>",
         options: [{
            value: "wakebeautifuldirtyrich",
            label: "Lady Gaga - 'Beautiful, Dirty, Rich'"
            },{
            value: "wakewithoutme",
            label: "Eminem - 'Without Me'",
            desc: "------------"
            }]
         },{
         model: "unitesynchronize",
         label: "'Unite Synchronization'",
         desc: "Used in <a href='/mspa/007138'>[S] Dirk: Synchronize</a> and <a href='/mspa/007152'>[S] Dirk: Unite</a>",
         options: [{
            value: "unitesynchronizeheartbreaker",
            label: "Marina and the Diamonds - 'How to Be a Heartbreaker'",
            desc: "------------"
            }]
         }]
   },

// The mod tells a set of routes and edits to change the music and track name on a specific page. But how?



   routes: {
      'assets://storyfiles/hs2/00757/00757.mp3': './wvascend-clinteastwood.mp3',
      'assets://storyfiles/hs2/01149/01149.mp3': './enter-badromance.mp3',
      'assets://storyfiles/hs2/01149/01149.mp3': './enter-paparazzi.mp3',
      'assets://storyfiles/hs2/01149/01149.mp3': './enter-dieyoung.mp3',
      'assets://storyfiles/hs2/02577/02577.mp3': './makeherpay-primadonnagirl.mp3',
      'assets://storyfiles/hs2/02926/02926.mp3': './jadeenter-stupidhoe.mp3',
      'assets://storyfiles/hs2/13294/13294.mp3': './wake-withoutme.mp3',
      'assets://storyfiles/hs2/13294/13294.mp3': './wake-beautifuldirtyrich.mp3',
      'assets://storyfiles/hs2/05235/05235.mp3': './synchronize-heartbreaker.mp3',
      'assets://storyfiles/hs2/05249/05249.mp3': './unite-heartbreaker.mp3',

   },

   edit(archive) {
      if (store.get("wvascendclinteastwood")) {
         archive.music.flashes['002657'] = { "tracks": [ "Exploring Eastwood" ] }}
      if (store.get("enterdieyoung")) {
         archive.music.flashes['003049'] = { "tracks": [ "[S] Ke$ha: Enter" ] }}
      if (store.get("enterbadromance")) {
         archive.music.flashes['003049'] = { "tracks": [ "Sburban Romance" ] }}
      if (store.get("enterpaparazzi")) {
         archive.music.flashes['003049'] = { "tracks": [ "Sburban Paparazzi" ] }}
      if (store.get("makeherpayprimadonnagirl")) {
         archive.music.flashes['004478'] = { "tracks": [ "Primamanthequins" ] }}
      if (store.get("jadeenterstupidhoe")) {
         archive.music.flashes['004827'] = { "tracks": [ "[S] Nicki Minaj: Enter" ] }}
      if (store.get("wakebeautifuldirtyrich")) {
         archive.music.flashes['005197'] = { "tracks": [ "Beautiful, Dirty, MeGaLoVaniacal / [S] GaGa: Strife!" ] }}
      if (store.get("wakewithoutme")) {
         archive.music.flashes['005197'] = { "tracks": [ "WithOutMeGaLoVania" ] }}
      if (store.get("unitesynchronizeheartbreaker")) {
         archive.music.flashes['007138'] = { "tracks": [ "How to Unite and Synchronize / [S] Marina: Break her heart." ] }}
      if (store.get("unitesynchronizeheartbreaker")) {
         archive.music.flashes['007152'] = { "tracks": [ "How to Unite and Synchronize / [S] Marina: Break her heart." ] }}
   }
}
