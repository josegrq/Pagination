var app = new Vue({
    el: '#app',
    data: {
      keyword: '',
      books: null,
      numberOfBooks: null,
      lastSpot: 0,
      currentSpot: 0,
      previousDisabled: true,
      nextDisabled: true,
    },
    methods: {
      searchForBooks()
      {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword.value}&startIndex=0&maxResults=40`)
        .then(response => response.json())
        .then(books_result => {
          console.log(books_result.items);
          console.log(books_result.items.length);
          this.books = books_result;
          this.numberOfBooks = books_result.items.length;
          if(books_result.items.length >= 20)
          {
            this.currentSpot = 20;
            this.nextDisabled = false;
          }
          else
          {
            this.currentSpot = books_result.items.length;
          }
        });
      },
      previousPage()
      {
        if(this.lastSpot == 0 || ((this.lastSpot - 40) < 0))
        {
            this.previousDisabled = true;
            this.lastSpot = 0;
            this.currentSpot = 20;
        }
        else
        {
            this.previousDisabled = false;
            this.lastSpot = this.currentSpot - 1;
            this.currentSpot -= 20;
        }
        if(this.currentSpot >= this.numberOfBooks )
        {
            this.nextDisabled = true;
        }
        else
        {
            this.nextDisabled = false;
        }
      },
      nextPage()
      {
        if(this.currentSpot == this.numberOfBooks || (this.currentSpot + 40) >= this.numberOfBooks)
        {
            this.nextDisabled = true;
            this.lastSpot = this.currentSpot;
            this.currentSpot = this.numberOfBooks;
        }
        else
        {
            this.nextDisabled = false;
            this.lastSpot = this.currentSpot;
            this.currentSpot += 20;
        }
        if(this.lastSpot == 0 || ((this.lastSpot - 20) < 0))
        {
            this.previousDisabled = true;
        }
        else
        {
            this.previousDisabled = false;
        }
      },
    },
  })