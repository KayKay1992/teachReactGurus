// import classes from './index.module.css'
// import Image from 'next/image'

// function Home(){
//   return(
//     <div className={classes.section}>
//     <div className={classes.img}>
//     <Image
//      alt="backgound image"
//      src='/Nine-Pines-Bathroom.jpg'
//      width={500}
//      height={500}
//     />
//     </div>
//     <div className={classes.card}>
//       <h3>INTERIORS & DECOR</h3>
//       <h1>Introducing My First Interior Design Project: A 1980s House Full of Ornate Details</h1>
//       <p>I’ve been designing in a more hands-on capacity outside of my own home. I’m excited to introduce my first interior design project.</p>
//       <button type = "submit">READ POST</button>
//     </div>
//   </div>
//   )
// }
// export default Home
import BannerSection from'@/components/banner/bannerSection'
import classes from './index.module.css'

function Home(){
  return(
    <div className = {classes.section}>
    <BannerSection/>
    </div>
  )
}
export default Home