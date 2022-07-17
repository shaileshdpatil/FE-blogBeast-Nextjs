import Head from "next/head";
import {connect} from "react-redux";
import { fetchPosts } from "../actions/postAction";
import {Button} from "reactstrap";

function Home(props) {
  const { posts } = props;
  return (
      <div className="home-page-container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Button
                onClick={()=>props.fetchPosts()}
                color="primary"
            >
                Click Me
            </Button>
              {(posts.posts || []).map((item, i) => <h2 key={i}>{item}</h2>)}
        </main>

        <footer>
        </footer>
      </div>
  );
}
const mapStateToProps = (state) => {
    return {
        posts:state.post
    }
}
export default connect(mapStateToProps,{
    fetchPosts
})(Home)
