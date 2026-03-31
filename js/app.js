// ========================================
// LE GAI SAVOIR QUOTIDIEN
// Système de rotation automatique d'anecdotes
// 100 ANECDOTES POUR 100 JOURS
// ========================================

// ========================================
// BASE DE DONNÉES D'ANECDOTES
// ========================================

const anecdotes = [
    {
        texte: "En 1969, lors de la mission Apollo 11, Buzz Aldrin a célébré la communion sur la Lune. Il a bu du vin et mangé du pain dans le module lunaire, faisant de la Lune le premier corps céleste où un sacrement chrétien a été célébré.",
        source: "NASA Archives - Apollo 11 Mission Report",
        lien: "https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html"
    },
    {
        texte: "En 2025, un canular vieux de 13 ans a été dévoilé au grand jour. De nombreux médias avaient relayé que Michel Lunarca, cannibale de réputation, était l'inventeur du croque-monsieur. ",
        source: "Society",
        lien: "https://www.society.fr/enquete-michel-lunarca-lescroque-monsieur/"
    },
    {
        texte: "Abalana est un pays merveilleux dont Doudou est le grand Maître. Dans cet univers vivent des fruits et Charles-Kevin",
    source: "Abalana",
    },
    {
        texte: "Le miel est le seul aliment qui ne se périme jamais. Des archéologues ont découvert des pots de miel vieux de 3000 ans dans des tombes égyptiennes, et il était encore parfaitement comestible grâce à sa faible teneur en eau et son acidité.",
        source: "National Geographic - The Science of Honey",
        lien: "https://www.nationalgeographic.com"
    },
    {
        texte: "Les pieuvres ont trois cœurs et du sang bleu. Deux cœurs pompent le sang vers les branchies, tandis que le troisième le fait circuler dans le reste du corps. Leur sang contient de l'hémocyanine riche en cuivre, ce qui lui donne sa couleur bleue.",
        source: "Marine Biology Journal",
        lien: "https://www.marinebio.org"
    },
    {
        texte: "La Tour Eiffel peut mesurer jusqu'à 15 cm de plus en été. Le fer se dilate avec la chaleur, ce qui fait que la structure métallique s'étend légèrement pendant les mois chauds.",
        source: "Société d'Exploitation de la Tour Eiffel",
        lien: "https://www.toureiffel.paris"
    },
    {
        texte: "Les bananes sont naturellement radioactives car elles contiennent du potassium-40. Cependant, il faudrait manger 10 millions de bananes d'un coup pour recevoir une dose mortelle de radiation.",
        source: "Journal of Environmental Radioactivity",
        lien: "https://www.sciencedirect.com"
    },
    {
        texte: "Le cœur d'une crevette se trouve dans sa tête. Contrairement aux humains, l'anatomie des crevettes place leur organe cardiaque dans la région céphalique, juste derrière leurs yeux.",
        source: "Marine Biology Research",
        lien: "https://www.marinebio.org"
    },
    {
        texte: "Les flamants roses ne sont pas naturellement roses. Leur couleur provient des pigments caroténoïdes présents dans les algues et les crustacés qu'ils consomment. Un flamant nourri avec une alimentation différente deviendrait blanc.",
        source: "Smithsonian Magazine",
        lien: "https://www.smithsonianmag.com"
    },
    {
        texte: "Le plus vieux livre du monde encore intact est le 'Sutra du Diamant', imprimé en Chine en 868 après J.-C. Il a été découvert dans une grotte en 1900 et est conservé à la British Library.",
        source: "British Library Archives",
        lien: "https://www.bl.uk"
    },
    {
        texte: "Les koalas dorment jusqu'à 22 heures par jour. Leur régime alimentaire composé uniquement de feuilles d'eucalyptus, très pauvre en nutriments, les oblige à économiser leur énergie au maximum.",
        source: "Australian Wildlife Conservancy",
        lien: "https://www.australianwildlife.org"
    },
    {
        texte: "Le mot 'robot' vient du tchèque 'robota' qui signifie 'travail forcé'. Il a été introduit pour la première fois en 1920 par l'écrivain Karel Čapek dans sa pièce de théâtre 'R.U.R.'",
        source: "Oxford English Dictionary",
        lien: "https://www.oed.com"
    },
    {
        texte: "Les dauphins dorment avec un seul hémisphère cérébral à la fois. Cette technique, appelée sommeil unihémisphérique, leur permet de continuer à respirer et de rester vigilants face aux prédateurs.",
        source: "Journal of Sleep Research",
        lien: "https://onlinelibrary.wiley.com"
    },
    {
        texte: "Le Groenland appartient au Danemark depuis 1814. Malgré sa taille immense (plus de 50 fois celle du Danemark), il ne compte que 56 000 habitants, soit moins qu'une petite ville danoise.",
        source: "Encyclopedia Britannica",
        lien: "https://www.britannica.com"
    },
    {
        texte: "Les chats passent environ 70% de leur vie à dormir, soit environ 13 à 16 heures par jour. Un chat de 9 ans n'a été éveillé que pendant 3 ans de sa vie.",
        source: "Veterinary Medicine Journal",
        lien: "https://www.vetmed.com"
    },
    {
        texte: "La Grande Muraille de Chine n'est pas visible depuis l'espace à l'œil nu, contrairement à la croyance populaire. Cette idée reçue a été démentie par plusieurs astronautes, dont le chinois Yang Liwei.",
        source: "NASA - Space Myths Debunked",
        lien: "https://www.nasa.gov"
    },
    {
        texte: "Le champagne ne peut être appelé ainsi que s'il provient de la région Champagne en France. Tous les autres vins mousseux similaires doivent utiliser d'autres appellations comme 'vin mousseux' ou 'crémant'.",
        source: "Comité Champagne",
        lien: "https://www.champagne.fr"
    },
    {
        texte: "Les ours polaires ont la peau noire sous leur fourrure blanche. Leurs poils sont en réalité transparents et creux, ce qui leur permet de piéger la chaleur du soleil et de rester au chaud dans l'Arctique.",
        source: "Polar Bears International",
        lien: "https://www.polarbearsinternational.org"
    },
    {
        texte: "Le mot 'salaire' vient du latin 'salarium', qui désignait la ration de sel donnée aux soldats romains. Le sel était si précieux qu'il servait de monnaie d'échange.",
        source: "Etymology Online",
        lien: "https://www.etymonline.com"
    },
    {
        texte: "Les fourmis ne dorment jamais vraiment. Elles prennent environ 250 micro-siestes d'une minute chaque jour, totalisant environ 4 heures et 48 minutes de repos par jour.",
        source: "Journal of Insect Behavior",
        lien: "https://www.springer.com"
    },
    {
        texte: "La bibliothèque du Congrès américain contient plus de 170 millions d'objets, dont 17 millions de livres. Si vous lisiez un livre par jour, il vous faudrait plus de 46 000 ans pour tout lire.",
        source: "Library of Congress",
        lien: "https://www.loc.gov"
    },
    {
        texte: "Les girafes ont la même nombre de vertèbres cervicales que les humains : sept. Cependant, chaque vertèbre de girafe mesure environ 25 cm de long.",
        source: "National Geographic - Giraffe Facts",
        lien: "https://www.nationalgeographic.com"
    },
    {
        texte: "Le plus long mot français officiellement reconnu est 'anticonstitutionnellement' avec 25 lettres. Cependant, certains termes médicaux peuvent être beaucoup plus longs.",
        source: "Académie Française",
        lien: "https://www.academie-francaise.fr"
    },
    {
        texte: "Les escargots peuvent dormir pendant trois ans sans manger. Ils entrent en hibernation lorsque les conditions météorologiques sont défavorables et scellent leur coquille avec du mucus séché.",
        source: "Malacological Society",
        lien: "https://www.malacsoc.org.uk"
    },
    {
        texte: "Le Coca-Cola était à l'origine de couleur verte. La couleur brune caractéristique provient du caramel ajouté à la recette, qui a été modifiée peu après sa création en 1886.",
        source: "The Coca-Cola Company Archives",
        lien: "https://www.coca-colacompany.com"
    },
    {
        texte: "Les abeilles peuvent reconnaître les visages humains. Elles utilisent la même technique que nous : elles assemblent les différentes parties du visage (yeux, nez, bouche) pour former une image complète.",
        source: "Journal of Experimental Biology",
        lien: "https://jeb.biologists.org"
    },
    {
        texte: "La foudre frappe la Terre environ 100 fois par seconde, soit 8,6 millions de fois par jour. L'endroit le plus foudroyé au monde est le lac Maracaibo au Venezuela.",
        source: "World Meteorological Organization",
        lien: "https://public.wmo.int"
    },
    {
        texte: "Les empreintes digitales des koalas sont presque identiques à celles des humains, au point qu'elles pourraient contaminer une scène de crime. C'est l'un des rares exemples de convergence évolutive aussi précise.",
        source: "Scientific American",
        lien: "https://www.scientificamerican.com"
    },
    {
        texte: "Le mot 'quarantaine' vient de l'italien 'quaranta giorni' (quarante jours). C'était la durée pendant laquelle les navires devaient rester isolés avant d'accoster à Venise pendant la peste noire au 14ème siècle.",
        source: "Centers for Disease Control and Prevention",
        lien: "https://www.cdc.gov"
    },
    {
        texte: "Les pingouins proposent des cailloux à leur partenaire comme cadeau de mariage. Si la femelle accepte le caillou, ils deviennent partenaires pour la vie et l'utilisent pour construire leur nid.",
        source: "Antarctic Research",
        lien: "https://www.antarctica.gov.au"
    },
    {
        texte: "Le cerveau humain utilise environ 20% de l'énergie totale du corps, bien qu'il ne représente que 2% de sa masse. C'est l'organe le plus énergivore de notre organisme.",
        source: "Nature Neuroscience",
        lien: "https://www.nature.com/neuro"
    },
    {
        texte: "Les carottes étaient à l'origine violettes. Les carottes orange que nous connaissons aujourd'hui ont été cultivées aux Pays-Bas au 17ème siècle en l'honneur de Guillaume d'Orange.",
        source: "World Carrot Museum",
        lien: "https://www.carrotmuseum.co.uk"
    },
    {
        texte: "Un jour sur Vénus (243 jours terrestres) est plus long qu'une année sur Vénus (225 jours terrestres). De plus, Vénus tourne dans le sens inverse des autres planètes du système solaire.",
        source: "NASA - Venus Facts",
        lien: "https://www.nasa.gov/venus"
    },
    {
        texte: "Les éléphants sont les seuls mammifères, avec les humains, à avoir un menton. Ils peuvent également reconnaître leur propre reflet dans un miroir, signe d'une conscience de soi développée.",
        source: "Proceedings of the National Academy of Sciences",
        lien: "https://www.pnas.org"
    },
    {
        texte: "Le mot 'sandwich' vient du Comte de Sandwich, un noble anglais du 18ème siècle qui aimait manger de la viande entre deux tranches de pain pour ne pas interrompre ses parties de cartes.",
        source: "Oxford English Dictionary",
        lien: "https://www.oed.com"
    },
    {
        texte: "Les corbeaux peuvent se souvenir des visages humains pendant des années et transmettre cette information à leur descendance. Ils peuvent même organiser des 'funérailles' pour leurs congénères morts.",
        source: "Wildlife Behavior & Ecology",
        lien: "https://www.wildlife.org"
    },
    {
        texte: "La Joconde n'a pas de sourcils. Léonard de Vinci ne les a jamais peints, ou ils ont disparu lors d'une restauration. C'est l'une des raisons de son expression énigmatique.",
        source: "Musée du Louvre",
        lien: "https://www.louvre.fr"
    },
    {
        texte: "Les requins existent depuis plus de 400 millions d'années, ce qui signifie qu'ils ont survécu à quatre des cinq grandes extinctions de masse. Ils sont plus anciens que les arbres et les dinosaures.",
        source: "Smithsonian Ocean Portal",
        lien: "https://ocean.si.edu"
    },
    {
        texte: "Le mot 'OK' est probablement l'expression la plus utilisée au monde. Son origine exacte est débattue, mais elle pourrait venir de 'oll korrect', une orthographe humoristique de 'all correct' populaire dans les années 1830.",
        source: "Merriam-Webster Dictionary",
        lien: "https://www.merriam-webster.com"
    },
    {
        texte: "Les baleines bleues ont un cœur de la taille d'une petite voiture (environ 180 kg). Leurs artères sont si larges qu'un enfant pourrait nager à travers, et leur langue pèse autant qu'un éléphant.",
        source: "World Wildlife Fund",
        lien: "https://www.worldwildlife.org"
    },
    {
        texte: "Le plus vieux arbre vivant connu est un pin bristlecone nommé Mathusalem, âgé de plus de 4 850 ans. Il se trouve quelque part dans les White Mountains en Californie, mais son emplacement exact est gardé secret.",
        source: "US Forest Service",
        lien: "https://www.fs.usda.gov"
    },
    {
        texte: "Les chiens peuvent sentir les émotions humaines grâce à leur odorat. Ils peuvent détecter les changements chimiques dans notre corps causés par la peur, le stress ou la joie.",
        source: "Animal Cognition Journal",
        lien: "https://www.springer.com/journal/10071"
    },
    {
        texte: "La Statue de la Liberté était à l'origine de couleur cuivre brillant. Elle a pris sa couleur verte caractéristique au fil des années à cause de l'oxydation du cuivre, un processus appelé patine.",
        source: "National Park Service",
        lien: "https://www.nps.gov/stli"
    },
    {
        texte: "Les hippopotames produisent une sécrétion rouge qui agit comme un écran solaire et un antibiotique naturel. Cette substance a longtemps fait croire qu'ils transpiraient du sang.",
        source: "Nature - Scientific Reports",
        lien: "https://www.nature.com/srep"
    },
    {
        texte: "Le mot 'muscle' vient du latin 'musculus' qui signifie 'petite souris'. Les Romains pensaient que les muscles sous la peau ressemblaient à des souris qui couraient.",
        source: "Etymology Dictionary",
        lien: "https://www.etymonline.com"
    },
    {
        texte: "Les loutres de mer dorment en se tenant par la main pour ne pas dériver pendant leur sommeil. Elles s'enroulent également dans des algues pour rester ancrées.",
        source: "Monterey Bay Aquarium",
        lien: "https://www.montereybayaquarium.org"
    },
    {
        texte: "Le diamant n'est pas le matériau naturel le plus dur. La lonsdaléite, formée lors d'impacts de météorites, est 58% plus dure que le diamant.",
        source: "Physical Review Letters",
        lien: "https://journals.aps.org/prl"
    },
    {
        texte: "Les papillons goûtent avec leurs pattes. Leurs récepteurs gustatifs se trouvent sur leurs pattes, ce qui leur permet de savoir si une plante est comestible simplement en marchant dessus.",
        source: "Journal of Insect Physiology",
        lien: "https://www.journals.elsevier.com/journal-of-insect-physiology"
    },
    {
        texte: "La première alarme réveil a été inventée par Levi Hutchins en 1787, mais elle ne sonnait qu'à 4 heures du matin et ne pouvait pas être réglée à une autre heure.",
        source: "Smithsonian Magazine - Innovation",
        lien: "https://www.smithsonianmag.com"
    },
    {
        texte: "Les crocodiles ne peuvent pas tirer la langue. Elle est attachée au palais de leur bouche par une membrane qui la maintient en place.",
        source: "Crocodilian Biology Database",
        lien: "http://crocodilian.com"
    },
    {
        texte: "Le mot 'lunatic' (lunatique) vient de 'luna' (lune en latin). On croyait autrefois que la pleine lune rendait les gens fous, d'où l'expression 'fou de la lune'.",
        source: "Oxford Dictionary of Word Origins",
        lien: "https://www.oed.com"
    },
    {
        texte: "Les chouettes ne peuvent pas bouger leurs yeux. Pour compenser, elles peuvent tourner leur tête à 270 degrés, ce qui leur permet de voir presque tout autour d'elles sans bouger leur corps.",
        source: "Audubon Society",
        lien: "https://www.audubon.org"
    },
    {
        texte: "Le plus grand organisme vivant au monde est un champignon Armillaria dans l'Oregon, qui s'étend sur 965 hectares et pèse environ 600 tonnes. Il a entre 2 000 et 8 000 ans.",
        source: "US Forest Service - Pacific Northwest Research",
        lien: "https://www.fs.fed.us/pnw"
    },
    {
        texte: "Les fraises ne sont pas vraiment des baies, mais les bananes le sont. En botanique, une baie est un fruit produit à partir d'un seul ovaire, ce qui exclut les fraises mais inclut les bananes.",
        source: "Botanical Society of America",
        lien: "https://botany.org"
    },
    {
        texte: "Le mot 'boycott' vient du nom de Charles Boycott, un agent immobilier irlandais ostracisé par sa communauté en 1880 pour avoir refusé de baisser les loyers.",
        source: "Merriam-Webster - Word History",
        lien: "https://www.merriam-webster.com"
    },
    {
        texte: "Les rats rient quand on les chatouille. Ils émettent des ultrasons à 50 kHz, inaudibles pour l'oreille humaine, qui correspondent à des vocalisations de joie.",
        source: "Science Magazine",
        lien: "https://www.science.org"
    },
    {
        texte: "La première webcam a été inventée à l'Université de Cambridge en 1991 pour surveiller une cafetière. Les chercheurs voulaient savoir si le café était prêt sans se déplacer.",
        source: "Computer Laboratory - University of Cambridge",
        lien: "https://www.cl.cam.ac.uk"
    },
    {
        texte: "Les étoiles de mer n'ont pas de cerveau. Elles ont un système nerveux décentralisé avec un anneau nerveux autour de la bouche et un nerf radial dans chaque bras.",
        source: "Marine Biology Association",
        lien: "https://www.mba.ac.uk"
    },
    {
        texte: "Le mot 'silhouette' vient d'Étienne de Silhouette, ministre des Finances français du 18ème siècle connu pour son avarice. Les portraits en ombre chinoise, bon marché, ont été nommés d'après lui par moquerie.",
        source: "Encyclopædia Britannica",
        lien: "https://www.britannica.com"
    },
    {
        texte: "Les chameaux ne stockent pas d'eau dans leurs bosses, mais de la graisse. Ils peuvent cependant boire jusqu'à 135 litres d'eau en 13 minutes et la stocker dans leur système sanguin.",
        source: "San Diego Zoo Wildlife Alliance",
        lien: "https://wildlife.sandiegozoo.org"
    },
    {
        texte: "Le plus petit os du corps humain est l'étrier, situé dans l'oreille moyenne. Il mesure environ 3 millimètres de long et joue un rôle crucial dans l'audition.",
        source: "Journal of Anatomy",
        lien: "https://onlinelibrary.wiley.com/journal/14697580"
    },
    {
        texte: "Les cacahuètes ne sont pas des noix mais des légumineuses, comme les haricots et les pois. Elles poussent sous terre, contrairement aux vraies noix qui poussent sur les arbres.",
        source: "American Peanut Council",
        lien: "https://www.peanutsusa.com"
    },
    {
        texte: "Le mot 'spam' (pourriel) vient d'un sketch des Monty Python où le mot 'spam' (une marque de viande en conserve) était répété de manière excessive et envahissante.",
        source: "Oxford English Dictionary - New Words",
        lien: "https://public.oed.com"
    },
    {
        texte: "Les kangourous ne peuvent pas sauter en arrière. Leur queue musclée et leurs grandes pattes arrière sont conçues uniquement pour le mouvement vers l'avant.",
        source: "Australian Museum",
        lien: "https://australian.museum"
    },
    {
        texte: "La première souris d'ordinateur était en bois. Elle a été inventée par Douglas Engelbart en 1964 et comportait un seul bouton et deux roues métalliques.",
        source: "Computer History Museum",
        lien: "https://www.computerhistory.org"
    },
    {
        texte: "Les méduses existent depuis plus de 500 millions d'années, ce qui les rend plus anciennes que les dinosaures et même que les arbres. Certaines espèces sont biologiquement immortelles.",
        source: "Monterey Bay Aquarium Research Institute",
        lien: "https://www.mbari.org"
    },
    {
        texte: "Le mot 'assassin' vient de 'haschischin', un terme arabe désignant les membres d'une secte médiévale qui consommaient du haschisch avant leurs missions meurtrières.",
        source: "Etymology Online",
        lien: "https://www.etymonline.com"
    },
    {
        texte: "Les paresseux ne descendent de leur arbre qu'une fois par semaine pour déféquer. Ils peuvent perdre jusqu'à 30% de leur poids corporel lors de cette opération.",
        source: "Sloth Conservation Foundation",
        lien: "https://slothconservation.org"
    },
    {
        texte: "Le code-barres a été inventé en 1952, mais le premier produit scanné en magasin fut un paquet de chewing-gum Wrigley's en 1974. Ce paquet est maintenant exposé au Smithsonian.",
        source: "Smithsonian National Museum of American History",
        lien: "https://americanhistory.si.edu"
    },
    {
        texte: "Les colibris sont les seuls oiseaux capables de voler en arrière. Ils peuvent également voler sur place et même à l'envers pendant de courtes périodes.",
        source: "Cornell Lab of Ornithology",
        lien: "https://www.allaboutbirds.org"
    },
    {
        texte: "Le mot 'sabotage' vient du mot français 'sabot' (chaussure en bois). Les ouvriers jetaient leurs sabots dans les machines pour les bloquer en signe de protestation.",
        source: "Larousse - Dictionnaire étymologique",
        lien: "https://www.larousse.fr"
    },
    {
        texte: "Les araignées ne peuvent pas digérer leur nourriture à l'intérieur de leur corps. Elles injectent des enzymes digestives dans leur proie et aspirent ensuite le liquide résultant.",
        source: "American Arachnological Society",
        lien: "https://www.americanarachnology.org"
    },
    {
        texte: "Le premier email a été envoyé en 1971 par Ray Tomlinson. Il a également inventé l'utilisation du symbole @ pour séparer le nom d'utilisateur du nom de domaine.",
        source: "Internet Hall of Fame",
        lien: "https://www.internethalloffame.org"
    },
    {
        texte: "Les tortues peuvent respirer par leurs fesses. Certaines espèces aquatiques ont développé la capacité d'absorber l'oxygène par leur cloaque, ce qui leur permet de rester sous l'eau plus longtemps.",
        source: "Journal of Experimental Biology",
        lien: "https://jeb.biologists.org"
    },
    {
        texte: "Le mot 'candidat' vient du latin 'candidatus' qui signifie 'vêtu de blanc'. Dans la Rome antique, ceux qui se présentaient aux élections portaient une toge blanche.",
        source: "Oxford Latin Dictionary",
        lien: "https://www.oed.com"
    },
    {
        texte: "Les renards arctiques peuvent survivre à des températures allant jusqu'à -70°C. Leur fourrure épaisse et leur métabolisme adapté leur permettent de vivre dans les environnements les plus froids de la planète.",
        source: "Arctic Studies Center",
        lien: "https://naturalhistory.si.edu/research/arctic-studies-center"
    },
    {
        texte: "Le premier distributeur automatique a été inventé en Égypte ancienne vers 215 avant J.-C. par Héron d'Alexandrie. Il distribuait de l'eau bénite en échange d'une pièce.",
        source: "Ancient History Encyclopedia",
        lien: "https://www.worldhistory.org"
    },
    {
        texte: "Les calmars géants ont les plus grands yeux du règne animal, pouvant atteindre 30 cm de diamètre. C'est à peu près la taille d'un ballon de basket.",
        source: "Smithsonian Ocean Portal",
        lien: "https://ocean.si.edu"
    },
    {
        texte: "Le mot 'panic' (panique) vient de Pan, le dieu grec des bergers. On croyait qu'il causait la terreur soudaine et inexplicable chez les voyageurs dans les lieux isolés.",
        source: "Greek Mythology Encyclopedia",
        lien: "https://www.theoi.com"
    },
    {
        texte: "Les castors ont des dents orange. La couleur provient du fer présent dans l'émail de leurs dents, ce qui les rend également plus résistantes et mieux adaptées pour ronger le bois.",
        source: "National Wildlife Federation",
        lien: "https://www.nwf.org"
    },
    {
        texte: "Le premier SMS a été envoyé le 3 décembre 1992. Il disait simplement 'Merry Christmas' et a été envoyé par Neil Papworth, un ingénieur britannique.",
        source: "Guinness World Records",
        lien: "https://www.guinnessworldrecords.com"
    },
    {
        texte: "Les axolotls peuvent régénérer non seulement leurs membres, mais aussi leur cœur, leur moelle épinière et même des parties de leur cerveau. Ils conservent cette capacité toute leur vie.",
        source: "Developmental Biology Journal",
        lien: "https://www.sciencedirect.com/journal/developmental-biology"
    },
    {
        texte: "Le mot 'quarantine' partage la même racine que 'quarante'. Les navires devaient rester isolés pendant quarante jours avant d'accoster pendant les épidémies de peste.",
        source: "World Health Organization - History",
        lien: "https://www.who.int"
    },
    {
        texte: "Les manchots empereurs peuvent plonger jusqu'à 500 mètres de profondeur et retenir leur respiration pendant plus de 20 minutes. Ils sont les champions de plongée du monde des oiseaux.",
        source: "British Antarctic Survey",
        lien: "https://www.bas.ac.uk"
    },
    {
        texte: "Le premier ordinateur bug était littéralement un insecte. En 1947, un papillon de nuit coincé dans un relais a causé un dysfonctionnement du Harvard Mark II. Grace Hopper l'a documenté comme le premier 'bug' informatique.",
        source: "Naval History and Heritage Command",
        lien: "https://www.history.navy.mil"
    },
    {
        texte: "Les wombats produisent des excréments cubiques. Cette forme inhabituelle les empêche de rouler et permet aux wombats de marquer leur territoire de manière plus efficace.",
        source: "Journal of Morphology",
        lien: "https://onlinelibrary.wiley.com/journal/10974687"
    },
    {
        texte: "Le mot 'salary' (salaire) vient du latin 'salarium', la ration de sel donnée aux soldats romains. Le sel était si précieux qu'il servait de monnaie.",
        source: "Oxford Dictionary of English Etymology",
        lien: "https://www.oed.com"
    },
    {
        texte: "Les narvals ont une défense qui est en réalité une dent canine gauche qui pousse en spirale à travers leur lèvre supérieure. Elle peut atteindre 3 mètres de long et contient 10 millions de terminaisons nerveuses.",
        source: "National Geographic - Arctic Wildlife",
        lien: "https://www.nationalgeographic.com"
    },
    {
        texte: "Le premier jeu vidéo commercial, Pong, a été testé dans un bar en 1972. Le prototype est tombé en panne après quelques jours parce que le réceptacle de pièces était trop plein.",
        source: "Video Game History Foundation",
        lien: "https://gamehistory.org"
    },
    {
        texte: "Les caméléons ne changent pas de couleur pour se camoufler, mais pour communiquer leurs émotions et réguler leur température. Leur camouflage naturel est déjà très efficace.",
        source: "Journal of Experimental Biology",
        lien: "https://jeb.biologists.org"
    },
    {
        texte: "Le mot 'atlas' vient du titan grec Atlas, condamné à porter le ciel sur ses épaules. Le cartographe Gerardus Mercator a utilisé son image sur la couverture de son recueil de cartes en 1595.",
        source: "Library of Congress - Geography and Map Division",
        lien: "https://www.loc.gov/rr/geogmap"
    },
    {
        texte: "Les tardigrades, aussi appelés 'oursons d'eau', peuvent survivre dans l'espace, à des températures extrêmes (-272°C à +150°C), sans eau pendant 10 ans, et à des radiations 1000 fois supérieures à la dose mortelle pour l'homme.",
        source: "European Space Agency",
        lien: "https://www.esa.int"
    },
    {
        texte: "Le premier brevet pour une machine à écrire a été déposé en 1714 par Henry Mill en Angleterre, mais aucun exemplaire n'a survécu. La première machine à écrire commerciale n'est apparue qu'en 1874.",
        source: "Smithsonian - Typewriter Collection",
        lien: "https://americanhistory.si.edu"
    },
    {
        texte: "Les mantis religieuses sont les seuls insectes capables de tourner la tête à 180 degrés. Elles ont également une vision tridimensionnelle, unique parmi les invertébrés.",
        source: "Current Biology Journal",
        lien: "https://www.cell.com/current-biology"
    },
    {
        texte: "Le mot 'marathon' vient de la bataille de Marathon en 490 avant J.-C. Selon la légende, un messager grec a couru de Marathon à Athènes (environ 42 km) pour annoncer la victoire, puis est mort d'épuisement.",
        source: "Ancient Olympic Games - Historical Records",
        lien: "https://www.olympic.org/ancient-olympic-games"
    },
    {
        texte: "Les platypus sont l'un des rares mammifères venimeux. Les mâles ont des éperons venimeux sur leurs pattes arrière qui peuvent causer une douleur intense chez l'homme.",
        source: "Australian Platypus Conservancy",
        lien: "https://www.platypus.asn.au"
    },
    {
        texte: "Le premier appareil photo numérique a été inventé par Kodak en 1975. Il pesait 3,6 kg, prenait 23 secondes pour capturer une image en noir et blanc de 0,01 mégapixel, et stockait les photos sur une cassette.",
        source: "Kodak - Company History",
        lien: "https://www.kodak.com"
    },
    {
        texte: "Les seiches peuvent changer non seulement leur couleur, mais aussi la texture de leur peau en quelques secondes. Elles possèdent des millions de cellules pigmentaires appelées chromatophores.",
        source: "Marine Biological Laboratory",
        lien: "https://www.mbl.edu"
    },
    {
        texte: "Le mot 'vandalism' (vandalisme) vient des Vandales, un peuple germanique qui a saccagé Rome en 455 après J.-C. Le terme a été popularisé pendant la Révolution française.",
        source: "Encyclopædia Britannica - Etymology",
        lien: "https://www.britannica.com"
    }
];

