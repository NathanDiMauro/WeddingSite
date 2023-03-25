import CountDown from "../components/countDown.js"

import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <p className='center' id='date'>8.30.24</p>
      <CountDown />
      <p className='center' id='until'>until</p>
      <p className='center' id='EaN'>Erika and Nathan</p>
      <p className='center' id='tie'>Tie the Knot</p>
      <hr></hr>
      <p className='center' id='how'>How We Met</p>
      <div className='meet' id='erika'>
        <div>
          <h2 className='center'> Erika's Story </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo in. Ut eu sem integer vitae. Vitae auctor eu augue ut. Ac auctor augue mauris augue neque gravida in fermentum. Lobortis feugiat vivamus at augue. Sodales ut eu sem integer vitae justo. Mattis nunc sed blandit libero volutpat sed cras. Elementum tempus egestas sed sed risus pretium quam vulputate. Sem viverra aliquet eget sit amet tellus. Maecenas sed enim ut sem viverra aliquet eget. Elit eget gravida cum sociis natoque penatibus et. Nibh mauris cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel.</p>
        </div>
      </div>
      <div className='meet' id='nate'>
        <div>
          <h2 className='center'> Nates's Story </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo in. Ut eu sem integer vitae. Vitae auctor eu augue ut. Ac auctor augue mauris augue neque gravida in fermentum. Lobortis feugiat vivamus at augue. Sodales ut eu sem integer vitae justo. Mattis nunc sed blandit libero volutpat sed cras. Elementum tempus egestas sed sed risus pretium quam vulputate. Sem viverra aliquet eget sit amet tellus. Maecenas sed enim ut sem viverra aliquet eget. Elit eget gravida cum sociis natoque penatibus et. Nibh mauris cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel.</p>
        </div>
      </div>
    </div>
  )
};

export default Home;
