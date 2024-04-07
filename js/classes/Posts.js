
import { Post } from './Post.js'

class Posts {
    #posts = [];
    #commnts = [];


    
    getPosts = () => {
        return new Promise(async(resolve,reject)=> {
          fetch('http://localhost:3001/blogs/posts')
          .then(response => response.json())
          .then(json => {
            this.#readJson(json)
            resolve(this.#posts)
          }),(error) => {
            reject(error)
          }
        })
    }

    getReplies = (post_id) => {
        return new Promise(async(resolve,reject)=> {
            fetch('http://localhost:3001/blogs/replies/' + post_id)
            .then(response => response.json())
            .then(json => {
              resolve(json)
            }),(error) => {
              reject(error)
            }
          })
    }
    
    addReply = (reply) => {
        return new Promise(async(resolve,reject)=> {
            fetch('http://localhost:3001/blogs/replies/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reply)
            })
            .then(response => response.json())
            .then(json => {
              resolve(json)
            }),(error) => {
              reject(error)
            }
          })
    }

    // add posts the the #posts array
    #readJson = (json) => {
        json.forEach(element => {
            const post = new Post(element.post_id, element.title, element.content, element.author, element.post_created_time, element.image_url)
            this.#posts.push(post)
        });
    }

    getPostFromArray = (id) => {
        return this.#posts.find(post => post.id === id)
    }

}

export { Posts }