// ========================================
// CONFIGURATION
// ========================================

// Date de démarrage du site (première anecdote)
// IMPORTANT : Modifiez cette date au jour où vous lancez votre site
const DATE_DEMARRAGE = new Date('2025-01-20');

// Nombre de jours d'archives à afficher
const NB_JOURS_ARCHIVES = 7;

// ========================================
// FONCTIONS UTILITAIRES
// ========================================

/**
 * Calculer le nombre de jours écoulés depuis le démarrage du site
 * @returns {number} Nombre de jours
 */
function joursDepuisDemarrage() {
    const aujourdhui = new Date();
    aujourdhui.setHours(0, 0, 0, 0);
    
    const demarrage = new Date(DATE_DEMARRAGE);
    demarrage.setHours(0, 0, 0, 0);
    
    const diffTemps = aujourdhui - demarrage;
    const diffJours = Math.floor(diffTemps / (1000 * 60 * 60 * 24));
    
    return diffJours;
}

/**
 * Obtenir l'anecdote pour un jour donné
 * @param {number} jourOffset - Nombre de jours avant aujourd'hui (0 = aujourd'hui, 1 = hier, etc.)
 * @returns {Object|null} Objet anecdote avec métadonnées ou null
 */
function obtenirAnecdotePourJour(jourOffset = 0) {
    const jourActuel = joursDepuisDemarrage() - jourOffset;
    
    // Si le jour est négatif (avant le démarrage), retourner null
    if (jourActuel < 0) return null;
    
    // Calculer l'index avec rotation (modulo)
    const index = jourActuel % anecdotes.length;
    
    return {
        ...anecdotes[index],
        numeroJour: jourActuel + 1,
        indexAnecdote: index + 1,
        totalAnecdotes: anecdotes.length
    };
}

