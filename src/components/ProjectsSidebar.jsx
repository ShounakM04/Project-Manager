// ProjectsSidebar.jsx
import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-white md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>Add Project</Button>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>{project.title}</li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
