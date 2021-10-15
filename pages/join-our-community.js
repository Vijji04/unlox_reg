import { Container } from "react-bootstrap"
import { landingData } from "../components/data/Landingdata"
import Image from 'next/image'
import Navbar from "../components/Navbar"
import Styles from "../styles/pages/Home.module.scss"
import { landingData2 } from "../components/data2/Landingdata2"
import Custom from "../components/custom"
import Registration from "../components/Registration"

const Home = () => {
  return (
    <>
    
    <Navbar />
    <Custom />
 
    <Container fluid className={Styles.homeContainer}>
    
    <div className={Styles.aboutSec}>
    
            {landingData.map((data, index) => (
              <div className={Styles.deetSection} style={{
                flexDirection:'column'
              }} key={index}>
                <div className={Styles.deets}>
                  <h4 className={Styles.title}>{data.title}</h4>
                  <Image src={data.image} width={"434px"} height={"273"} objectFit="contain" className={Styles.deetImage} />
                  <p className={Styles.theText}>
                    {data.description}
                  </p>
                  {/* {data.icons.map(icon)} */}
                  
                </div>
              </div>
            ))}  
          </div>
          
          <div className={Styles.aboutSec2}>
            <h3 className={Styles.aboutHeading2}>Get industrial hands-on experience in your interested domain</h3>
            {landingData2.map((data, index) => (
              <div className={Styles.deetSection2} style={{
                flexDirection: index % 2 !== 0 ? 'row' : 'row-reverse'
              }} key={index}>
                <div className={Styles.deets2}>
                  <h4 className={Styles.title2}>{data.title}</h4>
                  <p className={Styles.theText2}>
                    {data.description}
                  </p>
                </div>
                <div style={{
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                }} className={Styles.ImageSec2}>
                  <Image src={data.image} width={"308"} height={"316"} objectFit="contain" className={Styles.deetImage2} />
                </div>
              </div>
            ))}
            </div>
      </Container>
      <Registration />
      </>
  )
}

export default Home