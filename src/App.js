import './App.css';
import profile_pic from '../src/images/profile__img.png';
import slack from "../src/images/slack.png";
import Icon from "../src/images/Icon.png";
import Footer from './components/Footer';

function App() {
  return (
    <div className="mt-5">
      <div className='flex justify-center mb-10 flex-col items-center space-y-4'>
        <img src={profile_pic} alt="profile Pic" />
        <h1 className='font-bold'>Annette Black</h1>
      </div>

      <div className='flex justify-center flex-col items-center space-y-7'>
        <div className='bg-[#EAECF0] w-3/5 flex justify-center pt-3 pb-3 items-center'>
          <h5 className='font-semibold'>Twitter Link</h5>
        </div>
        <div className='bg-[#EAECF0] w-3/5 flex justify-center pt-3 pb-3 items-center'>
          <h5 className='font-semibold'>Zuri Team</h5>
        </div>
        <div className='bg-[#EAECF0] w-3/5 flex justify-center pt-3 pb-3 items-center'>
          <h5 className='font-semibold'>Zuri Books</h5>
        </div>
        <div className='bg-[#EAECF0] w-3/5 flex justify-center pt-3 pb-3 items-center'>
          <h5 className='font-semibold'>Python Books</h5>
        </div>
        <div className='bg-[#EAECF0] w-3/5 flex justify-center pt-3 pb-3 items-center'>
          <h5 className='font-semibold'>Background Check for Coders</h5>
        </div>
        <div className='bg-[#EAECF0] w-3/5 flex justify-center pt-3 pb-3 items-center'>
          <h5 className='font-semibold'>Design Books</h5>
        </div>
      </div>
      <div className='flex justify-center mt-6 space-x-6'>
        <img src={slack} alt="Slack" />
        <img src={Icon} alt="Icon" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
