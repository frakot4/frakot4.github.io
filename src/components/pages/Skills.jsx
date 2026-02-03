
export default function Skills() {
    return (
        <div className="p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-12">Compétences</h1>

            <div className="flex flex-col gap-12 w-full max-w-6xl">

                {/* Catégorie Système d'exploitation */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Systèmes d'exploitation</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <div className="card bg-primary text-primary-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Windows</h2>
                                <p>OS Principal</p>
                            </div>
                        </div>
                        <div className="card bg-primary text-primary-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Linux</h2>
                                <p>Ubuntu, Debian, RedHat, Kali
                                    <br />
                                    (full CLI or GUI)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Catégorie Versionnage */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Versionnage & CI/CD</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <div className="card bg-secondary text-secondary-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">GitHub</h2>
                                <p>Gestion de projet, Actions</p>
                            </div>
                        </div>
                        <div className="card bg-secondary text-secondary-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">GitLab</h2>
                                <p>CI/CD Pipelines</p>
                            </div>
                        </div>
                        <div className="card bg-secondary text-secondary-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Gitea</h2>
                                <p>Self-hosted Git service</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Catégorie Langages & Web */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Langages de programmation & Web</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <div className="card bg-accent text-accent-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">C / C++ / C#</h2>
                                <p>.NET Framework</p>
                            </div>
                        </div>
                        <div className="card bg-accent text-accent-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Java</h2>
                                <p>Swing</p>
                            </div>
                        </div>
                        <div className="card bg-accent text-accent-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Python</h2>
                                <p>Django, Scripting</p>
                            </div>
                        </div>
                        <div className="card bg-accent text-accent-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">HTML / CSS</h2>
                            </div>
                        </div>
                        <div className="card bg-accent text-accent-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">JavaScript</h2>
                                <p>Angular, React</p>
                            </div>
                        </div>
                        <div className="card bg-accent text-accent-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">PHP</h2>
                                <p>CakePHP</p>
                            </div>
                        </div>
                        <div className="card bg-accent text-accent-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">SGBD</h2>
                                <p>SQLite, MariaDB, MySQL, PostgreSQL</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Catégorie Application & Déploiement (Bonus from image context) */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Application, Déploiement & Autres</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <div className="card bg-neutral text-neutral-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Mobile & Container</h2>
                                <p>Android Studio(java), Docker (fichiers YAML), Kubernetes, scripts bash</p>
                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content w-80 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Hardware & Game Dev</h2>
                                <p>Unity, Arduino</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
