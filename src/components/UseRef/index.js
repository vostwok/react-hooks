import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id}>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: P.func,
};

export default function UseRef() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState([]);
  console.log('pai renderizou');
  const inpunt = useRef(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp));
  }, []);

  useEffect(() => {
    inpunt.current.focus();
    console.log(inpunt.current);
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div>
      <p>
        <input
          ref={inpunt}
          type={'search'}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </p>
      {useMemo(() => {
        return posts.length > 0 ? (
          posts.map((posts) => {
            return (
              <Post key={posts.id} post={posts} handleClick={handleClick} />
            );
          })
        ) : (
          <p> Ainda não existem registro</p>
        );
      }, [posts])}
      {posts.length <= 0 && <p> Ainda não existem registro</p>}
    </div>
  );
}
