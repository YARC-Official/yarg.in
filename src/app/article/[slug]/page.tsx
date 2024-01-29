import Header from '@/components/Header';
import styles from './article.module.css';
import Tag from '@/components/Tag';
import Image from "next/image";
import { articleTypes, getArticle } from '@/utils/news';
import { NEWS_DEFAULT_BANNER, NEWS_IMAGES_URL } from '@/utils/constants';
import Footer from '@/components/Footer';
import Markdown from 'react-markdown';

type Props = {
  params: {
    slug: string,
  }
};

const ArticlePage: React.FC<Props> = async ({ params }) => {
  const article = await getArticle(params.slug);
  const type = articleTypes[article.type];

  return (<>
    <Header mode="transparent" className={styles.hero}>
      <div className={styles.info}>
        <Tag color={type?.color}> {type?.text} </Tag>
        <div className={styles.title}>{article.title}</div>
      </div>

      <div className={styles.banner}>
        <Image src={article.banner ? `${NEWS_IMAGES_URL}/banners/${article.banner}` : NEWS_DEFAULT_BANNER} priority={true} alt="Article Banner" fill={true} />
      </div>
    </Header>

    <main className={styles.main}>
      <div className={styles.content}>
        <Markdown>{article.content}</Markdown>
      </div>
    </main>

    <Footer />
  </>);
}

export default ArticlePage;