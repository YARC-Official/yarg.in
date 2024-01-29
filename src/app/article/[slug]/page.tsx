import Header from '@/components/Header';
import styles from './article.module.css';
import Tag from '@/components/Tag';
import Image from "next/image";
import { articleTypes, generateBannerURL, getArticle } from '@/utils/news';
import { NEWS_DEFAULT_BANNER, NEWS_IMAGES_URL } from '@/utils/constants';
import Footer from '@/components/Footer';
import Markdown from 'react-markdown';
import Author from '@/components/News/Author';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {
    slug: string,
  }
};

export async function generateMetadata({params}: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const article = await getArticle(params.slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: article.title,
    openGraph: {
      images: article.banner ? generateBannerURL(article.banner) : previousImages
    }
  }
}

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
        <Image src={article.banner ? generateBannerURL(article.banner) : NEWS_DEFAULT_BANNER} priority={true} alt="Article Banner" fill={true} />
      </div>
    </Header>

    <main className={styles.main}>
      <div className={styles.authors}>
        {
          article.authors.map(author => <Author key={author.displayName} {...author} />)
        }
      </div>

      <div className={styles.content}>
        <Markdown>{article.content}</Markdown>
      </div>
    </main>

    <Footer />
  </>);
}

export default ArticlePage;