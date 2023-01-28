import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import PostListItem from '../../components/posts/PostListItem'

const PostDetails = () => {

    let { postId } = useParams();
    let [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getPost()
    }, [postId])

    let getPost = async () => {
      let response = await fetch(`/theapp/social-post-details/${postId}/`)
      let data = await response.json()
      setPost(data)
      setLoading(false);
    }

  return (
    <div>
      {loading === false && (  
        // Was getting an error because if you are getting the data asynchronously 
        // with an API request - Then you need to setState every time the props 
        // change componentWillReceiveProps(), because at the time you initialize the 
        // component the data is not loaded yet....
        // So I made this JSX wait to load until the ajax response was finished
        <div id="content-page" className="content-page">
          <div class="container">
              <div class="row">
                <div class="col-lg-8 row m-0 p-0">
                  <PostListItem post={post} />
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default PostDetails


