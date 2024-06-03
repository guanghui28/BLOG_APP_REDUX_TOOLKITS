import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated, getPostById } from "./PostsSlice";
import { useParams, useNavigate } from "react-router-dom";

export default function AddPostForm() {
	const { postId } = useParams();
	const navigate = useNavigate();
	const post = useSelector((state) => getPostById(state, postId));
	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.content);
	const dispatch = useDispatch();

	const onSavePostClicked = () => {
		if (!title || !content) return;

		dispatch(
			postUpdated({
				title,
				content,
				id: postId,
			})
		);

		setContent("");
		setTitle("");
		navigate(`/posts/${postId}`);
	};

	return (
		<section>
			<h2>Edit Post</h2>
			<form>
				<label htmlFor="postTitle">Post Title:</label>
				<input
					id="postTitle"
					name="postTitle"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="postContent">Post Content:</label>
				<textarea
					id="postContent"
					name="postContent"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>

				<button type="button" onClick={onSavePostClicked}>
					Save post
				</button>
			</form>
		</section>
	);
}
