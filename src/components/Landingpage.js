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
          I'm Sid. I was born in India and moved to Calgary🍁 in 2019. As a true lover of Science & Technology, I love building and deploying cool Web apps that accomplish business goals (like this App is deployed using
          <span>
            {' '}<b><a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer">
              AWS Amplify
            </a></b>
          </span>
          ). I have a passion for Physics and in my free time I love to travel & explore.
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