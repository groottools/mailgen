// Names data for email generation
const firstnames = [
    "aaron", "abbas", "abdul", "abeba", "abedi", "abeer", "abena", "abhai", "abida", "abiel",
    "abiga", "abiko", "abira", "abish", "abner", "abram", "abrar", "absol", "abtin", "acala",
    "achal", "achim", "acira", "adael", "adair", "adalb", "adam", "adama", "adamo", "adana",
    "adara", "adash", "adawa", "addis", "adela", "adele", "adeli", "adell", "adena", "adeol",
    "adesh", "adger", "adhik", "adiba", "adiel", "adila", "adina", "adira", "aditi", "adiva",
    "adiya", "adler", "adman", "admin", "adnan", "adolf", "adoma", "adon", "adore", "adrea",
    "adria", "adrik", "adwin", "aedan", "aegis", "aella", "aerin", "aeron", "afari", "afgan",
    "afifa", "afnan", "afrah", "afric", "afrin", "afsar", "afton", "agapi", "agata", "agath",
    "agave", "agere", "aggie", "aghan", "agila", "agim", "agios", "agmal", "agnar", "agnes",
    "agnus", "agron", "agudo", "agung", "agust", "ahana", "ahava", "ahdia", "ahmed", "ahmet",
    "ahmir", "ahsan", "ahura", "aidan", "aidee", "aiden", "aidin", "aidyn", "aieda", "aiham",
    "aijah", "aijon", "aikla", "aikou", "ailee", "ailey", "ailsa", "aimee", "aimon", "ainoa",
    "ainur", "airam", "airen", "airic", "airon", "aisar", "aisha", "aishe", "aisla", "aissa",
    "aisun", "aitah", "aitor", "aivar", "aiven", "aizah", "aizel", "ajahn", "ajani", "ajara",
    "ajaya", "ajdin", "ajeet", "ajian", "ajith", "ajmal", "ajmer", "ajmol", "ajoke", "ajona",
    "ajuba", "ajuna", "ajwan", "akaki", "akala", "akane", "akash", "akbar", "akeel", "akeem",
    "akemi", "akera", "akhil", "akiba", "akice", "akiko", "akila", "akima", "akins", "akira",
    "akiva", "aklil", "akmal", "akmol", "akoni", "akram", "aksel", "aktan", "aktay", "akuch",
    "akule", "akuma", "akund", "alaba", "alain", "alana", "alani", "alara", "alard", "alari",
    "alart", "alash", "alban", "alber", "albin", "albio", "albon", "albor", "aldea", "alden",
    "alder", "aldis", "aldon", "aldus", "alean", "aleas", "aleba", "aleco", "aleda", "aleem",
    "alefe", "alega", "aleia", "aleja", "alejo", "aleka", "alena", "alene", "aleph", "alera",
    "alert", "alesa", "aleta", "aleth", "alexa", "alexe", "alexi", "alexo", "aleya", "alfah",
    "alfie", "alfon", "alger", "algis", "algon", "algun", "alhan", "alhar", "alhem", "alher",
    "alian", "alica", "alice", "alida", "alief", "alien", "alier", "alies", "alieu", "alifu",
    "aligh", "alija", "alika", "aliks", "alima", "alina", "aline", "alins", "aliou", "alira",
    "alisa", "alise", "alish", "aliso", "aliss", "alita", "alite", "aliun", "aliva", "aliye",
    "aliza", "alize", "aljan", "alkar", "alked", "alken", "alkes", "alkim", "alkin", "alkis",
    "allan", "allar", "allay", "allea", "allen", "aller", "alles", "allex", "alley", "allia",
    "allie", "allin", "allis", "allix", "alloa", "allon", "alloy", "allun", "allya", "allyn",
    "almad", "almah", "alman", "almar", "almas", "almaz", "almen", "almer", "almet", "almik",
    "almin", "almis", "almon", "almut", "alnur", "aloba", "alois", "aloma", "alona", "alone",
    "aloni", "aloof", "alora", "aloud", "aloys", "alpay", "alper", "alpha", "alphe", "alpin",
    "alred", "alric", "alsie", "alson", "altan", "altar", "altas", "altay", "alten", "alter",
    "altes", "altex", "altie", "altin", "alton", "altug", "altun", "altur", "aluba", "aluca",
    "aluco", "alula", "alumi", "aluna", "alura", "alvan", "alvar", "alven", "alver", "alves",
    "alvin", "alvis", "alwan", "alwin", "alwyn", "alyah", "alyce", "alyda", "alyna", "alyns",
    "alysa", "alyse", "alysh", "alyss", "alzar", "alzir", "amaal", "amaan", "amada", "amade",
    "amado", "amaia", "amain", "amair", "amaja", "amaka", "amala", "amale", "amali", "amana",
    "amand", "amane", "amani", "amans", "amara", "amare", "amari", "amark", "amaro", "amaru",
    "amary", "amasa", "amase", "amata", "amate", "amaya", "amaze", "ambah", "ambar", "amber",
    "ambra", "ambre", "ambro", "ambus", "ameda", "amedh", "ameel", "ameen", "ameer", "amega",
    "ameia", "amela", "amele", "ameli", "amell", "amena", "amend", "amene", "amens", "amery",
    "amess", "ameta", "ameth", "ameur", "ameva", "amher", "amias", "amice", "amida", "amide",
    "amids", "amiel", "amier", "amies", "amigo", "amily", "amina", "amine", "amir", "amira",
    "amiri", "amiry", "amish", "amiss", "amita", "amite", "amity", "amiva", "amlak", "amman",
    "ammar", "ammon", "ammos", "amnah", "amnon", "amoch", "amode", "amogy", "amola", "among",
    "amoni", "amora", "amore", "amori", "amory", "amour", "ampah", "amped", "amper", "ample",
    "amply", "amram", "amren", "amrik", "amrit", "amron", "amrou", "amrus", "amsal", "amsar",
    "amser", "amsha", "amtul", "amuda", "amuel", "amuka", "amula", "amule", "amuna", "amura",
    "amuse", "amway", "amwyn", "amyah", "amyas", "amyra", "anaba", "anahi", "anaia", "anais",
    "anaka", "anali", "anand", "anant", "anara", "anari", "anass", "anast", "anata", "anath",
    "anaya", "anbar", "anbur", "ancah", "ancel", "ancha", "anchi", "ancor", "andel", "anden",
    "ander", "andes", "andie", "andor", "andra", "andre", "andri", "andru", "andry", "anees",
    "aneka", "anele", "aneli", "anemi", "anepu", "aneri", "anesa", "aneta", "anete", "aneth",
    "anfal", "angel", "anger", "angie", "angla", "angle", "anglo", "angry", "angus", "anguy",
    "anhar", "anhel", "anhur", "aniar", "anick", "anida", "anieb", "anieh", "aniel", "anien",
    "anies", "aniga", "anika", "anila", "anima", "anime", "anina", "anira", "anisa", "anise",
    "anish", "anita", "anite", "anith", "anitra", "aniva", "aniya", "anjar", "anjel", "anjie",
    "anjla", "anjli", "anjum", "ankan", "ankar", "anker", "ankit", "ankle", "ankur", "anlay",
    "anlie", "anlon", "anmol", "annan", "annas", "annay", "annea", "annel", "annes", "annet",
    "annie", "annik", "annis", "annma", "annur", "annya", "anoch", "anoda", "anoel", "anoki",
    "anola", "anoma", "anona", "anone", "anora", "anosh", "anouk", "anovi", "anpao", "anpen",
    "anran", "ansel", "anser", "ansha", "anshu", "ansir", "anson", "ansul", "ansur", "antae",
    "antal", "antar", "antea", "antes", "anteu", "anthe", "anthi", "antho", "antia", "antic",
    "antie", "antim", "antin", "antis", "antje", "antom", "anton", "antra", "entre", "antri",
    "antum", "antun", "anuar", "anuba", "anuch", "anuel", "anuga", "anuka", "anula", "anuma",
    "anura", "anush", "anvar", "anwar", "anway", "anwen", "anwin", "anwyn", "anyah", "anyas",
    "anzac", "anzar", "aodan", "aoife", "aonon", "aoron", "aosta", "aoten", "apama", "apara",
    "apart", "apate", "apave", "apear", "apela", "apelo", "apeni", "apert", "aphex", "aphra",
    "apice", "apiku", "apink", "apion", "apira", "apito", "aplar", "apled", "apley", "apnar",
    "apoda", "apolo", "aport", "appal", "appan", "appar", "appel", "appen", "apper", "appia",
    "appie", "apple", "apply", "aprah", "april", "apryl", "apsah", "apsel", "aptar", "aptly",
    "apura", "apush", "aquan", "aquar", "aquas", "aquat", "aquib", "aquil", "araah", "araba",
    "arabi", "arabo", "arace", "arach", "arada", "aradi", "arado", "araez", "arafh", "araga",
    "arago", "araha", "arahy", "araia", "araig", "araik", "arail", "arain", "arair", "araja",
    "araka", "arakl", "arala", "arald", "arama", "arami", "aramo", "arana", "arand", "arane",
    "arang", "arani", "arann", "arano", "arant", "araph", "arara", "arash", "arasi", "arass",
    "arata", "arate", "arath", "arati", "aratt", "araty", "arava", "arave", "aravi", "arawa",
    "arawb", "araxi", "araya", "arayo", "arbab", "arban", "arbed", "arbel", "arben", "arber",
    "arbie", "arbin", "arbor", "arbri", "arbul", "arbus", "arcad", "arcan", "arcar", "arcas",
    "arcel", "archa", "arche", "archi", "arcid", "arcie", "arcis", "arcon", "arcos", "arcus",
    "ardal", "ardam", "ardan", "ardea", "ardel", "arden", "arder", "ardes", "ardie", "ardin",
    "ardis", "ardon", "ardor", "ardra", "ardun", "ardyn", "areah", "areaj", "areal", "arean",
    "areds", "areef", "areej", "areek", "areel", "areem", "areen", "areez", "arefi", "arego",
    "areia", "areib", "areid", "areig", "areij", "areik", "areil", "arein", "areip", "areiq",
    "areir", "areis", "areit", "areiv", "areiz", "areja", "areje", "arejh", "areka", "areki",
    "arela", "arele", "areli", "arell", "arelo", "arema", "areme", "aremi", "aremo", "arena",
    "arend", "arene", "areng", "areni", "arenj", "arenn", "areno", "arent", "areop", "arepa",
    "arepe", "areph", "arepi", "arepo", "arepp", "arepr", "areps", "arept", "arepu", "arepv",
    "arepw", "areqa", "areqe", "areqi", "areqo", "arequ", "arera", "arere", "areri", "arero",
    "areru", "arery", "aresa", "arese", "aresi", "areso", "aresu", "areta", "arete", "areth",
    "areti", "areto", "aretu", "arety", "areua", "areub", "areuc", "areud", "areue", "areuf",
    "areug", "areuh", "areui", "areuj", "areuk", "areul", "areum", "areun", "areuo", "areup",
    "areuq", "areur", "areus", "areut", "areuv", "areuw", "areux", "areuy", "areuz", "areva",
    "areve", "arevi", "arevo", "arevu", "arevy", "arewa", "arewe", "arewi", "arewo", "arewy",
    "arexa", "arexe", "arexi", "arexo", "arexy", "areya", "areye", "areyi", "areyo", "areyu",
    "areyy", "areza", "areze", "arezi", "arezo", "arezu", "arezy", "arfan", "arfar", "arfon",
    "argan", "argar", "argel", "argen", "arger", "arges", "argha", "argie", "argil", "argin",
    "argis", "argol", "argon", "argos", "argot", "argus", "argyn", "arham", "arhan", "arhar",
    "arhat", "arhel", "arhen", "arher", "arhie", "arhin", "arhon", "arhor", "arhus", "arhut",
    "ariah", "arial", "arian", "arias", "ariba", "arica", "arich", "arick", "arico", "aricy",
    "arida", "aride", "aridi", "ario", "aridy", "arieb", "ariec", "aried", "ariee", "arief",
    "arieg", "arieh", "ariei", "ariej", "ariek", "ariel", "ariem", "arien", "arieo", "ariep",
    "arieq", "arier", "aries", "ariet", "arieu", "ariev", "ariew", "ariex", "ariey", "ariez",
    "ariga", "arige", "arigi", "arigo", "arigu", "arigy", "ariha", "arihe", "arihi", "ariho",
    "arihu", "arihy", "ariib", "ariic", "ariid", "ariie", "ariif", "ariig", "ariih", "ariii",
    "ariij", "ariik", "ariil", "ariim", "ariin", "ariio", "ariip", "ariiq", "ariir", "ariis",
    "ariit", "ariiu", "ariiv", "ariiw", "ariix", "ariiy", "ariiz", "arija", "arije", "ariji",
    "arijo", "ariju", "arijs", "ariky", "arilj", "arima", "arime", "arimi", "arimo", "arimu",
    "arimy", "arina", "arine", "arini", "arino", "arinu", "ariny", "arioa", "ariob", "arioc",
    "ariod", "arioe", "ariof", "ariog", "arioh", "arioi", "arioj", "ariok", "ariol", "ariom",
    "arion", "arioo", "ariop", "arioq", "arior", "arios", "ariot", "ariou", "ariov", "ariow",
    "ariox", "arioy", "arioz", "aripa", "aripe", "aripi", "aripo", "aripu", "aripy", "ariqa",
    "ariqe", "ariqi", "ariqo", "ariqu", "ariqy", "arira", "arire", "ariri", "ariro", "ariru",
    "ariry", "arisa", "arise", "arish", "arisi", "ariso", "arist", "arisu", "arisy", "arita",
    "arite", "arith", "ariti", "arito", "aritu", "arity", "ariua", "ariub", "ariuc", "ariud",
    "ariue", "ariuf", "ariug", "ariuh", "ariui", "ariuj", "ariuk", "ariul", "arium", "ariun",
    "ariuo", "ariup", "ariuq", "ariur", "arius", "ariut", "ariuv", "ariuw", "ariux", "ariuy",
    "ariuz", "ariva", "arive", "arivi", "arivo", "arivu", "arivy", "ariwa", "ariwe", "ariwi",
    "ariwo", "ariwy", "arixa", "arixe", "arixi", "arixo", "arixy", "ariya", "ariye", "ariyi",
    "ariyo", "ariyu", "ariyy", "ariza", "arize", "arizi", "arizo", "arizu", "arizy", "arjan",
    "arjar", "arjas", "arjay", "arjen", "arjey", "arjin", "arjon", "arjun", "arjyn", "arkad",
    "arkan", "arkar", "arkas", "arkay", "arkel", "arken", "arker", "arkes", "arket", "arkey",
    "arkha", "arkhe", "arkhi", "arkho", "arkhu", "arkhy", "arkid", "arkie", "arkin", "arkis",
    "arkit", "arkiv", "arkle", "arkos", "arkus", "arkyn", "arlan", "arlar", "arlas", "arlay",
    "arled", "arlee", "arlek", "arlen", "arler", "arles", "arlet", "arley", "arlia", "arlib",
    "arlic", "arlid", "arlie", "arlif", "arlig", "arlih", "arlii", "arlij", "arlik", "arlil",
    "arlim", "arlin", "arlio", "arlip", "arliq", "arlir", "arlis", "arlit", "arliu", "arliv",
    "arliw", "arlix", "arliy", "arliz", "arloa", "arlob", "arloc", "arlod", "arloe", "arlof",
    "arlog", "arloh", "arloi", "arloj", "arlok", "arlol", "arlom", "arlon", "arloo", "arlop",
    "arloq", "arlor", "arlos", "arlot", "arlou", "arlov", "arlow", "arlox", "arloy", "arloz",
    "arlua", "arlub", "arluc", "arlud", "arlue", "arluf", "arlug", "arluh", "arlui", "arluj",
    "arluk", "arlul", "arlum", "arlun", "arluo", "arlup", "arluq", "arlur", "arlus", "arlut",
    "arluv", "arluw", "arlux", "arluy", "arluz", "arlya", "arlye", "arlyi", "arlyo", "arlyu",
    "arlyy", "armad", "arman", "armar", "armas", "armay", "armed", "armel", "armen", "armer",
    "armes", "armet", "armey", "armie", "armin", "armis", "armit", "armon", "armor", "armoy",
    "armyn", "batai", "batal", "batan", "batar", "batas", "batch", "bated", "batel", "baten",
    "bater", "bates", "bathe", "baths", "bathy", "batie", "batik", "batin", "batis", "batka",
    "batko", "baton", "batos", "batta", "batte", "battu", "batty", "batuk", "batul", "batum",
    "batus", "bauch", "baudi", "bauds", "bauer", "bauhs", "bauks", "baulk", "bauls", "baume",
    "baums", "bauns", "baure", "baurs", "bause", "bavan", "bavar", "bavas", "bavay", "bavel",
    "baven", "baver", "baves", "bavid", "bavin", "bavon", "bavun", "bawad", "bawan", "bawar",
    "bawas", "bawds", "bawed", "bawel", "bawer", "bawks", "bawls", "bawns", "bawrs", "baxer",
    "baxis", "bayas", "bayat", "bayed", "bayel", "bayen", "bayer", "bayes", "bayeu", "bayez",
    "bayly", "bayou", "bayse", "bayto", "bazah", "bazan", "bazar", "bazas", "bazed", "bazel",
    "bazen", "bazer", "bazes", "bazie", "bazil", "bazin", "bazis", "bazon", "bazoo", "bazos",
    "bazuk", "bazur", "bazus", "beach", "beads", "beady", "beaks", "beaky", "beale", "beall",
    "beals", "beams", "beamy", "beane", "beans", "beard", "beare", "bears", "beast", "beath",
    "beats", "beaty", "beaus", "beaut", "beaux", "bebel", "beber", "bebes", "bebop", "becka",
    "becke", "becks", "becky", "bedad", "bedal", "bedam", "bedan", "bedar", "bedas", "bedax",
    "bedde", "beddy", "beded", "bedel", "beden", "beder", "bedes", "bedet", "bedew", "bedge",
    "bedie", "bedin", "bedis", "bedon", "bedor", "bedos", "bedow", "bedue", "beduk", "bedum",
    "bedun", "bedur", "bedus", "beeah", "beech", "beede", "beeds", "beedy", "beefs", "beefy",
    "beego", "beeks", "beels", "beems", "beene", "beens", "beeps", "beers", "beery", "beets",
    "befal", "befel", "beget", "begga", "begin", "begot", "begud", "begum", "begun", "behad",
    "behan", "behar", "behat", "behav", "behen", "behid", "behin", "behir", "behnz", "behos",
    "beira", "bejam", "bejan", "bejar", "bejas", "bejay", "bejel", "bejen", "bejer", "bejes",
    "bejey", "bejig", "bejin", "bejis", "bejix", "bekaa", "bekah", "bekal", "bekan", "bekar",
    "bekas", "bekay", "bekaz", "beked", "bekee", "bekel", "beken", "beker", "bekes", "beket",
    "bekey", "bekha", "bekhe", "bekhi", "bekho", "bekhu", "bekhy", "bekid", "bekie", "bekim",
    "bekin", "bekir", "bekis", "bekit", "bekka", "bekke", "bekki", "bekko", "bekky", "bekla",
    "bekle", "bekli", "beklo", "beklu", "bekly", "bekma", "bekme", "bekmi", "bekmo", "bekmu",
    "bekmy", "bekna", "bekne", "bekni", "bekno", "beknu", "bekny", "bekoa", "bekoe", "bekoi",
    "bekoo", "bekou", "bekoy", "bekpa", "bekpe", "bekpi", "bekpo", "bekpu", "bekpy", "bekra",
    "bekre", "bekri", "bekro", "bekru", "bekry", "beksa", "bekse", "beksi", "bekso", "beksu",
    "beksy", "bekta", "bekte", "bekti", "bekto", "bektu", "bekty", "bekua", "bekue", "bekui",
    "bekuo", "bekuu", "bekuy", "bekva", "bekve", "bekvi", "bekvo", "bekvu", "bekvy", "bekwa",
    "bekwe", "bekwi", "bekwo", "bekwy", "bekxa", "bekxe", "bekxi", "bekxo", "bekxy", "bekya",
    "bekye", "bekyi", "bekyo", "bekyu", "bekyy", "bekza", "bekze", "bekzi", "bekzo", "bekzu",
    "bekzy", "belah", "belam", "belan", "belar", "belas", "belay", "belaz", "belda", "belde",
    "beldi", "beldo", "beldu", "beldy", "beled", "belee", "belef", "beleg", "beleh", "belei",
    "belej", "belek", "belel", "belem", "belen", "beleo", "belep", "beleq", "beler", "beles",
    "belet", "beleu", "belev", "belew", "belex", "beley", "belez", "belfa", "belfe", "belfi",
    "belfo", "belfu", "belfy", "belga", "belge", "belgi", "belgo", "belgu", "belgy", "belha",
    "belhe", "belhi", "belho", "belhu", "belhy", "belia", "belib", "belic", "belid", "belie",
    "belif", "belig", "belih", "belii", "belij", "belik", "belil", "belim", "belin", "belio",
    "belip", "beliq", "belir", "belis", "belit", "beliu", "beliv", "beliw", "belix", "beliy",
    "beliz", "belja", "belje", "belji", "beljo", "belju", "belka", "belke", "belki", "belko",
    "belku", "belky", "bella", "belle", "belli", "bello", "bells", "belly", "belma", "belme",
    "belmi", "belmo", "belmu", "belmy", "belna", "belne", "belni", "belno", "belnu", "belny",
    "beloa", "belob", "beloc", "belod", "beloe", "belof", "belog", "beloh", "beloi", "beloj",
    "belok", "belol", "belom", "belon", "beloo", "belop", "beloq", "belor", "belos", "belot",
    "belou", "belov", "below", "belox", "beloy", "beloz", "belpa", "belpe", "belpi", "belpo",
    "belpu", "belpy", "belqa", "belqe", "belqi", "belqo", "belqu", "belqy", "belra", "belre",
    "belri", "belro", "belru", "belry", "belsa", "belse", "belsi", "belso", "belsu", "belsy",
    "belta", "belte", "belti", "belto", "belts", "beltu", "belty", "belua", "belub", "beluc",
    "belud", "belue", "beluf", "belug", "beluh", "belui", "caesar", "caiden", "caitlin", "caleb",
    "calvin"
];

