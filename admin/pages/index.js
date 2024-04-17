import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import styled from "styled-components";

const DivContainern = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`
const ImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Home = () => {
    const {data : session} = useSession();
    // console.log(session?.user)
    return(
        <Layout>
            <DivContainern>
                <h2>Hello, <b>{session?.user?.name}</b></h2>
                <ImageBox>
                    <img style={{"border-radius": "50%","height":"50px","padding-right":"10px"}} src={session?.user?.image}/>
                    <span>{session?.user?.name}</span>
                </ImageBox>
            </DivContainern>
        </Layout>
    )
}
  

export default Home;