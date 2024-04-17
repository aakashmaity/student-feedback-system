import Layout from "@/components/Layout";
import AddForm from "@/components/AddForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditStudentPage() {

    const [studentInfo, setStudentInfo] = useState(null)
    const router = useRouter()

    const {id} = router.query
    useEffect(() => {
        if(!id){
            return
        }

        axios.get('/api/student?id='+id).then( res => {
            setStudentInfo(res.data)
        })
    },[id])


    return (
        <Layout>
            <h2>Edit Student Page</h2>
            { studentInfo && (
                <AddForm {...studentInfo}/>
            )}
        </Layout>
    )
}