const lastNames = [
    "smith", "johnson", "williams", "brown", "jones", "miller", "davis", "garcia", "rodriguez", "wilson",
    "martinez", "anderson", "taylor", "thomas", "hernandez", "moore", "martin", "jackson", "thompson", "white",
    "lopez", "lee", "gonzalez", "harris", "clark", "lewis", "robinson", "walker", "perez", "hall",
    "young", "allen", "sanchez", "wright", "king", "scott", "green", "baker", "adams", "nelson",
    "hill", "ramirez", "campbell", "mitchell", "roberts", "carter", "phillips", "evans", "turner", "torres",
    "parker", "collins", "edwards", "stewart", "flores", "morris", "nguyen", "murphy", "rivera", "cook",
    "rogers", "morgan", "peterson", "cooper", "reed", "bailey", "bell", "gomez", "kelly", "howard",
    "ward", "cox", "diaz", "richardson", "wood", "watson", "brooks", "bennett", "gray", "james",
    "reyes", "cruz", "hughes", "price", "myers", "long", "foster", "sanders", "ross", "morales",
    "powell", "sullivan", "russell", "ortiz", "jenkins", "gutierrez", "perry", "butler", "barnes", "fisher",
    "henderson", "coleman", "simmons", "patterson", "jordan", "reynolds", "hamilton", "graham", "kim", "gonzales",
    "alexander", "ramos", "wallace", "griffin", "west", "cole", "hayes", "chavez", "gibson", "bryant",
    "ellis", "stevens", "murray", "ford", "marshall", "owens", "mcdonald", "harrison", "ruiz", "kennedy",
    "wells", "alvarez", "woods", "mendoza", "castillo", "olson", "webster", "washington", "tucker", "freeman",
    "burns", "henry", "vasquez", "snyder", "simpson", "crawford", "jimenez", "porter", "mason", "shaw",
    "gordon", "wagner", "hunter", "romero", "hicks", "dixon", "hunt", "palmer", "robertson", "black",
    "holmes", "stone", "meyer", "boyd", "mills", "warren", "fox", "rose", "rice", "moreno",
    "schmidt", "patel", "ferguson", "nichols", "herrera", "medina", "ryan", "fernandez", "weaver", "daniels",
    "stephens", "gardner", "payne", "kelley", "dunn", "pierce", "arnold", "tran", "spencer", "peters",
    "hawkins", "grant", "hansen", "castro", "hoffman", "hart", "elliott", "cunningham", "knight", "bradley",
    "carroll", "hudson", "duncan", "armstrong", "berry", "andrews", "johnston", "ray", "lane", "riley",
    "carpenter", "perkins", "aguilar", "silva", "richards", "willis", "matthews", "chapman", "lawrence", "garza",
    "vargas", "watkins", "wheeler", "larson", "carlson", "harper", "george", "greene", "burke", "guzman",
    "morrison", "munoz", "jacobs", "obrien", "lawson", "franklin", "lynch", "bishop", "carr", "salazar",
    "austin", "mendez", "gilbert", "jensen", "williamson", "montgomery", "harvey", "oliver", "howell", "dean",
    "hanson", "weber", "garrett", "sims", "burton", "fuller", "soto", "mccoy", "welch", "chen",
    "schultz", "walters", "reid", "fields", "walsh", "little", "fowler", "bowman", "davidson", "may",
    "day", "schneider", "newman", "brewer", "lucas", "holland", "wong", "banks", "santos", "curtis"
];

