import { Link } from 'react-router-dom';
import { Post } from '../../types';
import cls from './ListItem.module.scss';

const ListItem = ({ post }: { post: Post }) => {
  return (
    <div className={cls.postContainer} key={post.currentNumber}>
      {post && (
        <div>
          <div className={cls.title}>
            <b>{post.currentNumber}</b>: {post.title}
          </div>
          <p>{post.body}</p>
          <button>
            <Link to={`/posts/${post.id}`}>Просмотр</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
