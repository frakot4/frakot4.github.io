
import logo_91 from '../assets/logo/logo_departement_essonne.png';
import logo_GFASS from '../assets/logo/logo_GFASS.png';
import logo_eficloud from '../assets/logo/Eficloud.webp';
import logo_caseware from '../assets/logo/logo_caseware.png';

export const experiences = [
    {
        id: 1,
        title: "Caseware - EfiCloud",
        badge: null,
        imageUrl: logo_eficloud,
        imageUrl_1: logo_caseware,
        shortDescription: "Stage équipe produit EfiCloud",
        fullDescription: "J'ai effectué mon stage chez Caseware France, éditeur de logiciels pour l'audit et l'expertise comptable, où j'ai intégré l'équipe dédiée au produit EfiCloud . Cette solution SaaS (100% Cloud), conçue pour la gestion des états financiers et des déclarations fiscales, avait pour enjeu stratégique l'adaptation de la technologie internationale du groupe aux spécificités normatives et fiscales du marché français .",
        missionTitle: "Missions",
        missionDescription: "Ma mission s'est concentrée sur le développement de formulaires interactifs via la librairie propriétaire SE-Builder (basée sur le framework Angular), nécessitant une transcription fidèle des documents officiels CERFA . Ce travail de mise en forme s'accompagnait d'une programmation de la logique métier en JavaScript, incluant l'implémentation de calculs automatisés, la gestion de l'affichage conditionnel des données antérieures (N-1) ainsi que la création de scripts de diagnostic pour vérifier la conformité des données comptables importées .",
        duration: "mai - juillet 2024",
        role: "Développeur",
        stackFront: ["HTML/CSS", "Angular", "JavaScript", "SE-Builder"],
        stackBack: [],
        externalLink: null
    },
    {
        id: 2,
        title: "GFASS - DSI Essonne",
        badge: "LATEST",
        imageUrl: logo_GFASS,
        imageUrl_1: logo_91,
        shortDescription: "Stagiaire Développeur full-stack CakePHP",
        fullDescription: "J'ai intégré le service \"SI Opérationnels et Collèges\" de la Direction des Systèmes d’Information du Conseil départemental de l’Essonne pour contribuer au projet GFASS (Gestion des Formations aux Associations). Ce système applicatif, essentiel pour la mise en relation entre les associations du territoire et les organismes de formation, repose sur une architecture double comprenant un front-office ouvert au public et un back-office réservé à la gestion administrative. L'objectif central de ma mission visait à assurer la maintenance évolutive de cet écosystème tout en pilotant sa modernisation technique et sa sécurisation, dans un contexte de migration majeure vers la version 4.5 du framework CakePHP.",
        missionTitle: "Missions",
        missionDescription: "Mon intervention a couvert l'ensemble de la chaîne applicative. Sur le volet Back-office, je me suis attelé à la résorption de la dette technique héritée de migrations antérieures incomplètes. Cela a impliqué l'analyse et la refactorisation de contrôleurs complexes ainsi que la mise en conformité des vues avec les standards modernes (helpers, affichage conditionnel), tout en optimisant les fonctionnalités de recherche pour améliorer l'expérience des agents.\n\nParallèlement, j'ai mené la migration complète du Front-office (de CakePHP 3.5 vers 4.5), nécessitant une réécriture approfondie de la couche MVC pour éliminer le code déprécié. J'ai également renforcé la sécurité globale de l'application, notamment par la mise en place d'une gestion de sessions robuste et d'un système d'authentification différencié selon les profils utilisateurs (bénévoles ou prestataires), validant chaque évolution par des tests directs en base PostgreSQL.",
        environmentDescription: "Évoluant au sein d'une équipe projet structurée, j'ai travaillé en cycle court avec des points de suivi hebdomadaires et un processus de recette fonctionnelle rigoureux en lien direct avec les utilisateurs métier. Ce stage a exigé une forte autonomie technique, l'environnement de développement reposant sur des machines virtuelles (Linux/Windows) accessibles via des protocoles sécurisés (Wallix Bastion, authentification forte), nécessitant souvent une intervention directe en ligne de commande via nano ou vim pour l'édition de fichiers.",
        duration: "janvier - mai 2025",
        role: "Stagiaire Développeur",
        stackFront: ["HTML/CSS", "JavaScript", "CakePHP 3.5/4.5"],
        stackBack: ["CakePHP 3.5/4.5", "PostgreSQL"],
        externalLink: "https://formasso.essonne91.fr/"
    }
];

export const getExperienceById = (id) => {
    return experiences.find(exp => exp.id === parseInt(id));
};
