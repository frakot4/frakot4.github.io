
export default function Home() {
    return (
        <div className="hero bg-base-100 py-10">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold mb-8">Qui je suis ?</h1>

                    <p className="py-2 text-lg text-justify">
                        Je suis Fanatitra Rakotomavo, développeur en formation actuellement en 3ᵉ année de BUT Informatique, spécialisé en conception et développement d’applications. Titulaire d’un Bac STI2D option SIN, j’ai développé très tôt un intérêt pour le développement informatique et les systèmes numériques
                    </p>

                    <p className="py-2 text-lg text-justify">
                        Ce qui me motive dans mon métier, ce n’est pas seulement d’écrire du code, mais de lui donner du sens. J’aime comprendre les besoins des équipes métier, collaborer étroitement avec elles et satisfaire leurs problématiques du quotidien avec des solutions concrètes. Voir une application que j’ai développée être utilisée, faciliter un processus ou améliorer l’efficacité au jour le jour est ce qui donne toute sa valeur à mon travail.
                    </p>

                    <p className="py-2 text-lg text-justify">
                        Lors de mon expérience de stage en milieu professionnel, j’ai travaillé sur des applications web complètes en PHP avec CakePHP, en interaction avec les équipes et dans un contexte réel de production. En parallèle, mes projets académiques et personnels m’ont permis de renforcer mes compétences en Java, Python, ainsi qu’en bases de données MySQL et PostgreSQL.
                    </p>

                    <p className="py-2 text-lg text-justify">
                        Curieux et autonome, je me suis également formé en autodidacte aux technologies front-end, notamment Angular et surtout React, afin d’élargir mon champ de compétences et d’avoir une vision plus complète des projets. Rigoureux, orienté solution et sensible à la qualité du code, je recherche aujourd’hui des projets où la collaboration, l’impact concret et la valeur métier sont au cœur du développement. Mon objectif est d’évoluer vers un poste de développeur full stack, en continuant à monter en compétences sur des technologies modernes.
                    </p>
                    <div className="mt-8">
                        <a href="/FANATITRA_RAKOTOMAVO_CV.pdf" download="FANATITRA_RAKOTOMAVO_CV.pdf" className="btn btn-primary text-white font-bold">
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