// DOM Elements
const domainInput = document.getElementById('domain');
const emailLengthInput = document.getElementById('emailLength');
const digitCountInput = document.getElementById('digitCount');
const emailCountInput = document.getElementById('emailCount');
const generateBtn = document.getElementById('generateBtn');
const emailList = document.getElementById('emailList');
const copyAllBtn = document.getElementById('copyAllBtn');
const clearBtn = document.getElementById('clearBtn');
const exportBtn = document.getElementById('exportBtn');
const toast = document.getElementById('toast');
const customNamesGroup = document.getElementById('customNamesGroup');
const customNamesList = document.getElementById('customNamesList');
const toggleAdvanced = document.getElementById('toggleAdvanced');
const advancedOptions = document.querySelector('.advanced-options');
const exportFormat = document.getElementById('exportFormat');
const defaultNamesRadio = document.getElementById('defaultNames');
const customNamesRadio = document.getElementById('customNames');
const settingsModal = document.getElementById('settingsModal');
const openSettingsBtn = document.getElementById('openSettings');
const closeSettingsBtn = document.querySelector('.close-settings');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const clearSettingsBtn = document.getElementById('clearSettingsBtn');

// Store generated emails
let generatedEmails = new Set();

// Constants for storage
const SETTINGS_STORAGE_KEY = 'emailGeneratorSettings';
const EMAIL_HISTORY_KEY = 'emailGeneratorHistory';
const MAX_HISTORY_SIZE = 50000; // Maximum number of emails to store in history

