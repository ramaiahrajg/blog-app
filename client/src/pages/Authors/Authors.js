import React , {Component} from 'react';
import apiCall from '../../services/apiCall'
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import AuthorSummary from '../../CommonComponents/AuthorSummary';
import ErrorMessage from '../../CommonComponents/ErrorMessage';

class Authors extends Component {
    
    constructor() {
        super();
        this.state = {
            authors: [],
            loading: false,
            hasError: false,
        }
    }
    componentDidMount() {
        this.setState({
           
            loading : true,
           
        });
        apiCall('authors').then(authors =>{
            this.setState({
                authors,
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
    render() {
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
                this.state.authors.map(author => 
                    <AuthorSummary 
                        key={author.id} 
                        author={author}/>
                    )
            }
        </div>
        );
    }
}

export default Authors;