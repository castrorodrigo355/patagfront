import { Fragment, useEffect } from "react";
import { Post } from "../../components/post/post";
import { Spinner } from "../../common/spinner/spinner";
import { ErrorTryAgain } from "../../components/errorTryAgain/errorTryAgain";
import "./posts.css";

export const Posts = ({
	errorPosts,
	loadingPosts,
	posts,
	getPosts,
	getCommentsById,
}: any) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div className="posts--main--container">
			{loadingPosts ? (
				<Spinner />
			) : !loadingPosts && errorPosts ? (
				<ErrorTryAgain
					title={"Error Posts. Intente otra vez"}
					onClick={() => getPosts()}
				/>
			) : !loadingPosts && posts ? (
				<div className="posts--main--container--list">
					{posts.map(({ id, ...args }: any) => (
						<Post key={id} {...args} onClick={() => getCommentsById(id)} />
					))}
				</div>
			) : (
				<Fragment />
			)}
		</div>
	);
};