// Load email history from localStorage
let emailHistory = new Set(JSON.parse(localStorage.getItem(EMAIL_HISTORY_KEY) || '[]'));

// Function to open settings modal
function openSettings() {
    settingsModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close settings modal
function closeSettings() {
    settingsModal.classList.remove('show');
    document.body.style.overflow = '';
}

// Function to save current settings
function saveSettings() {
    const settings = {
        domain: domainInput.value,
        emailLength: emailLengthInput.value,
        digitCount: digitCountInput.value,
        emailCount: emailCountInput.value,
        exportFormat: exportFormat.value,
        nameSource: defaultNamesRadio.checked ? 'default' : 'custom',
        customNames: customNamesList.value,
        advancedOptionsVisible: advancedOptions.style.display === 'block'
    };
    
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    showToast('Settings saved successfully!');
    closeSettings(); // Close the modal after saving
}

// Function to load saved settings
function loadSettings() {
    const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        domainInput.value = settings.domain || '';
        emailLengthInput.value = settings.emailLength || '12';
        digitCountInput.value = settings.digitCount || '3';
        emailCountInput.value = settings.emailCount || '5';
        exportFormat.value = settings.exportFormat || 'text';
        
        if (settings.nameSource === 'custom') {
            customNamesRadio.checked = true;
            customNamesGroup.style.display = 'block';
            customNamesList.value = settings.customNames || '';
        } else {
            defaultNamesRadio.checked = true;
            customNamesGroup.style.display = 'none';
        }
        
        if (settings.advancedOptionsVisible) {
            advancedOptions.style.display = 'block';
            toggleAdvanced.classList.add('active');
        }
    }
}

