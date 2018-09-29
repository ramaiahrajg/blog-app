import React , {Component} from 'react';
import apiCall from '../../services/apiCall'

import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import PostSummary from '../../CommonComponents/PostSummary';
import ErrorMessage from '../../CommonComponents/ErrorMessage';

class Author extends Component {

    constructor() {
        super();
        console.log(` The id is : Constructor`);
        this.state = {
            posts:[],
            loading:false,
            hasError : false,
        }
    }
    componentDidMount() {
        this.setState({
           
            loading : true,
           
        });
        console.log(` The id is : ${this.props.match.params.authorname}`);
        apiCall(`author/${this.props.match.params.authorname}`).then(posts =>{
            console.log(posts);
            this.setState({
                posts,
                loading : false,
                hasError : false
            });
        })
        .catch(err => {
            this.setState({
               hasError : true
            });
        });
    }

    render(){
        
        return(
            <div className={`posts-container container`}>
            {
                this.state.loading
                ?
                <LoadingIndicator/>
                :
                null
            }
            {
                this.state.hasError
                ?
                    <ErrorMessage 
                        title={'Error!'} 
                        message={'Unable to retrieve posts!'} 
                    />
                :
                    null
            }
            {
                this.state.posts.map(post=>
                  <div className={`post-container container`} key={post.id}>
                    <h2>{post.title}</h2>
               
                    <p>{post.content}</p>
                        </div>
                )
            }
         
          
        </div>
        );
    }
}

export default Author;