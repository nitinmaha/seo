import Button from "@/components/Button/Button";
import styles from "./page.module.scss";
import OurService from "@/components/Pages/Home/OurService/OurService";
import Portfolio from "@/components/Pages/Home/Portfolio/Portfolio";
import WhyChoose from "@/components/Pages/Home/WhyChoose/WhyChoose";
import Elevate from "@/components/Pages/Home/Elevate/Elevate";
import Blogs from "@/components/Pages/Home/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import Reviews from "@/components/Pages/Home/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.bannerContent}>
            <h1>A Digital Agency With a Passion for Marketing</h1>
            <p>
              The ultimate digital marketing agencies with years of experience,
              we understand the need to create a robust online sight for brands,
              no matter how big or small.
            </p>
            <div>
              <Button branding="primary" label="Contact" link="/#" />
            </div>
          </div>
        </div>
      </div>
      <>
        <OurService />
      </>
      <>
        <Portfolio />
      </>
      <>
        <WhyChoose />
      </>
      <>
        <Elevate />
      </>
      <>
        <Blogs />
      </>
      <>
        <Reviews />
      </>
      <>
        <Footer />
      </>
    </>
  );
}