// Function to add email to history
function addToEmailHistory(email) {
    emailHistory.add(email);
    // Convert Set to Array for storage
    const historyArray = Array.from(emailHistory);
    // If history exceeds max size, remove oldest entries
    if (historyArray.length > MAX_HISTORY_SIZE) {
        historyArray.splice(0, historyArray.length - MAX_HISTORY_SIZE);
    }
    localStorage.setItem(EMAIL_HISTORY_KEY, JSON.stringify(historyArray));
}

// Function to clear email history
function clearEmailHistory() {
    emailHistory.clear();
    localStorage.removeItem(EMAIL_HISTORY_KEY);
    showToast('Email history cleared');
}

// Update clear settings function to include email history
function clearSettings() {
    localStorage.removeItem(SETTINGS_STORAGE_KEY);
    localStorage.removeItem(EMAIL_HISTORY_KEY);
    emailHistory.clear();
    location.reload();
}

// Event Listeners for settings modal
openSettingsBtn.addEventListener('click', openSettings);
closeSettingsBtn.addEventListener('click', closeSettings);
saveSettingsBtn.addEventListener('click', saveSettings);
clearSettingsBtn.addEventListener('click', clearSettings);

// Close modal when clicking outside
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        closeSettings();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && settingsModal.classList.contains('show')) {
        closeSettings();
    }
});

