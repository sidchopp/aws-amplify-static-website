import main from '../images/main.svg'

const Landingpage = () => {
  return (
    <div className="container page">
      {/* Info */}
      <div className="info">
        <h1>
          About Me
        </h1>
        <p>
          I'm Sid. I was born in India and moved to Calgary AB,🍁 in 2019. As a true lover of Science and Technology, I love building and deploying cool Web apps that accomplish business goals (like this App is deployed using AWS Amplify) and have a genuine passion for Physics. In my free time, I love to travel & explore.
        </p>
        <a href='https://sid-projects.netlify.app/' target="_blank" rel="noreferrer">
          <button
            className='btn btn-hero'
          // type='button'
          >
            My Work
          </button>
        </a>
      </div>
      {/* Image on right for big screens */}
      <img src={main} alt=" Job Finder" className='img main-img' />
    </div>
  )
}
export default Landingpage