/**
 * Formater une date en français
 * @param {Date} date - Date à formater
 * @returns {string} Date formatée
 */
function formaterDate(date) {
    return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Obtenir une date X jours avant aujourd'hui
 * @param {number} joursAvant - Nombre de jours à soustraire
 * @returns {Date} Date calculée
 */
function obtenirDateAvant(joursAvant) {
    const date = new Date();
    date.setDate(date.getDate() - joursAvant);
    return date;
}

// ========================================
// AFFICHAGE ANECDOTE DU JOUR
// ========================================

/**
 * Afficher l'anecdote du jour dans la section principale
 */
function afficherAnecdoteDuJour() {
    const anecdote = obtenirAnecdotePourJour(0);
    
    if (!anecdote) {
        const anecdoteElement = document.getElementById('anecdote-jour');
        if (anecdoteElement) {
            anecdoteElement.textContent = "Le site n'a pas encore démarré ! Revenez après le " + formaterDate(DATE_DEMARRAGE);
        }
        return;
    }
    
    // Afficher la date d'aujourd'hui
    const dateElement = document.getElementById('date-jour');
    if (dateElement) {
        dateElement.textContent = formaterDate(new Date());
    }
    
    // Afficher le numéro de l'anecdote
    const numeroElement = document.getElementById('numero-anecdote');
    if (numeroElement) {
        numeroElement.textContent = `Anecdote n°${anecdote.numeroJour} (${anecdote.indexAnecdote}/${anecdote.totalAnecdotes} dans le cycle)`;
    }
    
    // Afficher le texte de l'anecdote
    const anecdoteElement = document.getElementById('anecdote-jour');
    if (anecdoteElement) {
        anecdoteElement.textContent = anecdote.texte;
    }
    
    // Afficher la source avec lien cliquable
    const sourceElement = document.getElementById('source-jour');
    if (sourceElement) {
        sourceElement.innerHTML = `Source : <a href="${anecdote.lien}" target="_blank" rel="noopener noreferrer">${anecdote.source}</a>`;
    }
}

// ========================================
// AFFICHAGE ARCHIVES
// ========================================

/**
 * Afficher la liste des anecdotes archivées
 */
function afficherArchives() {
    const archivesListe = document.getElementById('archives-liste');
    if (!archivesListe) return;
    
    // Mettre à jour le nombre de jours dans l'info
    const nbJoursElement = document.getElementById('nb-jours-archives');
    if (nbJoursElement) {
        nbJoursElement.textContent = NB_JOURS_ARCHIVES;
    }
    
    archivesListe.innerHTML = '';
    
    const joursTotal = joursDepuisDemarrage();
    
    // Si le site vient de démarrer (jour 0)
    if (joursTotal < 1) {
        archivesListe.innerHTML = '<p style="color: #666; font-style: italic;">Aucune archive pour le moment. Revenez demain pour voir l\'anecdote d\'aujourd\'hui dans les archives !</p>';
        return;
    }
    
    // Calculer combien de jours d'archives afficher
    const nbArchives = Math.min(NB_JOURS_ARCHIVES, joursTotal);
    
    // Créer les archives (du plus récent au plus ancien)
    for (let i = 1; i <= nbArchives; i++) {
        const anecdote = obtenirAnecdotePourJour(i);
        
        if (!anecdote) continue;
        
        const dateArchive = obtenirDateAvant(i);
        
        const archiveItem = document.createElement('div');
        archiveItem.className = 'archive-item';
        archiveItem.innerHTML = `
            <div class="archive-date">${formaterDate(dateArchive)} - Anecdote n°${anecdote.numeroJour}</div>
            <div class="archive-preview">${anecdote.texte.substring(0, 150)}...</div>
            <div class="btn-toggle" data-index="${i}">▼ Lire la suite</div>
            <div class="archive-full" id="archive-${i}">
                <div class="archive-full-text">${anecdote.texte}</div>
                <div class="archive-source">
                    Source : <a href="${anecdote.lien}" target="_blank" rel="noopener noreferrer">${anecdote.source}</a>
                </div>
            </div>
        `;
        archivesListe.appendChild(archiveItem);
    }
    
    // Ajouter les écouteurs d'événements après création
    ajouterEcouteursArchives();
}

/**
 * Ajouter les écouteurs d'événements sur les boutons toggle
 */
function ajouterEcouteursArchives() {
    const boutons = document.querySelectorAll('.btn-toggle');
    
    boutons.forEach(bouton => {
        bouton.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            toggleArchive(index);
        });
    });
}

