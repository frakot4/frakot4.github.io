import logo_91 from "../../assets/logo/logo_departement_essonne.png"
import logo_caseware from "../../assets/logo/logo_caseware.png"
import { Link } from 'react-router-dom';


export default function Experience() {
    return (
        <div className="p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8">Expériences</h1>

            <div className="flex flex-wrap justify-center gap-6">
                {/* experience caseware (1)*/}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={logo_caseware}
                            alt="Experience 1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Caseware</h2>
                        <p>conception et au développement d'extensions fonctionnelles pour un logiciel d'expertise comptable</p>
                        <div className="card-actions justify-end">
                            <Link to="/experience/1" className="btn btn-secondary">Détails</Link>
                        </div>
                    </div>
                </div>

                {/* experience DSI Essonne (2)*/}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={logo_91}
                            alt="Experience 2" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">DSI Essonne
                            <div className="badge badge-secondary">LATEST</div>
                        </h2>
                        <p>Maintenance corrective et évolutive de l’application de gestion de la mise en relation entre les associations de l’Essonne et les instituts de formations</p>
                        <div className="card-actions justify-end">
                            <a href="https://formasso.essonne91.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">REDIRECTION</a>
                            <Link to="/experience/2" className="btn btn-secondary">Détails</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
