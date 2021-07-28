export const createComment = (selectedPost: any, data: any) => {
    const { name, email, body } = data;
    return {
        postId: selectedPost,
        id: Math.random(),
        name: name,
        email: email,
        body: body,
    };
}