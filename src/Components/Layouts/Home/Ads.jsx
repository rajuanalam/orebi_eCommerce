import Container from "../../Container"
import Flex from "../../Flex"
import Image from "../../Image"
import Adone from "../../../assets/Adone.png"
import Adtwo from "../../../assets/Adtwo.png"
import Adthree from "../../../assets/Adthree.png"
import { Link } from "react-router-dom"

const Ads = () => {
  return (
    <section className="py-32">
        <Container>
            <Flex>
                {/* Ads part left Image start */}
                <div className="pr-10">
                    <Link to="#"><Image src={Adone}/></Link>
                </div>
                {/* Ads part left Image End */}

                {/* Ads part Right Image start */}
                <div>
                    <Link to="#"><Image src={Adtwo}/></Link>
                    <Link to="#"><Image className="pt-10" src={Adthree}/></Link>
                </div>
                {/* Ads part Right Image end */}
            </Flex>
        </Container>
    </section>
  )
}

export default Ads