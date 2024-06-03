import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./PostsSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function AddPostForm() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const dispatch = useDispatch();

	const onSavePostClicked = () => {
		if (!title || !content) return;

		dispatch(
			postAdded({
				title,
				content,
				id: nanoid(),
			})
		);

		setContent("");
		setTitle("");
	};

	return (
		<section>
			<h2>Add a new Post</h2>
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
