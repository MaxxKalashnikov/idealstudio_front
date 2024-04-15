class Post {
    #id
    #title
    #content
    #author
    #post_created_time
    #image_url

    constructor(id, title, content, author, post_created_time, image_url) {
        this.#id = id
        this.#title = title
        this.#content = content
        this.#author = author
        this.#post_created_time = post_created_time
        this.#image_url = image_url
    }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title
    }

    get content() {
        return this.#content
    }

    get author() {
        return this.#author
    }

    get post_created_time() {
        return this.#post_created_time
    }

    get image_url() {
        return this.#image_url
    }
}

export { Post }