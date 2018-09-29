import React , {Component} from 'react';
import apiCall from '../../services/apiCall'

import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import PostSummary from '../../CommonComponents/PostSummary';
import ErrorMessage from '../../CommonComponents/ErrorMessage';

class Post extends Component {

    constructor() {
        super();

        this.state = {
            post:{},
            loading:false,
            hasError : false,
        }
    }
    componentDidMount() {
        this.setState({
           
            loading : true,
           
        });
        console.log(` The id is : ${this.props.match.params.id}`);
        apiCall(`post/${this.props.match.params.id}`).then(post =>{
            console.log(post);
            this.setState({
                post,
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
            
                <h2>{this.state.post.title} </h2>
                <p>{this.state.post.author} </p>
                <p>{this.state.post.content} </p>
           
        </div>
        );
    }
}

export default Post;