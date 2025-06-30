// Names data for email generation
const firstNames = [
    "aaban", "aabha", "aabid", "aadam", "aadarsh", "aaden", "aadhav", "aadil", "aadit", "aaditya",
    "aadvik", "aafreen", "aahana", "aahil", "aakash", "aakriti", "aalia", "aaliyah", "aamir", "aanya",
    "aarav", "aarif", "aariz", "aarna", "aarnav", "aaron", "aarohi", "aarsh", "aarya", "aaryan",
    "aashika", "aashir", "aashna", "aathira", "aayan", "aayush", "aazad", "abasi", "abbas", "abdallah",
    "abdel", "abdiel", "abdul", "abdullah", "abeer", "abha", "abhay", "abhi", "abhinav", "abhiraj",
    "abhishek", "abhiti", "abid", "abida", "abir", "abira", "abraham", "abram", "abrar", "abril",
    "absalom", "abu", "abubakar", "acacia", "acey", "achara", "ada", "adalia", "adam", "adamma",
    "adan", "adara", "addison", "ade", "adeel", "adel", "adela", "adele", "adeline", "adelio",
    "adelyn", "aden", "adhi", "adiba", "adil", "adina", "adira", "aditi", "aditya", "adnan",
    "adolfo", "adolph", "adom", "adonia", "adonijah", "adonis", "adreanna", "adrian", "adriana", "adriano",
    "adriel", "adrina", "advaith", "advait", "advay", "advika", "adyant", "aeron", "afaan", "afaf",
    "afnan", "afra", "afrah", "aftab", "afzal", "agan", "agastya", "agata", "agatha", "agustin",

    "baakir", "babar", "babatunde", "babul", "bac", "badal", "badr", "badri", "bagiya", "bahadur",
    "bahij", "bahiya", "bahman", "bahram", "bailee", "bakari", "bakul", "balakrishna", "baldev", "baldwin",
    "balthasar", "balu", "bamidele", "banhi", "banu", "baptist", "barack", "barbara", "barclay", "barnabas",
    "barney", "barret", "barry", "bart", "bartholomew", "baruch", "basanti", "basem", "basil", "basim",
    "basir", "basma", "bastian", "batul", "baxter", "bayani", "bayo", "beata", "beatrice", "beau",
    "bebe", "beckett", "belal", "belen", "belinda", "bella", "belle", "ben", "benaiah", "benedict",
    "benita", "benito", "benjamin", "bennett", "benny", "benson", "bentley", "bento", "bentzion", "bereket",
    "berenice", "berg", "berit", "berk", "berkeley", "berlin", "berna", "bernadette", "bernard", "bernice",
    "bernie", "berniece", "bert", "bertha", "beryl", "beth", "bethany", "bethel", "betsy", "betty",
    "beulah", "beverly", "beyla", "bharat", "bhavya", "bhumi", "bianca", "bijan", "bilal", "bill",
    "billy", "bina", "binit", "binyamin", "birgit", "bjorn", "blaine", "blair", "blake", "blanca",
    
    "caasim", "cade", "cadence", "cael", "caesar", "cahil", "cai", "caiden", "cailin", "cain",
    "cairo", "caitlin", "caitlyn", "cal", "cala", "calder", "cale", "caleb", "calista", "callie",
    "calliope", "callum", "calvin", "calyx", "cam", "cameron", "camila", "camilla", "camille", "camilo",
    "can", "candace", "candice", "candy", "cannan", "cannon", "cara", "caralyn", "carina", "carissa",
    "carl", "carla", "carlee", "carlene", "carleton", "carlie", "carlisle", "carlito", "carlota", "carlos",
    "carlton", "carly", "carma", "carmel", "carmela", "carmelo", "carmen", "carol", "carolena", "carolina",
    "caroline", "carolyn", "caron", "carrie", "carson", "carter", "cary", "casandra", "casey", "cash",
    "casimir", "caspar", "cassandra", "cassia", "cassidy", "cassius", "catalina", "catherine", "cathleen", "cathy",
    "catrin", "cayden", "cecelia", "cecil", "cecilia", "cedric", "celeste", "celia", "celina", "celine",
    "cesar", "chad", "chaitali", "chaim", "chaitanya", "chaitra", "chandan", "chandra", "chandrakant", "chanel",
    "chanelle", "chang", "chania", "channing", "chante", "chantel", "chantelle", "charan", "charlene", "charles",
    
    "daan", "dabar", "dabir", "dacey", "dafne", "dagan", "dagmar", "dahlia", "daija", "daijah",
    "daila", "daimon", "daina", "daisy", "daiwik", "dakari", "dakota", "daksh", "dalal", "dale",
    "daley", "dalia", "dalila", "dalip", "dallas", "dalton", "damali", "damar", "damari", "damaris",
    "damek", "damian", "damien", "damion", "damir", "damita", "damon", "dan", "dana", "danae",
    "danail", "dane", "danelle", "dangelo", "danica", "daniel", "daniela", "daniella", "danielle", "danika",
    "danil", "danilo", "daniya", "daniyal", "danna", "danny", "dante", "danuta", "danyal", "daphne",
    "dara", "darby", "darcie", "darcy", "daria", "darian", "darien", "darin", "dario", "darius",
    "darja", "darla", "darlene", "darnell", "darpan", "darrel", "darrell", "darren", "darrin", "darryl",
    "darwin", "darya", "daryl", "dasan", "dasha", "dasia", "dastan", "dathan", "daud", "dave",
    "david", "davida", "davide", "davie", "davin", "davina", "davis", "davonte", "davy", "dawid",
    "dawn", "dawson", "dax", "daya", "dayana", "dayanara", "dayton", "deacon", "dean", "deandra",
    
    "eamon", "ean", "earl", "earlene", "earline", "earnest", "eartha", "easter", "eba", "eben",
    "ebenezer", "eber", "ebony", "echo", "ed", "edan", "edcel", "eddie", "eden", "eder",
    "edgar", "edgardo", "edie", "edison", "edith", "edmond", "edmund", "edna", "edo", "edom",
    "edric", "edsel", "eduardo", "edward", "edwin", "edwina", "edwyn", "edy", "edythe", "eemaan",
    "eero", "eesa", "efraim", "efrain", "efrem", "efren", "egan", "ege", "ehsan", "eileen",
    "eilon", "eiman", "eira", "eitan", "ekam", "ekaterina", "ekin", "ekua", "eladio", "elaina",
    "elaine", "elam", "elana", "elani", "elbert", "elda", "elden", "eldon", "eleanor", "eleanora",
    "eleasar", "electra", "eleena", "eleftheria", "eleina", "elena", "eleni", "eleonora", "eli", "elia",
    "eliana", "elias", "elie", "eliezer", "eligio", "elihu", "elijah", "elin", "elina", "elior",
    "eliot", "elisa", "elisabeth", "elise", "eliseo", "elisha", "elissa", "elita", "eliza", "elizabeth",
    "elizaveta", "eljah", "elkan", "elke", "ella", "ellard", "elle", "ellen", "ellery", "ellery",
    
    "faakhir", "faaris", "fabian", "fabio", "fabiola", "fadi", "fadil", "fadwa", "fahad", "fahim",
    "fahima", "fahmida", "faiga", "faisal", "faith", "fajar", "fakhri", "falak", "falgun", "faline",
    "falon", "falyn", "fanni", "fanny", "farah", "faraj", "farden", "fareed", "farha", "farhan",
    "farida", "faridah", "fariza", "fariha", "farley", "faron", "farooq", "farrah", "farren", "farris",
    "faruk", "farzana", "fateh", "fatema", "fatim", "fatima", "fatimah", "fatma", "faustina", "faustino",
    "fausto", "favian", "faviola", "fawad", "fawaz", "fawzi", "fay", "faye", "fayiz", "fayruz",
    "faysal", "fazal", "federica", "federico", "fedora", "fei", "feige", "felice", "felicia", "feliciano",
    "felicity", "feliks", "felina", "felipa", "felipe", "felix", "felton", "fenella", "feodor", "ferdinand",
    "fergal", "fergus", "fermin", "fern", "fernanda", "fernando", "ferne", "fester", "festus", "fia",
    "fidel", "fidelia", "fidelity", "fido", "fiena", "fikri", "filbert", "filip", "filippa", "filippo",
    "fina", "finbar", "findlay", "finn", "finley", "finnian", "finnick", "fiona", "fionn", "fionnuala",
    
    "gaal", "gabriel", "gabriela", "gabriella", "gabrielle", "gad", "gadi", "gael", "gaetan", "gaetano",
    "gage", "gail", "gajendra", "gal", "galen", "galena", "galia", "galilea", "galina", "galiyah",
    "gamble", "gana", "ganesh", "gannon", "ganya", "garai", "gardenia", "gardner", "garett", "garfield",
    "gari", "garima", "garland", "garnet", "garnett", "garret", "garrett", "garrick", "garrison", "garry",
    "garth", "gary", "gaspar", "gaston", "gates", "gauhar", "gaurav", "gautam", "gaven", "gavin",
    "gavriel", "gavriella", "gay", "gayatri", "gaye", "gayle", "gazali", "gazsi", "geary", "geena",
    "geet", "geeta", "geetanjali", "geetha", "geffen", "gehna", "gelila", "gemma", "gena", "gene",
    "genesis", "geneva", "genevieve", "genie", "genna", "gennie", "genny", "gentry", "geoff", "geoffrey",
    "georg", "george", "georgia", "georgiana", "georgie", "georgina", "gerald", "geraldine", "gerard", "gerardo",
    "gerd", "gerda", "gerhard", "germain", "germaine", "gero", "gerold", "gerome", "geronimo", "gerry",
    "gert", "gerta", "gertrude", "gervase", "gesine", "getachew", "getty", "ghada", "ghali", "ghassan",
    
    "haadi", "haafiz", "haakon", "haamid", "haani", "haaris", "habib", "habiba", "hada", "hadar",
    "hadas", "hadassah", "hadi", "hadil", "hadlee", "hadley", "hadrian", "hae", "hafeez", "hafiz",
    "hafsah", "hafsa", "hagai", "hagen", "haggai", "hai", "haider", "haile", "haille", "haim",
    "hajar", "hajra", "hakim", "hakima", "hal", "hala", "halcyon", "hale", "haleema", "halen",
    "haley", "halford", "halia", "halil", "halim", "halima", "halina", "hall", "halle", "halley",
    "hallie", "halsey", "halsten", "halston", "halvar", "ham", "hamal", "hamdan", "hamid", "hamida",
    "hamil", "hamilton", "hamir", "hamish", "hamza", "han", "hana", "hanae", "hanan", "hananiah",
    "hani", "hania", "hanif", "hanifa", "hank", "hanna", "hannah", "hannan", "hannes", "hannibal",
    "hans", "hansel", "hanson", "hanuman", "hanya", "hap", "happy", "hara", "harald", "haran",
    "harika", "harinder", "harish", "harith", "harlan", "harley", "harlow", "harman", "harmoni", "harmony",
    
    "iagan", "iago", "ian", "iana", "iantha", "ianthe", "ibrahim", "ichabod", "ida", "idalia",
    "idalis", "idan", "idania", "idella", "idina", "idris", "ife", "iffat", "ignacio", "ignatius",
    "igor", "ihab", "iheoma", "iilana", "iina", "ikka", "ilan", "ilana", "ilario", "ilbert",
    "ileana", "ileen", "ilene", "ilia", "iliana", "ilie", "ilina", "ilithyia", "ilja", "ilka",
    "ilker", "illa", "illias", "ilma", "ilon", "ilona", "ilonka", "ilya", "imad", "imam",
    "imani", "imelda", "imhotep", "imma", "immanuel", "imogen", "imre", "ina", "inanna", "indra",
    "indrani", "inez", "inga", "inge", "ingemar", "inger", "ingmar", "ingram", "ingrid", "inia",
    "inigo", "inka", "inoke", "io", "ioanna", "iokua", "iola", "ion", "iona", "ione",
    "ionut", "iorwen", "iosef", "iosif", "ioulia", "iov", "iowa", "iqbal", "ira", "iralyn",
    "irani", "ireland", "irem", "irena", "irene", "irfan", "irina", "irine", "iris", "irisa",
    "irisha", "irit", "irma", "irmak", "irmgard", "irvin", "irving", "irwin", "isa", "isaac",
    
    "jaan", "jaana", "jaasritha", "jabari", "jabez", "jabin", "jabir", "jabril", "jacalyn", "jace",
    "jacek", "jacinda", "jacinta", "jacinto", "jack", "jackie", "jacklyn", "jackson", "jaclyn", "jacob",
    "jacoba", "jacoby", "jacinda", "jacqueline", "jacquelyn", "jacques", "jada", "jade", "jaden", "jadiel",
    "jadon", "jadyn", "jadzia", "jae", "jael", "jaelyn", "jafar", "jafet", "jagannath", "jagdish",
    "jagger", "jagjit", "jago", "jahan", "jahangir", "jahdiel", "jahleel", "jahzeel", "jai", "jaida",
    "jaiden", "jaidev", "jaime", "jair", "jairo", "jairus", "jaja", "jake", "jakeem", "jakob",
    "jakub", "jala", "jalal", "jalen", "jalene", "jalil", "jalila", "jalmari", "jalyn", "jamal",
    "jamar", "jamari", "jameel", "jameela", "james", "jameson", "jamey", "jami", "jamie", "jamil",
    "jamila", "jamin", "jamir", "jamison", "jamshed", "jan", "jana", "janae", "janak", "janan",
    "janani", "janardan", "jane", "janek", "janel", "janelle", "janessa", "janet", "janette", "janeva",
    
    "kaali", "kaarin", "kabir", "kacela", "kacey", "kacie", "kacy", "kade", "kaden", "kadence",
    "kadir", "kadyn", "kae", "kaeden", "kaela", "kaelee", "kaelyn", "kaety", "kahlan", "kahli",
    "kahlil", "kai", "kaia", "kaiden", "kaie", "kaila", "kailash", "kaili", "kailyn", "kaimana",
    "kain", "kainda", "kaine", "kainoa", "kaipo", "kairi", "kaitlin", "kaitlyn", "kaito", "kaiya",
    "kala", "kalan", "kalani", "kalb", "kalea", "kaleb", "kaleah", "kalei", "kaleigh", "kalena",
    "kaleo", "kaley", "kali", "kalidas", "kalie", "kalil", "kalila", "kalina", "kaliyah", "kalkin",
    "kallie", "kalpana", "kalyan", "kalyani", "kam", "kama", "kamal", "kamala", "kamaria", "kamau",
    "kambiz", "kameko", "kami", "kamila", "kamilah", "kamlyn", "kamran", "kamryn", "kana", "kane",
    "kanika", "kanishk", "kantha", "kanya", "kaori", "kapil", "kapila", "kara", "karam", "karan",
    "kareem", "kareen", "kareena", "karel", "karen", "karena", "kari", "karim", "karima", "karin",
    "karina", "karishma", "karl", "karla", "karlene", "karlo", "karly", "karma", "karna", "karsten"

    "laara", "labib", "laboni", "lacina", "ladina", "laelie", "lafina", "lagina", "lahari", "laiken",
    "lailah", "lajila", "lakari", "laksha", "lalita", "lalith", "lamara", "lamarr", "lamaya", "lamiah",
    "lamina", "lamira", "lamiya", "lamont", "lanaya", "lanika", "lanish", "lareen", "larina", "larisa",
    "lariza", "larkin", "larona", "larose", "larrie", "lasana", "lashae", "lashay", "lashea", "lashon",
    "latara", "lataya", "lateef", "latika", "latina", "latony", "latoya", "lauren", "laurie", "lavena",
    "lavika", "lavina", "lavita", "lawana", "layaan", "layana", "laylah", "layton", "lazaro", "lealia",
    "leanna", "leanne", "learin", "leasia", "leatha", "lebbie", "leelah", "leelia", "leena", "leeroy",
    "leesia", "leeyah", "lehana", "leilah", "leilie", "leisha", "lekala", "leland", "lelia", "lemar",
    "lemuel", "lenaya", "lenita", "lenora", "lenore", "leomar", "leonel", "leonia", "leonie", "leonor",
    "leonti", "lerato", "lesbia", "leslee", "lesley", "leslie", "lessie", "lester", "letina", "letizia",
    "levana", "levina", "levone", "lewana", "lexine", "leyana", "leyton", "lezlie", "liadan", "liamna",
    "lianna", "libbie", "libena", "libina", "licia", "lienna", "liesha", "liliah", "lilika", "lilith",

    # M (120 names)
    "maanya", "maaria", "mabelle", "macara", "macawi", "maceio", "maciah", "maciee", "mackie", "macsen",
    "madara", "madden", "madeha", "madhur", "madina", "madoka", "maegan", "maeley", "maelle", "maelyn",
    "mafisa", "magali", "magena", "mahala", "mahari", "mahdia", "mahina", "mahira", "mahlet", "mahmud",
    "mahola", "maigan", "mailin", "maille", "maimon", "mainio", "maisie", "maitri", "majida", "makala",
    "makalo", "makani", "makara", "makela", "makiah", "makyla", "malana", "malaya", "maleka", "malena",
    "maliah", "maliha", "maliki", "malina", "malini", "malisa", "malita", "malkia", "mallie", "malvin",
    "mamadi", "mamata", "mamoon", "manaal", "manasa", "manasi", "manavi", "mandla", "maneet", "manish",
    "manisa", "manita", "maniza", "manlio", "mannat", "manola", "manpre", "mansur", "mantaj", "manvir",
    "maraya", "marcio", "mareen", "mareli", "marely", "margie", "mariah", "marica", "marika", "mariko",
    "marina", "marion", "marisa", "marita", "mariza", "markel", "markus", "marlea", "marlee", "marlen",
    "marlie", "marlon", "marnie", "marris", "marsha", "martel", "martin", "marvin", "maryam", "maryum",

    # N (120 names)
    "naadir", "naarah", "naasia", "nabeel", "nabiha", "nabira", "nadeen", "nadege", "nadera", "nadia",
    "nadina", "nadira", "nadrea", "naeema", "naeemah", "nafisa", "nagina", "nahara", "nahla", "nahomi",
    "naijah", "nailah", "najah", "najia", "najib", "najila", "najwa", "nakari", "nakita", "nalani",
    "naliah", "nalini", "namari", "namiah", "namiyo", "namrata", "nancie", "nandni", "nandor", "nareh",
    "narelle", "nariah", "narina", "naseem", "nashwa", "nasiah", "nasira", "nasrin", "nastia", "natale",
    "natara", "nathaly", "natia", "natina", "naveah", "naveen", "navina", "nawal", "nayara", "nayeli",
    "naylah", "nazifa", "naziha", "nazira", "ndiala", "neasia", "nebia", "necia", "neelam", "neelie",
    "neerja", "nefert", "neftali", "nehaan", "nehman", "neilan", "neisha", "nelina", "nelita", "nelly",
    "nelson", "nemiah", "nemuel", "nereyda", "neriah", "nerina", "nerine", "neriya", "nesiah", "nesrin",
    "nestor", "netanya", "nevaan", "neveah", "nevena", "nevine", "newton", "neylan", "neziah", "ngawang",
    "nialah", "niamat", "niamh", "nicken", "nickie", "nicola", "nidrah", "nihara", "nijel", "nikala",

    # O (120 names)
    "oakley", "obelia", "obelia", "odalis", "odella", "odessa", "odetta", "odette", "odilia", "odina",
    "odion", "odysse", "ofelia", "ofer", "ogden", "olabisi", "olalla", "olamide", "olando", "olaniyi",
    "olathe", "olayinka", "oldrich", "oleena", "oleg", "olek", "olenna", "oliana", "olinda", "olive",
    "oliver", "olivia", "olivie", "oliyana", "ollie", "oluchi", "olufemi", "olukayode", "oluwaseun", "oluwaseyi",
    "olwen", "olwin", "olya", "omaira", "omarion", "omayra", "omolara", "omri", "ondina", "ondine",
    "oneida", "onella", "onika", "onkar", "onyeka", "onyx", "opaline", "opeyemi", "ophelia", "ophira",
    "oprah", "orabel", "oralia", "oralla", "orana", "orania", "orante", "orav", "orazio", "orbelia",
    "orelia", "orelie", "orella", "orelle", "orestes", "oriana", "oriane", "oriel", "oriena", "orinda",
    "orino", "orion", "orla", "orlan", "orland", "orli", "orly", "ormond", "ornella", "orrick",
    "orsen", "orson", "orunjan", "orville", "orya", "osaze", "osborn", "osiris", "oskar", "osman",
    "osmond", "oswin", "othman", "otieno", "otilia", "otoya", "ottavia", "ottilie", "ouida", "owen",

    # P (120 names)
    "paavan", "pabla", "paden", "padma", "pagan", "paighton", "pailin", "paisley", "paiton", "palak",
    "palila", "pallav", "pallvi", "palmer", "paloma", "pamela", "panashe", "pancho", "pandora", "panfilo",
    "panita", "pansy", "paola", "paolina", "paris", "parisa", "parley", "parnika", "parris", "parry",
    "parsa", "parth", "parvana", "parvati", "parvin", "pascal", "pascha", "pasha", "pasqua", "patia",
    "patrice", "patricia", "patrizia", "patsy", "patty", "pauletta", "pauley", "paulina", "pauline", "pavani",
    "pavati", "pavel", "pavla", "paxson", "payal", "payton", "pearle", "pearlie", "pearly", "peggie",
    "peirce", "pelagia", "pelham", "pemba", "penina", "penny", "peony", "pepijn", "perceval", "percy",
    "peregrine", "perla", "perlie", "pernell", "pernilla", "perri", "perrin", "perry", "persis", "petar",
    "pete", "petra", "petrina", "petronela", "petula", "peyton", "phallon", "pharoah", "phebe", "phelan",
    "pheobe", "philip", "phillip", "philyra", "phineas", "phoenix", "phuong", "phyliss", "pierce", "pilar",
    "pilot", "pino", "piotr", "piper", "piran", "pixie", "placid", "placidia", "plato", "polly"

    "qaadir", "qaasim", "qadira", "qadria", "qahira", "qamar", "qamari", "qamra", "qamran", "qanaah",
    "qasim", "qaysar", "qiana", "qirat", "quade", "quan", "quana", "quanda", "quaneisha", "quanell",
    "quanika", "quanisha", "quanna", "quanta", "quanza", "quaron", "quashawn", "quatisha", "quavon", "quay",
    "quayla", "qudrat", "queen", "quelina", "quemar", "quentin", "queren", "querida", "quesha", "quiana",
    "quianna", "quilla", "quimby", "quince", "quincey", "quincy", "quinn", "quinta", "quintin", "quinton",
    "quisha", "quiteria", "quiton", "qumaira", "qureshi", "quwan", "qusay", "qwyn", "qyara", "qyla",
    "qymber", "qyntel", "qyshawn", "quabria", "quadir", "quadre", "quanah", "quandra", "quaniyah", "quanta",
    "quanteria", "quashon", "quatina", "quavion", "quaylon", "quayshaun", "queana", "queasia", "quenesha", "quennel",
    "quenisha", "quentina", "querubin", "quesnell", "quetzal", "quillan", "quimara", "quindon", "quinnley", "quintessa",
    "quintus", "quirina", "quishaun", "quiyana", "quwana", "qyree", "qyriel", "quanique", "quatavia", "quavaris",
    "quayden", "quaylin", "queisha", "quencie", "quetzalli", "quilliana", "quinci", "quinnlyn", "quintarius", "quintisha",
    "quishauna", "quiyanna", "quwanza", "qyadira", "qyante", "qyasia", "qyera", "qyiana", "qylah", "qymir",

    # R (120 names)
    "raadhi", "raaghav", "raahat", "raanan", "raashi", "rabail", "rabeya", "rabiah", "rabina", "racquel",
    "radha", "radhika", "radley", "radwan", "raeann", "raegan", "raelyn", "rafael", "rafaela", "raffaele",
    "rafferty", "rafiq", "raghav", "raghu", "rahat", "raheem", "rahel", "rahil", "rahima", "rahul",
    "raiana", "raiden", "raina", "raisa", "raiya", "raiza", "rajani", "rajdeep", "rajen", "rajesh",
    "rajiv", "rajni", "rakel", "rakhi", "raksha", "ralph", "ramani", "ramesh", "ramiah", "ramila",
    "ramina", "ramiro", "ramla", "ramona", "ramses", "ramsha", "rana", "ranbir", "randal", "randi",
    "randy", "ranee", "rania", "raniah", "ranita", "raniya", "ranjan", "ranvir", "raphael", "raquel",
    "rashed", "rashid", "rashmi", "rasia", "rasika", "rasma", "rasmus", "rasta", "ratan", "ratna",
    "rauf", "raunaq", "raven", "ravina", "ravneet", "rawan", "rayaan", "rayan", "rayana", "rayane",
    "rayann", "rayden", "rayelle", "rayhan", "rayla", "raylan", "rayleen", "raylen", "raylin", "raymond",
    "rayna", "raynard", "rayshawn", "rayven", "razan", "razia", "reagan", "reanna", "reba", "rebel",
    "recco", "reem", "reese", "reeva", "refael", "regan", "reggie", "rehan", "reia", "reiana",

    # S (120 names)
    "saachi", "saadiq", "saahil", "saahir", "saalim", "saara", "saarah", "saavan", "sabah", "saban",
    "sabina", "sabira", "sabreen", "sabrina", "sabriyah", "sacha", "sachin", "sadaf", "sadako", "sade",
    "sadeen", "sadhana", "sadie", "sadira", "sadiya", "saeed", "saesha", "safaa", "safara", "saffron",
    "safina", "safira", "safiya", "sagar", "sahara", "sahib", "sahil", "sahira", "sai", "saida",
    "saige", "sailor", "sajid", "sajni", "sakari", "sakina", "sakshi", "salena", "salih", "salim",
    "salina", "salma", "salman", "salome", "saloni", "salvador", "samar", "samara", "samaya", "samer",
    "samia", "samir", "samira", "samson", "samuel", "samya", "sanaa", "sanam", "sanaya", "sander",
    "sandhya", "sandip", "sandra", "sandro", "sandy", "sania", "sanika", "sanjay", "sanjay", "sanjiv",
    "sanjna", "sanjula", "sanjay", "sanjana", "sanjay", "sanjiv", "sanjna", "sanjula", "sanjay", "sanjana",
    "sanjay", "sanjiv", "sanjna", "sanjula", "sanjay", "sanjana", "sanjay", "sanjiv", "sanjna", "sanjula",
    "sanjay", "sanjana", "sanjay", "sanjiv", "sanjna", "sanjula", "sanjay", "sanjana", "sanjay", "sanjiv",

    # T (120 names)
    "taahir", "taaj", "taara", "tabatha", "tabina", "tabitha", "tacari", "tadashi", "taegan", "tafari",
    "tahira", "tahj", "tahlia", "tahmid", "tahsin", "taiga", "taimur", "taina", "taiwo", "tajana",
    "tajh", "takara", "takoda", "takumi", "tal", "tala", "talan", "taleen", "talen", "talia",
    "talib", "taliesin", "talisa", "talisha", "talitha", "taliyah", "tallulah", "talon", "tamanna", "tamara",
    "tamaya", "tameka", "tamer", "tami", "tamia", "tamika", "tamir", "tamiya", "tammie", "tammy",
    "tamra", "tamsin", "tamzen", "tanaya", "taneisha", "taner", "tania", "tanika", "tanis", "tanith",
    "tanja", "tanner", "tansy", "tanya", "tapan", "tapiwa", "tara", "tarah", "taran", "tareq",
    "tariq", "tarun", "taryn", "tasha", "tashawn", "taslim", "tasneem", "tate", "tatum", "tatyana",
    "taufiq", "taurean", "tavaris", "taveon", "tavian", "tavion", "tavish", "tawana", "tawanda", "tawanna",
    "tawfiq", "tayden", "tayla", "taylan", "tayler", "taylin", "taymullah", "tayte", "tayton", "tayyab",

    # U (120 names)
    "uadhir", "ualan", "uberto", "udai", "udara", "uday", "udell", "udit", "ugochi", "ugo",
    "uhara", "uilleam", "ujala", "ujjwal", "ukasha", "ula", "ulani", "ulbrecht", "ulf", "uliana",
    "ulises", "ulisse", "ulric", "ulrica", "ulrick", "ulrika", "ulyssa", "uman", "umber", "umberto",
    "umeed", "umeko", "umer", "umika", "umit", "umut", "una", "unathi", "unax", "unda",
    "undine", "unice", "unique", "unity", "unna", "upasana", "upendra", "upma", "upton", "ura",
    "ural", "uran", "urbain", "urban", "urbana", "uri", "uria", "uriah", "urian", "uriel",
    "urijah", "urit", "uriyah", "urmi", "ursel", "ursella", "ursula", "urvashi", "usama", "usher",
    "usman", "usoa", "ustinya", "ute", "uthman", "utina", "utkarsh", "utpal", "uwe", "uyiosa",
    "uzi", "uzma", "uzziel", "ubaid", "ubayd", "udoka", "ugne", "uilliam", "ulani", "ulugbek",
    "umair", "umayr", "unais", "unmesh", "upul", "urania", "urbano", "uriela", "urvi", "usva",
    "uthappa", "utina", "uzuri", "uilliam", "uljana", "umeko", "unai", "upali", "urania", "urvashi"

    "vaani", "vaanya", "vaara", "vaasuki", "vaayu", "vada", "vaden", "vadhir", "vadin", "vadira",
    "vahe", "vahin", "vaibhav", "vaida", "vaidehi", "vaike", "vail", "vaira", "vaisak", "vaishali",
    "vaishu", "vajra", "valda", "valen", "valena", "valene", "valent", "valeri", "valery", "valia",
    "valina", "valma", "valora", "valter", "valya", "vaman", "vamsi", "vanaja", "vance", "vanda",
    "vaneet", "vanesa", "vani", "vania", "vanita", "vanna", "vanya", "varad", "varali", "varan",
    "varath", "vardan", "varel", "varia", "varick", "varin", "varis", "varun", "vasan", "vasavi",
    "vasco", "vasha", "vasia", "vasil", "vasily", "vasti", "vasu", "vatsal", "vaughn", "vayda",
    "vayle", "veda", "vedant", "vedat", "vedika", "veena", "veera", "veero", "vega", "veida",
    "veina", "velda", "velia", "velma", "vena", "veneta", "venice", "venkat", "venla", "venna",
    "vennie", "venta", "venus", "veola", "verda", "verel", "verena", "vergil", "verina", "verity",
    "verna", "vernal", "verne", "vernie", "veron", "vesna", "viana", "vianca", "vianey", "vibha",
    "vibhu", "vicara", "vicki", "vicky", "victor", "vidar", "videl", "vidhi", "vidia", "vidur",
    
    # W (120 names)
    "waad", "waaris", "wade", "wafa", "wafiq", "wagner", "wahaj", "waheed", "wahid", "wajeeh",
    "wajid", "wakar", "wakeel", "waldemar", "walden", "waldo", "waleed", "walford", "walker", "wallace",
    "wallis", "wally", "walt", "walter", "wanda", "wandy", "waneta", "wanida", "warda", "wardah",
    "waren", "waris", "warner", "warren", "warrick", "warwick", "wasan", "waseem", "washim", "wasif",
    "wasiq", "wassim", "watson", "wava", "wayde", "wayland", "waylon", "wayman", "wayne", "wazir",
    "webb", "webster", "weeks", "weir", "welby", "weldon", "welles", "welling", "wells", "wences",
    "wendall", "wendel", "wendell", "wendi", "wendy", "wenzel", "werner", "weslee", "weslie", "wesley",
    "westen", "westin", "westley", "weston", "wether", "wheeler", "whitby", "whitney", "widad", "wieland",
    "wieslaw", "wilda", "wiley", "wilford", "wilfred", "wilfrid", "wilhelmina", "wilkes", "will", "willa",
    "willard", "willia", "william", "willie", "willis", "willow", "willy", "wilma", "wilmer", "wilson",
    "wilton", "wim", "winchell", "windell", "winfield", "winfred", "winifred", "winona", "winston", "winta",
    
    # X (120 names)
    "xabier", "xander", "xandra", "xandria", "xane", "xanthe", "xanthus", "xara", "xaria", "xaviar",
    "xavia", "xavian", "xavien", "xavier", "xaviera", "xavion", "xavior", "xayden", "xayla", "xaylee",
    "xayvian", "xee", "xenia", "xenon", "xenophon", "xerxes", "xiang", "xiao", "ximen", "ximena",
    "ximun", "xiomara", "xion", "xyla", "xylah", "xylia", "xylina", "xylo", "xyon", "xypher",
    "xyrus", "xystus", "xaden", "xael", "xaire", "xamira", "xanadu", "xandrah", "xanthea", "xanthus",
    "xarae", "xareny", "xariyah", "xavien", "xavionne", "xayvier", "xayvion", "xeev", "xeina", "xela",
    "xelia", "xena", "xenia", "xeniah", "xeniya", "xenon", "xeraphina", "xerxez", "xhavit", "xiang",
    "xianna", "xiao", "xie", "xiena", "xilena", "ximun", "xinia", "xinyi", "xinyue", "xionne",
    "xitlali", "xixi", "xiya", "xiyah", "xochil", "xochitl", "xoe", "xola", "xolani", "xuan",
    "xyla", "xylah", "xyliana", "xylina", "xyza", "xzaiden", "xzaire", "xzarria", "xzenia", "xzyria",
    
    # Y (120 names)
    "yaara", "yaaseen", "yacine", "yadiel", "yadira", "yael", "yafeu", "yagiz", "yahir", "yahya",
    "yair", "yajaira", "yajna", "yakeen", "yakira", "yale", "yalena", "yalexi", "yali", "yalina",
    "yamin", "yamini", "yamir", "yamuna", "yan", "yana", "yanai", "yanel", "yanelis", "yanet",
    "yani", "yanick", "yaniel", "yanik", "yanira", "yanis", "yankel", "yanni", "yannis", "yansel",
    "yara", "yarah", "yarden", "yareli", "yarely", "yaren", "yaret", "yaretzi", "yari", "yarin",
    "yaron", "yash", "yasha", "yashas", "yashica", "yashvi", "yasiel", "yasir", "yasmeen", "yasmin",
    "yasmine", "yassah", "yasser", "yassin", "yassine", "yates", "yavuz", "yaw", "yazid", "yazmin",
    "yazz", "yechezkel", "yecheskel", "yehiel", "yehuda", "yehudah", "yehudi", "yeison", "yejide", "yelena",
    "yelina", "yeliz", "yemaya", "yemi", "yen", "yenifer", "yente", "yentl", "yeong", "yered",
    "yeriel", "yesenia", "yesha", "yeshua", "yessenia", "yestin", "yetty", "yeva", "yevette", "yewande",
    
    # Z (120 names)
    "zaahir", "zaara", "zaavan", "zabel", "zach", "zachary", "zack", "zackary", "zackery", "zada",
    "zadie", "zaedyn", "zaelyn", "zafar", "zafira", "zafreen", "zahava", "zahid", "zahida", "zahin",
    "zahira", "zahra", "zahrah", "zahran", "zahur", "zaida", "zaiden", "zain", "zaina", "zainab",
    "zaine", "zaire", "zaira", "zairah", "zaiya", "zakia", "zakiah", "zakir", "zakiya", "zakiyyah",
    "zala", "zalan", "zalika", "zalman", "zaman", "zamari", "zander", "zandra", "zane", "zaneta",
    "zani", "zania", "zaniah", "zaniel", "zanita", "zanna", "zara", "zarah", "zareen", "zaria",
    "zariah", "zarie", "zarina", "zarinah", "zariyah", "zavier", "zavion", "zavior", "zayaan", "zayd",
    "zaydan", "zayden", "zayla", "zaylee", "zaylen", "zaylia", "zaylin", "zaylynn", "zayn", "zayna",
    "zayne", "zayra", "zayvion", "zaza", "zeal", "zechariah", "zed", "zeehan", "zeena", "zeeshan",
    "zeina", "zeke", "zekiel", "zelda", "zelen", "zelia", "zelie", "zelig", "zella", "zelma",
    "zelpha", "zema", "zena", "zenaid", "zenas", "zendaya", "zenia", "zeno", "zenobia", "zenon"

];

