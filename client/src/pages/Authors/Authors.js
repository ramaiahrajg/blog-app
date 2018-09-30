import React , {Component} from 'react';
import apiCall from '../../services/apiCall'
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import AuthorSummary from '../../CommonComponents/AuthorSummary';
import ErrorMessage from '../../CommonComponents/ErrorMessage';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

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
            <div className={`container`}>
            <h2>Authors</h2>
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
            <ul className={`list-group`}>
                    {
                        this.state.authors.map((author, index) =>
                            <li className={`list-group-item`} key={index}>
                                <NavLink to={routes.author.replace(':authorname', author)}>{author}</NavLink>
                            </li>
                        )
                    }
                </ul>
        </div>
        );
    }
}

export default Authors;