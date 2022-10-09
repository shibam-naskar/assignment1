import FooterPage from '../components/footer';
import HeroSection from '../components/hero';
import TeamPage from '../components/team';
import './AboutUs.css'


function AboutUs() {
  return (
    <div className='Main'>
      <HeroSection/>
      <TeamPage/>
      <FooterPage/>
    </div>
  );
}

export default AboutUs;
