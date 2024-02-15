import Container from '../../Container'
import Image from '../../Image'
import Wallclock from "../../../assets/wallclock.png"
import { Link } from 'react-router-dom'

const AdsTwo = () => {
  return (
    <section className=' pb-[128px]'>
        <Container>
          <div>
            {/* AdsTwo Part Only Image */}
              <Link to="#"><Image src={Wallclock} alt="wallclock.png"/></Link>
          </div>
        </Container>
    </section>
  )
}

export default AdsTwo