// Event Listeners for new features
document.querySelector('input[name="nameSource"]').addEventListener('change', (e) => {
    customNamesGroup.style.display = e.target.value === 'custom' ? 'block' : 'none';
});

toggleAdvanced.addEventListener('click', () => {
    advancedOptions.style.display = advancedOptions.style.display === 'none' ? 'block' : 'none';
    toggleAdvanced.classList.toggle('active');
});

// Parse custom names list
function parseCustomNames() {
    if (document.querySelector('input[name="nameSource"]:checked').value !== 'custom') {
        return null;
    }

    const names = customNamesList.value.trim().split('\n')
        .map(line => {
            const parts = line.trim().split(/\s+/);
            return parts.length >= 2 ? {
                firstName: parts[0].toLowerCase(),
                lastName: parts[parts.length - 1].toLowerCase()
            } : null;
        })
        .filter(name => name !== null);

    return names.length > 0 ? names : null;
}

// Generate a single email address with duplicate check
function generateEmail(domain, maxLength, digitCount) {
    let attempts = 0;
    const maxAttempts = 50; // Maximum attempts to generate a unique email
    
    while (attempts < maxAttempts) {
        const customNames = parseCustomNames();
        let firstName, lastName;

        if (customNames) {
            const randomName = customNames[Math.floor(Math.random() * customNames.length)];
            firstName = randomName.firstName;
            lastName = randomName.lastName;
        } else {
            firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        }

        let username = firstName + lastName;
        const baseLength = username.length;
        const randomLength = maxLength - baseLength - digitCount;

        if (randomLength < 0) {
            username = username.slice(0, maxLength - digitCount);
        } else if (randomLength > 0) {
            username += generateRandomString(randomLength);
        }

        if (digitCount > 0) {
            username += generateRandomDigits(digitCount);
        }

        const email = `${username}@${domain}`;
        
        // Check if email exists in history
        if (!emailHistory.has(email)) {
            addToEmailHistory(email);
            return email;
        }
        
        attempts++;
    }
    
    // If we couldn't generate a unique email after max attempts
    showToast('Could not generate a unique email. Try different parameters.');
    return null;
}

