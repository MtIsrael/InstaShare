import Stories from "../../components/Stories/Stories"
import "./Home.scss"
import Posts from "../../components/Posts/Posts"
import Share from "../../components/share/Share"

export const Home = () => {
  return (
    <div className="Home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home