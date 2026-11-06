import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  return <h2>UserID: {userId}</h2>;
}
export default UserDetails;
