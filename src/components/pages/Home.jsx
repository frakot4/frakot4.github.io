
export default function Home() {
    return (
        <div className="hero bg-base-100 py-10">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold mb-8">Qui je suis ?</h1>

                    <p className="py-2 text-lg text-justify">
                        Je suis Fanatitra Rakotomavo, développeur en 3ème année de BUT Informatique, spécialisé en conception et développement d’applications. Issu d’un Bac STI2D (option SIN), mon intérêt pour les systèmes numériques et le développement s'est manifesté très tôt.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 text-left">Ma vision du métier de développeur</h2>
                    <p className="py-2 text-lg text-justify">
                        Ce qui me motive, ce n’est pas seulement l’écriture de code, mais le sens qu’on lui donne. J’aime traduire les besoins des équipes métier en solutions concrètes. Voir une application que j’ai développée faciliter un processus ou améliorer l’efficacité quotidienne des utilisateurs est ce qui donne toute sa valeur à mon travail.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 text-left">Parcours et compétences techniques</h2>
                    <p className="py-2 text-lg text-justify">
                        Lors de mon dernier stage, j’ai conçu des applications web complètes en PHP (CakePHP & PostgreSQL), en immersion totale dans un contexte de production réel (serveurs sans interface graphique). Mes projets académiques m’ont également permis de consolider mes fondamentaux en Java et Python, ainsi que la gestion de données via des SGBD comme MySQL et MariaDB.
                    </p>
                    <p className="py-2 text-lg text-justify">
                        Curieux et autodidacte, j’ai choisi d’explorer l’écosystème JavaScript pour élargir mon champ d’action. Je maîtrise aujourd'hui les technologies modernes telles que React pour le front-end et NestJS pour le back-end, ce qui me permet d'appréhender les projets dans leur globalité.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 text-left">Mon objectif</h2>
                    <p className="py-2 text-lg text-justify">
                        Rigoureux, orienté solution et sensible aux besoins des utilisateurs, je recherche des projets où la collaboration et l’impact métier sont centraux. Mon ambition est d’évoluer vers un poste de Développeur Full Stack, en continuant de monter en compétences sur les architectures modernes.
                    </p>
                    <div className="mt-8">
                        <a href="./FANATITRA_RAKOTOMAVO_CV.pdf" download="FANATITRA_RAKOTOMAVO_CV.pdf" className="btn btn-primary text-white font-bold">
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
