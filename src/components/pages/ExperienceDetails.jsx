
import { useParams, Link } from 'react-router-dom';
import { getExperienceById } from '../../data/experiences';

export default function ExperienceDetails() {
    const { id } = useParams();
    const experience = getExperienceById(id);

    if (!experience) {
        return (
            <div className="p-10 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4">Expérience non trouvée</h1>
                <Link to="/experience" className="btn btn-primary">Retour aux expériences</Link>
            </div>
        );
    }

    return (
        <div>
            {/* Hero Section */}
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={experience.imageUrl}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <div className="flex items-center gap-4">
                            <h1 className="text-5xl font-bold">{experience.title}</h1>
                            {experience.badge && (
                                <div className="badge badge-secondary">{experience.badge}</div>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-4 my-4">
                            <div className="badge badge-outline">{experience.duration}</div>
                            <div className="badge badge-outline">{experience.role}</div>
                        </div>

                        <p className="py-6">
                            {experience.fullDescription}
                        </p>
                        <div className="flex gap-4">
                            <Link to="/experience" className="btn btn-secondary">← Retour</Link>
                            {experience.externalLink && (
                                <a href={experience.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Voir le projet
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            {/* Reverse Hero Section */}
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={experience.imageUrl_1}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{experience.missionTitle || "Missions"}</h1>
                        <p className="py-6">
                            {experience.missionDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Environment Section (Conditional) */}
            {experience.environmentDescription && (
                <div className="hero bg-base-200 py-10">
                    <div className="w-full px-10">
                        <h1 className="text-5xl font-bold text-center mb-6">Environnement de travail</h1>
                        <p className="text-lg text-center">
                            {experience.environmentDescription}
                        </p>
                    </div>
                </div>
            )}

            {/* Tech Stack Divider Section */}
            <div className="w-full px-10 py-10">
                <h2 className="text-3xl font-bold text-center mb-8">Stack Technique</h2>
                <div className="flex w-full flex-col lg:flex-row">
                    <div className="card bg-base-300 rounded-box h-48 flex-1 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-2">Front-end</h3>
                        <div className="flex flex-wrap justify-center gap-2 px-4">
                            {experience.stackFront && experience.stackFront.map((tech, idx) => (
                                <div key={idx} className="badge badge-primary">{tech}</div>
                            ))}
                        </div>
                    </div>

                    <div className="divider lg:divider-horizontal">AND</div>

                    <div className="card bg-base-300 rounded-box h-48 flex-1 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-2">Back-end</h3>
                        <div className="flex flex-wrap justify-center gap-2 px-4">
                            {experience.stackBack && experience.stackBack.map((tech, idx) => (
                                <div key={idx} className="badge badge-accent">{tech}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
