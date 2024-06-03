import { useSelector } from "react-redux";
import { getUserById } from "../features/users/usersSlice";

export default function PostAuthor({ userId }) {
	const author = useSelector((state) => getUserById(state, userId));
	return <span>by {author ? author.name : "Unknown author"}</span>;
}
