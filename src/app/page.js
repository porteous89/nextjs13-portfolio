import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Porteous89</h1>
        <p className={styles.desc}>Web Developer</p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  );
}
