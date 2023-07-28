
import BannerBtn from "./bannerBtn"
import BannerHead from './bannerHead'
import BannerImage from './bannerImage'
import BannerParagraph from './bannerParagraph'
import classes from './bannerSection.module.css'
function BannerSection(){
    return(
        <div className={classes.section}>
           <div className ={classes.sectionOne}>
               <BannerHead/>
               <BannerParagraph/>
               <BannerBtn/>
           </div>
           <div className={classes.sectionTwo}>
             <BannerImage/>
           </div>
        </div>
    

    )
}

export default BannerSection