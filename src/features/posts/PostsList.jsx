import { Link } from "react-router-dom";
import { getAllPosts } from "./PostsSlice";
import { useSelector } from "react-redux";

export default function PostsList() {
	const posts = useSelector(getAllPosts);
	console.log(posts);

	const renderedPosts = posts.map((post) => (
		<article className="post-excerpt" key={post.id}>
			<h3>{post.title}</h3>
			<p className="post-content">{post.content.substring(0, 100)}</p>
			<Link to={`/posts/${post.id}`} className="button muted-button">
				View Post
			</Link>
		</article>
	));

	return (
		<section className="posts-list">
			<h2>Post</h2>
			{renderedPosts}
		</section>
	);
}
