import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div>
        <h2>
            Page Not Found.
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos rerum, voluptatum quaerat illum aspernatur nemo dolores velit quod ipsum. Iure, quidem! Ab dolor aut debitis magni rem consectetur nihil sunt. Perferendis atque possimus sapiente officiis suscipit consequatur sequi consequuntur eligendi itaque placeat iusto dolorem, delectus explicabo quisquam expedita non pariatur perspiciatis dolores ullam doloribus, reiciendis alias eius enim. Odio aut maiores, reprehenderit omnis optio veritatis quibusdam excepturi. A pariatur magni ullam corrupti amet est quo alias officiis voluptatibus, nesciunt, veritatis aperiam autem laudantium accusamus consequatur soluta sequi.</p>
        <p>Go to <Link to="/">Homepage</Link>.</p>
    </div>
  )
}

export default NotFound;
