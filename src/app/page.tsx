import Image from 'next/image';
import styles from './page.module.css';
import { ListItem } from '@/components/ListItem';

export default function Home() {
  return (
    <main className={styles.container}>
      <Image
        src="/icon.png"
        alt="高橋秀明のアイコン"
        className={styles.icon}
        width={200}
        height={200}
        priority
      />
      <h1 className={styles.name}>高橋 秀明</h1>
      <p className={styles.catchphrase}>
        Web and App Developer。CSSを愛し、CSSに愛されたエンジニア。
      </p>
      <section className={styles.section}>
        <h2>プロフィール</h2>
        <ul>
          <ListItem text="生年月日: 1998/06/02" />
          <ListItem text="好きな食べ物: メロン" />
          <ListItem text="趣味: 旅行" />
          <ListItem text="目標: 47都道府県制覇" />
        </ul>
      </section>
      <section className={styles.section}>
        <h2>職歴</h2>
      </section>
      <section className={styles.section}>
        <h2>リンク</h2>
      </section>
    </main>
  );
}
