const moviesData = [
    {
        "id": 1,
        "image": "/images/across_the_spider-verse.jpeg",
        "title": "Spiderman",
        "genre": "Adventure",
        "rating": 5,
        "new": true,
        "expert": true,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt sapien a magna iaculis, ut venenatis sem consectetur. Vivamus vulputate eros sed orci mattis lacinia. Donec molestie risus sed est varius tristique. Proin pellentesque augue molestie dignissim molestie. Quisque ultrices neque vitae elit venenatis, quis tempor lorem accumsan. Etiam non est sit amet lorem tincidunt dapibus. Morbi varius, est nec tempus sagittis, mi libero porttitor eros, ut congue massa ante dignissim urna. Vestibulum eleifend velit lacus, eu iaculis enim accumsan at. Nam at accumsan ante, ut tempus turpis. Praesent tempus faucibus arcu, ut tempus turpis pharetra vel. Praesent ut ornare metus. Donec facilisis nulla eu nulla aliquam, at blandit metus tristique. Aliquam augue eros, lacinia in ligula non, imperdiet condimentum nunc.",      
        "expertReviews": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        "audience": "Rated PG",
        "watch": "Theaters",
        "length": "2h 22m"
    },
    {
        "id": 1,
        "image": "/images/across_the_spider-verse.jpeg",
        "title": "Spiderman",
        "genre": "Adventure",
        "rating": 5,
        "new": true,
        "expert": true,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt sapien a magna iaculis, ut venenatis sem consectetur. Vivamus vulputate eros sed orci mattis lacinia. Donec molestie risus sed est varius tristique. Proin pellentesque augue molestie dignissim molestie. Quisque ultrices neque vitae elit venenatis, quis tempor lorem accumsan. Etiam non est sit amet lorem tincidunt dapibus. Morbi varius, est nec tempus sagittis, mi libero porttitor eros, ut congue massa ante dignissim urna. Vestibulum eleifend velit lacus, eu iaculis enim accumsan at. Nam at accumsan ante, ut tempus turpis. Praesent tempus faucibus arcu, ut tempus turpis pharetra vel. Praesent ut ornare metus. Donec facilisis nulla eu nulla aliquam, at blandit metus tristique. Aliquam augue eros, lacinia in ligula non, imperdiet condimentum nunc.",      
        "expertReviews": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        "audience": "Rated PG",
        "watch": "Theaters",
        "length": "2h 22m"
    },
    {
        "id": 2,
        "image": "/images/johnwick.jpeg",
        "title": "John Wick 4",
        "genre": "Action",
        "rating": 5,
        "new": false,
        "expert": true,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt sapien a magna iaculis, ut venenatis sem consectetur. Vivamus vulputate eros sed orci mattis lacinia. Donec molestie risus sed est varius tristique. Proin pellentesque augue molestie dignissim molestie. Quisque ultrices neque vitae elit venenatis, quis tempor lorem accumsan. Etiam non est sit amet lorem tincidunt dapibus. Morbi varius, est nec tempus sagittis, mi libero porttitor eros, ut congue massa ante dignissim urna. Vestibulum eleifend velit lacus, eu iaculis enim accumsan at. Nam at accumsan ante, ut tempus turpis. Praesent tempus faucibus arcu, ut tempus turpis pharetra vel. Praesent ut ornare metus. Donec facilisis nulla eu nulla aliquam, at blandit metus tristique. Aliquam augue eros, lacinia in ligula non, imperdiet condimentum nunc.",
        "expertReviews": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        "audience": "Rated R",
        "watch": "Theaters",
        "length": "2h 30m"
    },
    {
        "id": 3,
        "image": "/images/fast10.jpg",
        "title": "Fast and Furious 10",
        "genre": "Action",
        "rating": 2,
        "new": true,
        "expert": false,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt sapien a magna iaculis, ut venenatis sem consectetur. Vivamus vulputate eros sed orci mattis lacinia. Donec molestie risus sed est varius tristique. Proin pellentesque augue molestie dignissim molestie. Quisque ultrices neque vitae elit venenatis, quis tempor lorem accumsan. Etiam non est sit amet lorem tincidunt dapibus. Morbi varius, est nec tempus sagittis, mi libero porttitor eros, ut congue massa ante dignissim urna. Vestibulum eleifend velit lacus, eu iaculis enim accumsan at. Nam at accumsan ante, ut tempus turpis. Praesent tempus faucibus arcu, ut tempus turpis pharetra vel. Praesent ut ornare metus. Donec facilisis nulla eu nulla aliquam, at blandit metus tristique. Aliquam augue eros, lacinia in ligula non, imperdiet condimentum nunc.",      
        "expertReviews": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        "audience": "Rated PG-13",
        "watch": "Theaters",
        "length": "2h 30m"
    },
    {
        "id": 5,
        "image": "/images/antman.jpg",
        "title": "Ant Man",
        "genre": "Action",
        "rating": 3,
        "new": true,
        "expert": false,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt sapien a magna iaculis, ut venenatis sem consectetur. Vivamus vulputate eros sed orci mattis lacinia. Donec molestie risus sed est varius tristique. Proin pellentesque augue molestie dignissim molestie. Quisque ultrices neque vitae elit venenatis, quis tempor lorem accumsan. Etiam non est sit amet lorem tincidunt dapibus. Morbi varius, est nec tempus sagittis, mi libero porttitor eros, ut congue massa ante dignissim urna. Vestibulum eleifend velit lacus, eu iaculis enim accumsan at. Nam at accumsan ante, ut tempus turpis. Praesent tempus faucibus arcu, ut tempus turpis pharetra vel. Praesent ut ornare metus. Donec facilisis nulla eu nulla aliquam, at blandit metus tristique. Aliquam augue eros, lacinia in ligula non, imperdiet condimentum nunc.",
        "expertReviews": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        "audience": "Rated PG-13",
        "watch": "Disney+, Theaters",
        "length": "2h 30m"
    },
    {
        "id": 6,
        "image": "/images/creed.jpg",
        "title": "Creed 3",
        "genre": "Action",
        "rating": 5,
        "new": true,
        "expert": true,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt sapien a magna iaculis, ut venenatis sem consectetur. Vivamus vulputate eros sed orci mattis lacinia. Donec molestie risus sed est varius tristique. Proin pellentesque augue molestie dignissim molestie. Quisque ultrices neque vitae elit venenatis, quis tempor lorem accumsan. Etiam non est sit amet lorem tincidunt dapibus. Morbi varius, est nec tempus sagittis, mi libero porttitor eros, ut congue massa ante dignissim urna. Vestibulum eleifend velit lacus, eu iaculis enim accumsan at. Nam at accumsan ante, ut tempus turpis. Praesent tempus faucibus arcu, ut tempus turpis pharetra vel. Praesent ut ornare metus. Donec facilisis nulla eu nulla aliquam, at blandit metus tristique. Aliquam augue eros, lacinia in ligula non, imperdiet condimentum nunc.",      
        "expertReviews": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        "audience": "Rated R",
        "watch": "Netflix, Theaters",
        "length": "2h 17m"
    },
  ]
  
  export default moviesData;
  