module.exports = {
   title: "Ke$hastuck Music", 
   summary: "Replaces some music with Ke$hastuck mashups.",
   author: "Eldritchdraaks",
   modVersion: 1.0,
   description: `Replaces some flash music with mashups made for the 2012 Ke$hastuck meme.<br>
	<hr>
	<p><b>"Black"</b><br>
		<i>Used in <a href='/mspa/003568'>[S] Jack: Ascend.</a></i><br>
		"I Write Sins Not Tragedies" - Panic! At The Disco
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
	</p> <!-- <hr>
	<p><b>"Fuchsia Ruler"</b><br>
		<i>Used in <a href='/mspa/007163'>[S] ACT 6 INTERMISSION 3</a></i><br>
		"Heavy Metal Lover" - Lady Gaga
	</p> -->
`,

   computed(api){
      store = api.store

      //set default setting values
      store.set("daveascend", store.get("daveascend", "./daveascend-eyeofthetiger.mp3"))
      store.set("wvascend", store.get("wvascend", "./wvascend-newdivide.mp3"))
      store.set("enter", store.get("enter", "./enter-dieyoung.mp3"))
      store.set("wake", store.get("wake", "./wake-beautifuldirtyrich.mp3"))

      computed = {
         routes: []
      }
      
      //add music routing depending on settings
      computed.routes['assets://storyfiles/hs2/01668/01668.mp3'] = './jackascend-iwritesins.mp3'
      computed.routes['assets://storyfiles/hs2/00665/00665.mp3'] = store.get("daveascend")
      computed.routes['assets://storyfiles/hs2/00757/00757.mp3'] = store.get("wvascend")
      computed.routes['assets://storyfiles/hs2/01149/01149.mp3'] = store.get("enter")
      computed.routes['assets://storyfiles/hs2/02577/02577.mp3'] = './makeherpay-primadonnagirl.mp3'
      computed.routes['assets://storyfiles/hs2/02926/02926.mp3'] = './jadeenter-stupidhoe.mp3'
      computed.routes['assets://storyfiles/hs2/03294/03294.mp3'] = store.get("wake")
      computed.routes['assets://storyfiles/hs2/13294/13294.mp3'] = store.get("wake")
      computed.routes['assets://storyfiles/hs2/05235/05235.mp3'] = './synchronize-heartbreaker.mp3'
      computed.routes['assets://storyfiles/hs2/05249/05249.mp3'] = './unite-heartbreaker.mp3'
//      computed.routes['assets://storyfiles/hs2/05260/resources/openbound/audio/music/FuschiaRulerQuiet.mp3'] = './a6i3-heavymetallover.mp3'
//      computed.routes['assets://storyfiles/hs2/05260/resources/openbound/audio/music/FuschiaRulerQuiet.ogg'] = './a6i3-heavymetallover.ogg'
      
      return computed

   },


// User selects the songs they want from the settings menu, one per flash.

   settings: {
      radio: [{
         model: "daveascend",
         label: "'Upward Movement (Dave Owns)'",
         desc: "<i>Used in <a href='/mspa/002565'>[S] Dave: Ascend to the highest point of the building.</a></i>",
         options: [{
            value: "./daveascend-eyeofthetiger.mp3",
            label: "'Eye of the Tiger' - Survivor"
            },{
            value: "./daveascend-loseyourself.mp3",
            label: "'Lose Yourself' - Eminem",
            desc: "<hr>"
            }]
         },{
         model: "wvascend",
         label: "'Explore'",
         desc: "<i>Used in <a href='/mspa/002657'>[S] WV: Ascend</a></i>",
         options: [{
            value: "./wvascend-newdivide.mp3",
            label: "'New Divide' - Linkin Park"
            },{
            value: "./wvascend-clinteastwood.mp3",
            label: "'Clint Eastwood' - Gorillaz",
            desc: "<hr>"
            }]
         },{
         model: "enter",
         label: "'Sburban Jungle'",
         desc: "<i>Used in <a href='/mspa/003049'>[S] Enter</a></i>",
         options: [{
            value: "./enter-dieyoung.mp3",
            label: "'Die Young' - Ke$ha"
            },{
            value: "./enter-badromance.mp3",
            label: "'Bad Romance' - Lady Gaga"
            },{
            value: "./enter-paparazzi.mp3",
            label: "'Paparazzi' - Lady Gaga",
            desc: "<hr>"
            }]
         },{
         model: "wake",
         label: "'MeGaLoVania'",
         desc: "<i>Used in <a href='/mspa/005197'>[S] Wake</a></i>",
         options: [{
            value: "./wake-beautifuldirtyrich.mp3",
            label: "'Beautiful, Dirty, Rich' - Lady Gaga"
            },{
            value: "./wake-withoutme.mp3",
            label: "'Without Me' - Eminem",
            desc: "<hr>"
            }]
         }]
   },

// Changes the track info below the flash.

   edit(archive) {
      if (store.get("daveascend") == "./daveascend-eyeofthetiger.mp3")
         archive.music.flashes['002565'] = { "tracks": [ "Eye of the Strider - Angry Nerd Bird" ] }

      if (store.get("daveascend") == "./daveascend-loseyourself.mp3")
         archive.music.flashes['002565'] = { "tracks": [ "Lose Movement (Dave Yourself) - Doodled McFroodled" ] }

      if (store.get("wvascend") == "./wvascend-newdivide.mp3")
         archive.music.flashes['002657'] = { "tracks": [ "Explore the New Divide - PedroVanse" ] }

      if (store.get("wvascend") == "./wvascend-clinteastwood.mp3")
         archive.music.flashes['002657'] = { "tracks": [ "Exploring Eastwood - DeliriousBiznasty" ] }

      if (store.get("enter") == "./enter-dieyoung.mp3")
         archive.music.flashes['003049'] = { "tracks": [ "[S] Ke$ha: Enter - Captain Crapster" ] }

      if (store.get("enter") == "./enter-badromance.mp3")
         archive.music.flashes['003049'] = { "tracks": [ "Sburban Romance - WarioAkuma" ] }

      if (store.get("enter") == "./enter-paparazzi.mp3")
         archive.music.flashes['003049'] = { "tracks": [ "Sburban Paparazzi - Gaff Gafgarion" ] }

         archive.music.flashes['003568'] = { "tracks": [ "I Write Black Sins / [S] Jack: Panic! ... at the Derseco - Gaff Gafgarion" ] }

         archive.music.flashes['004478'] = { "tracks": [ "Primamanthequins - hot.koukou" ] }

         archive.music.flashes['004827'] = { "tracks": [ "[S] Nicki Minaj: Enter - monasticMaestoso" ] }

      if (store.get("wake") == "./wake-beautifuldirtyrich.mp3")
         archive.music.flashes['005197'] = { "tracks": [ "Beautiful, Dirty, MeGaLoVaniacal / [S] GaGa: Strife! - Gaff Gafgarion" ] }

      if (store.get("wake") == "./wake-withoutme.mp3")
         archive.music.flashes['005197'] = { "tracks": [ "WithOutMeGaLoVania - DeliriousBiznasty" ] }

         archive.music.flashes['007138'] = { "tracks": [ "How to Unite and Synchronize / [S] Marina: Break her heart. - Gaff Gafgarion" ] }

         archive.music.flashes['007152'] = { "tracks": [ "How to Unite and Synchronize / [S] Marina: Break her heart. - Gaff Gafgarion" ] }

//         archive.music.flashes['007163'] = { "tracks": [ "Heavy Fuchsia Dreamer / [S] GaGa: Rule the world. - Gaff Gafgarion" ] }
   }
}