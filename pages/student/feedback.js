import Layout from "@/components/Layout";
import { TeacherData } from "@/lib/TeacherData";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TeacherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px 50px;
    padding: 100px 50px;
`
const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 350px;
    max-width: 100%;
    height: 300px;
    background: #FFF;
    border-radius: 20px;
    transition: 0.5s;
    box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
    &:hover{
        height: 400px;
    }
    @media (max-width: 480px){
        width: 230px;
        border-radius: 15px;
    }
`
const ImageBox = styled.div`
    position: absolute;
    top: 20px;
    width: 300px;
    height: 220px;
    background: #333;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.5s;
    ${Card}:hover & {
        top: -100px;
        scale: 0.75;
        box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 480px){
        width: 185px;
        border-radius: 10px;
    }
`;
const Image = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Content = styled.div`
    position: absolute;
    top: 252px;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    text-align: center;
    overflow: hidden;
    transition: 0.5s;
    ${Card}:hover & {
        top: 130px;
        height: 250px;
    }
`
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #009688;
`
const p = styled.p`
    color: #333;
    @media (max-width: 480px){
        font-size: 0.8rem;
    }
`
const Button2 = styled.button`
    position: relative;
    top: 15px;
    display: inline-block;
    padding: 12px 25px;
    text-decoration: none;
    background: #03A9F4;
    color: #000;
    font-weight: 500;
    ${Card}:hover & {
        opacity: 0.8;
    }
    @media (max-width: 480px){
        font-size: 0.9rem;
    }
`

export default function Feedback() {
  const [teacherData, setTeacherData] = useState([]);
  useEffect(() => {
    setTeacherData(TeacherData);
    console.log(teacherData);
  }, []);

  return (
    <Layout>
      <TeacherContainer>
        <CardContainer>
          {teacherData?.length &&
            teacherData?.map((teacher) => (
              <Card key={teacher.id}>
                <ImageBox>
                    <Image src={teacher.image}/>
                </ImageBox>
                <Content>
                    <Title>{teacher.name}</Title>
                    {teacher?.subjects.map((sub,idx)=>(
                        <p key={idx}>{sub}</p>
                    ))}
                <Button2>Give feedback</Button2>
                </Content>
              </Card>
            ))}
        </CardContainer>
      </TeacherContainer>
    </Layout>
  );
}



// @media (max-width: 480px) {
//    

//   
//     
//     .container .card .content a {
//         font-size: 0.9rem;
//     }
// }

//     <div class="container">
//         <div class="card" style="--clr: #009688">
//             <div class="img-box">
//                 <img src="https://i.postimg.cc/t4w95jsf/img-01.png">
//             </div>
//             <div class="content">
//                 <h2>Leafs</h2>
//                 <p>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                     Architecto, hic? Magnam eum error saepe doloribus corrupti
//                     repellat quisquam alias doloremque!
//                 </p>
//                 <a href="">Read More</a>
//             </div>
//         </div>
//         <div class="card" style="--clr: #FF3E7F">
//             <div class="img-box">
//                 <img src="https://i.postimg.cc/pdjRc68d/img-02.png">
//             </div>
//             <div class="content">
//                 <h2>Fruits</h2>
//                 <p>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                     Architecto, hic? Magnam eum error saepe doloribus corrupti
//                     repellat quisquam alias doloremque!
//                 </p>
//                 <a href="">Read More</a>
//             </div>
//         </div>
//         <div class="card" style="--clr: #03A9F4">
//             <div class="img-box">
//                 <img src="https://i.postimg.cc/wvDr345G/img-37.png">
//             </div>
//             <div class="content">
//                 <h2>Flowers</h2>
//                 <p>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                     Architecto, hic? Magnam eum error saepe doloribus corrupti
//                     repellat quisquam alias doloremque!
//                 </p>
//                 <a href="">Read More</a>
//             </div>
//         </div>
//     </div>
// </body>

// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
