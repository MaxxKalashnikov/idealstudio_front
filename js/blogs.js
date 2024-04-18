import { Posts } from './classes/Posts.js'

const posts = new Posts()
import { Post } from './classes/Post.js'
import { User } from './classes/user.js'

const user = new User()

// render a post
function renderPost(post) { 
    const list = document.querySelector('#posts-list')

    const li = document.createElement('li')
    li.classList = 'list-group-item border-0'
    const postCard = createPostCard(post)
    li.appendChild(postCard)
    list.appendChild(li) 
}

// create a card element for a post
function createPostCard(post) {
    const card = document.createElement('div')
    card.classList = 'card'

    const img = document.createElement('img')
    img.classList = 'card-img-top'
    card.appendChild(img)
    if (post.image_url !== null) {
        img.src = post.image_url
    }
    

    const body = document.createElement('div')
    body.classList = 'card-body'
    card.appendChild(body)

    const title = document.createElement('h5')
    title.classList = 'card-title'
    title.textContent = post.title
    body.appendChild(title)

    const content = document.createElement('p')
    content.classList = 'card-text'
    content.textContent = post.content
    body.appendChild(content)

    const details = document.createElement('p')
    details.classList = 'card-text'
    body.appendChild(details)
    

    const author = document.createElement('small')
    author.classList = 'text-muted'
    author.textContent = `Posted by ${post.author} on ${post.post_created_time}`
    details.appendChild(author)

    const button = document.createElement('a')
    button.classList = 'btn btn-secondary'
    button.id = 'see-more'
    button.textContent = 'See more...'
    button.href = '#article-section'


    // event listener
    button.addEventListener('click', (event) => {
        event.preventDefault()
        const posts_section = document.getElementById('posts-section');
        posts_section.classList.toggle('d-none')
        const article_section = document.getElementById('article-section');
        article_section.classList.toggle('d-none')
  
        article_section.scrollIntoView({ behavior: 'smooth' });
        article_section.post_id = post.id

        // add the post to article section
        const post_container = document.getElementById('post-container')
        post_container.innerHTML = ''
        post_container.appendChild(card)
        body.removeChild(button)
        getReplies(post.id)

        // hide the reply-container if the user is not logged in
        const reply_container = document.getElementById('reply-container')
        const userData = user.checkToken()
        if (!userData) {
          reply_container.classList.add('d-none')
        } else {
          reply_container.classList.remove('d-none')
        }
    })

    body.appendChild(button)

    return card
}


// render a reply
function renderReply(reply) { 
  const list = document.querySelector('#replies-list')

  const li = document.createElement('li')
  li.classList = 'list-group-item'
  const replyCard = createReplyCard(reply)
  li.appendChild(replyCard)
  list.appendChild(li) 
}

// create a card element for a reply
function createReplyCard(reply) {
  const card = document.createElement('div')
  card.classList = 'card p-3 border-0'

  const blockquote = document.createElement('blockquote')
  blockquote.classList = 'blockquote mb-0'
  card.appendChild(blockquote)

  const content = document.createElement('p')
  content.textContent = reply.content
  blockquote.appendChild(content)

  const footer = document.createElement('footer')
  footer.classList = 'blockquote-footer'
  blockquote.appendChild(footer)

  const details_part = document.createElement('small')
  details_part.classList = 'text-muted text-xxs font-weight-lighter'
  footer.appendChild(details_part)

  const details = document.createElement('cite')
  details.textContent = `Commented by ${reply.author} on ${reply.reply_created_time}`
  details_part.appendChild(details)

  return card
}


// get all posts
const getPosts = () => {
    posts.getPosts().then(post_objects => {
      post_objects.forEach(post_object => {
      console.log(post_object)
      renderPost(post_object)
    });
  }).catch(error => {
    alert(error)
  })
}


// get all replies
const getReplies = (post_id) => {
  posts.getReplies(post_id).then(replies => {
    replies.forEach(reply => {
    console.log(reply)
    renderReply(reply)
  });
}).catch(error => {
  alert(error)
})
}

// add a reply
const addReply = (reply) => {
  posts.addReply(reply).then(result => {
    console.log(result)
  })
}

// reply button enevent listener
document.getElementById('reply-button').addEventListener('click', (event) => { 
  event.preventDefault()
  document.querySelector('#replies-list').innerHTML = ''

  // post id
  const post_id = document.getElementById('article-section').post_id

  // verify user
  const userData = user.checkToken()

  if (!userData) {
    alert('You must be logged in to reply')
    return
  }

  // reply
  const reply = {
    "post_id": post_id,
    "author_id": userData.id,
    "content": document.getElementById('reply-content').value
  }
  addReply(reply)
  document.getElementById('reply-content').value = ''
  getReplies(post_id)
})


// back button event listener
document.getElementById('back-button').addEventListener('click', (event) => {
  event.preventDefault()
  const posts_section = document.getElementById('posts-section');
  posts_section.classList.toggle('d-none')
  const article_section = document.getElementById('article-section');
  article_section.classList.toggle('d-none')
  posts_section.scrollIntoView({ behavior: 'smooth' });
  window.location.reload()
 
})
getPosts()

