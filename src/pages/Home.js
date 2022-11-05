import '../App.css';
import slack from "../images/slack.png";
import Icon from "../images/Icon.png";
import Footer from '../components/Footer';
import shareIcon from "../images/Share-icon.png";
import Content from "../images/Content.png";
import Profile from "../images/profile.jpeg"
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="mt-5">
      <div className='flex justify-center mb-10 flex-col items-center space-y-4'>
        <div className="hidden md:block">
          <img src={shareIcon} alt="share Icon" className='ml-96' />
        </div>
        <div className='md:hidden'>
          <img src={Content} alt="share Content" className="ml-72 rounded-full border" />
        </div>
          
            <img src={Profile} className="rounded-full w-24 h-24 object-cover" id="profile__img" alt="profile Pic" />
        
        
        <h1 className='font-bold' id='twitter'>Odogwu Senpai</h1>
      </div>

      <div className='flex justify-center flex-col items-center space-y-7'>
        
          <a href='https://twitter.com/ukaji_tech' className='font-semibold bg-[#EAECF0] w-3/5 text-center pt-3 pb-3 hover:bg-[#D0D5DD] rounded-lg' rel="noreferrer" target="_blank" >Twitter Link</a>
        
          <a href='https://training.zuri.team/' title='This is where you find books about design and code' id='btn__zuri' className='font-semibold bg-[#EAECF0] w-3/5 text-center pt-3 pb-3 hover:bg-[#D0D5DD] rounded-lg' rel="noreferrer" target="_blank">Zuri Team</a>
        
          <a href='https://books.zuri.team/python-for-beginners?ref_id=U048ZQ7508Z' title='Best book for beginners in Python' id='books' className='font-semibold bg-[#EAECF0] w-3/5 text-center pt-3 pb-3 hover:bg-[#D0D5DD] rounded-lg' rel="noreferrer" target="_blank">Zuri Books</a>
        
          <a href='https://books.zuri.team' title='We do the background check on coders to present you with the best candidates to build your product' id='book__python' className='font-semibold bg-[#EAECF0] w-3/5 text-center pt-3 pb-3 hover:bg-[#D0D5DD] rounded-lg' rel="noreferrer" target="_blank">Python Books</a>


          <a href='https://background.zuri.team' title='Buy our free design book offered by Zuri' id='pitch' className='font-semibold bg-[#EAECF0] w-3/5 text-center pt-3 pb-3 hover:bg-[#D0D5DD] rounded-lg' rel="noreferrer" target="_blank">Background Check for Coders</a>
       
        
          <a href='https://books.zuri.team/design-rules' id='book__design' className='font-semibold bg-[#EAECF0] w-3/5 text-center pt-3 pb-3 hover:bg-[#D0D5DD] rounded-lg' rel="noreferrer" target="_blank">Design Books</a>
        
          
            <Link to="/contact" id='contact' className='font-semibold bg-[#EAECF0] w-3/5 text-center pt-3 pb-3 hover:bg-[#D0D5DD] rounded-lg'>Contact Me</Link>
        
      </div>
      <div className='flex justify-center mt-6 space-x-6'>
        <img src={slack} alt="Slack" id="slack" />
        <p className='hidden'>Slack ID: Odogwu_Senpai</p>
        <img src={Icon} alt="Icon" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
