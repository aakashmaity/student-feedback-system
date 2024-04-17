import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteStudentPage () {
    
    const [studentInfo,setStudentInfo] = useState()
    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        if(!id){
            return
        }
        axios.get('/api/student?id='+id).then(res => {
            setStudentInfo(res.data)
        })

    },[id])
    async function deleteStudent(){
        await axios.delete('/api/student?id='+id)
        goback();
    }
    function goback(){
        router.push('/student')
    }
    return(
        <Layout>
            <h2>Do you really want to delete : {studentInfo?.name}</h2>
            <div>
                <button onClick={deleteStudent}>Yes</button>
                <button onClick={goback}>No</button>
            </div>
        </Layout>
    )
}