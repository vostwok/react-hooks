import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

export default function UseMemo() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState([]);
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => resp.json())
        .then((resp) => setPosts(resp));
    }, 5000);
  }, []);
  console.log('pai renderizou');

  return (
    <div>
      <p>
        <input
          type={'search'}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </p>
      {useMemo(() => {
        return posts.length > 0 ? (
          posts.map((posts) => {
            return <Post key={posts.id} post={posts} />;
          })
        ) : (
          <p> Ainda não existem registro</p>
        );
      }, [posts])}
      {posts.length <= 0 && <p> Ainda não existem registro</p>}
    </div>
  );
}
