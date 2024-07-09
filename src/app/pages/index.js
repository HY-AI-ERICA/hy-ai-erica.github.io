// src/app/pages/index.js
import Header from '../components/Header';
import Post from '../components/Post';
import Footer from '../components/Footer';

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
