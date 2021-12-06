1. **Hookup supabase**

- add blogs.js in services directory
- export a `getBlogs` function which calls supabase
- this is _very_ similar to `getRestaurants` in demo

2. **Hookup supabase call to my component**

- create `blogs` state using `useState`
- set the response from `getBLogs` as my `blogs` state
- console.log to make sure this is all working

3. **Do the stuff from last week**

- .map the `blogs` state variable and render a `<BlogCard>` component for each item in blogs
