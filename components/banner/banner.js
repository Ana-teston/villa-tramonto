import styles from "./banner.module.css"

const Banner = (props) => {

  const { title, subTitle, imgUrl } = props;

  return (
    <div className={styles.container}>
        <div className={styles.leftWrapper}>
            <div className={styles.left}>
                {/*<div className={styles.nseriesWrapper}>
                    <p className={styles.firstLetter}>V</p>
                    <p className={styles.series}>I L L A</p>
                    <p className={styles.firstLetter}>T</p>
                    <p className={styles.series}>R A M O N T O</p>
                </div>*/}
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.subTitle}>{subTitle}</h3>
                <div className={styles.playBtnWrapper}>
                    <button className={styles.btnWithGreen}>
                      <span className={styles.playText}>Reservaçoes</span>
                    </button>
                    <button className={styles.btnWithIcon}>
                        <span className={styles.playText}>Play Video</span>
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.bannerImg } style={{backgroundImage: `url(${imgUrl})`,
            width:"100%", height:"100%",
            position:"absolute",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%"}}>
        </div>
    </div>
    )
}

export default Banner;