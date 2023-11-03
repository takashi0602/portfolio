import Image from 'next/image';
import styles from './page.module.css';
import { ListItem } from '@/components/ListItem';

export default function Home() {
  return (
    <main className={styles.container}>
      <Image
        src="/icon.png"
        alt="たかしのアイコン"
        className={styles.icon}
        width={200}
        height={200}
        priority
      />
      <h1 className={styles.name}>
        たかし<span className={styles.alias}>（本名: 高橋 秀明）</span>
      </h1>
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
            isLink
            text="株式会社ゆめみ"
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
            isLink
            text="株式会社インパス"
            href="https://www.impath.co.jp/"
            period="（2019/12 ~ 2021/03）"
            employmentStatus="パートタイム"
          >
            <ul>
              <ListItem text="Reactを使用したWeb Viewでのネイティブアプリの開発" />
              <ListItem text="Firebaseを使用したWebアプリの開発" />
            </ul>
          </ListItem>
          <ListItem
            isLink
            text="株式会社chatbox"
            href="https://chatbox-inc.com/"
            period="（2017/07 ~ 2019/12）"
            employmentStatus="パートタイム"
          >
            <ul>
              <ListItem text="Laravelを使用したREST APIの開発" />
              <ListItem text="Nuxtを使用したWebサイトやWebアプリの開発" />
            </ul>
          </ListItem>
          <ListItem
            isLink
            text="大阪情報コンピュータ専門学校"
            href="https://www.oic.ac.jp/"
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
        <ul>
          <ListItem isLink text="X" href="https://twitter.com/takashimelon" />
          <ListItem isLink text="GitHub" href="https://github.com/takashi0602" />
          <ListItem isLink text="Qiita" href="https://qiita.com/takashimelon" />
          <ListItem isLink text="Zenn" href="https://zenn.dev/takashimelon" />
          <ListItem isLink text="note" href="https://note.com/takashimelon" />
          <ListItem isLink text="Speaker Deck" href="https://speakerdeck.com/takashimelon" />
          <ListItem isLink text="LAPRAS" href="https://lapras.com/public/ABBS1PW" />
          <ListItem isLink text="Wantedly" href="https://www.wantedly.com/id/takashi0602" />
        </ul>
      </section>
    </main>
  );
}