// Export emails in selected format
function exportEmails() {
    if (generatedEmails.size === 0) {
        showToast('No emails to export');
        return;
    }

    const emails = Array.from(generatedEmails);
    let content = '';
    let filename = 'generated-emails';
    let type = 'text/plain';

    switch(exportFormat.value) {
        case 'csv':
            content = 'Email Address\n' + emails.join('\n');
            filename += '.csv';
            type = 'text/csv';
            break;
        case 'json':
            content = JSON.stringify({ emails }, null, 2);
            filename += '.json';
            type = 'application/json';
            break;
        default:
            content = emails.join('\n');
            filename += '.txt';
    }

    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Emails exported successfully!');
}

// Utility functions
function isValidDomain(domain) {
    const domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    return domainPattern.test(domain);
}

function generateRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function generateRandomDigits(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 10)).join('');
}

function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Update generate emails function
function generateEmails() {
    const domain = domainInput.value.trim();
    const emailLength = parseInt(emailLengthInput.value);
    const digitCount = parseInt(digitCountInput.value);
    const emailCount = parseInt(emailCountInput.value);
    
    // Validation
    if (!domain) {
        showToast('Please enter a domain name');
        return;
    }
    
    if (!isValidDomain(domain)) {
        showToast('Please enter a valid domain name');
        return;
    }
    
    // Clear previous results
    emailList.innerHTML = '';
    generatedEmails.clear();
    
    // Generate new emails
    let attempts = 0;
    const maxAttempts = emailCount * 3; // Increased attempts for unique generation
    
    while (generatedEmails.size < emailCount && attempts < maxAttempts) {
        const email = generateEmail(domain, emailLength, digitCount);
        if (email && !generatedEmails.has(email)) {
            generatedEmails.add(email);
            emailList.appendChild(createEmailItem(email));
        }
        attempts++;
    }
    
    if (generatedEmails.size < emailCount) {
        showToast('Could not generate all unique emails. Try different parameters or clear email history.');
    }
}

// Create email item element
function createEmailItem(email) {
    const div = document.createElement('div');
    div.className = 'email-item';
    
    const emailText = document.createElement('span');
    emailText.textContent = email;
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.title = 'Copy to clipboard';
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(email)
            .then(() => showToast('Email copied to clipboard!'))
            .catch(() => showToast('Failed to copy email'));
    };
    
    div.appendChild(emailText);
    div.appendChild(copyBtn);
    return div;
}

// Copy all emails
function copyAllEmails() {
    if (generatedEmails.size === 0) {
        showToast('No emails to copy');
        return;
    }
    
    const emailText = Array.from(generatedEmails).join('\n');
    navigator.clipboard.writeText(emailText)
        .then(() => showToast('All emails copied to clipboard!'))
        .catch(() => showToast('Failed to copy emails'));
}

// Event Listeners
generateBtn.addEventListener('click', generateEmails);
copyAllBtn.addEventListener('click', copyAllEmails);
clearBtn.addEventListener('click', clearEmails);
exportBtn.addEventListener('click', exportEmails);

