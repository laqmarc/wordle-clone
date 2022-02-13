const targetWords = [
  //A 170
  "abat", "Abel", "acci", "acer", "acil", "acin", "acme", "acne", "acot", "acre", "acro", "acta", "acte", "acut", "adam", "adar", "adho", "Adie", "adir", "adiu",
  "adob", "Ador", "Adri", "aede", "aeri", "aeta", "afer", "afix", "afta", "afua", "agar", "agba", "agni", "agot", "agra", "agre", "agut", "ahir", "ainu", "aira",
  "aire", "aixa", "ajeu", "ajup", "ajut", "alar", "alat", "alba", "Albi", "albs", "alça", "Aldo", "Alep", "aler", "ales", "alfa", "alga", "alls", "alma", "alna",
  "aloc", "alot", "alou", "Alps", "alta", "altd", "alto", "alts", "alum", "amar", "amat", "ambo", "Amer", "amic", "amil", "amit", "amni", "amom", "amor", "amos",
  "ampl", "Amur", "anal", "anap", "anar", "Anas", "anat", "anca", "anem", "anet", "aneu", "anil", "anit", "Anna", "annu", "anoa", "anou", "ansa", "anta", "anur",
  "anus", "anys", "aoni", "apar", "aper", "apis", "apmt", "apta", "apte", "aquo", "aram", "Aran", "arca", "arça", "arcs", "ardu", "arec", "Ares", "aret", "Argo",
  "aril", "aris", "arma", "arna", "arni", "ARNm", "ARNr", "ARNt", "arpa", "arqb", "arri", "arsi", "arts", "asci", "ascs", "ases", "asil", "asma", "asos", "aspa",
  "aspi", "assa", "asta", "asti", "atac", "atea", "ateu", "atia", "atol", "atot", "atri", "atur", "atxa", "auca", "Audi", "auge", "aula", "aura", "auri", "Ausa",
  "aute", "auto", "aval", "avar", "avet", "avis", "avui", "axis", "Axum", "azot",
  //B 154
  "baba", "BaBe", "baca", "Bach", "bada", "bafs", "baga", "baia", "bais", "baix", "bala", "balb", "balç", "Bali", "ball", "balm", "bamp", "banc", "bang", "bans",
  "bany", "barb", "bard", "bare", "bari", "barn", "bars", "Barx", "basa", "basc", "base", "basi", "baso", "bast", "bata", "bati", "baud", "baus", "bava", "bavi",
  "beat", "beca", "beco", "becs", "befa", "beix", "beja", "bell", "bels", "bema", "bena", "bene", "bens", "besa", "beta", "bhil", "Biar", "bici", "bifi", "biga",
  "bike", "bill", "bioc", "bios", "biot", "bisa", "bita", "bits", "bixa", "blan", "blat", "blau", "blec", "blet", "bloc", "blue", "bluf", "bobo", "boca", "boça",
  "bocs", "boda", "bodi", "bodo", "boes", "boet", "boga", "bogi", "bogo", "boia", "boig", "boix", "boja", "bola", "bolc", "boli", "boll", "bona", "Bond", "bons",
  "bony", "boom", "bora", "bord", "borm", "born", "bosc", "bota", "bots", "bous", "bova", "boxa", "braç", "brac", "Brai", "bram", "bran", "brau", "brea", "brec",
  "breç", "bren", "bres", "breu", "bric", "brie", "brig", "brio", "briu", "broc", "brom", "brot", "brou", "bruc", "brum", "brut", "buba", "bubi", "bucs", "buda",
  "budo", "bues", "bufa", "buit", "Bula", "bulb", "bull", "buna", "bura", "burg", "bust", "byte",
  //C 182 
  "cabo", "caca", "caça", "cada", "cadi", "caga", "cago", "caic", "caid", "cala", "calb", "calc", "calç", "cald", "call", "calm", "Calp", "cama", "camp", "cana",
  "cant", "caos", "capa", "caps", "cara", "carç", "card", "cari", "carn", "caro", "carp", "cars", "casa", "casc", "casi", "Casp", "cast", "caua", "caus", "caut",
  "cava", "ceba", "cecs", "cega", "cell", "cels", "cena", "cens", "cent", "Ceos", "ceps", "cera", "cerc", "cerç", "ceri", "cern", "cero", "cert", "cesi", "cest",
  "Chan", "chip", "cian", "ciar", "cili", "cima", "cims", "cinc", "cine", "cint", "circ", "ciri", "cisa", "cist", "cita", "clac", "clam", "clan", "clap", "clar",
  "clau", "clec", "clic", "clin", "clip", "clon", "clop", "clor", "clos", "clot", "clou", "club", "cluc", "coca", "coça", "coco", "cocs", "coda", "codi", "coed",
  "coer", "coet", "cofa", "cois", "coit", "coix", "cola", "coll", "colp", "cols", "coma", "Como", "conc", "cons", "cony", "copa", "cops", "cora", "corb", "corc",
  "cord", "cori", "corm", "corn", "cors", "cort", "cosa", "cost", "cota", "cotg", "coth", "cotx", "cova", "cove", "coxa", "crac", "cran", "cras", "crea", "crec",
  "crem", "crep", "creu", "cria", "cric", "crim", "crin", "crit", "croc", "crol", "crom", "cron", "cros", "crou", "crua", "crui", "crup", "crus", "ctra", "cuat",
  "Cuba", "cubs", "cuca", "cucs", "cuer", "cues", "cuir", "cuit", "culi", "cull", "culs", "CULT", "cunç", "cuny", "cuot", "cups", "cura", "curd", "curi", "curo",
  "curs", "curt",
  //D 98
  "daci", "dada", "daga", "daic", "dall", "dalt", "dama", "Dant", "dany", "dard", "data", "daus", "Deça", "deia", "deix", "deli", "dels", "dema", "dena", "dens",
"dent", "dept", "desa", "Desh", "dest", "deus", "diac", "dial", "dicc", "dics", "dida", "dido", "diem", "dies", "dieu", "dina", "dins", "diol", "disc", "dita",
"dits", "dius", "diva", "divo", "dixi", "doba", "dodo", "doga", "dois", "dojo", "dola", "dolç", "doll", "dols", "doma", "dona", "dong", "doni", "dono", "dons",
"dopa", "dorc", "dori", "dorm", "dors", "dosi", "dota", "dots", "Down", "doxa", "drac", "drap", "dren", "dret", "dril", "drop", "drus", "drut", "dual", "duar",
"ducs", "duel", "duen", "dues", "duet", "duia", "duja", "dula", "dull", "duma", "duna", "Duns", "dupl", "dura", "duri", "duro", "durs", "duta",
// E 71
"eben", "Ebla", "Ebre", "ebri", "ecos", "edam", "edat", "edil", "Edom", "edul", "efeb", "Efes", "efod", "egea", "egeu", "egua", "ehem", "eina", "eixa", "eixe",
"Elam", "Elba", "Elea", "elet", "elis", "elit", "ella", "ells", "Elna", "eloi", "elul", "emet", "emir", "emis", "Emma", "Emtm", "Enni", "enol", "enze", "eoli",
"eons", "Epir", "eral", "erbi", "eren", "erer", "eres", "eret", "ergo", "erma", "erms", "erol", "eros", "erra", "erro", "erta", "erts", "erza", "esca", "Esla",
"esma", "esme", "essa", "esta", "este", "etil", "euga", "euro", "Excm", "excp", "expt",
// F 120
"faça", "faci", "facs", "fact", "fada", "fado", "faig", "faja", "falb", "falç", "fall", "fals", "fama", "fang", "Fars", "fart", "fasc", "fase", "Faso", "fast",
"fati", "fato", "fatu", "fava", "feda", "feia", "feix", "fems", "fenc", "fent", "feny", "fera", "ferm", "fesa", "fest", "feta", "fets", "feus", "fiar", "fiat",
"fica", "fien", "fies", "figa", "Fiji", "fila", "fill", "film", "filo", "fils", "fina", "fins", "fira", "fisc", "fita", "fits", "fixa", "fixi", "flac", "flam",
"flap", "flat", "flit", "Flix", "floc", "flor", "flou", "flox", "flum", "flux", "foca", "focs", "fofa", "fofo", "foia", "foie", "Foix", "folc", "foli", "folk",
"foll", "fona", "fong", "fons", "font", "food", "fopa", "fora", "forc", "Ford", "forn", "fort", "fosa", "fosc", "Fost", "foto", "frac", "frau", "frec", "fred",
"fres", "freu", "fris", "frit", "fuel", "fuet", "fuga", "fugi", "fuig", "full", "fuma", "fums", "fund", "funk", "fura", "furs", "furt", "fusa", "fust", "futa",
//G 94
"gade", "gafa", "gaia", "gaig", "gais", "gala", "gall", "game", "gana", "gart", "gasa", "gata", "gats", "gaur", "gave", "Gaza", "geca", "gecs", "gels", "gema",
"geni", "gens", "gent", "gepa", "geps", "gerd", "gesp", "gest", "giga", "Gila", "giny", "gira", "giri", "girs", "gita", "glaç", "glei", "glia", "glom", "glop",
"glot", "gnom", "gobi", "goda", "goig", "goja", "gola", "golf", "goll", "gols", "goma", "gona", "gong", "goni", "gord", "gorg", "gosa", "gosi", "goso", "gota",
"gots", "grad", "graf", "gram", "gran", "gras", "grat", "grau", "gray", "grec", "gres", "greu", "grif", "grip", "gris", "grit", "griu", "groc", "grog", "grop",
"gros", "grua", "grum", "grup", "gual", "gufi", "guia", "Guim", "guit", "guix", "Gurb", "guri", "guru", "gust",
// H 26
"haca", "hagi", "haig", "haik", "hala", "hall", "halo", "hams", "Hans", "heli", "hemo", "herc", "heus", "hiat", "hifa", "hola", "hopa", "hora", "hort", "host",
"huit", "hule", "huna", "huns", "hura", "hutu",
// I 43
"iaia", "iaio", "iais", "iber", "ibis", "icac", "icor", "idea", "idus", "ieti", "Ifni", "igni", "illa", "Illi", "imam", "impt", "inca", "indi", "inic", "inri",
"inst", "inti", "inxa", "iode", "ioga", "iola", "ioni", "ions", "iota", "iots", "ipso", "Iran", "Iraq", "irat", "iris", "isba", "Isop", "itri", "iuan", "iuca",
"iuma", "iure", "Ivan",
// J 49
"jaca", "jaça", "jack", "jaco", "jade", "jaia", "jaio", "jais", "Jana", "Java", "jazz", "jeep", "jeia", "jeus", "jive", "Joan", "joca", "jocs", "John", "joia",
"joli", "jonc", "joni", "jorn", "Josa", "jota", "jous", "jova", "jove", "Juan", "judo", "jueu", "juga", "juia", "juli", "jull", "junc", "Juno", "junt", "juny",
"jupa", "jups", "jura", "juri", "juro", "just", "juta", "jute", "juts",

]
const dictionary = [
  //A 170
  "abat", "Abel", "acci", "acer", "acil", "acin", "acme", "acne", "acot", "acre", "acro", "acta", "acte", "acut", "adam", "adar", "adho", "Adie", "adir", "adiu",
  "adob", "Ador", "Adri", "aede", "aeri", "aeta", "afer", "afix", "afta", "afua", "agar", "agba", "agni", "agot", "agra", "agre", "agut", "ahir", "ainu", "aira",
  "aire", "aixa", "ajeu", "ajup", "ajut", "alar", "alat", "alba", "Albi", "albs", "alça", "Aldo", "Alep", "aler", "ales", "alfa", "alga", "alls", "alma", "alna",
  "aloc", "alot", "alou", "Alps", "alta", "altd", "alto", "alts", "alum", "amar", "amat", "ambo", "Amer", "amic", "amil", "amit", "amni", "amom", "amor", "amos",
  "ampl", "Amur", "anal", "anap", "anar", "Anas", "anat", "anca", "anem", "anet", "aneu", "anil", "anit", "Anna", "annu", "anoa", "anou", "ansa", "anta", "anur",
  "anus", "anys", "aoni", "apar", "aper", "apis", "apmt", "apta", "apte", "aquo", "aram", "Aran", "arca", "arça", "arcs", "ardu", "arec", "Ares", "aret", "Argo",
  "aril", "aris", "arma", "arna", "arni", "ARNm", "ARNr", "ARNt", "arpa", "arqb", "arri", "arsi", "arts", "asci", "ascs", "ases", "asil", "asma", "asos", "aspa",
  "aspi", "assa", "asta", "asti", "atac", "atea", "ateu", "atia", "atol", "atot", "atri", "atur", "atxa", "auca", "Audi", "auge", "aula", "aura", "auri", "Ausa",
  "aute", "auto", "aval", "avar", "avet", "avis", "avui", "axis", "Axum", "azot",
]

