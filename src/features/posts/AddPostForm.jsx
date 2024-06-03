import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./PostsSlice";
import { getAllUsers } from "../users/usersSlice";

export default function AddPostForm() {
	const users = useSelector(getAllUsers);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [userId, setUserId] = useState("");
	const dispatch = useDispatch();

	const canSave = title && content && userId;

	const onSavePostClicked = () => {
		if (!canSave) return;

		dispatch(postAdded(title, content, userId));
		setContent("");
		setTitle("");
	};

	const userOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	return (
		<section>
			<h2>Add a new Post</h2>
			<form>
				<div>
					<label htmlFor="postTitle">Post Title:</label>
					<input
						id="postTitle"
						name="postTitle"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="postAuthor">Post Author:</label>
					<select value={userId} onChange={(e) => setUserId(e.target.value)}>
						<option value="">Select author</option>
						{userOptions}
					</select>
				</div>

				<div>
					<label htmlFor="postContent">Post Content:</label>
					<textarea
						id="postContent"
						name="postContent"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<button type="button" onClick={onSavePostClicked} disabled={!canSave}>
					Save post
				</button>
			</form>
		</section>
	);
}
