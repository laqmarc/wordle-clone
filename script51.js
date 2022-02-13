const targetWords = [
    //A 427
    "abans", "abast", "aboca", "abona", "abraç", "abret", "abric", "abril", "absis", "absol",
    "acaba", "acabi", "acata", 
    "acers", "acord", "acres", "actes", "actiu", "actor",
    "actua", "acull", "acusa", "adagi", "admet", "adnat",
    "adoba", "adobs", "adoni", "adora", "adorm", "adorn", "adreç", "adula", "adult",
    "aeris", "afana", "afany", "afers", "afina", "afins", 
    "agafa", "agafi", 
    "agent", "agita", "agror",
    "aguda", "aguts", "aigua", "aires", "airet",
    "aixar", "ajeia", "ajuda", "ajudi", "ajupi", "ajust", "ajuts", 
    "alada", "alaga", "alats", "albes", "albet", "albir", 
    "albor", "alçar", "alçat", "alcen", "alces", 
    "aleta", "alfac", "alfil", "algun", "aliar", "aliat",
    "aljub", "allau", "aller", "allet", 
    "alosa", "alots", "altar", "altea", "altes", "altiu", "altra", "altre", "altri",
    "amada", "amaga", "amant", "amarg", "ameba", "amena", "amens", 
    "amics", "amiga", "amorf", "amors", "ampit", "ampla", "ample",
    "ampli", "amunt", "anada", "anals", "anant", "anava", "andes",
    "anell", "angle", "anhel", "anima", "annex", "anoia", "anota",
    "antic", "antre", "anual", "anyal", "anyer", "anyil", "anyol",
    "aorta", "apaga", "apart", "apega", "apena", "apila", "aplec", "aplic", "aplom",
    "apnea", "aptes", "apunt", "arada", "arboç", "arbra", "arbre", "arcar",
    "arcat", "ardit", "ardor", "areal", "arena", "arenc", "areng", 
    "arets", "argiu", "argot", "ariel", "ariet", 
    "armar", "armat", "armer", "armes", "arnes",
    "aroma", "arran", "arrel", "arreu",
    "arrop", "arxiu", "aspes", "aspra", "aspre", "asseu", "assut", "astor", "astre",
    "astur", "astut", "ataca", "atacs", "atall", "atees", "atent", "ateny", "atesa", "ateus", 
    "atiar", "atipa", "atles", "atots", "atova", "atrau", "atret", "atreu", "atrit", "atroç", "atuir", "atura", "atxem",
    "atxes", "atxim", "atzar", "atzur", "audaç", "aules", "aulet", "aulos", "aurat", "auril", "autop", "autor", "autos",
    "avala", "avall", "avanç", "avant", "avara", "avars", "avena", "avenç", "avenc", "avern", "avets", "avial", "aviar",
    //B 386
    "aviat", "avior", "avisa", "avist", "aviva", "axial", "axons", "azida", "azina", "azoic", "azole", "babau",
    "baare", "babau", "babel", "bable", "babol", "bacil", "baciu", "bacon", "Bacus", "badar", "badat", "baden", "badeu", "badge", "badia", "badil", "badiu",
    "badoc", "bafle", "bafor", "Bages", "bagol", "bagot", "bagra", "bagul", "baiar", "baies", "baila", "baina", "baixa", "baixi", "bajoc", "balba", "balbs",
    "balca", "balda", "bales", "balir", "balla", "balli", "balls", "balma", "balot", "balou", "balsa", "balun", "bamba", "bambo", "bamps", "banal", "banat",
    "banau", "banca", "bancs", "banda", "baner", "banjo", "bantu", "banya", "banys", "baqui", "barat", "barba", "barbs", "barca", "barça", "barda", "barem",
    "baria", "barra", "barri", "barxa", "basal", "basar", "basat", "basca", "bascs", "basen", "baser", "bases", "basic", "bassa", "bassi", "basta", "basto",
    "basts", "batak", "batan", "batau", "Batea", "batec", "baten", "bater", "bates", "bateu", "batia", "batre", "batut", "bauet", "baula", "baule", "bauxa",
    "bavar", "baves", "bavor", "Bearn", "beata", "beats", "becar", "becat", "becut", "befar", "befis", "beges", "begui", "begum", "Begur", "begut", "beina",
    "beisa", "belai", "belar", "belga", "bella", "belli", "bells", "bemba", "benes", "benet", "Benue", "benzo", "beoci", "Berga", "Beric", "beril", "berla",
    "berma", "Berna", "Berry", "berta", "besar", "beset", "bessa", "besuc", "betil", "Betis", "betol", "betum", "betza", "Beuda", "beure", "Beveu", "bhili",
    "bhils", "biaix", "bicol", "bidet", "biela", "bifaç", "bigal", "bigam", "bigot", "Bihar", "bilis", "bimba", "binar", "bingo", "bioma", "biont", "biota",
    "birba", "biret", "birla", "birlo", "bisar", "bisbe", "bitar", "bitoc", "bitol", "bitxa", "bitxo", "Biure", "bivac", "blada", "blana", "blanc", "blans",
    "blast", "blats", "blaus", "blava", "bleda", "bleir", "bleix", "blens", "blets", "bleva", "blima", "bloca", "blocs", "bloom", "blues", "boada", "bobos",
    "bocal", "bocam", "boçar", "bocat", "bocoi", "bocut", "bodos", "bogal", "bogar", "boges", "bogey", "bohri", "boiar", "boids", "boies", "boiet", "boigs",
    "boina", "boira", "boixa", "bojac", "bojal", "bojor", "bolca", "bolcs", "bolda", "boldo", "bolei", "boles", "bolet", "bolfa", "bolic", "bolig", "bolla",
    "bomba", "bombo", "bonda", "bones", "bonet", "bongo", "bonic", "bonir", "bonys", "bonze", "Boole", "boral", "borar", "borat", "borda", "bords", "Borel",
    "boren", "borja", "borla", "borni", "borns", "borra", "borsa", "borur", "Bosco", "boscs", "bossa", "botam", "botar", "botat", "boter", "botes", "botet",
    "boteu", "botia", "botir", "botit", "botja", "botre", "botri", "botut", "botxa", "boual", "bouer", "bouet", "boval", "bovar", "bover", "bovor", "boxar",
    "braça", "braga", "brama", "brams", "branc", "braol", "brasa", "brava", "bravo", "break", "Breda", "brega", "brell", "brenc", "breny", "bresa", "breta",
    "breus", "breva", "brial", "brida", "brill", "brima", "brinc", "brins", "briol", "brisa", "briva", "broca", "brocs", "broda", "broix", "broll", "broma",
    "bronc", "brook", "brota", "brots", "brous", "Brown", "bruci", "brucs", "bruel", "brufa", "bruga", "bruit", "brull", "bruna", "bruns", "brunz", "brusa",
    "brusc", "bruta", "bruti", "bruts", "buata", "bubis", "bucal", "bucle", "bufar", "bufat", "bufec", "bufen", "bufes", "bufet", "bufit", "bufor", "bugat",
    "bugia", "bugiu", "bugle", "bugre", "bugui", "buida", "buidi", "buina", "buits", "bujol", "bujot", "bulbs", "bulim", "buosa", "burat", "burca", "burda",
    "burja", "burla", "burot", "burra", "burro", "burxa", "busal", "busca", "Busot", "bussi", "butil", "butza",
    //C 500
    "cabal", "cabeç", "caben", "caber", "cabet", "cabia", "cable", "cabot", "cabra", "cabre", "cabut", "caçar", "caçat",
    "cacau", "cacen", "caces", "cacic", "cadaf", "cadap", "cadet", "Cadis", "cadmi", "caduc", "caduf", "cadup", "cafit",
    "cafre", "cagar", "cagat", "cagot", "caiac", "caiot", "caire", "caixa", "caixo", "Calaf", "calar", "calat", "calau",
    "calba", "calbs", "calça", "calca", "calci", "calcs", "calda", "caldo", "calds", "calen", "caler", "cales", "calet",
    "calia", "caliu", "calla", "calls", "calma", "calms", "calop", "calor", "calta", "calua", "Calvi", "calze", "camal",
    "camat", "cames", "camil", "camis", "campa", "Campi", "camps", "camut", "canac", "canal", "canar", "canat", "canca",
    "candi", "caner", "canes", "canet", "canic", "canoa", "canol", "Canop", "canor", "canot", "cansa", "canta", "canto",
    "cants", "canut", "canvi", "canxa", "canya", "caoba", "capaç", "capar", "capat", "capça", "capel", "caper", "capes",
    "capet", "capir", "capoc", "capol", "capot", "Capri", "capsa", "capta", "capuç", "caqui", "carai", "caram", "carat",
    "carca", "carda", "cardo", "cards", "carei", "cares", "carga", "carib", "Carme", "carni", "carns", "caror", "caros",
    "carpa", "carra", "carro", "carst", "carta", "casal", "casar", "casat", "casba", "casca", "cascs", "casen", "cases",
    "casin", "casor", "casos", "casot", "caspa", "caspi", "cassa", "casta", "casts", "casus", "catal", "catau", "catch",
    "catet", "catre", "catxa", "catxo", "cauen", "cauet", "caule", "caure", "cauri", "causa", "causi", "cauta", "cauts",
    "cavar", "cavat", "caven", "caver", "caves", "cavet", "caveu", "cavim", "cebar", "cebes", "cecal", "cedia", "cedir",
    "cedit", "cedre", "Cefeu", "cegar", "cegat", "ceiba", "celar", "celat", "cella", "celta", "celti", "cents", "cenur",
    "cepat", "cerat", "cerca", "cercs", "cerer", "ceres", "Ceret", "cerot", "cerra", "cerro", "certa", "certs", "cerut",
    "cerva", "cervo", "cessa", "cessi", "cesta", "cetal", "cetil", "Ceuta", "Chaco", "ciant", "ciati", "cicle",
    "CIÈNC", "cient", "cigar", "cigne", "cigni", "cilis", "cimal", "cimar", "cimer", "cimes", "Cinca", "cincs", "cinta",
    "cints", "Cirac", "circa", "circs", "cirer", "Ciril", "ciris", "cisar", "cises", "cisma", "cista", "cists", "citar",
    "citat", "civet", "civil", "claca", "clade", "clamp", "clams", "clans", "clapa", "claps", "clara", "clars", "clasc",
    "clast", "claus", "clava", "clavi", "cleca", "cleda", "clerc", "clero", "cleta", "clics", "clima", "clina", "clipi",
    "clips", "clisi", "cloca", "clofa", "clons", "cloro", "closa", "clota", "clots", "clova", "clown", "clubs", "cluca",
    "clucs", "Cluny", "clusa", "cnidi", "coala", "coana", "cobai", "cobla", "coble", "Cobol", "cobra", "cobro", "cocos",
    "cocou", "coder", "codis", "coell", "coent", "coera", "coers", "coets", "cofar", "cofat", "cofes", "cofoi", "cofre",
    "Cogul", "coiot", "coits", "coixa", "colar", "colat", "coler", "coles", "colet", "Coleu", "colga", "colla", "colls",
    "colog", "colom", "colon", "color", "colps", "colur", "colza", "colze", "comal", "comar", "comba", "comes", "comet",
    "comte", "conat", "conca", "conco", "conec", "conga", "Congo", "conta", "conte", "conto", "conus", "conxa", "conxo",
    "conya", "copal", "copar", "copat", "copec", "copeo", "coper", "copes", "copet", "copia", "cople", "copra", "copsa",
    "copta", "copte", "coral", "corba", "corbs", "corca", "corcs", "corda", "corea", "coreu", "corfa", "Corgo", "corma",
    "corni", "corns", "corra", "corre", "corri", "Corro", "corts", "cosac", "cosec", "coses", "cosir", "cosit", "cossa",
    "cossi", "costa", "costi", "costs", "cotar", "coter", "cotes", "cotip", "cotna", "cotxa", "cotxe", "couen", "coure",
    "coval", "covar", "covat", "coven", "cover", "coves", "coxal", "cranc", "crani", "crasi", "crear", "creat", "credo",
    "creen", "creia", "creix", "crema", "cremi", "creps", "cresp", "creta", "creua", "creus", "criar", "criat", "crida",
    "cridi", "crien", "cries", "crims", "crina", "crins", "Crios", "crisi", "crist", "crits", "croat", "croca", "crocs",
    "croma", "cromo", "cruel", "crues", "cruia", "cruix", "cruor", "cuada", "cuats", "cucar", "cucat", "cucut", "cudol",
    "cueja", "cuell", "cuera", "cuers", "cueta", "Cugat", "cugot", "cuguç", "cugul", "cuina", "cuiro", "cuirs", "cuita",
    "cuits", "cuixa", "cular", "culer", "culet", "culis", "culla", "culli", "culot", "culpa", "culta", "culte", "Cunit",
    "cunys", "curar", "curat", "curda", "curds", "cures", "curie", "curos", "curra", "curri", "curro", "cursa", "cursi",
    "curta", "curts", "curul", "cusen", "cussa", "cutis",
    //D 228
    "dacsa", "dades", "dador", "dafne", "daica", "daics", "daina", "dalla", "dalts", "Damas", "damer", "dames", "dandi", "dansa", "danya", "danys", "daram",
    "dards", "darga", "dashi", "dasia", "datar", "dates", "datiu", "datxa", "daura", "David", "debat", "deble", "debut", "debye", "decau", "decep", "decil",
    "decor", "degut", "deien", "deies", "deisi", "deixa", "deixi", "delat", "delco", "deler", "delga", "Delhi", "delir", "delit", "della", "delma", "delme",
    "Delos", "delta", "demet", "demor", "dener", "denes", "denim", "Denis", "denou", "densa", "dents", "derbi", "derma", "derna", "desar", "desat", "desca",
    "Desen", "desig", "Desna", "deuen", "deure", "deute", "Devem", "devia", "devon", "devot", "Dewar", "diaca", "diada", "diana", "diarc", "diari", "diazo",
    "dicta", "didal", "didot", "dient", "diesi", "dieta", "difon", "digen", "digin", "digna", "digne", "digui", "dinal", "dinar", "dinat", "dindi", "dinem",
    "diner", "dingo", "dinou", "dioic", "dipes", "dipir", "dipol", "diran", "direm", "diria", "disco", "discs", "dista", "Disto", "distr", "ditec", "dites",
    "ditet", "diuen", "divan", "dives", "divos", "dobla", "doble", "docta", "docte", "dogal", "dogam", "dogma", "dogon", "dogre", "doina", "doiut", "dolar",
    "dolça", "dolen", "doler", "dolia", "dolla", "dolls", "dolor", "dolsa", "domar", "domat", "domen", "domer", "domna", "domus", "donam", "donar", "donat",
    "doncs", "donen", "doner", "dones", "doneu", "donin", "donis", "donja", "donna", "dopar", "dopat", "dopen", "doral", "dorca", "doris", "dosar", "doset",
    "dosis", "dosos", "dotal", "dotar", "dotat", "Doteu", "dotze", "Douro", "draba", "dracs", "draga", "drago", "drama", "draps", "dreça", "dreta", "drets",
    "dries", "drift", "dring", "drive", "droga", "dropa", "dropo", "druda", "drupa", "drusa", "duals", "duana", "dubni", "dubta", "dubte", "Dubto", "ducal",
    "ducat", "duent", "Duero", "dugui", "duien", "duies", "dujar", "dujat", "duler", "dulia", "dunar", "dunes", "dupla", "duple", "dural", "duran", "durar",
    "durat", "duren", "dures", "durin", "duros", "dutes", "dutxa",
    //E 193
    "eagle", "ecesi", "ecidi", "ecoic", "eculi", "edats", "edema", "edils", "edita", "educa", "eduir", "efect", "efesi", "egees", "egeus", "einam", "eines",
    "eixam", "eixau", "eixea", "eixes", "eixia", "eixir", "eixit", "eixiu", "eixos", "eixut", "elenc", "eleta", "elets", "eleva", "elevi", "elina", "elisi",
    "elits", "elles", "elmet", "elogi", "eluir", "emana", "embat", "emboç", "emboc", "embut", "emena", "emesa", "emeti", "empat", "empit", "empra", "empre",
    "empri", "Emtma", "emula", "enans", "enant", "enceb", "encep", "encet", "encop", "endur", "endut", "enduu", "enfit", "engan", "engir", "enjub", "enmig",
    "enols", "enosi", "enric", "enroc", "ensec", "ensum", "entat", "enter", "entra", "entre", "entri", "entro", "enuig", "envia", "envit", "envol", "enyor",
    "enzim", "eogen", "eolis", "epode", "eques", "equip", "erada", "erari", "erenc", "erera", "ereta", "erets", "ergol", "erici", "erina", "ermar", "ermes",
    "ermot", "erola", "erols", "errar", "errat", "erren", "erres", "error", "ertes", "eruga", "esbat", "escac", "escai", "escap", "escar", "escat", "escau",
    "escif", "escoa", "escon", "escot", "escua", "escup", "escut", "esdet", "esfex", "eslau", "eslip", "esmar", "esnob", "espai", "espat", "esper", "espet",
    "espeu", "espia", "espic", "espot", "esput", "esser", "esses", "essiu", "estai", "estam", "estan", "estar", "estat", "estel", "estem", "estes", "esteu",
    "estic", "estil", "estim", "estiu", "Estix", "estoa", "estoc", "estol", "estop", "estor", "estre", "estri", "estuc", "estuf", "etali", "etapa", "eteri",
    "etern", "etesi", "ethos", "etoli", "etusa", "Euler", "eunuc", "euros", "evers", "evita", "eviti", "evoca", "Excma", "exerg", "exigu", "exili", "eximi",
    "exina", "exodi", "expia", "extra", "exvot", "Eyasi",
    //F 319
    "Fabra", "fabre", "facin", "facis", "facto", "fadar", "fades", "fador", "faena", "faent", "fages", "fagot", "faigs", "Faium", "faixa", "fajol", "falba",
    "falbs", "falca", "falçs", "falda", "falla", "falli", "falsa", "falta", "falua", "fanal", "Fanar", "fanga", "fangs", "fanti", "farad", "faran", "farda",
    "farem", "fareu", "farga", "faria", "farot", "farro", "farsa", "farta", "farts", "fases", "fasor", "fasts", "fatal", "fatic", "fatxa", "faula", "fauna",
    "faune", "Faura", "faust", "fauve", "favar", "faves", "favor", "favus", "faxar", "feaci", "feble", "febra", "febre", "fecal", "fedal", "feiem", "feien",
    "feies", "feina", "feixa", "feliç", "felip", "Feliu", "femar", "femat", "femer", "femta", "fenal", "fenar", "fenat", "fendi", "fener", "fenil", "fenol",
    "feraç", "feral", "feram", "feren", "feres", "ferir", "ferit", "ferla", "ferma", "fermi", "ferms", "feroç", "feror", "ferre", "ferri", "ferro", "ferum",
    "fesol", "festa", "fetal", "fetch", "fetes", "fetge", "fetor", "fetus", "fiada", "fiala", "fiats", "fiava", "fibla", "fible", "fibra", "ficar", "ficat",
    "ficta", "ficte", "ficus", "fidel", "fideu", "figle", "filag", "filar", "filat", "files", "filet", "filis", "filla", "fills", "filma", "films", "filot",
    "final", "finar", "finat", "finca", "fines", "finir", "finit", "finor", "finta", "fiola", "fiord", "Fiore", "fiqui", "firal", "firar", "firat", "firer",
    "fires", "firma", "Firoz", "fisca", "fissa", "fitar", "fitat", "fiter", "fites", "fitol", "fitor", "fitxa", "fixar", "fixat", "fixen", "fixes", "fixeu",
    "fixin", "fixos", "flaca", "flacs", "flaix", "flama", "flami", "flanc", "flaps", "flasc", "flash", "flats", "flavi", "fleca", "fleix", "flexo", "flint",
    "flipa", "flirt", "floca", "flocs", "flora", "flors", "flota", "fluid", "fluir", "fluix", "fluor", "focal", "focea", "foceu", "focus", "foehn", "fofes",
    "fofos", "fogal", "fogar", "fogor", "fogot", "foide", "foier", "Foios", "folga", "folia", "folis", "folla", "folls", "folra", "folre", "folro", "fonar",
    "fonda", "fondo", "fonen", "foner", "fongo", "fongs", "fonia", "fonts", "foral", "forat", "força", "forca", "forcs", "foren", "Forez", "forja", "forma",
    "formi", "forns", "forra", "forre", "forro", "forta", "forte", "forts", "fosca", "foscs", "foses", "fossa", "fotem", "foten", "fotis", "fotja", "fotre",
    "fotut", "Fouta", "fraga", "franc", "Frans", "frare", "frase", "fraus", "frecs", "freda", "freds", "frega", "frena", "frens", "fresa", "fresc", "freta",
    "Freud", "frigi", "frisa", "frita", "frits", "front", "fruir", "fruit", "frust", "fucus", "fuell", "fuent", "fugaç", "fugar", "fugat", "fugen", "fugin",
    "fugir", "fugit", "fuita", "fulbe", "fulla", "fulls", "fumar", "fumat", "fumer", "Fumes", "fumet", "funda", "furan", "furar", "furer", "furga", "furil",
    "furor", "furot", "furra", "furro", "furta", "furts", "fusat", "fusel", "fuset", "fusos", "fusta", "futon", "futur",
    //G 241
    "gabar", "Gabon", "gabre", "gabun", "gafes", "gafet", "gaial", "gaiat", "gaies", "gaiol", "gaire", "gaita", "galba", "galda", "galer", "gales", "galet",
    "galga", "galls", "galop", "galta", "galze", "gamar", "gamba", "gamen", "gamma", "gamoi", "ganes", "ganga", "gansa", "ganso", "ganta", "ganut", "ganxa",
    "ganxo", "ganya", "garba", "garbo", "garfi", "garra", "garsa", "gasar", "gasca", "gases", "gasiu", "gasos", "gassa", "gasta", "gasti", "gater", "gates",
    "gatet", "gatge", "gaudi", "gauge", "gauss", "gavet", "gavot", "gazal", "gebre", "gelar", "gelat", "gelea", "geliu", "gelor", "gemat", "gemec", "Gemes",
    "gemin", "gemir", "gemma", "genal", "gener", "genet", "gents", "geoda", "gepic", "gerga", "gerla", "gerna", "gerra", "gerro", "gespa", "gessa", "gesta",
    "gests", "Ghana", "Gibbs", "gicar", "gigre", "gihad", "Gilet", "ginya", "ginys", "girar", "girat", "giren", "gires", "giric", "girin", "gisca", "gisco",
    "gitam", "gitar", "gitat", "glaça", "glaia", "gland", "glans", "glast", "glauc", "glavi", "gleba", "glena", "glera", "gleva", "glops", "glosa", "glota",
    "glots", "gluma", "gluti", "gneis", "gnoms", "gnosi", "gnuni", "goesa", "gofra", "goigs", "gojar", "gojat", "goles", "golfa", "golfo", "Golgi", "golls",
    "golut", "Gomar", "gomat", "gomer", "gomes", "gomet", "gonis", "gorda", "gords", "gorga", "gorgs", "gorja", "gorra", "gosar", "gosat", "gossa", "gotes",
    "gotet", "gotim", "gotxa", "gotza", "gotzo", "gouda", "Graaf", "grada", "grall", "grams", "grana", "grans", "grapa", "grata", "grats", "graus", "grava",
    "greal", "greca", "grecs", "greda", "green", "grega", "greix", "greja", "grell", "gremi", "greny", "gresa", "greus", "grial", "grier", "grifa", "grill",
    "griot", "grisa", "griso", "griva", "groat", "grocs", "groga", "grony", "gropa", "grops", "gruar", "gruat", "gruer", "grues", "grufa", "gruix", "grums",
    "gruny", "grups", "gruta", "guaix", "guano", "guant", "guany", "guapa", "guapo", "guard", "gueez", "guerx", "gueto", "guiar", "guiat", "Guido", "guien",
    "guier", "guies", "Guils", "guino", "guipo", "guisa", "guita", "guits", "guixa", "gulag", "gular", "gules", "gumia", "guppy", "gupta", "gusla", "gussi",
    "gusts", "gutxo", "guyot",
    //H 81
    "habub", "hadal", "hades", "hadit", "hafni", "hagin", "hagis", "hagut", "hahni", "haiku", "haima", "hajar", "halar", "halos", "halur", "hamer", "hampa",
    "hansa", "harem", "hassi", "haure", "haver", "haveu", "havia", "heavy", "hedra", "Hegel", "hegui", "Henle", "henna", "Henri", "henry", "herba", "hereu",
    "heroi", "hertz", "heura", "heure", "hevea", "hexil", "hidra", "hiena", "hifal", "hifes", "hijab", "hiksa", "hikse", "hilar", "Hills", "himen", "himne",
    "hindi", "hippy", "hisop", "hissa", "hobby", "holmi", "homei", "Homer", "homes", "honor", "honra", "honro", "horda", "hores", "horst", "horta", "horts",
    "hoste", "hosts", "hotel", "Huang", "hulla", "humil", "humit", "humor", "humus", "hunes", "hurra", "husky", "hutus",
    // I 85
    "iacut", "iaies", "iaios", "iambe", "iarda", "ibera", "ibers", "icona", "ictus", "ideal", "idear", "ideat", "idees", "idoni", "Iemen", "ignar", "ignot",
    "igual", "ileal", "illes", "illot", "ilota", "Iluro", "imada", "imago", "imams", "imant", "imida", "imido", "imina", "imino", "imita", "imiti", "impar",
    "impia", "impiu", "impur", "indis", "indol", "indri", "Indus", "inert", "infix", "infla", "infli", "infon", "infra", "inici", "inics", "innat", "input",
    "insta", "inter", "inuit", "invar", "io-io", "iodar", "iodat", "iodit", "ioduc", "iodur", "iogui", "irada", "irats", "Irene", "iridi", "irona", "irosa",
    "irreg", "Isaac", "isard", "Iscle", "isidi", "islam", "isola", "Isona", "isqui", "istme", "iumes", "IUPAC", "iurac", "iurta", "Ivars", "ivori", "ixent",
    //J 59
    "jaces", "Jacob", "jaços", "jacta", "Jafre", "jagut", "jaies", "jaina", "jaios", "jamai", "James", "janer", "janot", "jaspi", "jauen", "Jaume", "jaure",
    "jeans", "jeien", "jerbu", "jeure", "jihad", "Joana", "joell", "joier", "joies", "joliu", "jonca", "jonça", "joncs", "jonis", "Jorba", "Jordi", "Josep",
    "Josif", "joule", "jover", "joves", "Judea", "judes", "jueus", "jueva", "jugal", "jugar", "jugat", "julep", "jumbo", "jumel", "junci", "junta", "junts",
    "jupes", "jurar", "jurat", "justa", "justs", "jutes", "jutge", "jutja",
    //K 26
    "Kafka", "kappa", "karma", "karri", "kauri", "kebab", "kediv", "kefie", "kefta", "kenaf", "kendo", "Kenya", "ketch", "khmer", "kiowa", "kiwis", "kombu",
    "komis", "kopek", "Krebs", "krill", "kufia", "kulak", "kurda", "kurds", "kuros",
    //L 169
    "label", "labor", "labre", "lacai", "lacar", "lacat", "lacre", "lacta", "lacti", "lagun", "laica", "laics", "lamut", "landa", "Lanka", "lapsa", "lapse",
    "largo", "larva", "lasar", "lassa", "lates", "lauan", "lauda", "laude", "laura", "laves", "laxar", "laxes", "laxos", "legal", "legat", "leles", "Lelio",
    "lelos", "lemes", "lemma", "Lenin", "lenta", "lento", "lents", "leone", "lepra", "leres", "leros", "lesbi", "lesiu", "letal", "Lewis", "liana", "liasa",
    "libar", "libel", "libis", "libra", "liceu", "licor", "lidar", "lidia", "Lieja", "light", "ligne", "ligni", "liles", "limba", "limbe", "limes", "limfa",
    "lirat", "lisar", "litre", "litxi", "liwan", "llaça", "llaca", "llacs", "llaga", "llama", "llamp", "llana", "llaor", "llapa", "llard", "llarg", "llars",
    "llast", "llata", "llavi", "llega", "lleig", "lleis", "llema", "lleme", "llenç", "lleny", "llepa", "llera", "Llers", "llest", "llets", "lleus", "lleva",
    "llibi", "lliça", "lliga", "llima", "llims", "lliri", "llisa", "llits", "lloar", "lloat", "lloba", "lloca", "llocs", "lloen", "lloeu", "lloga", "lloma",
    "lloms", "llong", "llops", "llora", "llord", "lloro", "llosa", "llosc", "lluça", "lluca", "lluco", "llucs", "lluer", "llufa", "lluir", "Llull", "llums",
    "lluna", "lluny", "lluor", "llurs", "llusc", "lobar", "lobat", "lobby", "lobel", "lobus", "local", "locus", "loden", "loess", "logos", "longa", "loqui",
    "lotus", "Lowen", "lucre", "lugre", "lumen", "lunar", "lunch", "lupes", "lupus", "Luter", "luvar", "luvis", "luxar", "luxes", "Luzon", "Lynch",
    //M 320
    "mabre", "maçam", "macar", "macat", "macer", "maces", "macip", "macla", "macos", "maços", "macro", "madur", "maell", "magma", "magna", "magne", "magra",
    "magre", "maies", "maina", "Maine", "maire", "major", "malai", "malar", "malat", "malda", "males", "malla", "malta", "maluc", "malva", "mamar", "mamat",
    "mamba", "mambo", "mamei", "mamen", "mameu", "mamut", "manar", "manat", "manca", "manco", "mancs", "Manel", "manen", "maner", "manes", "maneu", "mango",
    "mania", "manil", "manin", "manoi", "mansa", "mansi", "manso", "manta", "mants", "manxa", "manya", "maons", "maori", "mapar", "mapes", "maqui", "marca",
    "marcs", "Mare»", "marea", "marer", "mares", "marga", "marge", "maria", "marit", "maror", "marro", "marsi", "marta", "marxa", "marxi", "masec", "masia",
    "masos", "massa", "matar", "matat", "maten", "mater", "mates", "Mateu", "matxo", "maula", "maura", "Meats", "medes", "media", "medis", "melat", "melca",
    "meler", "melet", "melga", "melic", "melis", "melit", "melsa", "melva", "menar", "menat", "menen", "mener", "menes", "menga", "mengi", "mengo", "menja",
    "Menno", "menor", "mensa", "menta", "mente", "menti", "menut", "menys", "merda", "meres", "merla", "Meroe", "meron", "mesar", "mesos", "messa", "metec",
    "metes", "metge", "metil", "metol", "metre", "metro", "metxa", "meuca", "meulo", "meves", "mezzo", "miasi", "micet", "micra", "micro", "midar", "mides",
    "mieta", "migra", "migro", "miler", "Milet", "milla", "mimar", "mimen", "minar", "minat", "miner", "mines", "mingo", "minsa", "minse", "minso", "minut",
    "minva", "minve", "minvi", "miola", "miols", "mioma", "miosi", "mirar", "mirat", "miren", "mires", "Mireu", "mirin", "miris", "mirra", "missa", "misto",
    "mitan", "mitat", "mites", "mitil", "mitja", "mitra", "miula", "mixta", "mixts", "moble", "mocar", "modal", "model", "modes", "modus", "mofar", "mogol",
    "mogui", "mogul", "mogut", "moher", "moira", "moixa", "molal", "molar", "molen", "moler", "moles", "Molig", "molla", "molls", "molsa", "molta", "molts",
    "monel", "moner", "mones", "monge", "monja", "monjo", "monot", "monte", "monts", "monya", "monyo", "moral", "morat", "morbo", "morca", "moren", "morer",
    "mores", "moret", "moreu", "morfo", "moria", "morir", "morma", "moros", "morra", "morro", "morsa", "morse", "morta", "morts", "mosca", "mossa", "mosso",
    "mosta", "mosts", "motar", "motel", "motet", "motiu", "motor", "motos", "motxa", "motxo", "mouen", "moure", "movia", "mucus", "mudar", "mudat", "Muden",
    "mudes", "mufar", "mufla", "mugic", "mugir", "mugit", "muixa", "mujol", "mular", "mulat", "muler", "mules", "mulla", "mulli", "multa", "munda", "Munic",
    "munir", "munta", "Munto", "munts", "muong", "muoni", "mural", "murar", "murat", "murer", "mures", "Muret", "murga", "Murla", "murri", "murta", "musar",
    "musca", "muscs", "muser", "muses", "museu", "music", "musiu", "musli", "mussa", "musti", "mutar", "mutat", "mutis", "mutus",
    // N 156
    "nabab", "nabiu", "nabla", "nacra", "nacre", "nacta", "nacte", "Nadal", "nadar", "nadir", "nadiu", "nafil", "nafra", "nafta", "nahua", "naips", "naira",
    "Namib", "nanai", "nanes", "nanos", "nansa", "napar", "napea", "napel", "napes", "nariu", "narra", "nasal", "natal", "natiu", "natja", "Nauru", "nauta",
    "naval", "navei", "nebot", "nedar", "neden", "nefas", "negar", "negat", "negra", "negre", "negui", "negus", "neixi", "nemea", "nemeu", "nenes", "Nepal",
    "neper", "nepta", "neral", "neret", "Nereu", "nerol", "Nerva", "nervi", "netes", "neula", "neuma", "neura", "nevar", "nevat", "nevus", "nexes", "niada",
    "niala", "nials", "nicab", "Nicea", "nicol", "niell", "nient", "niera", "niers", "nigua", "nigul", "nihil", "nimbe", "nimfa", "nimis", "nines", "ninoi",
    "ninot", "ninou", "ninxo", "niobi", "nipis", "nirvi", "Nisan", "nitre", "nitro", "niuet", "nival", "no-jo", "Nobel", "noble", "nocar", "nocer", "noces",
    "nociu", "nodal", "nodes", "nodus", "noema", "noesi", "nogat", "noier", "noies", "Noiet", "noios", "nonat", "nonet", "nopal", "norai", "norma", "noses",
    "notar", "notat", "notes", "nouer", "noure", "noval", "noves", "novia", "novii", "nuada", "nuant", "nuats", "nubes", "nubuc", "Nucia", "nucli", "nuesa",
    "nueta", "nuets", "nugar", "nuler", "Nules", "numen", "nunci", "Nuoro", "nuosa", "nurag", "nusos", "nuvis", "nyafa", "nyapa", "nyepa", "nyera", "nyero",
    "nyiga", "nyoca", "nyora",
    //O 169
    "obacs", "obaga", "obeir", "obenc", "obert", "obesa", "oblat", "oblea", "oblia", "oblic", "oblig", "oblit", "obrar", "obrat", "obren", "obrer", "obres",
    "obria", "obrin", "obrir", "obsta", "ocapi", "Occam", "occir", "occit", "Oceja", "ocell", "ocels", "octal", "octau", "octes", "octet", "ocult", "ocupa",
    "ocupi", "odiar", "odrer", "odres", "ofega", "ofert", "ofesa", "ofici", "Ofidi", "ofita", "oghuz", "ogiva", "oiada", "oiats", "oiava", "oient", "oiosa",
    "okapi", "okupa", "ol·li", "oldre", "oleat", "oleic", "Olesa", "Oleta", "oliar", "olier", "Olimp", "oliva", "ollal", "ollam", "oller", "olles", "olors",
    "Olost", "Olvan", "ombra", "omeda", "omega", "omeia", "oment", "omesa", "omisa", "omple", "ompli", "onada", "oncle", "ondar", "ondat", "onder", "ondes",
    "Onega", "oneig", "oneja", "Onyar", "ooeci", "ooide", "ootip", "opaca", "opacs", "opera", "opiat", "opila", "opima", "opims", "opina", "oposa", "oposi",
    "optar", "oquer", "oques", "orada", "orals", "orant", "orari", "orats", "orbar", "orber", "orbes", "ordes", "ordir", "Ordis", "ordit", "ordre", "oreig",
    "orfes", "Orfeu", "orgia", "orgue", "orina", "orinc", "orins", "oriol", "orlar", "orles", "ornar", "ornat", "oromo", "orotx", "orris", "orsai", "orsar",
    "orsol", "ortiu", "orujo", "orval", "oscar", "oscat", "osmat", "osmol", "osona", "ossam", "ossat", "osset", "ossis", "ossos", "ossut", "ostra", "ouada",
    "ouats", "ouera", "ouija", "ovada", "ovals", "ovari", "ovats", "Ovidi", "ovina", "ovins", "oxalo", "oxida", "oxima", "oxina", "oxoni", "ozena",
    //P 418
    "Pablo", "pacte", "padda", "paduc", "paeix", "paera", "paers", "pagar", "pagat", "pagre", "pagui", "paies", "paios", "paire", "paisa", "palar", "palat",
    "palau", "paler", "pales", "palet", "palla", "palma", "palol", "palpa", "palpo", "palps", "pampa", "panda", "panel", "paner", "panes", "panet", "panna",
    "panot", "pansa", "panxa", "panys", "paona", "papal", "papar", "papat", "papau", "paper", "papes", "papir", "papus", "paput", "parar", "parat", "parca",
    "parcs", "paren", "pareo", "parer", "pares", "paret", "pareu", "paria", "parir", "parit", "parla", "parli", "parlo", "Parma", "parot", "parra", "parsi",
    "parts", "Party", "parva", "passa", "passe", "passi", "passo", "pasta", "patac", "patge", "patia", "Patim", "patir", "patis", "patit", "patri", "patum",
    "patxo", "paula", "Paulo", "pausa", "pauta", "pavia", "peany", "pebre", "pecar", "pecat", "peces", "peçol", "pedaç", "pedal", "pedat", "pedra", "pegar",
    "pegat", "pegot", "peier", "peiot", "peita", "pelar", "pelat", "peles", "pelfa", "pella", "pells", "pelta", "pelut", "penal", "penar", "penat", "penca",
    "penes", "Peneu", "pengi", "penic", "penis", "penja", "penna", "penol", "pensa", "pensi", "penso", "penya", "peona", "peons", "peple", "perca", "perdi",
    "perdo", "perer", "peres", "perir", "perit", "perla", "perna", "perns", "perol", "persa", "perxa", "perxe", "pesal", "pesar", "pesat", "pesca", "pesen",
    "Peseu", "pesos", "pesta", "pesto", "petar", "peter", "petge", "petit", "petja", "Petra", "petri", "pevet", "piano", "picar", "picat", "picor", "picot",
    "picte", "Piera", "pifre", "pigat", "pigot", "pigra", "pigre", "pilar", "Pilat", "piler", "piles", "pilla", "pillo", "pilot", "pimer", "pimes", "pinar",
    "pinça", "Pinet", "pinna", "pinso", "pinta", "pinte", "pinxo", "pinya", "piola", "pipar", "pipes", "pipil", "pipiu", "piqui", "piral", "piran", "pirar",
    "pirat", "pirop", "pisar", "pisos", "pispa", "pista", "pitam", "pitch", "pitea", "piter", "pitet", "piteu", "pitja", "pitof", "pitxi", "piuar", "piula",
    "pivet", "pivot", "pixar", "pixat", "pixis", "pixum", "pizza", "placa", "plaça", "plaer", "plaga", "plagi", "plana", "plans", "plant", "plany", "plapa",
    "plast", "plata", "plats", "plebs", "pleca", "plecs", "plega", "plena", "plens", "plepa", "pleta", "plets", "plexe", "plica", "plint", "ploma", "ploms",
    "plora", "plori", "plors", "pluig", "pluja", "poals", "pobla", "poble", "pobra", "pobre", "podal", "podar", "podem", "poden", "poder", "podeu", "podia",
    "poema", "poeta", "pogut", "poise", "polar", "polca", "polir", "polis", "polit", "polla", "polls", "Polop", "polpa", "polsa", "polze", "pomac", "pomar",
    "pomer", "pomes", "pompa", "ponen", "ponts", "ponxo", "popar", "poper", "poral", "porat", "porca", "porcs", "porga", "porno", "porra", "porro", "porta",
    "porti", "porto", "ports", "poruc", "porus", "porxe", "porxo", "posar", "posat", "posen", "poses", "poseu", "posin", "posis", "posta", "posts", "potes",
    "potos", "potra", "potro", "potto", "pouar", "pouat", "prada", "Praga", "prasi", "prats", "praxi", "prear", "preat", "precs", "predi", "prega", "premi",
    "prenc", "prens", "presa", "prest", "prets", "pretz", "preus", "previ", "prima", "prime", "Primo", "prims", "prior", "prisa", "priva", "proba", "probe",
    "proci", "proer", "proes", "prole", "prona", "prons", "propi", "prosa", "proti", "prova", "pruir", "Pruit", "pruna", "psalm", "psoes", "psora", "pteri",
    "ptosi", "puada", "puats", "pubil", "pubis", "Publi", "pucer", "puces", "Puçol", "puden", "pudir", "pudor", "puell", "pugen", "puges", "pugin", "pugna",
    "pugui", "puigs", "pujar", "pujat", "pujol", "pulca", "pulla", "punch", "punir", "punit", "punks", "punta", "punts", "punxa", "punxi", "punya", "punys",
    "pupil", "puput", "pures", "puret", "purga", "purna", "putam", "puter", "putes", "puzle",
    //Q 34
    "Qatar", "quall", "quals", "quant", "QUÀNT", "quark", "quars", "quart", "quasi", "qubba", "queca", "quecs", "queda", "quedi", "queia", "queix", "quema",
    "quera", "quest", "queta", "quets", "quetx", "quica", "quico", "quiet", "quilo", "quina", "quins", "quint", "Quios", "quist", "quita", "quiti", "quota",
    //R 303
    "rabec", "rabet", "rabut", "races", "radar", "radia", "radis", "radom", "raent", "rafal", "rafel", "rafet", "ragen", "rager", "raids", "raier", "raigs",
    "rails", "raima", "rajar", "rajol", "ralet", "ramal", "ramar", "ramat", "rames", "Ramon", "rampa", "ramut", "ranca", "ranci", "rancs", "randa", "Ranes",
    "rangs", "ranxo", "ranya", "raola", "raona", "raons", "raors", "rapaç", "rapar", "rapat", "raper", "rapir", "rapis", "rapte", "rares", "rasar", "rasca",
    "raser", "rases", "rasos", "raspa", "rassa", "ratar", "ratat", "ratel", "rater", "rates", "ratio", "ratxa", "rauca", "raure", "rauxa", "raval", "raves",
    "realç", "reals", "rebab", "rebat", "rebec", "rebel", "reben", "rebia", "rebin", "rebla", "reble", "rebot", "rebre", "rebuf", "rebut", "recam", "recar",
    "recau", "recel", "recer", "recot", "recta", "recte", "recto", "redir", "redit", "redol", "redox", "reena", "refer", "refet", "refia", "refio", "refon",
    "regal", "regar", "regat", "regel", "regia", "regir", "regit", "regla", "regle", "regna", "regne", "regor", "reial", "Reich", "reids", "reien", "reiet",
    "reina", "reixa", "relat", "relax", "rella", "remar", "remei", "remer", "remet", "remig", "remor", "remot", "remou", "remuc", "renal", "Renau", "renda",
    "renec", "renga", "rengs", "renoc", "renoi", "renom", "renou", "renta", "rento", "renya", "renys", "repeu", "repic", "repix", "repom", "repta", "repte",
    "resar", "resen", "resol", "resta", "resti", "resum", "reten", "retir", "retoc", "retop", "retor", "retre", "retro", "retut", "retxa", "reuma", "reviu",
    "riada", "Rialb", "riber", "ribes", "ribot", "ricar", "ricor", "riell", "rient", "riera", "rifar", "Rifem", "rifle", "rigor", "rigui", "rimar", "rimat",
    "rimen", "rimer", "rimes", "rioja", "riola", "riota", "riscs", "ritme", "ritus", "riuen", "riuet", "riure", "rival", "rivet", "ro-ro", "robar", "robat",
    "rober", "robes", "robot", "rocam", "rodal", "rodam", "rodar", "rodat", "rodeo", "roder", "rodes", "rodet", "rodis", "roent", "roger", "roges", "roget",
    "rogic", "rogle", "roigs", "roina", "Roine", "roins", "rojal", "rojor", "rolar", "roleu", "rolls", "roman", "rombe", "romer", "romes", "romeu", "rompi",
    "ronca", "roncs", "ronda", "ronsa", "ronso", "ronxo", "ronya", "ropit", "rosar", "rosat", "rosca", "rosec", "roser", "roses", "rossa", "rosta", "rosts",
    "rotar", "roter", "rotor", "rotse", "rough", "round", "roure", "roval", "roves", "ruana", "ruans", "ruble", "rubor", "rudes", "rueca", "ruecs", "ruera",
    "rufes", "Rugat", "rugbi", "rugia", "rugir", "rugit", "ruixa", "rulla", "rulls", "rulot", "rumba", "rumbs", "rumen", "rumia", "rumio", "rumor", "runam",
    "runar", "rundi", "runes", "rupia", "rupit", "rural", "Rurik", "rusca", "ruscs", "russa", "ruste", "rutes", "rutil", "ruvet",
    //S 344
    "sabea", "sabem", "saben", "saber", "sabeu", "sabia", "sabir", "sable", "saboc", "sabor", "sabre", "sabuc", "sabut", "sacar", "Sacco", "sacra", "sacre",
    "safir", "Safor", "safra", "sagaç", "sagal", "sagna", "Sagra", "Sahel", "saial", "saiga", "saigs", "Saint", "saiol", "sajol", "salaç", "salar", "salat",
    "salda", "saldo", "Salem", "salep", "saler", "sales", "salic", "salis", "salma", "salms", "salol", "Salou", "salpa", "salsa", "salta", "salti", "salts",
    "salut", "salva", "salve", "salvs", "salze", "samba", "samer", "samis", "Samni", "Samoa", "sampi", "sanar", "sanes", "Sanet", "sango", "sangs", "sansa",
    "santa", "sants", "Sanui", "sanya", "Saona", "sapes", "saqui", "sarau", "sarda", "sards", "sarga", "sarja", "sarna", "saros", "sarpa", "sarri", "sarsa",
    "sasor", "satem", "satiu", "saule", "sauna", "saupa", "saura", "saure", "sauri", "saurs", "savis", "scout", "Seana", "secor", "secta", "sedal", "sedan",
    "sedar", "sedec", "seder", "sedes", "seent", "sefes", "segar", "segat", "segla", "segle", "segon", "Segre", "segui", "segur", "seien", "seixa", "sella",
    "selva", "semal", "semar", "semat", "semen", "semes", "semis", "senal", "Senan", "senar", "senat", "senda", "senet", "senil", "sense", "sensu", "senti",
    "sento", "sents", "senya", "septe", "sequi", "serac", "seran", "serbi", "serem", "serer", "sereu", "serfs", "seria", "serps", "serra", "serva", "Servi",
    "servo", "sesta", "setes", "setet", "setge", "setra", "setze", "seuen", "seure", "sever", "seves", "sevir", "sexar", "sexes", "sexta", "sexts", "Shiga",
    "shoyu", "shunt", "siboc", "sicle", "sidra", "siena", "sigil", "sigla", "sigma", "signa", "signe", "sigui", "sikhs", "silil", "Silla", "silur", "silva",
    "Silvi", "Simat", "simis", "simun", "Sineu", "sinus", "sioux", "sipai", "sipar", "sirga", "sirte", "sisal", "sisca", "siset", "sisme", "sitar", "sitja",
    "sitra", "situa", "siulo", "sivan", "skarn", "Smith", "sobec", "sobra", "sobre", "sobri", "sobta", "sobte", "socam", "socis", "sodar", "sodat", "sofit",
    "sofra", "sofre", "sogar", "sogra", "sogre", "solaç", "solar", "solcs", "solda", "solen", "soler", "soles", "solet", "solfa", "solia", "soliu", "solod",
    "solos", "solta", "solti", "solts", "solut", "somat", "somer", "somes", "somia", "somic", "somni", "sompa", "sompo", "sonar", "sonat", "sonda", "sonen",
    "sonet", "sonia", "sonin", "sonor", "sonsa", "sonso", "sopar", "sopat", "sopem", "soper", "sopes", "sopor", "soral", "sorda", "sords", "sorge", "sorgo",
    "sorna", "sorns", "sorra", "sorts", "sorus", "sotal", "sotes", "sotil", "sotja", "souet", "spins", "staff", "stage", "statu", "Stein", "Stijl", "stilb",
    "stupa", "suabi", "suada", "suara", "suats", "suaus", "sucar", "sucat", "sucre", "Sudan", "sudet", "sueca", "suecs", "suera", "Suert", "Suess", "sueus",
    "sueva", "sufet", "sufix", "suids", "suite", "sulla", "sulls", "sumac", "sumar", "sumat", "sumen", "Sumer", "sumes", "sumin", "sumir", "summa", "summe",
    "sunna", "suomi", "suosa", "supra", "sural", "surar", "suren", "surer", "sures", "Suret", "suros", "surra", "surti", "surto", "surts", "sushi", "sutge",
    "sutja", "sutza", "sutze", "swing",
    //T 315
    "tabac", "tabal", "tabes", "Tabor", "tacar", "tacat", "tacte", "tafia", "tafoi", "tafur", "tagal", "taifa", "taina", "talar", "talec", "taler", "Tales",
    "talla", "talli", "talls", "talma", "talpa", "talps", "tampa", "tanca", "tancs", "tanda", "tanga", "tango", "tangs", "tanka", "tanta", "tants", "tanys",
    "tapar", "tapat", "tapen", "taper", "tapes", "tapet", "tapir", "tapit", "tarar", "tarat", "tarda", "tards", "tares", "Tarin", "tarja", "tarot", "tarsi",
    "tasca", "tassa", "tasta", "tasti", "tasts", "tatxa", "taula", "taure", "tauri", "taxar", "taxat", "taxes", "taxis", "tebeo", "tebes", "tecal", "tecla",
    "teids", "telar", "teler", "teles", "tella", "tells", "temes", "temia", "temor", "tempo", "temps", "temut", "tenaç", "tenca", "tenda", "tenen", "tenia",
    "tenim", "tenir", "tenis", "teniu", "tenor", "tensa", "tepui", "terbi", "terça", "teris", "terme", "terna", "terra", "terri", "tesar", "tesat", "tesen",
    "teses", "Teseu", "tesis", "tesla", "tesor", "tesos", "testa", "tests", "tetis", "teula", "teves", "tevet", "Texas", "texts", "theta", "tiama", "Tiana",
    "tiara", "tibar", "tibat", "Tibet", "tible", "tieta", "tiets", "tifus", "tiges", "tigre", "tijat", "timba", "timol", "Timor", "timus", "tines", "tinoi",
    "tinta", "tints", "tinya", "tiols", "tions", "tipes", "tiple", "tipus", "tirar", "tirat", "tiren", "tires", "tireu", "tirin", "tiris", "Tirol", "titar",
    "titet", "titit", "titot", "tmesi", "Tobol", "tocar", "tocat", "tocom", "tofes", "tofus", "tofut", "togat", "toies", "toixa", "tolil", "tolir", "tolit",
    "tolla", "tolls", "tolos", "tolta", "tolus", "tomar", "tomba", "tombi", "tombs", "tonal", "tondo", "tones", "Tonga", "tonus", "tonya", "topar", "topat",
    "topen", "topin", "toqui", "toral", "torba", "torbi", "torça", "torca", "tords", "torer", "tores", "toret", "toril", "tormo", "torna", "torni", "torno",
    "torns", "toros", "torra", "torre", "torta", "torts", "torus", "torxa", "tosca", "toscs", "Toses", "tossa", "total", "totes", "totxa", "totxo", "Tours",
    "toves", "tovor", "tovot", "traça", "traca", "traci", "Tracy", "Trade", "traga", "tragi", "trago", "trair", "trama", "trams", "tranc", "trapa", "trass",
    "trast", "trauc", "traus", "trava", "treia", "trema", "tremp", "trena", "trenc", "trens", "trepa", "tresc", "treta", "trets", "treva", "triac", "trial",
    "triar", "triat", "triba", "tribu", "tridu", "tries", "triga", "trill", "trina", "trinc", "tripa", "tripl", "trips", "trist", "trita", "triti", "trits",
    "trivi", "troba", "trobi", "trobo", "troca", "Troia", "trona", "tronc", "trons", "tropa", "trops", "trota", "truca", "trucs", "trufa", "truja", "trull",
    "trust", "tsade", "tsars", "tsuga", "tubal", "tubet", "tudar", "tudor", "tumor", "Tunis", "tupar", "turac", "turba", "turbo", "turca", "turcs", "turma",
    "tusca", "tuscs", "tusta", "tutor", "tutsi", "tutti", "twist", "txeca", "txecs",
    //U 60
    "ubics", "udola", "udols", "ufana", "ufans", "uigur", "uixer", "ulema", "ullal", "ullar", "ullat", "ullet", "ullot", "ulnar", "ultra", "umbra", "umbre",
    "umiac", "unari", "unces", "uneix", "ungir", "ungit", "ungla", "uniat", "unida", "unien", "unint", "units", "untar", "untat", "unten", "untet", "Unteu",
    "untor", "Urals", "urani", "urats", "urçol", "ureic", "ureid", "urent", "urgir", "Urmia", "urnes", "urpar", "urpes", "urpir", "usada", "usant", "usats",
    "usava", "uscoc", "usnea", "usual", "usura", "Utman", "Uttar", "uveal", "uzbek",
    //V 208
    "vacar", "vacum", "vagal", "vagar", "vagin", "vagis", "vagit", "vague", "vaira", "vaire", "vairs", "Vajol", "valac", "valem", "valen", "valer", "valga",
    "valgs", "valia", "valls", "valor", "valva", "vamba", "vanar", "vanes", "vanta", "vapor", "varal", "varar", "varec", "vareg", "Varen", "vares", "varia",
    "varis", "variu", "varva", "vasal", "vaser", "Vaset", "vasos", "vasta", "vasts", "vatua", "vauma", "veçar", "veces", "veçot", "vedar", "vedat", "vedes",
    "vedet", "vegeu", "vegin", "veiem", "veien", "veire", "vejam", "Velai", "velam", "velar", "velat", "veler", "veles", "vella", "vells", "veloç", "venal",
    "venda", "vende", "venen", "venes", "venia", "Venim", "venir", "veniu", "venja", "venta", "vents", "venus", "venut", "vepsa", "vepse", "veraç", "veral",
    "verat", "verba", "verbs", "verda", "verds", "veres", "verga", "verge", "verms", "verns", "verol", "verpa", "verra", "verro", "versa", "verso", "vesar",
    "vespa", "vessa", "vessi", "vesta", "vetar", "vetes", "veuen", "veure", "vexar", "viada", "vials", "viari", "viats", "vibra", "vibro", "vichy", "vicia",
    "vicis", "vides", "vidre", "Viena", "vigir", "vigor", "vilar", "viler", "viles", "vimen", "vimer", "vinca", "vinça", "viner", "vinet", "vinga", "vinil",
    "vinya", "viola", "vions", "viral", "virar", "virat", "vires", "viret", "virga", "virgo", "viril", "virot", "virus", "visar", "visat", "visca", "visir",
    "visiu", "visor", "vista", "vists", "vital", "vitel", "vitet", "vitol", "vitre", "vitri", "vitro", "vitxo", "viuda", "viudo", "viuen", "viure", "vivaç",
    "viver", "vives", "vivia", "vivim", "vivor", "Vixnu", "vocab", "vocal", "vodka", "vogar", "vogia", "vogir", "vogul", "volar", "volat", "volca", "volea",
    "volem", "volen", "voler", "voleu", "Volga", "volia", "Volos", "volsc", "volta", "volts", "volum", "volva", "voraç", "voral", "vorer", "vores", "votar",
    "votat", "votiu", "vuits", "vulva",
    //W 3
    "water", "watts", "weber",
    //X 126
    "xabec", "xacal", "xacar", "xacra", "Xacti", "xador", "xafar", "xaiar", "xaiat", "xaica", "xaier", "xaies", "xaiet", "xaira", "xaire", "xalar", "xalat",
    "xales", "xalet", "xalma", "xaloc", "xaman", "xamar", "xamat", "xamba", "xamor", "xanca", "xanxa", "xapar", "xapat", "xapes", "xapot", "xaria", "xarol",
    "xarop", "xarot", "xarpa", "xarts", "xaruc", "xarxa", "xates", "xatos", "xauta", "xauxa", "xaval", "xavos", "xefla", "xeire", "xeixa", "xelet", "xemic",
    "xerec", "xeres", "xeric", "xerif", "xerla", "xerpa", "xerra", "xerri", "Xerta", "xevat", "xhosa", "xibec", "xibiu", "xibuc", "xicle", "xicol", "xicon",
    "xicot", "xicra", "xifla", "xifra", "xilla", "xinar", "xinat", "xines", "xinet", "Xingu", "xintz", "xinxa", "Xipre", "xiric", "xiroi", "xisca", "xitar",
    "xiula", "xocar", "xocat", "Xodos", "xofer", "xolla", "xopar", "xopat", "xopes", "xopet", "xorca", "xorcs", "xoric", "xoriç", "xorla", "xorra", "xoses",
    "xotis", "xotra", "xotro", "xotxa", "xotxo", "xubec", "xucla", "xueta", "xufar", "xufer", "xufla", "xuixo", "xulla", "xumar", "xumet", "xumin", "xunga",
    "xurla", "xurma", "xurra", "xurro", "xusma", "xutar", "xutat",
    //Y
    
    //Z 16
    "zaire", "zajal", "zebra", "zeids", "zelar", "zenit", "zeros", "zigot", "zloty", "zoeci", "zombi", "zonal", "zonat", "zones", "zulus", "Zuric",
    
    ]
    const dictionary = [
      //A 427
      "Aaron", "abans", "abast", "abats", "abell", "aboca", "abona", "abraç", "abret", "abric", "abril", "absis", "absol",
      "abuna", "abura", "abusa", "acaba", "acabi", "Acaci", "Acaia", "acana", "acant", "acarp", "acata", "Accad", "accis",
      "acels", "acerb", "acers", "aclis", "acont", "acora", "acord", "acost", "acral", "acres", "actes", "actiu", "actor",
      "actua", "acuit", "aculi", "acull", "acusa", "adagi", "adarb", "addax", "adiar", "adjar", "admet", "adnat",
      "adoba", "adobs", "Adolf", "adona", "adoni", "adora", "adorm", "adorn", "adreç", "adret", "aduar", "adula", "adult",
      "adust", "aedes", "aequo", "aeris", "afait", "afana", "afany", "afeli", "afers", "afila", "afina", "afins", "afixa",
      "aflat", "aflux", "afoll", "afora", "afrau", "aftes", "afuar", "afuat", "afust", "agafa", "agafi", "agama", "agave",
      "agent", "agita", "agnat", "agnom", "agnus", "agost", "agram", "agrer", "agres", "agret", "agrir", "agrit", "agror",
      "aguar", "aguda", "aguts", "Ahura", "ai-ai", "aidar", "Aielo", "aigua", "aimia", "ainus", "aires", "airet", "aital",
      "aitan", "aixar", "aixeb", "aixec", "aixol", "ajeia", "ajoco", "ajuda", "ajudi", "ajupi", "ajust", "ajuts", "akela",
      "alada", "alaga", "alans", "alarb", "alars", "alats", "Albal", "albat", "albes", "albet", "albir", "albis", "alboc",
      "albor", "alçar", "alçat", "alcea", "alcen", "alces", "Alcoi", "aldea", "aldol", "alduf", "aleia", "alena", "alera",
      "alerç", "alers", "aleta", "alfac", "alfil", "alfin", "alfol", "algal", "Algar", "Alger", "algun", "aliar", "aliat",
      "alida", "alier", "alisa", "alita", "aljub", "allar", "allau", "aller", "allet", "allop", "almud", "alocs", "aloer",
      "aloja", "alosa", "alots", "alpax", "Altai", "altar", "altea", "altes", "altiu", "altra", "altre", "altri", "aluda",
      "alums", "amada", "amaga", "amant", "amara", "amarg", "amari", "ambla", "ambre", "ameba", "amena", "amens", "ament",
      "amics", "amida", "amidi", "amido", "amiga", "amina", "amino", "amoni", "amorf", "amors", "ampit", "ampla", "ample",
      "ampli", "amunt", "amura", "anada", "anals", "anant", "anava", "ancat", "ancil", "ancut", "andar", "ander", "andes",
      "anell", "angle", "anhel", "anima", "anins", "Anjou", "Annam", "annex", "anoia", "anoll", "anorc", "anota", "ansar",
      "ansat", "anses", "antec", "antic", "antre", "anual", "anura", "anurs", "anyal", "anyer", "anyil", "anyoc", "anyol",
      "aorta", "Aosta", "aotus", "apaga", "apart", "apega", "apell", "apena", "apila", "apiol", "aplec", "aplic", "aplom",
      "apnea", "aprox", "aptes", "aptot", "apunt", "aquea", "aquet", "aqueu", "arada", "arboç", "arbra", "arbre", "arcar",
      "arçar", "arcat", "arços", "arçot", "ardat", "ardit", "ardor", "areal", "areca", "arena", "arenc", "areng", "areny",
      "arets", "Argar", "argiu", "Argos", "argot", "argue", "argus", "ariel", "ariet", "arita", "ariza", "arize", "arjau",
      "Arles", "arlot", "armar", "armat", "armer", "armes", "armis", "arnar", "arnat", "Arnau", "arnen", "arner", "arnes",
      "arnot", "aroli", "aroma", "arpar", "arpat", "arper", "arpes", "arpis", "arran", "arrap", "arrel", "arres", "arreu",
      "arria", "arrop", "arruf", "artec", "arter", "artet", "arval", "arxet", "arxiu", "ascla", "ascle", "aseta", "asmat",
      "aspat", "aspes", "aspia", "aspra", "aspre", "Assam", "asseu", "assoc", "assot", "assut", "aster", "astor", "astre",
      "astur", "astut", "ataca", "atacs", "atall", "atans", "atees", "Atena", "atent", "ateny", "atesa", "ateus", "Athos",
      "atiar", "atipa", "atles", "atots", "atova", "atrau", "atret", "atreu", "atrit", "atroç", "atuir", "atura", "atxem",
      "atxes", "atxim", "atzar", "atzur", "audaç", "aules", "aulet", "aulos", "aurat", "auril", "autop", "autor", "autos",
      "avala", "avall", "avanç", "avant", "avara", "avars", "avena", "avenç", "avenc", "avern", "avets", "avial", "aviar",
      //B 386
      "aviat", "avior", "avisa", "avist", "aviva", "axial", "axons", "azida", "azina", "azoic", "azole", "babau",
      "baare", "babau", "babel", "bable", "babol", "bacil", "baciu", "bacon", "Bacus", "badar", "badat", "baden", "badeu", "badge", "badia", "badil", "badiu",
    "badoc", "bafle", "bafor", "Bages", "bagol", "bagot", "bagra", "bagul", "baiar", "baies", "baila", "baina", "baixa", "baixi", "bajoc", "balba", "balbs",
    "balca", "balda", "bales", "balir", "balla", "balli", "balls", "balma", "balot", "balou", "balsa", "balun", "bamba", "bambo", "bamps", "banal", "banat",
    "banau", "banca", "bancs", "banda", "baner", "banjo", "bantu", "banya", "banys", "baqui", "barat", "barba", "barbs", "barca", "barça", "barda", "barem",
    "baria", "barra", "barri", "barxa", "basal", "basar", "basat", "basca", "bascs", "basen", "baser", "bases", "basic", "bassa", "bassi", "basta", "basto",
    "basts", "batak", "batan", "batau", "Batea", "batec", "baten", "bater", "bates", "bateu", "batia", "batre", "batut", "bauet", "baula", "baule", "bauxa",
    "bavar", "baves", "bavor", "Bearn", "beata", "beats", "becar", "becat", "becut", "befar", "befis", "beges", "begui", "begum", "Begur", "begut", "beina",
    "beisa", "belai", "belar", "belga", "bella", "belli", "bells", "bemba", "benes", "benet", "Benue", "benzo", "beoci", "Berga", "Beric", "beril", "berla",
    "berma", "Berna", "Berry", "berta", "besar", "beset", "bessa", "besuc", "betil", "Betis", "betol", "betum", "betza", "Beuda", "beure", "Beveu", "bhili",
    "bhils", "biaix", "bicol", "bidet", "biela", "bifaç", "bigal", "bigam", "bigot", "Bihar", "bilis", "bimba", "binar", "bingo", "bioma", "biont", "biota",
    "birba", "biret", "birla", "birlo", "bisar", "bisbe", "bitar", "bitoc", "bitol", "bitxa", "bitxo", "Biure", "bivac", "blada", "blana", "blanc", "blans",
    "blast", "blats", "blaus", "blava", "bleda", "bleir", "bleix", "blens", "blets", "bleva", "blima", "bloca", "blocs", "bloom", "blues", "boada", "bobos",
    "bocal", "bocam", "boçar", "bocat", "bocoi", "bocut", "bodos", "bogal", "bogar", "boges", "bogey", "bohri", "boiar", "boids", "boies", "boiet", "boigs",
    "boina", "boira", "boixa", "bojac", "bojal", "bojor", "bolca", "bolcs", "bolda", "boldo", "bolei", "boles", "bolet", "bolfa", "bolic", "bolig", "bolla",
    "bomba", "bombo", "bonda", "bones", "bonet", "bongo", "bonic", "bonir", "bonys", "bonze", "Boole", "boral", "borar", "borat", "borda", "bords", "Borel",
    "boren", "borja", "borla", "borni", "borns", "borra", "borsa", "borur", "Bosco", "boscs", "bossa", "botam", "botar", "botat", "boter", "botes", "botet",
    "boteu", "botia", "botir", "botit", "botja", "botre", "botri", "botut", "botxa", "boual", "bouer", "bouet", "boval", "bovar", "bover", "bovor", "boxar",
    "braça", "braga", "brama", "brams", "branc", "braol", "brasa", "brava", "bravo", "break", "Breda", "brega", "brell", "brenc", "breny", "bresa", "breta",
    "breus", "breva", "brial", "brida", "brill", "brima", "brinc", "brins", "briol", "brisa", "briva", "broca", "brocs", "broda", "broix", "broll", "broma",
    "bronc", "brook", "brota", "brots", "brous", "Brown", "bruci", "brucs", "bruel", "brufa", "bruga", "bruit", "brull", "bruna", "bruns", "brunz", "brusa",
    "brusc", "bruta", "bruti", "bruts", "buata", "bubis", "bucal", "bucle", "bufar", "bufat", "bufec", "bufen", "bufes", "bufet", "bufit", "bufor", "bugat",
    "bugia", "bugiu", "bugle", "bugre", "bugui", "buida", "buidi", "buina", "buits", "bujol", "bujot", "bulbs", "bulim", "buosa", "burat", "burca", "burda",
    "burja", "burla", "burot", "burra", "burro", "burxa", "busal", "busca", "Busot", "bussi", "butil", "butza",
    //C 500
      "cabal", "cabeç", "caben", "caber", "cabet", "cabia", "cable", "cabot", "cabra", "cabre", "cabut", "caçar", "caçat",
      "cacau", "cacen", "caces", "cacic", "cadaf", "cadap", "cadet", "Cadis", "cadmi", "caduc", "caduf", "cadup", "cafit",
      "cafre", "cagar", "cagat", "cagot", "caiac", "caiot", "caire", "caixa", "caixo", "Calaf", "calar", "calat", "calau",
      "calba", "calbs", "calça", "calca", "calci", "calcs", "calda", "caldo", "calds", "calen", "caler", "cales", "calet",
      "calia", "caliu", "calla", "calls", "calma", "calms", "calop", "calor", "calta", "calua", "Calvi", "calze", "camal",
      "camat", "cames", "camil", "camis", "campa", "Campi", "camps", "camut", "canac", "canal", "canar", "canat", "canca",
      "candi", "caner", "canes", "canet", "canic", "canoa", "canol", "Canop", "canor", "canot", "cansa", "canta", "canto",
      "cants", "canut", "canvi", "canxa", "canya", "caoba", "capaç", "capar", "capat", "capça", "capel", "caper", "capes",
      "capet", "capir", "capoc", "capol", "capot", "Capri", "capsa", "capta", "capuç", "caqui", "carai", "caram", "carat",
      "carca", "carda", "cardo", "cards", "carei", "cares", "carga", "carib", "Carme", "carni", "carns", "caror", "caros",
      "carpa", "carra", "carro", "carst", "carta", "casal", "casar", "casat", "casba", "casca", "cascs", "casen", "cases",
      "casin", "casor", "casos", "casot", "caspa", "caspi", "cassa", "casta", "casts", "casus", "catal", "catau", "catch",
      "catet", "catre", "catxa", "catxo", "cauen", "cauet", "caule", "caure", "cauri", "causa", "causi", "cauta", "cauts",
      "cavar", "cavat", "caven", "caver", "caves", "cavet", "caveu", "cavim", "cebar", "cebes", "cecal", "cedia", "cedir",
      "cedit", "cedre", "Cefeu", "cegar", "cegat", "ceiba", "celar", "celat", "cella", "celta", "celti", "cents", "cenur",
      "cepat", "cerat", "cerca", "cercs", "cerer", "ceres", "Ceret", "cerot", "cerra", "cerro", "certa", "certs", "cerut",
      "cerva", "cervo", "cessa", "cessi", "cesta", "cetal", "cetil", "Ceuta", "Chaco", "ciant", "ciati", "cicle",
      "CIÈNC", "cient", "cigar", "cigne", "cigni", "cilis", "cimal", "cimar", "cimer", "cimes", "Cinca", "cincs", "cinta",
      "cints", "Cirac", "circa", "circs", "cirer", "Ciril", "ciris", "cisar", "cises", "cisma", "cista", "cists", "citar",
      "citat", "civet", "civil", "claca", "clade", "clamp", "clams", "clans", "clapa", "claps", "clara", "clars", "clasc",
      "clast", "claus", "clava", "clavi", "cleca", "cleda", "clerc", "clero", "cleta", "clics", "clima", "clina", "clipi",
      "clips", "clisi", "cloca", "clofa", "clons", "cloro", "closa", "clota", "clots", "clova", "clown", "clubs", "cluca",
      "clucs", "Cluny", "clusa", "cnidi", "coala", "coana", "cobai", "cobla", "coble", "Cobol", "cobra", "cobro", "cocos",
      "cocou", "coder", "codis", "coell", "coent", "coera", "coers", "coets", "cofar", "cofat", "cofes", "cofoi", "cofre",
      "Cogul", "coiot", "coits", "coixa", "colar", "colat", "coler", "coles", "colet", "Coleu", "colga", "colla", "colls",
      "colog", "colom", "colon", "color", "colps", "colur", "colza", "colze", "comal", "comar", "comba", "comes", "comet",
      "comte", "conat", "conca", "conco", "conec", "conga", "Congo", "conta", "conte", "conto", "conus", "conxa", "conxo",
      "conya", "copal", "copar", "copat", "copec", "copeo", "coper", "copes", "copet", "copia", "cople", "copra", "copsa",
      "copta", "copte", "coral", "corba", "corbs", "corca", "corcs", "corda", "corea", "coreu", "corfa", "Corgo", "corma",
      "corni", "corns", "corra", "corre", "corri", "Corro", "corts", "cosac", "cosec", "coses", "cosir", "cosit", "cossa",
      "cossi", "costa", "costi", "costs", "cotar", "coter", "cotes", "cotip", "cotna", "cotxa", "cotxe", "couen", "coure",
      "coval", "covar", "covat", "coven", "cover", "coves", "coxal", "cranc", "crani", "crasi", "crear", "creat", "credo",
      "creen", "creia", "creix", "crema", "cremi", "creps", "cresp", "creta", "creua", "creus", "criar", "criat", "crida",
      "cridi", "crien", "cries", "crims", "crina", "crins", "Crios", "crisi", "crist", "crits", "croat", "croca", "crocs",
      "croma", "cromo", "cruel", "crues", "cruia", "cruix", "cruor", "cuada", "cuats", "cucar", "cucat", "cucut", "cudol",
      "cueja", "cuell", "cuera", "cuers", "cueta", "Cugat", "cugot", "cuguç", "cugul", "cuina", "cuiro", "cuirs", "cuita",
      "cuits", "cuixa", "cular", "culer", "culet", "culis", "culla", "culli", "culot", "culpa", "culta", "culte", "Cunit",
      "cunys", "curar", "curat", "curda", "curds", "cures", "curie", "curos", "curra", "curri", "curro", "cursa", "cursi",
      "curta", "curts", "curul", "cusen", "cussa", "cutis",
      //D 228
      "dacsa", "dades", "dador", "dafne", "daica", "daics", "daina", "dalla", "dalts", "Damas", "damer", "dames", "dandi", "dansa", "danya", "danys", "daram",
      "dards", "darga", "dashi", "dasia", "datar", "dates", "datiu", "datxa", "daura", "David", "debat", "deble", "debut", "debye", "decau", "decep", "decil",
      "decor", "degut", "deien", "deies", "deisi", "deixa", "deixi", "delat", "delco", "deler", "delga", "Delhi", "delir", "delit", "della", "delma", "delme",
      "Delos", "delta", "demet", "demor", "dener", "denes", "denim", "Denis", "denou", "densa", "dents", "derbi", "derma", "derna", "desar", "desat", "desca",
      "Desen", "desig", "Desna", "deuen", "deure", "deute", "Devem", "devia", "devon", "devot", "Dewar", "diaca", "diada", "diana", "diarc", "diari", "diazo",
      "dicta", "didal", "didot", "dient", "diesi", "dieta", "difon", "digen", "digin", "digna", "digne", "digui", "dinal", "dinar", "dinat", "dindi", "dinem",
      "diner", "dingo", "dinou", "dioic", "dipes", "dipir", "dipol", "diran", "direm", "diria", "disco", "discs", "dista", "Disto", "distr", "ditec", "dites",
      "ditet", "diuen", "divan", "dives", "divos", "dobla", "doble", "docta", "docte", "dogal", "dogam", "dogma", "dogon", "dogre", "doina", "doiut", "dolar",
      "dolça", "dolen", "doler", "dolia", "dolla", "dolls", "dolor", "dolsa", "domar", "domat", "domen", "domer", "domna", "domus", "donam", "donar", "donat",
      "doncs", "donen", "doner", "dones", "doneu", "donin", "donis", "donja", "donna", "dopar", "dopat", "dopen", "doral", "dorca", "doris", "dosar", "doset",
      "dosis", "dosos", "dotal", "dotar", "dotat", "Doteu", "dotze", "Douro", "draba", "dracs", "draga", "drago", "drama", "draps", "dreça", "dreta", "drets",
      "dries", "drift", "dring", "drive", "droga", "dropa", "dropo", "druda", "drupa", "drusa", "duals", "duana", "dubni", "dubta", "dubte", "Dubto", "ducal",
      "ducat", "duent", "Duero", "dugui", "duien", "duies", "dujar", "dujat", "duler", "dulia", "dunar", "dunes", "dupla", "duple", "dural", "duran", "durar",
      "durat", "duren", "dures", "durin", "duros", "dutes", "dutxa",
      //E 193
      "eagle", "ecesi", "ecidi", "ecoic", "eculi", "edats", "edema", "edils", "edita", "educa", "eduir", "efect", "efesi", "egees", "egeus", "einam", "eines",
    "eixam", "eixau", "eixea", "eixes", "eixia", "eixir", "eixit", "eixiu", "eixos", "eixut", "elenc", "eleta", "elets", "eleva", "elevi", "elina", "elisi",
    "elits", "elles", "elmet", "elogi", "eluir", "emana", "embat", "emboç", "emboc", "embut", "emena", "emesa", "emeti", "empat", "empit", "empra", "empre",
    "empri", "Emtma", "emula", "enans", "enant", "enceb", "encep", "encet", "encop", "endur", "endut", "enduu", "enfit", "engan", "engir", "enjub", "enmig",
    "enols", "enosi", "enric", "enroc", "ensec", "ensum", "entat", "enter", "entra", "entre", "entri", "entro", "enuig", "envia", "envit", "envol", "enyor",
    "enzim", "eogen", "eolis", "epode", "eques", "equip", "erada", "erari", "erenc", "erera", "ereta", "erets", "ergol", "erici", "erina", "ermar", "ermes",
    "ermot", "erola", "erols", "errar", "errat", "erren", "erres", "error", "ertes", "eruga", "esbat", "escac", "escai", "escap", "escar", "escat", "escau",
    "escif", "escoa", "escon", "escot", "escua", "escup", "escut", "esdet", "esfex", "eslau", "eslip", "esmar", "esnob", "espai", "espat", "esper", "espet",
    "espeu", "espia", "espic", "espot", "esput", "esser", "esses", "essiu", "estai", "estam", "estan", "estar", "estat", "estel", "estem", "estes", "esteu",
    "estic", "estil", "estim", "estiu", "Estix", "estoa", "estoc", "estol", "estop", "estor", "estre", "estri", "estuc", "estuf", "etali", "etapa", "eteri",
    "etern", "etesi", "ethos", "etoli", "etusa", "Euler", "eunuc", "euros", "evers", "evita", "eviti", "evoca", "Excma", "exerg", "exigu", "exili", "eximi",
    "exina", "exodi", "expia", "extra", "exvot", "Eyasi",
    //F 319
    "Fabra", "fabre", "facin", "facis", "facto", "fadar", "fades", "fador", "faena", "faent", "fages", "fagot", "faigs", "Faium", "faixa", "fajol", "falba",
    "falbs", "falca", "falçs", "falda", "falla", "falli", "falsa", "falta", "falua", "fanal", "Fanar", "fanga", "fangs", "fanti", "farad", "faran", "farda",
    "farem", "fareu", "farga", "faria", "farot", "farro", "farsa", "farta", "farts", "fases", "fasor", "fasts", "fatal", "fatic", "fatxa", "faula", "fauna",
    "faune", "Faura", "faust", "fauve", "favar", "faves", "favor", "favus", "faxar", "feaci", "feble", "febra", "febre", "fecal", "fedal", "feiem", "feien",
    "feies", "feina", "feixa", "feliç", "felip", "Feliu", "femar", "femat", "femer", "femta", "fenal", "fenar", "fenat", "fendi", "fener", "fenil", "fenol",
    "feraç", "feral", "feram", "feren", "feres", "ferir", "ferit", "ferla", "ferma", "fermi", "ferms", "feroç", "feror", "ferre", "ferri", "ferro", "ferum",
    "fesol", "festa", "fetal", "fetch", "fetes", "fetge", "fetor", "fetus", "fiada", "fiala", "fiats", "fiava", "fibla", "fible", "fibra", "ficar", "ficat",
    "ficta", "ficte", "ficus", "fidel", "fideu", "figle", "filag", "filar", "filat", "files", "filet", "filis", "filla", "fills", "filma", "films", "filot",
    "final", "finar", "finat", "finca", "fines", "finir", "finit", "finor", "finta", "fiola", "fiord", "Fiore", "fiqui", "firal", "firar", "firat", "firer",
    "fires", "firma", "Firoz", "fisca", "fissa", "fitar", "fitat", "fiter", "fites", "fitol", "fitor", "fitxa", "fixar", "fixat", "fixen", "fixes", "fixeu",
    "fixin", "fixos", "flaca", "flacs", "flaix", "flama", "flami", "flanc", "flaps", "flasc", "flash", "flats", "flavi", "fleca", "fleix", "flexo", "flint",
    "flipa", "flirt", "floca", "flocs", "flora", "flors", "flota", "fluid", "fluir", "fluix", "fluor", "focal", "focea", "foceu", "focus", "foehn", "fofes",
    "fofos", "fogal", "fogar", "fogor", "fogot", "foide", "foier", "Foios", "folga", "folia", "folis", "folla", "folls", "folra", "folre", "folro", "fonar",
    "fonda", "fondo", "fonen", "foner", "fongo", "fongs", "fonia", "fonts", "foral", "forat", "força", "forca", "forcs", "foren", "Forez", "forja", "forma",
    "formi", "forns", "forra", "forre", "forro", "forta", "forte", "forts", "fosca", "foscs", "foses", "fossa", "fotem", "foten", "fotis", "fotja", "fotre",
    "fotut", "Fouta", "fraga", "franc", "Frans", "frare", "frase", "fraus", "frecs", "freda", "freds", "frega", "frena", "frens", "fresa", "fresc", "freta",
    "Freud", "frigi", "frisa", "frita", "frits", "front", "fruir", "fruit", "frust", "fucus", "fuell", "fuent", "fugaç", "fugar", "fugat", "fugen", "fugin",
    "fugir", "fugit", "fuita", "fulbe", "fulla", "fulls", "fumar", "fumat", "fumer", "Fumes", "fumet", "funda", "furan", "furar", "furer", "furga", "furil",
    "furor", "furot", "furra", "furro", "furta", "furts", "fusat", "fusel", "fuset", "fusos", "fusta", "futon", "futur",
    //G 241
    "gabar", "Gabon", "gabre", "gabun", "gafes", "gafet", "gaial", "gaiat", "gaies", "gaiol", "gaire", "gaita", "galba", "galda", "galer", "gales", "galet",
    "galga", "galls", "galop", "galta", "galze", "gamar", "gamba", "gamen", "gamma", "gamoi", "ganes", "ganga", "gansa", "ganso", "ganta", "ganut", "ganxa",
    "ganxo", "ganya", "garba", "garbo", "garfi", "garra", "garsa", "gasar", "gasca", "gases", "gasiu", "gasos", "gassa", "gasta", "gasti", "gater", "gates",
    "gatet", "gatge", "gaudi", "gauge", "gauss", "gavet", "gavot", "gazal", "gebre", "gelar", "gelat", "gelea", "geliu", "gelor", "gemat", "gemec", "Gemes",
    "gemin", "gemir", "gemma", "genal", "gener", "genet", "gents", "geoda", "gepic", "gerga", "gerla", "gerna", "gerra", "gerro", "gespa", "gessa", "gesta",
    "gests", "Ghana", "Gibbs", "gicar", "gigre", "gihad", "Gilet", "ginya", "ginys", "girar", "girat", "giren", "gires", "giric", "girin", "gisca", "gisco",
    "gitam", "gitar", "gitat", "glaça", "glaia", "gland", "glans", "glast", "glauc", "glavi", "gleba", "glena", "glera", "gleva", "glops", "glosa", "glota",
    "glots", "gluma", "gluti", "gneis", "gnoms", "gnosi", "gnuni", "goesa", "gofra", "goigs", "gojar", "gojat", "goles", "golfa", "golfo", "Golgi", "golls",
    "golut", "Gomar", "gomat", "gomer", "gomes", "gomet", "gonis", "gorda", "gords", "gorga", "gorgs", "gorja", "gorra", "gosar", "gosat", "gossa", "gotes",
    "gotet", "gotim", "gotxa", "gotza", "gotzo", "gouda", "Graaf", "grada", "grall", "grams", "grana", "grans", "grapa", "grata", "grats", "graus", "grava",
    "greal", "greca", "grecs", "greda", "green", "grega", "greix", "greja", "grell", "gremi", "greny", "gresa", "greus", "grial", "grier", "grifa", "grill",
    "griot", "grisa", "griso", "griva", "groat", "grocs", "groga", "grony", "gropa", "grops", "gruar", "gruat", "gruer", "grues", "grufa", "gruix", "grums",
    "gruny", "grups", "gruta", "guaix", "guano", "guant", "guany", "guapa", "guapo", "guard", "gueez", "guerx", "gueto", "guiar", "guiat", "Guido", "guien",
    "guier", "guies", "Guils", "guino", "guipo", "guisa", "guita", "guits", "guixa", "gulag", "gular", "gules", "gumia", "guppy", "gupta", "gusla", "gussi",
    "gusts", "gutxo", "guyot",
    //H 81
    "habub", "hadal", "hades", "hadit", "hafni", "hagin", "hagis", "hagut", "hahni", "haiku", "haima", "hajar", "halar", "halos", "halur", "hamer", "hampa",
    "hansa", "harem", "hassi", "haure", "haver", "haveu", "havia", "heavy", "hedra", "Hegel", "hegui", "Henle", "henna", "Henri", "henry", "herba", "hereu",
    "heroi", "hertz", "heura", "heure", "hevea", "hexil", "hidra", "hiena", "hifal", "hifes", "hijab", "hiksa", "hikse", "hilar", "Hills", "himen", "himne",
    "hindi", "hippy", "hisop", "hissa", "hobby", "holmi", "homei", "Homer", "homes", "honor", "honra", "honro", "horda", "hores", "horst", "horta", "horts",
    "hoste", "hosts", "hotel", "Huang", "hulla", "humil", "humit", "humor", "humus", "hunes", "hurra", "husky", "hutus",
    // I 85
    "iacut", "iaies", "iaios", "iambe", "iarda", "ibera", "ibers", "icona", "ictus", "ideal", "idear", "ideat", "idees", "idoni", "Iemen", "ignar", "ignot",
    "igual", "ileal", "illes", "illot", "ilota", "Iluro", "imada", "imago", "imams", "imant", "imida", "imido", "imina", "imino", "imita", "imiti", "impar",
    "impia", "impiu", "impur", "indis", "indol", "indri", "Indus", "inert", "infix", "infla", "infli", "infon", "infra", "inici", "inics", "innat", "input",
    "insta", "inter", "inuit", "invar", "io-io", "iodar", "iodat", "iodit", "ioduc", "iodur", "iogui", "irada", "irats", "Irene", "iridi", "irona", "irosa",
    "irreg", "Isaac", "isard", "Iscle", "isidi", "islam", "isola", "Isona", "isqui", "istme", "iumes", "IUPAC", "iurac", "iurta", "Ivars", "ivori", "ixent",
    //J 59
    "jaces", "Jacob", "jaços", "jacta", "Jafre", "jagut", "jaies", "jaina", "jaios", "jamai", "James", "janer", "janot", "jaspi", "jauen", "Jaume", "jaure",
    "jeans", "jeien", "jerbu", "jeure", "jihad", "Joana", "joell", "joier", "joies", "joliu", "jonca", "jonça", "joncs", "jonis", "Jorba", "Jordi", "Josep",
    "Josif", "joule", "jover", "joves", "Judea", "judes", "jueus", "jueva", "jugal", "jugar", "jugat", "julep", "jumbo", "jumel", "junci", "junta", "junts",
    "jupes", "jurar", "jurat", "justa", "justs", "jutes", "jutge", "jutja",
    //K 26
    "Kafka", "kappa", "karma", "karri", "kauri", "kebab", "kediv", "kefie", "kefta", "kenaf", "kendo", "Kenya", "ketch", "khmer", "kiowa", "kiwis", "kombu",
    "komis", "kopek", "Krebs", "krill", "kufia", "kulak", "kurda", "kurds", "kuros",
    //L 169
    "label", "labor", "labre", "lacai", "lacar", "lacat", "lacre", "lacta", "lacti", "lagun", "laica", "laics", "lamut", "landa", "Lanka", "lapsa", "lapse",
    "largo", "larva", "lasar", "lassa", "lates", "lauan", "lauda", "laude", "laura", "laves", "laxar", "laxes", "laxos", "legal", "legat", "leles", "Lelio",
    "lelos", "lemes", "lemma", "Lenin", "lenta", "lento", "lents", "leone", "lepra", "leres", "leros", "lesbi", "lesiu", "letal", "Lewis", "liana", "liasa",
    "libar", "libel", "libis", "libra", "liceu", "licor", "lidar", "lidia", "Lieja", "light", "ligne", "ligni", "liles", "limba", "limbe", "limes", "limfa",
    "lirat", "lisar", "litre", "litxi", "liwan", "llaça", "llaca", "llacs", "llaga", "llama", "llamp", "llana", "llaor", "llapa", "llard", "llarg", "llars",
    "llast", "llata", "llavi", "llega", "lleig", "lleis", "llema", "lleme", "llenç", "lleny", "llepa", "llera", "Llers", "llest", "llets", "lleus", "lleva",
    "llibi", "lliça", "lliga", "llima", "llims", "lliri", "llisa", "llits", "lloar", "lloat", "lloba", "lloca", "llocs", "lloen", "lloeu", "lloga", "lloma",
    "lloms", "llong", "llops", "llora", "llord", "lloro", "llosa", "llosc", "lluça", "lluca", "lluco", "llucs", "lluer", "llufa", "lluir", "Llull", "llums",
    "lluna", "lluny", "lluor", "llurs", "llusc", "lobar", "lobat", "lobby", "lobel", "lobus", "local", "locus", "loden", "loess", "logos", "longa", "loqui",
    "lotus", "Lowen", "lucre", "lugre", "lumen", "lunar", "lunch", "lupes", "lupus", "Luter", "luvar", "luvis", "luxar", "luxes", "Luzon", "Lynch",
    //M 320
    "mabre", "maçam", "macar", "macat", "macer", "maces", "macip", "macla", "macos", "maços", "macro", "madur", "maell", "magma", "magna", "magne", "magra",
    "magre", "maies", "maina", "Maine", "maire", "major", "malai", "malar", "malat", "malda", "males", "malla", "malta", "maluc", "malva", "mamar", "mamat",
    "mamba", "mambo", "mamei", "mamen", "mameu", "mamut", "manar", "manat", "manca", "manco", "mancs", "Manel", "manen", "maner", "manes", "maneu", "mango",
    "mania", "manil", "manin", "manoi", "mansa", "mansi", "manso", "manta", "mants", "manxa", "manya", "maons", "maori", "mapar", "mapes", "maqui", "marca",
    "marcs", "Mare»", "marea", "marer", "mares", "marga", "marge", "maria", "marit", "maror", "marro", "marsi", "marta", "marxa", "marxi", "masec", "masia",
    "masos", "massa", "matar", "matat", "maten", "mater", "mates", "Mateu", "matxo", "maula", "maura", "Meats", "medes", "media", "medis", "melat", "melca",
    "meler", "melet", "melga", "melic", "melis", "melit", "melsa", "melva", "menar", "menat", "menen", "mener", "menes", "menga", "mengi", "mengo", "menja",
    "Menno", "menor", "mensa", "menta", "mente", "menti", "menut", "menys", "merda", "meres", "merla", "Meroe", "meron", "mesar", "mesos", "messa", "metec",
    "metes", "metge", "metil", "metol", "metre", "metro", "metxa", "meuca", "meulo", "meves", "mezzo", "miasi", "micet", "micra", "micro", "midar", "mides",
    "mieta", "migra", "migro", "miler", "Milet", "milla", "mimar", "mimen", "minar", "minat", "miner", "mines", "mingo", "minsa", "minse", "minso", "minut",
    "minva", "minve", "minvi", "miola", "miols", "mioma", "miosi", "mirar", "mirat", "miren", "mires", "Mireu", "mirin", "miris", "mirra", "missa", "misto",
    "mitan", "mitat", "mites", "mitil", "mitja", "mitra", "miula", "mixta", "mixts", "moble", "mocar", "modal", "model", "modes", "modus", "mofar", "mogol",
    "mogui", "mogul", "mogut", "moher", "moira", "moixa", "molal", "molar", "molen", "moler", "moles", "Molig", "molla", "molls", "molsa", "molta", "molts",
    "monel", "moner", "mones", "monge", "monja", "monjo", "monot", "monte", "monts", "monya", "monyo", "moral", "morat", "morbo", "morca", "moren", "morer",
    "mores", "moret", "moreu", "morfo", "moria", "morir", "morma", "moros", "morra", "morro", "morsa", "morse", "morta", "morts", "mosca", "mossa", "mosso",
    "mosta", "mosts", "motar", "motel", "motet", "motiu", "motor", "motos", "motxa", "motxo", "mouen", "moure", "movia", "mucus", "mudar", "mudat", "Muden",
    "mudes", "mufar", "mufla", "mugic", "mugir", "mugit", "muixa", "mujol", "mular", "mulat", "muler", "mules", "mulla", "mulli", "multa", "munda", "Munic",
    "munir", "munta", "Munto", "munts", "muong", "muoni", "mural", "murar", "murat", "murer", "mures", "Muret", "murga", "Murla", "murri", "murta", "musar",
    "musca", "muscs", "muser", "muses", "museu", "music", "musiu", "musli", "mussa", "musti", "mutar", "mutat", "mutis", "mutus",
    // N 156
    "nabab", "nabiu", "nabla", "nacra", "nacre", "nacta", "nacte", "Nadal", "nadar", "nadir", "nadiu", "nafil", "nafra", "nafta", "nahua", "naips", "naira",
    "Namib", "nanai", "nanes", "nanos", "nansa", "napar", "napea", "napel", "napes", "nariu", "narra", "nasal", "natal", "natiu", "natja", "Nauru", "nauta",
    "naval", "navei", "nebot", "nedar", "neden", "nefas", "negar", "negat", "negra", "negre", "negui", "negus", "neixi", "nemea", "nemeu", "nenes", "Nepal",
    "neper", "nepta", "neral", "neret", "Nereu", "nerol", "Nerva", "nervi", "netes", "neula", "neuma", "neura", "nevar", "nevat", "nevus", "nexes", "niada",
    "niala", "nials", "nicab", "Nicea", "nicol", "niell", "nient", "niera", "niers", "nigua", "nigul", "nihil", "nimbe", "nimfa", "nimis", "nines", "ninoi",
    "ninot", "ninou", "ninxo", "niobi", "nipis", "nirvi", "Nisan", "nitre", "nitro", "niuet", "nival", "no-jo", "Nobel", "noble", "nocar", "nocer", "noces",
    "nociu", "nodal", "nodes", "nodus", "noema", "noesi", "nogat", "noier", "noies", "Noiet", "noios", "nonat", "nonet", "nopal", "norai", "norma", "noses",
    "notar", "notat", "notes", "nouer", "noure", "noval", "noves", "novia", "novii", "nuada", "nuant", "nuats", "nubes", "nubuc", "Nucia", "nucli", "nuesa",
    "nueta", "nuets", "nugar", "nuler", "Nules", "numen", "nunci", "Nuoro", "nuosa", "nurag", "nusos", "nuvis", "nyafa", "nyapa", "nyepa", "nyera", "nyero",
    "nyiga", "nyoca", "nyora",
    //O 169
    "obacs", "obaga", "obeir", "obenc", "obert", "obesa", "oblat", "oblea", "oblia", "oblic", "oblig", "oblit", "obrar", "obrat", "obren", "obrer", "obres",
    "obria", "obrin", "obrir", "obsta", "ocapi", "Occam", "occir", "occit", "Oceja", "ocell", "ocels", "octal", "octau", "octes", "octet", "ocult", "ocupa",
    "ocupi", "odiar", "odrer", "odres", "ofega", "ofert", "ofesa", "ofici", "Ofidi", "ofita", "oghuz", "ogiva", "oiada", "oiats", "oiava", "oient", "oiosa",
    "okapi", "okupa", "ol·li", "oldre", "oleat", "oleic", "Olesa", "Oleta", "oliar", "olier", "Olimp", "oliva", "ollal", "ollam", "oller", "olles", "olors",
    "Olost", "Olvan", "ombra", "omeda", "omega", "omeia", "oment", "omesa", "omisa", "omple", "ompli", "onada", "oncle", "ondar", "ondat", "onder", "ondes",
    "Onega", "oneig", "oneja", "Onyar", "ooeci", "ooide", "ootip", "opaca", "opacs", "opera", "opiat", "opila", "opima", "opims", "opina", "oposa", "oposi",
    "optar", "oquer", "oques", "orada", "orals", "orant", "orari", "orats", "orbar", "orber", "orbes", "ordes", "ordir", "Ordis", "ordit", "ordre", "oreig",
    "orfes", "Orfeu", "orgia", "orgue", "orina", "orinc", "orins", "oriol", "orlar", "orles", "ornar", "ornat", "oromo", "orotx", "orris", "orsai", "orsar",
    "orsol", "ortiu", "orujo", "orval", "oscar", "oscat", "osmat", "osmol", "osona", "ossam", "ossat", "osset", "ossis", "ossos", "ossut", "ostra", "ouada",
    "ouats", "ouera", "ouija", "ovada", "ovals", "ovari", "ovats", "Ovidi", "ovina", "ovins", "oxalo", "oxida", "oxima", "oxina", "oxoni", "ozena",
    //P 418
    "Pablo", "pacte", "padda", "paduc", "paeix", "paera", "paers", "pagar", "pagat", "pagre", "pagui", "paies", "paios", "paire", "paisa", "palar", "palat",
    "palau", "paler", "pales", "palet", "palla", "palma", "palol", "palpa", "palpo", "palps", "pampa", "panda", "panel", "paner", "panes", "panet", "panna",
    "panot", "pansa", "panxa", "panys", "paona", "papal", "papar", "papat", "papau", "paper", "papes", "papir", "papus", "paput", "parar", "parat", "parca",
    "parcs", "paren", "pareo", "parer", "pares", "paret", "pareu", "paria", "parir", "parit", "parla", "parli", "parlo", "Parma", "parot", "parra", "parsi",
    "parts", "Party", "parva", "passa", "passe", "passi", "passo", "pasta", "patac", "patge", "patia", "Patim", "patir", "patis", "patit", "patri", "patum",
    "patxo", "paula", "Paulo", "pausa", "pauta", "pavia", "peany", "pebre", "pecar", "pecat", "peces", "peçol", "pedaç", "pedal", "pedat", "pedra", "pegar",
    "pegat", "pegot", "peier", "peiot", "peita", "pelar", "pelat", "peles", "pelfa", "pella", "pells", "pelta", "pelut", "penal", "penar", "penat", "penca",
    "penes", "Peneu", "pengi", "penic", "penis", "penja", "penna", "penol", "pensa", "pensi", "penso", "penya", "peona", "peons", "peple", "perca", "perdi",
    "perdo", "perer", "peres", "perir", "perit", "perla", "perna", "perns", "perol", "persa", "perxa", "perxe", "pesal", "pesar", "pesat", "pesca", "pesen",
    "Peseu", "pesos", "pesta", "pesto", "petar", "peter", "petge", "petit", "petja", "Petra", "petri", "pevet", "piano", "picar", "picat", "picor", "picot",
    "picte", "Piera", "pifre", "pigat", "pigot", "pigra", "pigre", "pilar", "Pilat", "piler", "piles", "pilla", "pillo", "pilot", "pimer", "pimes", "pinar",
    "pinça", "Pinet", "pinna", "pinso", "pinta", "pinte", "pinxo", "pinya", "piola", "pipar", "pipes", "pipil", "pipiu", "piqui", "piral", "piran", "pirar",
    "pirat", "pirop", "pisar", "pisos", "pispa", "pista", "pitam", "pitch", "pitea", "piter", "pitet", "piteu", "pitja", "pitof", "pitxi", "piuar", "piula",
    "pivet", "pivot", "pixar", "pixat", "pixis", "pixum", "pizza", "placa", "plaça", "plaer", "plaga", "plagi", "plana", "plans", "plant", "plany", "plapa",
    "plast", "plata", "plats", "plebs", "pleca", "plecs", "plega", "plena", "plens", "plepa", "pleta", "plets", "plexe", "plica", "plint", "ploma", "ploms",
    "plora", "plori", "plors", "pluig", "pluja", "poals", "pobla", "poble", "pobra", "pobre", "podal", "podar", "podem", "poden", "poder", "podeu", "podia",
    "poema", "poeta", "pogut", "poise", "polar", "polca", "polir", "polis", "polit", "polla", "polls", "Polop", "polpa", "polsa", "polze", "pomac", "pomar",
    "pomer", "pomes", "pompa", "ponen", "ponts", "ponxo", "popar", "poper", "poral", "porat", "porca", "porcs", "porga", "porno", "porra", "porro", "porta",
    "porti", "porto", "ports", "poruc", "porus", "porxe", "porxo", "posar", "posat", "posen", "poses", "poseu", "posin", "posis", "posta", "posts", "potes",
    "potos", "potra", "potro", "potto", "pouar", "pouat", "prada", "Praga", "prasi", "prats", "praxi", "prear", "preat", "precs", "predi", "prega", "premi",
    "prenc", "prens", "presa", "prest", "prets", "pretz", "preus", "previ", "prima", "prime", "Primo", "prims", "prior", "prisa", "priva", "proba", "probe",
    "proci", "proer", "proes", "prole", "prona", "prons", "propi", "prosa", "proti", "prova", "pruir", "Pruit", "pruna", "psalm", "psoes", "psora", "pteri",
    "ptosi", "puada", "puats", "pubil", "pubis", "Publi", "pucer", "puces", "Puçol", "puden", "pudir", "pudor", "puell", "pugen", "puges", "pugin", "pugna",
    "pugui", "puigs", "pujar", "pujat", "pujol", "pulca", "pulla", "punch", "punir", "punit", "punks", "punta", "punts", "punxa", "punxi", "punya", "punys",
    "pupil", "puput", "pures", "puret", "purga", "purna", "putam", "puter", "putes", "puzle",
    //Q 34
    "Qatar", "quall", "quals", "quant", "QUÀNT", "quark", "quars", "quart", "quasi", "qubba", "queca", "quecs", "queda", "quedi", "queia", "queix", "quema",
    "quera", "quest", "queta", "quets", "quetx", "quica", "quico", "quiet", "quilo", "quina", "quins", "quint", "Quios", "quist", "quita", "quiti", "quota",
    //R 303
    "rabec", "rabet", "rabut", "races", "radar", "radia", "radis", "radom", "raent", "rafal", "rafel", "rafet", "ragen", "rager", "raids", "raier", "raigs",
    "rails", "raima", "rajar", "rajol", "ralet", "ramal", "ramar", "ramat", "rames", "Ramon", "rampa", "ramut", "ranca", "ranci", "rancs", "randa", "Ranes",
    "rangs", "ranxo", "ranya", "raola", "raona", "raons", "raors", "rapaç", "rapar", "rapat", "raper", "rapir", "rapis", "rapte", "rares", "rasar", "rasca",
    "raser", "rases", "rasos", "raspa", "rassa", "ratar", "ratat", "ratel", "rater", "rates", "ratio", "ratxa", "rauca", "raure", "rauxa", "raval", "raves",
    "realç", "reals", "rebab", "rebat", "rebec", "rebel", "reben", "rebia", "rebin", "rebla", "reble", "rebot", "rebre", "rebuf", "rebut", "recam", "recar",
    "recau", "recel", "recer", "recot", "recta", "recte", "recto", "redir", "redit", "redol", "redox", "reena", "refer", "refet", "refia", "refio", "refon",
    "regal", "regar", "regat", "regel", "regia", "regir", "regit", "regla", "regle", "regna", "regne", "regor", "reial", "Reich", "reids", "reien", "reiet",
    "reina", "reixa", "relat", "relax", "rella", "remar", "remei", "remer", "remet", "remig", "remor", "remot", "remou", "remuc", "renal", "Renau", "renda",
    "renec", "renga", "rengs", "renoc", "renoi", "renom", "renou", "renta", "rento", "renya", "renys", "repeu", "repic", "repix", "repom", "repta", "repte",
    "resar", "resen", "resol", "resta", "resti", "resum", "reten", "retir", "retoc", "retop", "retor", "retre", "retro", "retut", "retxa", "reuma", "reviu",
    "riada", "Rialb", "riber", "ribes", "ribot", "ricar", "ricor", "riell", "rient", "riera", "rifar", "Rifem", "rifle", "rigor", "rigui", "rimar", "rimat",
    "rimen", "rimer", "rimes", "rioja", "riola", "riota", "riscs", "ritme", "ritus", "riuen", "riuet", "riure", "rival", "rivet", "ro-ro", "robar", "robat",
    "rober", "robes", "robot", "rocam", "rodal", "rodam", "rodar", "rodat", "rodeo", "roder", "rodes", "rodet", "rodis", "roent", "roger", "roges", "roget",
    "rogic", "rogle", "roigs", "roina", "Roine", "roins", "rojal", "rojor", "rolar", "roleu", "rolls", "roman", "rombe", "romer", "romes", "romeu", "rompi",
    "ronca", "roncs", "ronda", "ronsa", "ronso", "ronxo", "ronya", "ropit", "rosar", "rosat", "rosca", "rosec", "roser", "roses", "rossa", "rosta", "rosts",
    "rotar", "roter", "rotor", "rotse", "rough", "round", "roure", "roval", "roves", "ruana", "ruans", "ruble", "rubor", "rudes", "rueca", "ruecs", "ruera",
    "rufes", "Rugat", "rugbi", "rugia", "rugir", "rugit", "ruixa", "rulla", "rulls", "rulot", "rumba", "rumbs", "rumen", "rumia", "rumio", "rumor", "runam",
    "runar", "rundi", "runes", "rupia", "rupit", "rural", "Rurik", "rusca", "ruscs", "russa", "ruste", "rutes", "rutil", "ruvet",
    //S 344
    "sabea", "sabem", "saben", "saber", "sabeu", "sabia", "sabir", "sable", "saboc", "sabor", "sabre", "sabuc", "sabut", "sacar", "Sacco", "sacra", "sacre",
    "safir", "Safor", "safra", "sagaç", "sagal", "sagna", "Sagra", "Sahel", "saial", "saiga", "saigs", "Saint", "saiol", "sajol", "salaç", "salar", "salat",
    "salda", "saldo", "Salem", "salep", "saler", "sales", "salic", "salis", "salma", "salms", "salol", "Salou", "salpa", "salsa", "salta", "salti", "salts",
    "salut", "salva", "salve", "salvs", "salze", "samba", "samer", "samis", "Samni", "Samoa", "sampi", "sanar", "sanes", "Sanet", "sango", "sangs", "sansa",
    "santa", "sants", "Sanui", "sanya", "Saona", "sapes", "saqui", "sarau", "sarda", "sards", "sarga", "sarja", "sarna", "saros", "sarpa", "sarri", "sarsa",
    "sasor", "satem", "satiu", "saule", "sauna", "saupa", "saura", "saure", "sauri", "saurs", "savis", "scout", "Seana", "secor", "secta", "sedal", "sedan",
    "sedar", "sedec", "seder", "sedes", "seent", "sefes", "segar", "segat", "segla", "segle", "segon", "Segre", "segui", "segur", "seien", "seixa", "sella",
    "selva", "semal", "semar", "semat", "semen", "semes", "semis", "senal", "Senan", "senar", "senat", "senda", "senet", "senil", "sense", "sensu", "senti",
    "sento", "sents", "senya", "septe", "sequi", "serac", "seran", "serbi", "serem", "serer", "sereu", "serfs", "seria", "serps", "serra", "serva", "Servi",
    "servo", "sesta", "setes", "setet", "setge", "setra", "setze", "seuen", "seure", "sever", "seves", "sevir", "sexar", "sexes", "sexta", "sexts", "Shiga",
    "shoyu", "shunt", "siboc", "sicle", "sidra", "siena", "sigil", "sigla", "sigma", "signa", "signe", "sigui", "sikhs", "silil", "Silla", "silur", "silva",
    "Silvi", "Simat", "simis", "simun", "Sineu", "sinus", "sioux", "sipai", "sipar", "sirga", "sirte", "sisal", "sisca", "siset", "sisme", "sitar", "sitja",
    "sitra", "situa", "siulo", "sivan", "skarn", "Smith", "sobec", "sobra", "sobre", "sobri", "sobta", "sobte", "socam", "socis", "sodar", "sodat", "sofit",
    "sofra", "sofre", "sogar", "sogra", "sogre", "solaç", "solar", "solcs", "solda", "solen", "soler", "soles", "solet", "solfa", "solia", "soliu", "solod",
    "solos", "solta", "solti", "solts", "solut", "somat", "somer", "somes", "somia", "somic", "somni", "sompa", "sompo", "sonar", "sonat", "sonda", "sonen",
    "sonet", "sonia", "sonin", "sonor", "sonsa", "sonso", "sopar", "sopat", "sopem", "soper", "sopes", "sopor", "soral", "sorda", "sords", "sorge", "sorgo",
    "sorna", "sorns", "sorra", "sorts", "sorus", "sotal", "sotes", "sotil", "sotja", "souet", "spins", "staff", "stage", "statu", "Stein", "Stijl", "stilb",
    "stupa", "suabi", "suada", "suara", "suats", "suaus", "sucar", "sucat", "sucre", "Sudan", "sudet", "sueca", "suecs", "suera", "Suert", "Suess", "sueus",
    "sueva", "sufet", "sufix", "suids", "suite", "sulla", "sulls", "sumac", "sumar", "sumat", "sumen", "Sumer", "sumes", "sumin", "sumir", "summa", "summe",
    "sunna", "suomi", "suosa", "supra", "sural", "surar", "suren", "surer", "sures", "Suret", "suros", "surra", "surti", "surto", "surts", "sushi", "sutge",
    "sutja", "sutza", "sutze", "swing",
    //T 315
    "tabac", "tabal", "tabes", "Tabor", "tacar", "tacat", "tacte", "tafia", "tafoi", "tafur", "tagal", "taifa", "taina", "talar", "talec", "taler", "Tales",
    "talla", "talli", "talls", "talma", "talpa", "talps", "tampa", "tanca", "tancs", "tanda", "tanga", "tango", "tangs", "tanka", "tanta", "tants", "tanys",
    "tapar", "tapat", "tapen", "taper", "tapes", "tapet", "tapir", "tapit", "tarar", "tarat", "tarda", "tards", "tares", "Tarin", "tarja", "tarot", "tarsi",
    "tasca", "tassa", "tasta", "tasti", "tasts", "tatxa", "taula", "taure", "tauri", "taxar", "taxat", "taxes", "taxis", "tebeo", "tebes", "tecal", "tecla",
    "teids", "telar", "teler", "teles", "tella", "tells", "temes", "temia", "temor", "tempo", "temps", "temut", "tenaç", "tenca", "tenda", "tenen", "tenia",
    "tenim", "tenir", "tenis", "teniu", "tenor", "tensa", "tepui", "terbi", "terça", "teris", "terme", "terna", "terra", "terri", "tesar", "tesat", "tesen",
    "teses", "Teseu", "tesis", "tesla", "tesor", "tesos", "testa", "tests", "tetis", "teula", "teves", "tevet", "Texas", "texts", "theta", "tiama", "Tiana",
    "tiara", "tibar", "tibat", "Tibet", "tible", "tieta", "tiets", "tifus", "tiges", "tigre", "tijat", "timba", "timol", "Timor", "timus", "tines", "tinoi",
    "tinta", "tints", "tinya", "tiols", "tions", "tipes", "tiple", "tipus", "tirar", "tirat", "tiren", "tires", "tireu", "tirin", "tiris", "Tirol", "titar",
    "titet", "titit", "titot", "tmesi", "Tobol", "tocar", "tocat", "tocom", "tofes", "tofus", "tofut", "togat", "toies", "toixa", "tolil", "tolir", "tolit",
    "tolla", "tolls", "tolos", "tolta", "tolus", "tomar", "tomba", "tombi", "tombs", "tonal", "tondo", "tones", "Tonga", "tonus", "tonya", "topar", "topat",
    "topen", "topin", "toqui", "toral", "torba", "torbi", "torça", "torca", "tords", "torer", "tores", "toret", "toril", "tormo", "torna", "torni", "torno",
    "torns", "toros", "torra", "torre", "torta", "torts", "torus", "torxa", "tosca", "toscs", "Toses", "tossa", "total", "totes", "totxa", "totxo", "Tours",
    "toves", "tovor", "tovot", "traça", "traca", "traci", "Tracy", "Trade", "traga", "tragi", "trago", "trair", "trama", "trams", "tranc", "trapa", "trass",
    "trast", "trauc", "traus", "trava", "treia", "trema", "tremp", "trena", "trenc", "trens", "trepa", "tresc", "treta", "trets", "treva", "triac", "trial",
    "triar", "triat", "triba", "tribu", "tridu", "tries", "triga", "trill", "trina", "trinc", "tripa", "tripl", "trips", "trist", "trita", "triti", "trits",
    "trivi", "troba", "trobi", "trobo", "troca", "Troia", "trona", "tronc", "trons", "tropa", "trops", "trota", "truca", "trucs", "trufa", "truja", "trull",
    "trust", "tsade", "tsars", "tsuga", "tubal", "tubet", "tudar", "tudor", "tumor", "Tunis", "tupar", "turac", "turba", "turbo", "turca", "turcs", "turma",
    "tusca", "tuscs", "tusta", "tutor", "tutsi", "tutti", "twist", "txeca", "txecs",
    //U 60
    "ubics", "udola", "udols", "ufana", "ufans", "uigur", "uixer", "ulema", "ullal", "ullar", "ullat", "ullet", "ullot", "ulnar", "ultra", "umbra", "umbre",
    "umiac", "unari", "unces", "uneix", "ungir", "ungit", "ungla", "uniat", "unida", "unien", "unint", "units", "untar", "untat", "unten", "untet", "Unteu",
    "untor", "Urals", "urani", "urats", "urçol", "ureic", "ureid", "urent", "urgir", "Urmia", "urnes", "urpar", "urpes", "urpir", "usada", "usant", "usats",
    "usava", "uscoc", "usnea", "usual", "usura", "Utman", "Uttar", "uveal", "uzbek",
    //V 208
    "vacar", "vacum", "vagal", "vagar", "vagin", "vagis", "vagit", "vague", "vaira", "vaire", "vairs", "Vajol", "valac", "valem", "valen", "valer", "valga",
    "valgs", "valia", "valls", "valor", "valva", "vamba", "vanar", "vanes", "vanta", "vapor", "varal", "varar", "varec", "vareg", "Varen", "vares", "varia",
    "varis", "variu", "varva", "vasal", "vaser", "Vaset", "vasos", "vasta", "vasts", "vatua", "vauma", "veçar", "veces", "veçot", "vedar", "vedat", "vedes",
    "vedet", "vegeu", "vegin", "veiem", "veien", "veire", "vejam", "Velai", "velam", "velar", "velat", "veler", "veles", "vella", "vells", "veloç", "venal",
    "venda", "vende", "venen", "venes", "venia", "Venim", "venir", "veniu", "venja", "venta", "vents", "venus", "venut", "vepsa", "vepse", "veraç", "veral",
    "verat", "verba", "verbs", "verda", "verds", "veres", "verga", "verge", "verms", "verns", "verol", "verpa", "verra", "verro", "versa", "verso", "vesar",
    "vespa", "vessa", "vessi", "vesta", "vetar", "vetes", "veuen", "veure", "vexar", "viada", "vials", "viari", "viats", "vibra", "vibro", "vichy", "vicia",
    "vicis", "vides", "vidre", "Viena", "vigir", "vigor", "vilar", "viler", "viles", "vimen", "vimer", "vinca", "vinça", "viner", "vinet", "vinga", "vinil",
    "vinya", "viola", "vions", "viral", "virar", "virat", "vires", "viret", "virga", "virgo", "viril", "virot", "virus", "visar", "visat", "visca", "visir",
    "visiu", "visor", "vista", "vists", "vital", "vitel", "vitet", "vitol", "vitre", "vitri", "vitro", "vitxo", "viuda", "viudo", "viuen", "viure", "vivaç",
    "viver", "vives", "vivia", "vivim", "vivor", "Vixnu", "vocab", "vocal", "vodka", "vogar", "vogia", "vogir", "vogul", "volar", "volat", "volca", "volea",
    "volem", "volen", "voler", "voleu", "Volga", "volia", "Volos", "volsc", "volta", "volts", "volum", "volva", "voraç", "voral", "vorer", "vores", "votar",
    "votat", "votiu", "vuits", "vulva",
    //W 3
    "water", "watts", "weber",
    //X 126
    "xabec", "xacal", "xacar", "xacra", "Xacti", "xador", "xafar", "xaiar", "xaiat", "xaica", "xaier", "xaies", "xaiet", "xaira", "xaire", "xalar", "xalat",
    "xales", "xalet", "xalma", "xaloc", "xaman", "xamar", "xamat", "xamba", "xamor", "xanca", "xanxa", "xapar", "xapat", "xapes", "xapot", "xaria", "xarol",
    "xarop", "xarot", "xarpa", "xarts", "xaruc", "xarxa", "xates", "xatos", "xauta", "xauxa", "xaval", "xavos", "xefla", "xeire", "xeixa", "xelet", "xemic",
    "xerec", "xeres", "xeric", "xerif", "xerla", "xerpa", "xerra", "xerri", "Xerta", "xevat", "xhosa", "xibec", "xibiu", "xibuc", "xicle", "xicol", "xicon",
    "xicot", "xicra", "xifla", "xifra", "xilla", "xinar", "xinat", "xines", "xinet", "Xingu", "xintz", "xinxa", "Xipre", "xiric", "xiroi", "xisca", "xitar",
    "xiula", "xocar", "xocat", "Xodos", "xofer", "xolla", "xopar", "xopat", "xopes", "xopet", "xorca", "xorcs", "xoric", "xoriç", "xorla", "xorra", "xoses",
    "xotis", "xotra", "xotro", "xotxa", "xotxo", "xubec", "xucla", "xueta", "xufar", "xufer", "xufla", "xuixo", "xulla", "xumar", "xumet", "xumin", "xunga",
    "xurla", "xurma", "xurra", "xurro", "xusma", "xutar", "xutat",
    //Y
    
    //Z 16
    "zaire", "zajal", "zebra", "zeids", "zelar", "zenit", "zeros", "zigot", "zloty", "zoeci", "zombi", "zonal", "zonat", "zones", "zulus", "Zuric",
    ]
    
    const WORD_LENGTH = 5
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
    