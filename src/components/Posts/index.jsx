import { useContext, useEffect, useRef } from 'react';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/ExampleProvider/actions';
import { CounterContext } from '../../contexts/ExampleProvider/constext';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/constext';

export const Posts = () => {
  const isMounteds = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounteds.current) {
        dispatch();
      }
    });

    return () => {
      isMounteds.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h3> Contador: {counterState.counter}</h3>
      <button onClick={() => incrementCounter(counterDispatch)}>+</button>{' '}
      <button onClick={() => decrementCounter(counterDispatch)}>-</button>
      <h1>Posts</h1>
      {postsState.loading && <h3>Carregando posts...</h3>}
      {postsState.posts != undefined
        ? postsState.posts.map((posts) => <p key={posts.id}>{posts.title}</p>)
        : ''}
    </div>
  );
};
