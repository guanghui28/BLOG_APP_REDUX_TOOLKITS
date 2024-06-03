import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<Home />} />
				<Route path="posts/:postId" element={<SinglePostPage />} />
				<Route path="/editPost/:postId" element={<EditPostForm />} />
			</Route>
		</Routes>
	);
}
