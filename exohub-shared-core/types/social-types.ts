export interface Post {
  id: string;
  authorId: string;
  title: string;
  content: string;
  category: 'qna' | 'showcase' | 'market';
  createdAt: string;
  likes: number;
}
