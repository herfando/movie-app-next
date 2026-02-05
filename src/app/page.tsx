import Navbar from '../components/container/01_Navbar';
import Home from '../components/container/02_Home';
import Banner from '@/components/container/03_Banner';
import About from '@/components/container/04_About';
import Skill from '@/components/container/05_Skill';
// import WhyChooseMe from '@/components/container/06_Why_chooseme';
import MyLatestWork from '@/components/container/07_My_latestwork';
import MyWorkExperience from '@/components/container/08_My_workexperience';
// import SuccessStories from '@/components/container/09_Success_stories';
// import HaveQuestions from '@/components/container/10_Have_questions';
import ContactMe from '@/components/container/11_Contact_me';
import Footer from '@/components/container/12_Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Banner />
      <About />
      <Skill />
      {/* <WhyChooseMe /> */}
      <MyLatestWork />
      <MyWorkExperience />
      {/* <SuccessStories /> */}
      {/* <HaveQuestions /> */}
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
