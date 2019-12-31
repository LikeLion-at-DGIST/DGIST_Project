import React from 'react';
import './App.css';
import api from './api';
import PostView from './Components/PostView'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      result: [],
    }
  }

  componentDidMount() {

    this.getPosts()
  }

  async getPosts() {
    let _result = await api.getAllPosts()
    this.setState({result:_result.data})
  }

  handlingChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handlingSubmit = async(event) => {
    event.preventDefault()
    let result = await api.createPost({title:this.state.title, content:this.state.content})
    console.log("완료!", result)

  }

  render(){
  return (
    <div className="App">
      <Container maxWidth="lg">
      <div className="PostingSection">
        <Paper className="Postingform">
        <h2>대나무 숲 글 작성하기</h2>
        <form onSubmit={this.handlingSubmit}>
        <input
          name = "title"
          value = {this.state.title}
          onChange={this.handlingChange}  
        />
        <textarea />
        <button type="submit">submit</button>
        </form>
      </Paper>
      </div>"
      <div className="ViewSection">
        {
          this.state.result.map((post) =>
          <PostView key={post.id} id={post.id} title={post.title} content={post.content}/>
          )
        }
      
      </div>
      
      </Container>
    </div>
  );
  }
}

export default App;
