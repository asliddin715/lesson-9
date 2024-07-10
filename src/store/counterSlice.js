import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        value: [
            {
                id: 1,
                title: "My First Post",
                datetime: "July 01, 2021 11:17:36 AM",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
            },
            {
                id: 2,
                title: "My 2nd Post",
                datetime: "July 01, 2021 11:17:36 AM",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
            },
            {
                id: 3,
                title: "My 3rd Post",
                datetime: "July 01, 2021 11:17:36 AM",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
            },
            {
                id: 4,
                title: "My Fourth Post",
                datetime: "July 01, 2021 11:17:36 AM",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
            },
        ]
    },
    reducers: {
        addPost: (state, action) => {
            state.value.push(action.payload)
        },
        editPost: (state, action) => {
            const { id, title, datetime, body } = action.payload
            const existingPost = state.value.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.datetime = datetime
                existingPost.body = body
            }
        },
        deletePost: (state, action) => {
            const postId = action.payload
            state.value = state.value.filter(post => post.id !== postId)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addPost, editPost, deletePost } = postsSlice.actions

export default postsSlice.reducer
