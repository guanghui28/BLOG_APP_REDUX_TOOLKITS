import AddPostForm from "../features/posts/AddPostForm";
import PostsList from "../features/posts/PostsList";

export default function Home() {
	return (
		<>
			<AddPostForm />
			<PostsList />
		</>
	);
}
