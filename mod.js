module.exports = {
   title: "Ke$hastuck Music", 
   summary: "Replaces some music with Ke$hastuck mashups.",
   author: "Eldritchdraaks",
   modVersion: 0.3,
   description: `Replaces some flash music with mashups made for the 2012 Ke$hastuck meme.<br>
	<hr>
	<p><b>"Explore"</b><br>
		<i>Used in <a href='/mspa/002657'>[S] WV: Ascend</a></i><br>
		"Clint Eastwood" - Gorillaz
	</p><hr>
	<p><b>"Crystamanthequins"</b><br>
		<i>Used in <a href='/mspa/004478'>[S] Make her pay</a></i><br>
		"Primadonna Girl" - Marina and the Diamonds
	</p><hr>
	<p><b>"Umbral Ultimatum"</b><br>
		<i>Used in <a href='/mspa/004827'>[S] Jade: Enter</a></i><br>
		"Stupid Hoe" - Nicki Minaj
	</p><hr>
	<p><b>"Unite Synchronization"</b><br>
		<i>Used in <a href='/mspa/007138'>[S] Dirk: Synchronize</a> and <a href='/mspa/007152'>[S] Dirk: Unite</a></i><br>
		"How to Be a Heartbreaker" - Marina and the Diamonds
	</p>
`,

   computed(api){
      store = api.store

      //set default setting values
      store.set("enter", store.get("enter", "./enter-dieyoung.mp3"))
      store.set("enter", store.get("enter", "./enter-badromance.mp3"))
      store.set("enter", store.get("enter", "./enter-paparazzi.mp3"))
      store.set("wake", store.get("wake", "./wake-beautifuldirtyrich.mp3"))
      store.set("wake", store.get("wake", "./wake-withoutme.mp3"))

      computed = {
         routes: []
      }
      
      //add music routing depending on settings
      computed.routes['assets://storyfiles/hs2/00757/00757.mp3'] = './wvascend-clinteastwood.mp3'
      computed.routes['assets://storyfiles/hs2/01149/01149.mp3'] = store.get("enter")
      computed.routes['assets://storyfiles/hs2/02577/02577.mp3'] = './makeherpay-primadonnagirl.mp3'
      computed.routes['assets://storyfiles/hs2/02926/02926.mp3'] = './jadeenter-stupidhoe.mp3'
      computed.routes['assets://storyfiles/hs2/03294/03294.mp3'] = store.get("wake")
      computed.routes['assets://storyfiles/hs2/13294/13294.mp3'] = store.get("wake")
      computed.routes['assets://storyfiles/hs2/05235/05235.mp3'] = './synchronize-heartbreaker.mp3'
      computed.routes['assets://storyfiles/hs2/05249/05249.mp3'] = './unite-heartbreaker.mp3'
      
      return computed

   },


// User selects the songs they want from the settings menu, one per flash.

   settings: {
      radio: [{
         model: "enter",
         label: "'Sburban Jungle'",
         desc: "Used in <a href='/mspa/003049'>[S] Enter</a>",
         options: [{
            value: "./enter-dieyoung.mp3",
            label: "'Die Young' - Ke$ha"
            },{
            value: "./enter-badromance.mp3",
            label: "'Bad Romance' - Lady Gaga"
            },{
            value: "./enter-paparazzi.mp3",
            label: "'Paparazzi' - Lady Gaga",
            desc: "------------"
            }]
         },{
         model: "wake",
         label: "'MeGaLoVania'",
         desc: "Used in <a href='/mspa/005197'>[S] Wake</a>",
         options: [{
            value: "./wake-beautifuldirtyrich.mp3",
            label: "'Beautiful, Dirty, Rich' - Lady Gaga"
            },{
            value: "./wake-withoutme.mp3",
            label: "'Without Me' - Eminem",
            }]
         }]
   },

// Changes the track info below the flash.

   edit(archive) {
         archive.music.flashes['002657'] = { "tracks": [ "Exploring Eastwood - DeliriousBiznasty" ] }

      if (store.get("enter") == "./enter-dieyoung.mp3")
         archive.music.flashes['003049'] = { "tracks": [ "[S] Ke$ha: Enter - Captain Crapster" ] }

      if (store.get("enter") == "./enter-badromance.mp3")
         archive.music.flashes['003049'] = { "tracks": [ "Sburban Romance - WarioAkuma" ] }

      if (store.get("enter") == "./enter-paparazzi.mp3")
         archive.music.flashes['003049'] = { "tracks": [ "Sburban Paparazzi - Gaff Gafgarion" ] }

         archive.music.flashes['004478'] = { "tracks": [ "Primamanthequins - hot.koukou" ] }

         archive.music.flashes['004827'] = { "tracks": [ "[S] Nicki Minaj: Enter - monasticMaestoso" ] }

      if (store.get("wake") == "./wake-beautifuldirtyrich.mp3")
         archive.music.flashes['005197'] = { "tracks": [ "Beautiful, Dirty, MeGaLoVaniacal / [S] GaGa: Strife! - Gaff Gafgarion" ] }

      if (store.get("wake") == "./wake-withoutme.mp3")
         archive.music.flashes['005197'] = { "tracks": [ "WithOutMeGaLoVania - DeliriousBiznasty" ] }

         archive.music.flashes['007138'] = { "tracks": [ "How to Unite and Synchronize / [S] Marina: Break her heart. - Gaff Gafgarion" ] }

         archive.music.flashes['007152'] = { "tracks": [ "How to Unite and Synchronize / [S] Marina: Break her heart. - Gaff Gafgarion" ] }
   }
}