// Input validation
emailLengthInput.addEventListener('input', () => {
    let value = parseInt(emailLengthInput.value);
    
    // Allow empty input while typing
    if (emailLengthInput.value === '') {
        return;
    }
    
    // Only validate on valid numbers
    if (!isNaN(value)) {
        // Store the cursor position
        const cursorPos = emailLengthInput.selectionStart;
        
        // Apply limits only when the input loses focus or on Enter key
        emailLengthInput.addEventListener('blur', function validateOnBlur() {
            value = parseInt(emailLengthInput.value);
            if (value < 8) {
                emailLengthInput.value = '8';
            } else if (value > 30) {
                emailLengthInput.value = '18';
            }
            // Remove the blur event listener after it's been triggered
            emailLengthInput.removeEventListener('blur', validateOnBlur);
        });

        emailLengthInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (value < 8) {
                    emailLengthInput.value = '8';
                } else if (value > 18) {
                    emailLengthInput.value = '18';
                }
                emailLengthInput.blur();
            }
        });

        // Restore cursor position
        emailLengthInput.setSelectionRange(cursorPos, cursorPos);
    }
});

digitCountInput.addEventListener('input', () => {
    let value = parseInt(digitCountInput.value);
    
    // Allow empty input while typing
    if (digitCountInput.value === '') {
        return;
    }
    
    // Only validate on valid numbers
    if (!isNaN(value)) {
        // Store the cursor position
        const cursorPos = digitCountInput.selectionStart;
        
        // Apply limits only when the input loses focus or on Enter key
        digitCountInput.addEventListener('blur', function validateOnBlur() {
            value = parseInt(digitCountInput.value);
            if (value < 0) {
                digitCountInput.value = '0';
            } else if (value > 5) {
                digitCountInput.value = '5';
            }
            // Remove the blur event listener after it's been triggered
            digitCountInput.removeEventListener('blur', validateOnBlur);
        });

        digitCountInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (value < 0) {
                    digitCountInput.value = '0';
                } else if (value > 5) {
                    digitCountInput.value = '5';
                }
                digitCountInput.blur();
            }
        });

        // Restore cursor position
        digitCountInput.setSelectionRange(cursorPos, cursorPos);
    }
});

emailCountInput.addEventListener('input', () => {
    let value = parseInt(emailCountInput.value);
    
    // Allow empty input while typing
    if (emailCountInput.value === '') {
        return;
    }
    
    // Only validate on valid numbers
    if (!isNaN(value)) {
        // Store the cursor position
        const cursorPos = emailCountInput.selectionStart;
        
        // Apply limits only when the input loses focus or on Enter key
        emailCountInput.addEventListener('blur', function validateOnBlur() {
            value = parseInt(emailCountInput.value);
            if (value < 1) {
                emailCountInput.value = '1';
            } else if (value > 50) {
                emailCountInput.value = '50';
            }
            // Remove the blur event listener after it's been triggered
            emailCountInput.removeEventListener('blur', validateOnBlur);
        });

        emailCountInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (value < 1) {
                    emailCountInput.value = '1';
                } else if (value > 50) {
                    emailCountInput.value = '50';
                }
                emailCountInput.blur();
            }
        });

        // Restore cursor position
        emailCountInput.setSelectionRange(cursorPos, cursorPos);
    }
});

// Mobile-specific functionality
function handleMobileKeyboard() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            // Add class when keyboard is likely to be shown
            settingsModal.classList.add('keyboard-open');
            // Scroll the input into view with a delay
            setTimeout(() => input.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
        });
        
        input.addEventListener('blur', () => {
            // Remove class when keyboard is likely to be hidden
            settingsModal.classList.remove('keyboard-open');
        });
    });
}

// Detect if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Handle mobile-specific setup
function setupMobileEnvironment() {
    if (isMobileDevice()) {
        handleMobileKeyboard();
        
        // Prevent double-tap zoom on buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                button.click();
            });
        });
        
        // Add touch feedback
        document.querySelectorAll('.primary-btn, .secondary-btn, .copy-btn').forEach(button => {
            button.addEventListener('touchstart', () => {
                button.style.opacity = '0.7';
            });
            
            button.addEventListener('touchend', () => {
                button.style.opacity = '1';
            });
        });
        
        // Improve scrolling experience
        document.querySelectorAll('.email-list, .settings-body').forEach(element => {
            element.style.WebkitOverflowScrolling = 'touch';
        });
    }
}

// Add clear history button to the UI
function addClearHistoryButton() {
    const clearHistoryBtn = document.createElement('button');
    clearHistoryBtn.className = 'secondary-btn';
    clearHistoryBtn.innerHTML = '<i class="fas fa-history"></i> Clear History';
    clearHistoryBtn.onclick = clearEmailHistory;
    
    // Add to settings buttons
    const settingsButtons = document.querySelector('.settings-buttons');
    if (settingsButtons) {
        settingsButtons.appendChild(clearHistoryBtn);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    setupMobileEnvironment();
    addClearHistoryButton();
}); 
