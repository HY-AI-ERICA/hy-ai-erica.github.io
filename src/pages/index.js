import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const posts = [
  {
    link: '/posts/627',
    thumbnail: 'https://img1.kakaocdn.net/thumb/U728x0/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakao_tech%2Fimage%2F81e5bac6019000001.png',
    category: 'blog',
    title: '주니어 FE 개발자의 색상 추출 라이브러리 개발기',
    author: 'eve.christmas',
    date: '2024.07.08',
  },
  // 추가 포스트 데이터
];

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

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <article>
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          <p className="text-lg mb-8">카카오의 기술, 개발 조직, 문화에 대한 이야기를 들려드려요</p>
          <ul className="space-y-4">
            {posts.map((post) => (
              <Post key={post.link} post={post} />
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </div>
  );
}
