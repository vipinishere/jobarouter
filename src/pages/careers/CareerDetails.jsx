import { useLoaderData} from 'react-router-dom'

function CareerDetails() {
    const career = useLoaderData();
  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio recusandae sint aut totam suscipit deserunt eaque, ea nemo dolores illo sapiente tenetur reiciendis ut at, perferendis, natus dolor? Nihil dolores magnam illum labore aperiam itaque quam reprehenderit error eligendi est!</p>
        </div>
    </div>
  )
}

export default CareerDetails;

export const careerDatailsLoader = async({params})=>{
  const {id} = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw Error('Could not find that career.')
  }

  return res.json();
}