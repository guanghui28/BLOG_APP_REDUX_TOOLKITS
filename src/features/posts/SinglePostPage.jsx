import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "./PostsSlice";

export default function SinglePostPage() {
	const { postId } = useParams();
	const post = useSelector((state) => getPostById(state, postId));

	if (!post) {
		return (
			<section>
				<h2>Post not found!</h2>
			</section>
		);
	}

	return (
		<section>
			<article className="post">
				<h2>{post.title}</h2>
				<p className="post-content">{post.content}</p>
			</article>
		</section>
	);
}
