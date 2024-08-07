import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { htmlToText } from 'html-to-text';

const Card = ({ item }) => {
  // Convert HTML to plain text and limit the description length
  const description = htmlToText(item.desc, {
    wordwrap: 130
  }).substring(0, 250);

  return (
    <div className={styles.post} key={item.id}>
       {item.img && (
      <div className={styles.cardimageContainer}>
        <Image 
          src={item.img} 
          alt={item.title} 
          fill // Updated from layout="fill"
          className={styles.cardimage} 
        />
      </div>
       )}
      <div className={styles.cardTextContainer}>
        <div className={styles.cardDetail}>
          <h3 style={{fontWeight:"300"}} className={styles.date}>
            {item.createdAt.substring(0, 10)}
          </h3>
          <h3>-</h3>
          <h3 className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</h3>
          <h3 style={{fontWeight:"400"}} className={styles.views}>
            <FaEye className={styles.eyeIcon} />
            <span>{item.views}</span>
          </h3>
        </div>
        <Link href={`/blog/posts/${item.slug}`}>
          <h1 style={{color:"var(--title-color)", marginTop:"2rem"}} className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.postDes}>{description}</p>
        <Link className={styles.cardlink} href={`/blog/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
      <hr className={styles.hrStyle}></hr>
    </div>
  );
};

export default Card;
