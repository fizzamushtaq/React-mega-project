import React from 'react'
import { useEffect , useState } from 'react'
import Container from '../components/container/container'
import { Postform } from '../components'
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from "../appwrite/config";
// uncomplete
function Editpost() {
    const [post,  setsPost] = useState ([])
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=> {
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                if (post) {
                  setsPost(post)  
                }
            })
        } else{
            navigate('/')
        }
    }, [slug, navigate])
    return  post ? (
        <div className='py-8'>
            <Container>
                <Postform post={post}/>
            </Container>
        </div>
     ) : null 
}

export default Editpost
