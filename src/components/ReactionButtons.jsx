import { reactionsAdded } from "../features/posts/PostsSlice";
import { useDispatch } from "react-redux";

const reactionEmoji = {
	thumbsUp: "👍",
	hooray: "🎉",
	heart: "❤️",
	rocket: "🚀",
	eyes: "👀",
};

export default function ReactionButtons({ post }) {
	const dispatch = useDispatch();

	const renderedButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
		<button
			key={name}
			type="button"
			className="muted-button reaction-button"
			onClick={() =>
				dispatch(reactionsAdded({ postId: post.id, reaction: name }))
			}
		>
			{emoji} {post.reactions[name]}
		</button>
	));
	return <div>{renderedButtons}</div>;
}
