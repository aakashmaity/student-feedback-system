import Layout from "@/components/Layout";
import AddForm from "@/components/AddForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditteacherPage() {

    const [teacherInfo, setTeacherInfo] = useState(null)
    const router = useRouter()

    const {id} = router.query
    useEffect(() => {
        if(!id){
            return
        }

        axios.get('/api/teacher?id='+id).then( res => {
            setTeacherInfo(res.data)
        })
    },[id])


    return (
        <Layout>
            <h2>Edit teacher Page</h2>
            { teacherInfo && (
                <AddForm {...teacherInfo}/>
            )}
        </Layout>
    )
}