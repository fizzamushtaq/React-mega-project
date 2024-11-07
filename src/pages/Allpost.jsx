import React , {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/container/container'
import postCard from"./postCard";
function Allpost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container className='flex flex-wrap'>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <postCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
        </div>
    )
}

export default Allpost
