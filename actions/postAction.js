export const GET_POSTS = 'get_posts';
export const fetchPosts = () => {
   return {
       type: GET_POSTS,
       payload: ["1st post", "2nd post", "3rd post"],
   }
};
