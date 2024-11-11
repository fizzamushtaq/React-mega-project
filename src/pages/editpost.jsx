import React from 'react'
import { useEffect , useState } from 'react'
import Container from '../components/container/container'
import { Postform } from '../components'
import { Service } from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';
// uncomplete
function Editpost() {
    const [post,  setsPost] = useState ([])
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=> {
        if (slug) {
            Service.getPost(slug).then((post)=>{
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