const WORD_LENGTH = 4
const FLIP_ANIMATION_DURATION = 500
const DANCE_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const alertContainer = document.querySelector("[data-alert-container]")
const resultatContainer = document.querySelector("[result-alert-container]")
const guessGrid = document.querySelector("[data-guess-grid]")
const offsetFromDate = new Date(2022, 0, 1)
const msOffset = Date.now() - offsetFromDate
const dayOffset = msOffset / 1000 / 60 / 60 / 24
const targetWord = targetWords[Math.floor(dayOffset)]

startInteraction()

function startInteraction() {
  document.addEventListener("click", handleMouseClick)
  document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick)
  document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key)
    return
  }

  if (e.target.matches("[data-enter]")) {
    submitGuess()
    return
  }

  if (e.target.matches("[data-delete]")) {
    deleteKey()
    return
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    submitGuess()
    return
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey()
    return
  }

  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key)
    return
  }
}

function pressKey(key) {
  const activeTiles = getActiveTiles()
  if (activeTiles.length >= WORD_LENGTH) return
  const nextTile = guessGrid.querySelector(":not([data-letter])")
  nextTile.dataset.letter = key.toLowerCase()
  nextTile.textContent = key
  nextTile.dataset.state = "active"
}

function deleteKey() {
  const activeTiles = getActiveTiles()
  const lastTile = activeTiles[activeTiles.length - 1]
  if (lastTile == null) return
  lastTile.textContent = ""
  delete lastTile.dataset.state
  delete lastTile.dataset.letter
}

