"use client"

import Navbar from "@/components/navbar";
import { Box, Button, Heading, Input, Stack, StackProps, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

type CVBuilderProps = {
    id:number,
    name:string,
    email:string,
    phone:string,
    summeray:string,
    education:[],
    experience:[],
    skills:[],
    languages:[],
    certifications:[],
    projects:[],
    hobbies:[],
    references:[],
    socials:[],
    address:string,
    template:string,
    color:string,
    font:string,
    fontSize:string,
    lineHeight:string,
    margin:string,
    padding:string,
    createdAt:string,
    updatedAt:string,
    isPublic:boolean,
    isDeleted:boolean,
    isPublished:boolean,
    isTemplate:boolean,
    userId:number,
    user:string,
    user_id:number,
    user_name:string,
    user_email:string,
    user_phone:string,
    user_address:string,
    user_socials:[],
    user_isPublic:boolean,
    user_isDeleted:boolean,
    user_isPublished:boolean,
    user_isTemplate:boolean,
    user_createdAt:string,
    user_updatedAt:string,
    user_role:string,
    user_isAdmin:boolean,
    user_isVerified:boolean,
    user_isActive:boolean,
    user_isBanned:boolean,
    user_isBlocked:boolean,
    user_isPending:boolean,
    user_isApproved:boolean,
    user_isRejected:boolean,
    user_isSpam:boolean,
    user_isFlagged:boolean,
    user_isReported:boolean,
    user_isInReview:boolean,
    user_isReviewed:boolean,
    user_isFeatured:boolean,
}

const CVBuilder = ()=>{

    const [name, setName] = useState("");
    const [summary, setSummary] = useState("");
    const [experience, setExperience] = useState("");   
    const [education, setEducation] = useState("");
    const handleGenerateCV = () => {
        const cv = {
          name,
          summary,
          experience,
          education,
        };
        console.log(cv);
      };

    return( <>


    <Navbar/>
    <Heading textAlign={'center'} padding={'2%'}>Welcome to the ATS-Friendly CV Builder</Heading>
         <Box maxW="600px" mx="auto" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Link href={'/'}><Heading mb={6}>CV Builder</Heading></Link>
      <Stack gap={4}>
        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          placeholder="Professional Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <Textarea
          placeholder="Work Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <Textarea
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleGenerateCV}>
          Generate CV
        </Button>
      </Stack>
    </Box>

    </>)


}


export default  CVBuilder;