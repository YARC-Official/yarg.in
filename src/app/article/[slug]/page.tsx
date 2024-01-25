import Header from '@/components/Header';
import styles from './article.module.css';
import Tag from '@/components/Tag';
import Image from "next/image";
import { articleTypes } from '@/utils/news';

type Props = {
  params: {
    slug: string,
  }
};

const ArticlePage: React.FC<Props> = ({ params }) => {
  const type = articleTypes["announcement"];

  return (<>
    <Header mode="transparent" className={styles.hero}>
      <div className={styles.info}>
        <Tag color={type?.color}> {type?.text} </Tag>
        <div className={styles.title}>YARG 0.12.0 IS HERE!</div>
      </div>

      <div className={styles.banner}>
        <Image src={"https://news.yarg.in/images/banners/generic.webp"} alt="Article Banner" fill={true} />
      </div>
    </Header>


  </>);
}

export default ArticlePage;