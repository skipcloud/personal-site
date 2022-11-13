export default function Home({ site }) {
  return (
    <>
      <h1>computer man</h1>
      <div id="about">
        I'm Skip, an Irish dude living in London.<br />
        Self taught software engineer.<br />
        Currently writing code for <a href="https://www.deliveroo.co.uk/">Deliveroo</a>.<br />
        Working in the production engineering space. <br />
        I like lifting heavy things.<br />
        I run but not very well. <br />
        Dogs are pretty great. <br />
        I own far too many house plants.
      </div>
      <div id="contact" className="monofont">
        <h2>Contact</h2>
        <div>
          email: <span className="contact-info"><a href={`mailto://${site.email}`}>{ site.email }</a></span><br />
          twitter: <span className="contact-info"><a href="http://www.twitter.com/skipcloud">@{ site.twitter_username }</a></span><br />
          github: <span className="contact-info"><a href="http://www.github.com/skipcloud">github.com/{ site.github_username }</a></span>
        </div>
      </div>
      </>
      )
}

export async function getStaticProps() {
  return {
        props: {
        site: {
        email: 'hi@skipgibson.dev',
      twitter_username: '@skipcloud',
      github_username: 'skipcloud'
      }
    }
  }
}
