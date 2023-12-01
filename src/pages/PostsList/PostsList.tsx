import { useState, useEffect, useRef } from 'react';
import { useGetPostsQuery } from '../../shared/api/postApi';
import { Post } from '../../shared/types';
import cls from './PostsList.module.scss';
import ListItem from '../../shared/ui/ListItem/ListItem';

const PostsList = () => {
  const { data: posts, isLoading } = useGetPostsQuery({});
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [needAddNewPost, setNeedAddNewPost] = useState(true);
  const [addedTime, setAddedTime] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (needAddNewPost && posts && posts.length > 0) {
      const newPosts: Post[] = [];
      for (let i = 0; i < posts.length; i++) {
        newPosts.push({
          id: posts[i].id,
          currentNumber: addedTime + posts[i].id,
          title: posts[i].title,
          body: posts[i].body,
        });
      }
      setDisplayedPosts((prev: Post[]) => [...prev, ...newPosts]);
      setAddedTime((act) => act + 100);
      setNeedAddNewPost(false);
    }
  }, [needAddNewPost, posts]);

  useEffect(() => {
    console.log(containerRef.current);
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', () => {
        const buffer = 200; // Пикселей до нижней границы
        if (
          containerRef.current &&
          containerRef.current.scrollHeight - buffer <
            containerRef.current.offsetHeight + containerRef.current.scrollTop
        ) {
          console.log('need new Post');
          setNeedAddNewPost(true);
        }
      });
    }
  }, []);

  // Рендеринг списка с виртуализацией
  return (
    <div className={cls.container} ref={containerRef}>
      {isLoading ? (
        <div className={cls.text}>Загрузка...</div>
      ) : (
        displayedPosts.map((el) => <ListItem post={el} />)
      )}
    </div>
  );
};

export default PostsList;
