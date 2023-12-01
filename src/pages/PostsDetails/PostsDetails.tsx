import cls from './PostsDetails.module.scss';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetPostQuery } from '../../shared/api/postApi';

const PostDetails = () => {
  const { postId } = useParams();
  const { data: post, isLoading } = useGetPostQuery(postId);
  const navigate = useNavigate();

  if (isLoading) {
    return <div className={cls.text}>Loading post...</div>;
  }

  if (!post) {
    return <div className={cls.text}>Post not found</div>;
  }

  return (
    <div className={cls.details}>
      <h3>Пост: {post.title}</h3>
      <p>Текст поста: {post.body}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default PostDetails;