function submitGuess() {
  const activeTiles = [...getActiveTiles()]
  if (activeTiles.length !== WORD_LENGTH) {
    showAlert("NO TE SUFICIENTS LLETRES")
    shakeTiles(activeTiles)
    return
  }

  const guess = activeTiles.reduce((word, tile) => {
    return word + tile.dataset.letter
  }, "")

  if (!dictionary.includes(guess)) {
    showAlert("LA PARAULA NO ESTÀ A LA LLISTA")
    shakeTiles(activeTiles)
    return
  }

  stopInteraction()
  activeTiles.forEach((...params) => flipTile(...params, guess))
}

function flipTile(tile, index, array, guess) {
  const letter = tile.dataset.letter
  const key = keyboard.querySelector(`[data-key="${letter}"i]`)
  setTimeout(() => {
    tile.classList.add("flip")
  }, (index * FLIP_ANIMATION_DURATION) / 2)

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip")
      if (targetWord[index] === letter) {
        tile.dataset.state = "correct"
        key.classList.add("correct")
      } else if (targetWord.includes(letter)) {
        tile.dataset.state = "wrong-location"
        key.classList.add("wrong-location")
      } else {
        tile.dataset.state = "wrong"
        key.classList.add("wrong")
      }

      if (index === array.length - 1) {
        tile.addEventListener(
          "transitionend",
          () => {
            startInteraction()
            checkWinLose(guess, array)
          }, {
            once: true
          }
        )
      }
    }, {
      once: true
    }
  )
}

