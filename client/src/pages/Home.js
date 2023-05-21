import CountDown from "../components/countDown.js"
import main from '../images/mainBW.jpg'

import '../styles/Home.css';

const Home = () => {
  return (
    <div id="home">
      <p className='center' id='date'>08.30.24</p>
      <CountDown />
      <p className='center' id='until'>until</p>
      <p className='center' id='EaN'>Erika and Nathan</p>
      <p className='center' id='tie'>Tie the Knot</p>
      <img id="mainBW" src={main} alt="Nate holding Erika"/>
      <hr></hr>
      <p className='center' id='how'>How We Met</p>
      <div className='meet' id='erika'>
        <div>
          <h2 className='center'> Erika's Story </h2>
          <p>Even though we coincidentally have a picture together from a year before we started dating in the library when Nate won “Freshman of the month”, we officially met Friday September 18, 2015. It was just another casual Friday night going to a Londonderry High School football game with my friend; sophomore year of high school was in full swing. We were walking around socializing (clearly not paying attention to the game) when my friend saw her guy friend—who just so happened to be walking around with Nate. Our two friends were reconnecting and somehow ditched us, forcing Nate and I to talk. We decided to go get hot chocolate, and while we were walking, I was texting my mom about her picking me up that night from the game. Before Nate told me anything about himself, he used a classic one liner—“Is your mom a babe like you?” I wasn’t sure how to respond, so I said “Uh yeah she is” and laughed. What can I say, humor is my soft spot. We spent the rest of the night talking and realizing that we were in Mr. Juster’s English class together. We failed to discuss that we were both going to the same car wash event the next day for Class Reps. So, surprise! The next morning, my mom drops me off at the local car wash and who do I see standing there in his Lancers shirt? The kid who had been flirting with me all night! I got out of the car, and we both started laughing at this coincidence. We started talking more after that day, and then the next Friday came. It was Mack Plaque at Pinkerton, and of course we were meeting up. We talked all night, and truthfully I thought he was going to ask me out then—but he didn’t. The main takeaway from that night was that both of our parents were annoyed with us because we were still talking and hanging out while they were waiting in some random parking lots at an unfamiliar school (sorry we were bonding). Another Friday night rolls around—Friday October 2, 2015 and yet again, Nate and I were strolling through the crowds of the LHS football game, except this time we had planned to meet through text. Nate officially asked me out this night, and then he sealed the deal with a kiss. My 15 year old self had major butterflies. During our sophomore year English class with Mr. Juster, he brought in a cake for Nate’s 16th birthday and took a picture of us cutting the cake together. He joked that it was our wedding cake and that we would get married. The rest of our story is history.</p>
        </div>
      </div>
      <div className='meet' id='nate'>
        <div>
          <h2 className='center'> Nate's Story </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo in. Ut eu sem integer vitae. Vitae auctor eu augue ut. Ac auctor augue mauris augue neque gravida in fermentum. Lobortis feugiat vivamus at augue. Sodales ut eu sem integer vitae justo. Mattis nunc sed blandit libero volutpat sed cras. Elementum tempus egestas sed sed risus pretium quam vulputate. Sem viverra aliquet eget sit amet tellus. Maecenas sed enim ut sem viverra aliquet eget. Elit eget gravida cum sociis natoque penatibus et. Nibh mauris cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel.</p>
        </div>
      </div>
    </div>
  )
};

export default Home;
