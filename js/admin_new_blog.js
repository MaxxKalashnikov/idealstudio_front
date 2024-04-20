import { Posts } from './classes/Posts.js'
const posts = new Posts()

import { User } from './classes/user.js'
const user = new User()

// add event listener to the new post button
document.getElementById('new-post-button').addEventListener('click', async (event) => {
    event.preventDefault()
    
    const blogTitle = document.getElementById('blog-title').value
    //const blogImage = document.getElementById('blog-image').value
    const blogContent = document.getElementById('blog-content').value

    if (blogTitle === '' || blogContent === '') {
        alert('Please fill in all fields!')
        return
    }

    // verify the user
    const userData = await user.checkToken()

    if (userData.role !== 'admin') {
        alert('You must be an admin to post a blog!')
        return
    }

    // post object
    const post = {
        author_id: userData.id,
        title: blogTitle,
        content: blogContent,
        image_url: ''
    }

    
    addPost(post)

})

// call the posts.addPost method
const addPost = (post) => {
    console.log(post)
    posts.addPost(post).then((response) => {
        console.log(response)
        alert('Post added!')
        window.location.reload()
        
    }).catch((error) => {     
        console.error('Error:', error)
        alert('Failed to add post!')
    })

}