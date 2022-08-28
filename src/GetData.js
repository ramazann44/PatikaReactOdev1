import axios from "axios";

const getData = async () => {

    const userId = Math.floor(Math.random() * 10) + 1;
    const userUrl = "https://jsonplaceholder.typicode.com/users/" + userId;
    const { data: user } = await axios.get(userUrl);
    const postsUrl = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;
    const { data: posts } = await axios.get(postsUrl);

    user.posts = posts;

    return new Promise((resolve, reject) => {
        resolve(user);
    });
}

export default getData;