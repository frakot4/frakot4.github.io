import pizza from "../../assets/img/pizza.jpg"
import NAO from "../../assets/img/NAO.jpg"
import job_application from "../../assets/img/job_appli.jpg"
export default function Projects() {
    return (
        <div className="p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>

            {/* Timeline */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-center mb-6">Chronologie</h2>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box">2024 | création d'une application java pour la gestion de pizzeria</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box">2025 | projet robotique : mise en place d'un cache cache entre 2 robots nao</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box">2025 | création d'un site web type 'job application' </div>
                        <hr />
                    </li>
                </ul>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {/* Card 1 */}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={pizza}
                            alt="Project pizzza" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">2024 | projet pizza</h2>
                        <p>J'ai développé une application Java Swing respectant le modèle MVC et connectée à une base de données MariaDB, destinée à aider les livreurs de pizza à gérer l'intégralité de leur tournée, depuis l'authentification et la sélection des commandes jusqu'au suivi chronométré et à la validation de la livraison chez le client.</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/frakot4/projet_pizza" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Voir plus</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={NAO}
                            alt="Project NAO" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">2025 | projet NAO</h2>
                        <p>Mise en place d'une virtualisation du terrain de jeu, calcul du chemin optimal pour le chercheur, et suivi des déplacements du robot chercheur via caméra et marqueurs 3D.</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={job_application}
                            alt="Project 3" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">2025 | projet job application</h2>
                        <p>mise en place d'un site web type de gestion des candidatures de stages (entreprises et étudiants) </p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/frakot4/projet_webdev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Voir plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