function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]')
}

function showAlert(message, duration = 5000) {
  const alert = document.createElement("div")
  alert.textContent = message
  alert.classList.add("alert")
  alertContainer.prepend(alert)
  if (duration == null) return

  setTimeout(() => {
    alert.classList.add("hide")
    alert.addEventListener("transitionend", () => {
      alert.remove()
    })
  }, duration)
}

function showResult(message, duration = 5000) {
  const alert = document.createElement("div")
  alert.textContent = message
  alert.classList.add("alert")
  resultatContainer.prepend(alert)
  if (duration == null) return

  setTimeout(() => {
    alert.classList.add("hide")
    alert.addEventListener("transitionend", () => {
      alert.remove()
    })
  }, duration)
}

function shakeTiles(tiles) {
  tiles.forEach(tile => {
    tile.classList.add("shake")
    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake")
      }, {
        once: true
      }
    )
  })
}

function checkWinLose(guess, tiles) {
  if (guess === targetWord) {
    showAlert("HAS GUANYAT", 5000)
    danceTiles(tiles)
    stopInteraction()
    return
  }

  const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")
  if (remainingTiles.length === 0) {
    showAlert(targetWord.toUpperCase(), null)
    stopInteraction()
  }
}

function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance")
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance")
        }, {
          once: true
        }
      )
    }, (index * DANCE_ANIMATION_DURATION) / 5)
  })
}