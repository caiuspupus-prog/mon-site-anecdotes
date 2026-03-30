// ========================================
// LE GAI SAVOIR QUOTIDIEN
// Système de rotation automatique d'anecdotes
// ========================================

// ========================================
// BASE DE DONNÉES D'ANECDOTES
// ========================================
// Ajoutez autant d'anecdotes que vous voulez ici
// Elles tourneront automatiquement en boucle

const anecdotes = [
    {
        texte: "En 1969, lors de la mission Apollo 11, Buzz Aldrin a célébré la communion sur la Lune. Il a bu du vin et mangé du pain dans le module lunaire, faisant de la Lune le premier corps céleste où un sacrement chrétien a été célébré.",
        source: "NASA Archives - Apollo 11 Mission Report",
        lien: "https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html"
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
    }
];

// ========================================
// CONFIGURATION
// ========================================

// Date de démarrage du site (première anecdote)
// Modifiez cette date selon quand vous lancez votre site
const DATE_DEMARRAGE = new Date('2025-01-15');

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