/**
 * Afficher/masquer le contenu complet d'une archive
 * @param {string} index - Index de l'archive à toggle
 */
function toggleArchive(index) {
    const archiveFull = document.getElementById(`archive-${index}`);
    const btnToggle = document.querySelector(`.btn-toggle[data-index="${index}"]`);
    
    if (!archiveFull || !btnToggle) return;
    
    const isActive = archiveFull.classList.contains('active');
    
    // Fermer toutes les archives
    document.querySelectorAll('.archive-full').forEach(el => {
        el.classList.remove('active');
    });
    
    // Réinitialiser tous les boutons
    document.querySelectorAll('.btn-toggle').forEach(btn => {
        btn.textContent = '▼ Lire la suite';
    });
    
    // Si l'archive n'était pas active, l'ouvrir
    if (!isActive) {
        archiveFull.classList.add('active');
        btnToggle.textContent = '▲ Masquer';
    }
}

// ========================================
// PARTAGE SUR RÉSEAUX SOCIAUX
// ========================================

/**
 * Partager l'anecdote du jour sur les réseaux sociaux
 * @param {string} reseau - 'twitter' ou 'facebook'
 */
function partager(reseau) {
    const anecdote = obtenirAnecdotePourJour(0);
    if (!anecdote) return;
    
    const texte = encodeURIComponent(anecdote.texte.substring(0, 200) + "... #GaiSavoir");
    const url = encodeURIComponent(window.location.href);
    
    let lienPartage;
    
    if (reseau === 'twitter') {
        lienPartage = `https://twitter.com/intent/tweet?text=${texte}&url=${url}`;
    } else if (reseau === 'facebook') {
        lienPartage = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    }
    
    if (lienPartage) {
        window.open(lienPartage, '_blank', 'width=600,height=400');
    }
}

// ========================================
// INITIALISATION
// ========================================

/**
 * Initialiser l'application au chargement de la page
 */
function initialiser() {
    afficherAnecdoteDuJour();
    afficherArchives();
    
    console.log(`🎓 Le Gai Savoir Quotidien initialisé`);
    console.log(`📊 ${anecdotes.length} anecdotes disponibles`);
    console.log(`📅 Jour ${joursDepuisDemarrage() + 1} depuis le démarrage`);
}

// Lancer l'initialisation quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
} else {
    initialiser();
}
