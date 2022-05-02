import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';
import Header from '../components/Header'

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  return (
    <>
      <Header />
      <h1>teste</h1>
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('TODO');
  console.log(postsResponse)

  return {
    props: {
      uid: 'string',
      first_publication_date: 'string',
      data: {
        title: 'string',
        subtitle: 'string',
        author: 'string',
      },
    }
  }
};
