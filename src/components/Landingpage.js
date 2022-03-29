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
          I'm Sid. I was born in India and moved to Calgary AB,🍁 in 2019. As a true lover of Science and Technology, I love building web apps (like this App is built using AWS Cognito) and teaching Physics. When I am not doing either, I love to travel.
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