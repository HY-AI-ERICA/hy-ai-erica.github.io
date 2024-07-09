// src/app/components/Post.js
const Post = ({ post }) => (
    <li>
      <a href={post.link} className="block p-4 hover:bg-gray-100">
        <div className="flex items-center">
          <img src={post.thumbnail} alt="" className="w-24 h-24 mr-4" />
          <div>
            <div className="text-sm text-gray-500">{post.category}</div>
            <h3 className="text-lg font-bold">{post.title}</h3>
            <dl className="text-sm text-gray-500">
              <dt className="sr-only">작성자</dt>
              <dd>{post.author}</dd>
              <dt className="sr-only">날짜</dt>
              <dd>{post.date}</dd>
            </dl>
          </div>
        </div>
      </a>
    </li>
  );
  
  export default Post;
  