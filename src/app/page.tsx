import Image from 'next/image';
import styles from './page.module.css';

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
