import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteTeacherPage () {
    
    const [teacherInfo,setTeacherInfo] = useState()
    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        if(!id){
            return
        }
        axios.get('/api/teacher?id='+id).then(res => {
            setTeacherInfo(res.data)
        })

    },[id])
    async function deleteTeacher(){
        await axios.delete('/api/teacher?id='+id)
        goback();
    }
    function goback(){
        router.push('/teacher')
    }
    return(
        <Layout>
            <h2>Do you really want to delete : {teacherInfo?.name}</h2>
            <div>
                <button onClick={deleteTeacher}>Yes</button>
                <button onClick={goback}>No</button>
            </div>
        </Layout>
    )
}