Vue.component("book", {
    props: {
        //We are defining a property here
        book: {
            type: String,
            required: true,
            default: null,
        },
        image: {
            type: Boolean,
            required: true,
            default: null,
        },
        author: {
            type: Boolean,
            required: true,
            default: null,
        },
        category: {
            type: Boolean,
            required: true,
            default: null,
        },


    },
    template:
        /*html*/
        `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="book-template">
                <div class="book-content">
                    <div class="book-cover">
                        <img v-if="image" :src="this.openBook.volumeInfo.imageLinks.thumbnail" alt="Book Cover">
                        <img v-if="image == false" src="../images/no-image.png" alt="Book Cover Not Found">
                    </div>
                    <div class="book-description">
                        <h2>{{this.openBook.volumeInfo.title}}</h2>
                        <p class="description">{{("description" in this.openBook.volumeInfo)? this.openBook.volumeInfo.description: "No Description" }}</p>


                        <h3 v-if="category == false">No Category Info</h3>
                        <h3 v-if="category">Categories: {{this.openBook.volumeInfo.categories.join(', ')}}</h3>

                        <h3 v-if="author == false">No Author Info</h3>
                        <h3 v-if="author">Author(s): {{this.openBook.volumeInfo.authors.join(', ')}}</h3>

                        <h3>Publisher: {{("publisher" in this.openBook.volumeInfo)? this.openBook.volumeInfo.publisher: "No Publisher Info" }}</h3>
                        <h3>Published Date: {{("publishedDate" in this.openBook.volumeInfo)? this.openBook.volumeInfo.publishedDate: "No Published Date Available" }}</h3>
                        <a :href="this.openBook.selfLink">More Info</a>
                    </div>
                </div>
            </div>
        </div>`,
    computed: {
        openBook() {
            if (this.book != null) {
                return JSON.parse(this.book);
            }
            return null;
        },
    }
})