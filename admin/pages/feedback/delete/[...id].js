import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteFeedbackPage () {
    
    const [feedbackInfo,setFeedbackInfo] = useState()
    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        if(!id){
            return
        }
        axios.get('/api/feedback?id='+id).then(res => {
            setFeedbackInfo(res.data)
        })

    },[id])
    async function deleteStudent(){
        await axios.delete('/api/feedback?id='+id)
        goback();
    }
    function goback(){
        router.push('/feedback')
    }
    return(
        <Layout>
            <h2>Do you really want to delete : {feedbackInfo?.name}</h2>
            <div>
                <button onClick={deleteStudent}>Yes</button>
                <button onClick={goback}>No</button>
            </div>
        </Layout>
    )
}