import { useLoaderData, Link, Outlet } from 'react-router-dom';

const Careers = () => {
    const careers = useLoaderData();
    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={`${career.id}`} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}

            <Outlet />
        </div>
    )
}

export default Careers;

export const careersLoader = async () => {
    const res = await fetch("http://localhost:4000/careers");
    return res.json();
}