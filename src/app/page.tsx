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
        <h2>学歴・職歴</h2>
        <ul>
          <ListItem
            text="株式会社ゆめみ"
            isLink
            href="https://www.yumemi.co.jp/"
            period="（2021/04 ~ 現在）"
            employmentStatus="フルタイム"
          >
            <ul>
              <ListItem text="Nuxt / Next.jsを使用したWebアプリの開発" />
              <ListItem text="Flutterを使用したネイティブアプリの開発" />
            </ul>
          </ListItem>
          <ListItem
            text="株式会社インパス"
            href="https://www.impath.co.jp/"
            isLink
            period="（2019/12 ~ 2021/03）"
            employmentStatus="パートタイム"
          >
            <ul>
              <ListItem text="Reactを使用したWeb Viewでのネイティブアプリの開発" />
              <ListItem text="Firebaseを使用したWebアプリの開発" />
            </ul>
          </ListItem>
          <ListItem
            text="株式会社chatbox"
            href="https://chatbox-inc.com/"
            isLink
            period="（2017/07 ~ 2019/12）"
            employmentStatus="パートタイム"
          >
            <ul>
              <ListItem text="Laravelを使用したREST APIの開発" />
              <ListItem text="Nuxtを使用したWebサイトやWebアプリの開発" />
            </ul>
          </ListItem>
          <ListItem
            text="大阪情報コンピュータ専門学校"
            href="https://www.oic.ac.jp/"
            isLink
            period="（2017/04 ~ 2021/03）"
          >
            <ul>
              <ListItem text="ITの基礎を学び、開発や資格の取得に励む" />
              <ListItem text="ITCreate部に所属し、LT会や勉強会、カンファレンスのスタッフを行う" />
              <ListItem text="部員同士でチームを組んでハッカソンやコンテストに出場する" />
            </ul>
          </ListItem>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>リンク</h2>
      </section>
    </main>
  );
}