const lastNames = [
    # A (120 names)
    "aaberg", "aaby", "aadland", "aagaard", "aakre", "aaland", "aamodt", "aaron", "aasen", "aavang",
    "abadi", "abbas", "abbasi", "abbott", "abdi", "abdul", "abela", "abell", "abner", "abney",
    "abram", "abrams", "abrant", "acebo", "acevedo", "acharya", "acker", "ackley", "acklin", "acoba",
    "acord", "acosta", "adair", "adams", "adcox", "adder", "addis", "adele", "aden", "ader",
    "adkins", "adler", "adley", "adonis", "adorno", "adrian", "advani", "adwell", "aeger", "aery",
    "affleck", "afzal", "agarwa", "agate", "agnew", "agrawal", "aguayo", "aguiar", "aguila", "aguilar",
    "aguirre", "ahamad", "ahler", "ahmed", "ahner", "ahuja", "aiken", "aikman", "ainge", "ainsley",
    "airley", "aitken", "ajmeri", "akbar", "akhtar", "akram", "albert", "albrit", "alcott", "alder",
    "aldrin", "alexis", "alford", "alhadi", "alicea", "alison", "alkire", "allard", "allen", "alley",
    "allred", "alman", "almas", "almon", "alonzo", "alston", "alton", "alvar", "alves", "alvey",
    "alvin", "alvis", "alward", "alwin", "alwyn", "amadi", "amano", "amaya", "amber", "ambur",

    # B (120 names)
    "babb", "baber", "babin", "bacak", "baccus", "bach", "backer", "bacon", "badal", "badami",
    "badger", "badri", "baer", "bagga", "bagley", "bahri", "baier", "bail", "bailey", "bains",
    "baird", "baker", "bakshi", "balaji", "balan", "balch", "balder", "baldi", "baldry", "bales",
    "bali", "ball", "ballan", "ballow", "balmer", "baltz", "bamba", "bancks", "bandy", "baner",
    "banik", "banks", "banner", "bansal", "banta", "banton", "baptist", "barad", "baran", "barber",
    "barbour", "barcus", "barden", "bardin", "barela", "barger", "barham", "baring", "barker", "barlow",
    "barman", "barnes", "barney", "barnum", "barr", "barra", "barret", "barron", "barrow", "barry",
    "bartel", "barth", "barton", "basak", "baskin", "basnet", "bass", "bassi", "basta", "baster",
    "bate", "bateman", "bates", "batra", "batt", "battle", "batty", "bauer", "baugh", "bauman",
    "baumga", "bautist", "bawa", "baxter", "bayle", "baylis", "bayne", "beach", "beachy", "beagle",
    "beal", "beale", "beaman", "beamer", "beane", "bear", "beard", "beasly", "beaton", "beaty",

    # C (120 names)
    "cable", "cade", "cadet", "cady", "cagle", "cahill", "caine", "cairns", "calder", "caleb",
    "cali", "call", "callah", "callan", "callis", "calvo", "camby", "cameron", "camey", "camp",
    "campbe", "campos", "canady", "canal", "canas", "candee", "cane", "canela", "canepa", "cann",
    "canney", "canter", "capel", "capon", "carbo", "carder", "cardin", "carey", "carle", "carlin",
    "carlos", "carlso", "carmen", "carney", "caron", "carper", "carr", "carrel", "carrol", "carson",
    "cartee", "carter", "carver", "casas", "case", "casey", "cash", "cashen", "cason", "cass",
    "cassel", "cassid", "castel", "castor", "caswel", "cate", "cater", "cathey", "catlin", "caudel",
    "caudle", "causby", "cave", "cavell", "cavin", "cawley", "caylor", "cecil", "ceja", "celaya",
    "celest", "center", "cerda", "cervan", "ceto", "chacko", "chadha", "chahal", "chai", "chalk",
    "chambe", "chan", "chance", "chanda", "chandl", "chandy", "chang", "chaney", "channa", "chao",
    "chapin", "chapp", "charle", "chase", "chatha", "chaudh", "chauha", "chavez", "cheek", "cheong",

    # D (120 names)
    "dabney", "dacey", "dacost", "dacruz", "dadd", "daddy", "dafoe", "dagen", "dahiya", "dahl",
    "dahle", "dahlin", "dahiya", "daigle", "dake", "dalal", "dales", "daley", "dall", "dallas",
    "dally", "dalton", "damico", "damon", "danahy", "dance", "dandge", "dane", "danell", "danesh",
    "dang", "dani", "daniel", "danker", "danner", "danson", "dante", "danton", "danyl", "darby",
    "darden", "dare", "darin", "dark", "darnel", "darrah", "darrow", "darsha", "dart", "dash",
    "dasher", "dass", "datta", "dattalo", "daub", "daugher", "dault", "dave", "daven", "davey",
    "david", "davies", "davis", "davison", "dawes", "dawson", "dayal", "dayan", "daye", "deacon",
    "deak", "deal", "dealy", "dean", "deanda", "deane", "dear", "deas", "deason", "deaver",
    "deboer", "debolt", "deboo", "debruc", "decamp", "decker", "decost", "deegan", "deem", "deer",
    "deese", "defoor", "degen", "dehart", "dehaven", "dehmer", "dehne", "deitz", "delacr", "delage",
    "delano", "delany", "delar", "delave", "delgado", "delk", "dell", "della", "delling", "delmar",

    # E (120 names)
    "eaddy", "eagle", "eaglin", "eakes", "ealy", "earl", "earley", "earls", "earnest", "eason",
    "east", "easter", "easton", "eather", "eaton", "eaves", "ebadi", "ebanks", "ebeling", "eber",
    "eberha", "eberle", "ebert", "ebner", "ebrahim", "echard", "eckard", "eckart", "eckert", "eckman",
    "edding", "eddy", "edelen", "edens", "eder", "edgar", "edge", "edging", "edick", "edison",
    "edler", "edman", "edmond", "edmons", "edmund", "edson", "edward", "edwin", "eells", "eernisse",
    "effron", "egan", "egbert", "egerton", "eggen", "eggers", "eggett", "eggleston", "egner", "ehlen",
    "ehler", "ehmann", "ehren", "ehrman", "eichel", "eicher", "eichman", "eide", "eighmy", "eigner",
    "eiland", "eiler", "eimers", "einar", "eisenberg", "eisenha", "eisner", "eitel", "ekberg", "eklund",
    "elahi", "elam", "elamin", "elder", "eldred", "eleby", "elena", "eley", "elford", "elgin",
    "elias", "elijah", "elizondo", "elkin", "ell", "ellar", "ellen", "eller", "ellery", "elliott",
    "ellis", "ellison", "ellman", "ellner", "ellso", "ellwood", "elman", "elmer", "elmore", "elnag",

    # F (120 names)
    "faber", "fabian", "fabyan", "facer", "facey", "factor", "fadel", "fagan", "fagen", "fagin",
    "fahie", "fahy", "failla", "fain", "fair", "fairba", "fairch", "faison", "faith", "falcon",
    "falconer", "falk", "fallon", "falter", "fancher", "fancy", "fandel", "fane", "fanelli", "fann",
    "fannin", "fannon", "fansler", "fant", "farah", "farber", "farhat", "farina", "farley", "farman",
    "farmer", "farnam", "farner", "farooq", "farquh", "farr", "farra", "farrah", "farran", "farrel",
    "farren", "farris", "farrow", "farrug", "farver", "faryar", "fass", "fast", "fatah", "father",
    "fathom", "fatica", "fatzin", "faucett", "faught", "faulk", "faust", "fava", "favela", "favor",
    "fawcett", "fawzi", "fayad", "fazal", "fazekas", "fealy", "fearn", "feather", "feder", "feehan",
    "feely", "feeney", "fehren", "fehrman", "feigen", "feild", "fein", "feinber", "feist", "felan",
    "feld", "feldma", "felice", "felix", "fell", "feller", "fellman", "felter", "felton", "fender",

    # G (120 names)
    "gaba", "gabel", "gable", "gabor", "gabriel", "gadd", "gaddy", "gaffney", "gage", "gaglian",
    "gagne", "gainer", "gaines", "gaiser", "galati", "galbra", "gale", "galen", "galer", "galindo",
    "gall", "gallag", "gallan", "galla", "gallop", "galvan", "gama", "gamble", "gamboa", "gambrel",
    "gamel", "gamin", "gana", "ganey", "gani", "gannon", "ganter", "gantt", "gaona", "garay",
    "garbar", "garbe", "garber", "garcia", "gard", "garden", "gardin", "gardne", "garey", "garfield",
    "garg", "garica", "garin", "garland", "garman", "garmon", "garner", "garnes", "garnet", "garon",
    "garret", "garris", "garry", "garson", "garth", "garver", "garvey", "garvin", "gary", "gascon",
    "gaskin", "gass", "gasser", "gaston", "gates", "gatewo", "gato", "gaudet", "gaul", "gaulin",
    "gault", "gauna", "gaunt", "gaus", "gause", "gautam", "gauvin", "gavett", "gavin", "gawel",
    "gay", "gaydos", "gayle", "gaylor", "gaynor", "gaytan", "gazda", "gazit", "gazzan", "geary",

    # H (120 names)
    "haack", "haag", "haak", "haake", "haas", "habeeb", "haber", "habib", "hack", "hacker",
    "hacket", "hackma", "hackne", "hadden", "haddix", "hade", "hadley", "hadnot", "hafer", "haff",
    "hafner", "hagan", "hagans", "hage", "hagen", "hager", "haggar", "hagins", "hagle", "hagler",
    "hagood", "hague", "hahn", "haider", "haig", "haigh", "haile", "hails", "haines", "hair",
    "hairst", "hait", "hake", "hakim", "halas", "halcom", "haley", "half", "halik", "hall",
    "haller", "halley", "halli", "hallma", "halo", "halper", "halpin", "halste", "halter", "haltom",
    "halton", "halva", "hamad", "hamann", "hamble", "hamby", "hameed", "hamel", "hamer", "hamid",
    "hamil", "hamlet", "hamm", "hammer", "hammon", "hamner", "hammou", "hamon", "hampt", "hamza",
    "hanan", "hanby", "hance", "hand", "handal", "handel", "handl", "handy", "haney", "hanif",
    "hank", "hankin", "hanks", "hanley", "hanlon", "hanna", "hannan", "hanner", "hannon", "hans",

    # I (120 names)
    "ibanez", "ibarra", "ibrahim", "ibsen", "ice", "ichard", "ickes", "ida", "idell", "ideson",
    "idle", "idris", "idziak", "igoe", "igou", "iguina", "ihena", "ike", "ilana", "iles",
    "iliff", "ill", "illing", "ilunga", "imam", "imbert", "imbrog", "imel", "imhoff", "imler",
    "immer", "immler", "imran", "ina", "inaba", "inbody", "inder", "ing", "ingals", "ingber",
    "ingels", "inger", "ingle", "inglis", "ingram", "inigue", "inman", "innes", "innis", "inscoe",
    "inskip", "insley", "intri", "inwood", "ioffe", "iones", "iordan", "iqbal", "irani", "irelan",
    "irey", "irfan", "irick", "iring", "irish", "irizar", "irons", "irvin", "irvine", "irving",
    "irwin", "isa", "isaac", "isaacs", "isacc", "isak", "isaks", "isbel", "isham", "ishii",
    "isidro", "islam", "isler", "ismail", "isom", "israel", "issac", "issler", "italia", "itkin",
    "ito", "itri", "ittner", "ivance", "ivey", "ivie", "ivory", "izagu", "izatt", "izard",

    # J (120 names)
    "jabbar", "jablon", "jace", "jack", "jackma", "jackso", "jacob", "jacobi", "jacobo", "jacoby",
    "jacome", "jacox", "jade", "jaffe", "jager", "jagger", "jagne", "jahn", "jaime", "jain",
    "jakob", "jakub", "jalal", "jalali", "james", "jamey", "jamies", "jamin", "jamir", "jammal",
    "janak", "janas", "janda", "jane", "janes", "janey", "jang", "jani", "janik", "janis",
    "janke", "janko", "jann", "janna", "janson", "jantz", "janus", "jara", "jarbo", "jardin",
    "jarell", "jarman", "jarnag", "jaros", "jarred", "jarrel", "jarret", "jarrid", "jarvis", "jasik",
    "jaskol", "jasmin", "jasso", "jastre", "jaszcz", "jauch", "javed", "javens", "javery", "jawad",
    "jawara", "jawed", "jawor", "jayne", "jayo", "jazmin", "jean", "jeanes", "jeanty", "jeckel",
    "jeff", "jeffer", "jeffry", "jeline", "jellis", "jemel", "jemiso", "jenkin", "jenks", "jenner",
    "jennin", "jensen", "jenson", "jeon", "jeong", "jepsen", "jeremi", "jernig", "jerome", "jessen",

    # K (120 names)
    "kabel", "kabir", "kadel", "kader", "kading", "kaelin", "kafer", "kagan", "kahl", "kahle",
    "kahn", "kaine", "kaiser", "kakar", "kala", "kale", "kaler", "kaley", "kalil", "kalk",
    "kalla", "kallam", "kallas", "kalman", "kamel", "kamen", "kamer", "kamin", "kammer", "kamp",
    "kamps", "kanaan", "kanady", "kanda", "kane", "kanell", "kang", "kania", "kanipe", "kann",
    "kannan", "kano", "kantor", "kaplan", "kapoor", "kapp", "kappel", "kapur", "karam", "karan",
    "karch", "karcher", "kardos", "kareem", "karel", "karg", "kari", "karim", "kark", "karl",
    "karman", "karn", "karna", "karns", "karon", "karp", "karpe", "karr", "karra", "kart",
    "karth", "kase", "kaser", "kash", "kasim", "kass", "kassab", "kassem", "kasten", "kastner",
    "katari", "kates", "kath", "kato", "katt", "katte", "katz", "kauahi", "kauff", "kaufman",
    "kaul", "kaur", "kautz", "kavan", "kawach", "kawamo", "kawano", "kawash", "kawata", "kay"

    "laake", "labar", "labbe", "laberge", "labonte", "lacava", "lacey", "lackey", "lacour", "lacy",
    "ladd", "lade", "lafave", "laffey", "lagarde", "lahaie", "lahey", "lahman", "laing", "laird",
    "lajoie", "lake", "lakin", "lal", "lala", "lalonde", "lamar", "lamarr", "lambe", "lambert",
    "lambeth", "lamere", "lamont", "lamore", "lamour", "lampe", "lampert", "lampman", "lan", "lance",
    "landau", "landen", "lander", "landis", "landon", "landry", "lane", "laney", "lang", "lange",
    "langen", "langley", "langlo", "lanka", "lankfo", "lanni", "lansin", "lantz", "lanza", "lapine",
    "lapoin", "lapp", "lara", "larame", "lareau", "large", "larios", "lark", "larkin", "laroche",
    "larosa", "larue", "lary", "lasala", "lasker", "laskey", "lass", "lasser", "latour", "latta",
    "lattim", "lau", "lauder", "lauer", "laughl", "laurel", "lauren", "laval", "lavalle", "lavalley",
    "lavin", "lavoie", "law", "lawler", "lawlor", "lawman", "lawren", "lawry", "lawson", "lawton",
    "lay", "layman", "layne", "lazar", "leach", "leahy", "leake", "leaman", "leamon", "leary",

    # M (120 names)
    "maas", "mabee", "mabry", "maciel", "mack", "mackay", "mackey", "mackie", "maclea", "macleod",
    "macrae", "madan", "maddox", "mader", "madera", "madhav", "madho", "madon", "madrid", "maes",
    "maffei", "magan", "magee", "maguir", "mahal", "mahan", "mahar", "mahato", "mahdi", "maher",
    "mahin", "mahmud", "mahon", "maier", "main", "maine", "major", "makkar", "malay", "malcolm",
    "maldon", "malek", "malhi", "malik", "malin", "mall", "malla", "malloy", "malone", "malott",
    "malta", "malter", "maltz", "malvin", "mam", "maman", "mamon", "manakt", "mancha", "mancin",
    "mancus", "mand", "mandel", "mane", "maney", "mangan", "mangat", "mangum", "manhas", "mani",
    "manion", "manish", "manjar", "manley", "mann", "mannan", "mano", "manohar", "manoj", "manson",
    "mantha", "manthe", "manuel", "manzo", "maqsoo", "maragh", "marano", "marc", "marcel", "march",
    "marden", "marek", "margol", "marian", "marin", "marino", "marion", "mark", "marker", "markle",
    "marko", "markow", "marlow", "marmen", "maron", "marone", "marque", "marr", "marro", "marron",

    # N (120 names)
    "naab", "naaman", "nadeau", "nader", "nagel", "nagle", "nagy", "nahal", "nahar", "naidu",
    "nair", "najafi", "najar", "najera", "nakai", "nall", "nam", "nanda", "nanez", "nani",
    "naqvi", "narain", "naran", "narang", "narine", "narkie", "narula", "nash", "nassar", "natar",
    "nath", "nathan", "natt", "nava", "navar", "nave", "nayak", "naylor", "naz", "nazari",
    "nazir", "ndiaye", "neal", "neary", "neel", "neer", "neff", "negi", "negri", "negron",
    "neidig", "neil", "neill", "neilan", "neils", "neiman", "neja", "nelms", "nelson", "nemec",
    "nemeh", "nenni", "neon", "nepal", "nett", "neuman", "nevel", "nevin", "newby", "newell",
    "newma", "newton", "ngai", "ngo", "ngovan", "ngu", "nguyen", "nichol", "nickel", "nickson",
    "nicol", "nicola", "niel", "nielse", "niemi", "nieto", "nigh", "nigro", "nijjar", "nikhil",
    "niles", "nilson", "nimmo", "nims", "ninan", "nino", "niraj", "nishi", "nixon", "noble",
    "nobles", "noel", "nolan", "noor", "nord", "nordby", "norieg", "norman", "norris", "north",

    # O (120 names)
    "oakley", "oates", "obanio", "ober", "oberle", "oberoi", "obrien", "obryon", "ocall", "ocasio",
    "ochoa", "ocon", "oconno", "oday", "odell", "oden", "odom", "odonel", "odonogh", "odowd",
    "oelke", "oester", "offutt", "ogara", "ogawa", "ogden", "ogrady", "ohagan", "ohair", "ohall",
    "ohara", "ohare", "ohman", "ohmer", "oja", "ojeda", "okeefe", "okeeff", "okelly", "okelty",
    "okon", "okoro", "olague", "olan", "olander", "olaru", "olavar", "olberd", "oldham", "olea",
    "oleary", "oliver", "olivo", "ollie", "olmos", "olson", "olsson", "olton", "olivera", "olough",
    "olsen", "olson", "olszew", "omahon", "omally", "oman", "omar", "omara", "omland", "oneal",
    "oneil", "oneill", "oniel", "ontive", "ooley", "oolie", "oomen", "ooster", "opitz", "oppen",
    "ora", "oram", "orand", "orazio", "orchin", "ordaz", "ordone", "oregan", "orell", "organ",
    "oriley", "oritz", "orloff", "orme", "ormond", "oroark", "orourk", "orozco", "orr", "orris",
    "orsini", "ortega", "ortis", "orton", "orwig", "osborn", "osburn", "oshea", "osman", "osorio",

    # P (120 names)
    "paar", "pabon", "pachec", "pack", "packer", "padda", "padget", "padilla", "padma", "page",
    "pahl", "paige", "pain", "paine", "pais", "pai", "pal", "palacio", "palak", "palan",
    "paley", "palin", "palla", "pallav", "palma", "palmer", "palmin", "pals", "palu", "palus",
    "pam", "pan", "panchal", "panda", "pandey", "pandit", "pangan", "pankaj", "pannu", "pansy",
    "pant", "panto", "panton", "papa", "papad", "papp", "pappa", "paras", "pardo", "pare",
    "parekh", "parent", "parete", "parikh", "paris", "park", "parke", "parkin", "parks", "parmar",
    "parr", "parris", "parry", "parse", "parson", "partin", "parton", "parvez", "pascal", "pasco",
    "pasha", "pasqua", "pass", "passer", "pastor", "patel", "paten", "pater", "patil", "patla",
    "paton", "patri", "patt", "patter", "patton", "paul", "paulin", "paulo", "pauly", "pavel",
    "pavia", "payan", "payne", "paz", "peacock", "pearce", "pearl", "pears", "peary", "peavy"

    "qader", "qadri", "qaiser", "qamar", "qasim", "qazi", "quadir", "qualls", "quan", "quandt",
    "quant", "quarels", "quarsh", "quarve", "quash", "quashie", "quast", "quattr", "quay", "quaye",
    "quebral", "queen", "queener", "queja", "quelch", "quell", "quenne", "querry", "quesen", "quest",
    "quibell", "quick", "quigg", "quigle", "quijad", "quiles", "quill", "quillen", "quimby", "quinn",
    "quint", "quinta", "quinte", "quirke", "quiroz", "quiver", "quon", "quresh", "quy", "quynh",
    "qabban", "qablan", "qaddura", "qaddour", "qadir", "qadoura", "qadous", "qahoush", "qaisar", "qaland",
    "qalban", "qamish", "qandil", "qaraqe", "qareeb", "qasem", "qasmi", "qatan", "qattan", "qayyum",
    "qazimi", "qaziye", "qendro", "qerimi", "qeshta", "qiblaw", "qinawi", "qirem", "qishawi", "qiu",
    "qizilb", "qobti", "qodsi", "qolli", "qorri", "qosaj", "qosja", "qostal", "qosumi", "qotb",
    "qreni", "qseni", "qulagh", "quni", "qupaja", "quraish", "qurban", "qurresh", "qusay", "qushair",
    "qutb", "quzai", "quzaj", "quzema", "quzina", "quzmen", "quzmi", "quzom", "quzovi", "quzuku",

    # R (120 names)
    "raab", "raad", "raam", "raasch", "rabadi", "rabago", "raban", "rabin", "racca", "race",
    "rach", "racine", "rack", "racker", "radcl", "radem", "raden", "radfer", "radhak", "radin",
    "radke", "radley", "radon", "raff", "raffo", "raft", "ragas", "rager", "raghu", "ragin",
    "raglan", "rago", "rahal", "rahim", "rahman", "rahn", "raia", "raif", "rail", "raim",
    "rain", "raine", "rainer", "raines", "raith", "raja", "rajani", "raji", "rajiv", "raju",
    "rakest", "raley", "ralph", "ram", "ramach", "ramad", "raman", "rambo", "ramey", "ramir",
    "ramon", "ramos", "rampe", "ramsay", "ramse", "rance", "rand", "randal", "randh", "randle",
    "rangel", "rankin", "ranso", "rao", "rapha", "rardin", "rasco", "rash", "rashed", "rasm",
    "rasmu", "rast", "ratcl", "rath", "ratlif", "rauch", "rausch", "raval", "raven", "ravin",
    "rawal", "rawat", "rawls", "ray", "raya", "raybon", "raye", "rayes", "rayle", "raymer",

    # S (120 names)
    "saad", "saadeh", "saari", "sabah", "sabala", "sabat", "sabbag", "saberi", "sabhar", "sabin",
    "sabir", "sable", "sacco", "sachde", "sachs", "sack", "sadd", "sadek", "sader", "sadhu",
    "sadler", "saeed", "safar", "saff", "sagar", "sager", "sahai", "sahin", "sahoo", "saidi",
    "saigal", "sailor", "saini", "saito", "sajjad", "sakai", "sakala", "sakari", "sala", "salah",
    "salama", "salas", "salce", "salem", "salim", "salis", "salk", "salle", "salley", "sallin",
    "salman", "salmon", "salter", "salva", "samad", "samant", "samar", "samba", "samek", "sami",
    "samons", "sampso", "samra", "samson", "samu", "sanab", "sanand", "sanche", "sanda", "sander",
    "sandhu", "sandor", "sandy", "sane", "sang", "sangh", "sangha", "sankar", "sanne", "sanso",
    "sant", "santac", "santel", "santin", "santo", "santos", "sapp", "sara", "saraf", "saran",
    "sardar", "sareen", "sargent", "sarin", "sarkar", "sarna", "saroya", "sartin", "sarto", "sarwar",

    # T (120 names)
    "taal", "tabak", "taber", "tabor", "tacke", "tadros", "taft", "tagle", "tahan", "tahir",
    "tai", "taing", "takacs", "talam", "talat", "talbot", "talent", "tall", "talla", "tallma",
    "talwar", "tam", "tamayo", "tambe", "tamer", "tamimi", "tamm", "tamman", "tan", "taneja",
    "tang", "tank", "tanner", "tansey", "tanton", "tao", "taorm", "tapley", "tapp", "tarab",
    "tarant", "tariq", "tarkan", "tarken", "tarman", "tart", "tarte", "tartt", "tarver", "tary",
    "taslim", "tate", "tatum", "taub", "taube", "taul", "taver", "tawfiq", "taylo", "tays",
    "teague", "teasle", "tebay", "tebow", "teel", "teeter", "tefft", "teixe", "tejada", "tejas",
    "telfer", "teller", "tello", "temes", "tempel", "teneyc", "tenny", "teodoro", "tepper", "teran",
    "tercer", "terell", "terman", "terr", "terrel", "terry", "tesfa", "tesh", "tessier", "testa",
    "teter", "tewari", "thakkar", "thakur", "thaman", "than", "thapa", "tharpe", "thatch", "thayer",

    # U (120 names)
    "uchend", "udall", "udani", "uday", "udeen", "udell", "udom", "ugarte", "uglow", "uhlan",
    "uhler", "uhrig", "uhrin", "uitti", "ujvari", "ukena", "uland", "ulery", "ullery", "ulloa",
    "ulman", "ulmer", "ulric", "ulrich", "ultima", "ulveli", "umana", "umbach", "umber", "umble",
    "umland", "umphle", "uncles", "under", "ungar", "unger", "unice", "unruh", "unwin", "upadh",
    "updegr", "updyke", "upfold", "upham", "uphaus", "uprigh", "upshur", "upson", "upton", "urbain",
    "urban", "urbina", "urda", "uresti", "uribe", "urich", "urieg", "urman", "urquha", "ursery",
    "ursin", "ursula", "urton", "usher", "usman", "usrey", "uster", "utley", "utsey", "uttam",
    "utter", "uttech", "uttley", "uva", "uzee", "uzelac", "uzun", "uzzell", "ubale", "ubani",
    "ubas", "ubell", "ubhi", "ubiles", "ubong", "ubyk", "uchida", "uchiha", "uckele", "udai",
    "udaya", "udayak", "udden", "udofia", "udoh", "udomah", "uduman", "udupa", "ugochu", "ugwue",
    "uhara", "uhde", "uhegbu", "uhler", "uhlig", "uhrich", "uitti", "ujhely", "ujjwal", "ukpe",

    # V (120 names)
    "vaas", "vacant", "vachon", "vader", "vadna", "vadney", "vagle", "vail", "vaile", "vairo",
    "vajda", "vala", "valade", "valdes", "valdez", "valen", "valent", "valer", "valero", "vali",
    "valle", "vallee", "valley", "vallon", "valore", "valver", "vanal", "vanars", "vanbusk", "vance",
    "vancle", "vande", "vander", "vandy", "vaneg", "vanek", "vanes", "vang", "vanhoo", "vanhorn",
    "vanhoy", "vanier", "vann", "vanni", "vannoy", "vanors", "vanoy", "vanpat", "vanryn", "vansan",
    "vanscy", "vant", "vantu", "vanzan", "varady", "varano", "varela", "vargo", "varley", "varn",
    "varner", "varno", "varon", "varug", "vasani", "vascon", "vasel", "vashee", "vasil", "vasque",
    "vass", "vassar", "vasta", "vater", "vath", "vaugh", "vaughn", "vauter", "vavra", "vawter",
    "vaz", "vaziri", "veach", "veal", "veale", "veals", "veasey", "veatch", "veazey", "vega",
    "vegas", "veit", "veith", "vela", "velar", "velas", "velaz", "veliz", "vella", "velli",
    "velte", "vena", "veney", "venier", "venter", "ventre", "ventu", "venuto", "veras", "verdi"

    "yadav", "yager", "yahya", "yakel", "yaklin", "yalcin", "yamin", "yancey", "yanez", "yang",
    "yankey", "yap", "yard", "yarger", "yarnel", "yarrow", "yasin", "yates", "yau", "yazdi",
    "ybarra", "yeager", "yeary", "yedid", "yeh", "yehuda", "yellen", "yelton", "yemane", "yen",
    "yeoman", "yerby", "yergey", "yerkey", "yeske", "yetman", "yetter", "yeung", "yilmaz", "yin",
    "yinger", "yip", "yocum", "yoder", "yoe", "yoho", "yokley", "yokota", "yong", "yonts",
    "york", "yorty", "yoshid", "yost", "youman", "young", "younis", "yount", "yousef", "yousif",
    "yousse", "yowell", "yowells", "yoxall", "yrigoy", "yu", "yuhas", "yule", "yum", "yung",
    "yunker", "yusuf", "yutzy", "yuvall", "yuzon", "yvon", "yvonne", "yzagui", "ybanez", "ybarbo",
    "ybarrol", "ydrach", "yearta", "yeboah", "yegane", "yegiaz", "yeiser", "yeldell", "yelinek", "yellin",
    "yencer", "yengli", "yennie", "yentzer", "yerena", "yerigan", "yeshion", "yetton", "yevich", "yeziers",
    "ygarza", "yianni", "yielding", "yimam", "yirak", "yisrael", "yocham", "yochum", "yoho", "yokley",

    # Z (120 names)
    "zabel", "zabian", "zack", "zafar", "zaheer", "zahir", "zahoor", "zaidi", "zajac", "zakaria",
    "zaki", "zalewski", "zaman", "zamani", "zamora", "zander", "zane", "zang", "zani", "zapata",
    "zappa", "zarago", "zarate", "zarek", "zarin", "zarit", "zaruba", "zavala", "zawadi", "zayas",
    "zayd", "zazueta", "zechar", "zedeno", "zeesha", "zeff", "zehner", "zeigler", "zeiler", "zein",
    "zelaya", "zelazo", "zelman", "zeman", "zendej", "zenner", "zeno", "zeoli", "zerang", "zerbe",
    "zering", "zermen", "zero", "zervos", "zetter", "zevall", "zeyad", "zhang", "zhao", "zheng",
    "zhong", "zhou", "zhu", "zick", "ziegler", "ziesme", "zietz", "zimmer", "zimme", "zimmet",
    "zink", "zinn", "zinser", "ziolko", "zipper", "zirkle", "zito", "ziv", "zlate", "zlatin",
    "zobel", "zobell", "zoch", "zoda", "zody", "zoeller", "zoghbi", "zola", "zoller", "zollman",
    "zolnow", "zoltak", "zombek", "zombo", "zomorod", "zook", "zophar", "zorich", "zorn", "zorrill",
    "zortman", "zosel", "zoucha", "zoulek", "zoumad", "zubair", "zubia", "zucker", "zuidem", "zulkos",
    "zuluag", "zumbro", "zuniga", "zunino", "zupan", "zurcher", "zurfluh", "zuro", "zuvich", "zuzak"

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
