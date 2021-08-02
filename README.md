1 - Yarn or npm i to install dependencies.
2 - There are three main containers (AppContainer, PostsContainer, CommentsContainers) to connect with redux states and actions to dispatch.
3 - Each container has a main child (App , Posts, Comments) that receive props from their parent container.
4 - Each child view displays its own list.
5 - There is an Error/ Try Again component who is available to repeeat fetchs data (See screenshoots folder).
5 - One post can fetch its comments. We can add comments for a post. Each comment belongs to a post.
6 - Our data is stored locally, if you refresh the browser, need to begin from scratch
7 - We ask for a post comments existence, if exists, get that data or fetch it with redux-thunk. Data is persisted in our redux-store
8 - We have a common action types, action creators, enums, interfaces, combine reducers, async middleware.
9 - Lack availability time for unit tests last days.
10 - Thanks.
