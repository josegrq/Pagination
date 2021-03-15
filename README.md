# Pagination

This project is based on Vue.js. It serves as a "search engine" for books that depends on Google Books API's. The page simply asks the user to enter a keyword and the program will make an API call to Google servers with the keyword given. Based on Googles documentatio below:

        Pagination
        You can paginate the volumes list by specifying two values in the parameters for the request:

        startIndex - The position in the collection at which to start. The index of the first item is 0.
        maxResults - The maximum number of results to return. The default is 10, and the maximum allowable value is 40.

we are only allowed to receive max of 40 items. So, the page created takes that underconsideration. We added pagination to the page, so the user is able to view 20 books at a time. Whenever we are displaying the forst 20/40 books the user is not able to go to previous and same for next page if we are at the end. 

To see the contents of the book, such as title, categories, and author, the user needs to hover over the cover of the book to see it. The card was animated to make it flip as the user hovers over it. Also, if the book has not cover image the page uses a deafault image to display. The way we handle undefined values on the page is we check if it exists and if it does not, then we display an appropriate message.