import Navbar from "@/components/navbar";
import { ColorModeButton, ColorModeIcon } from "@/components/ui/color-mode";
import { Box, Button, Grid, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
  
    
   <Navbar/>
   <SimpleGrid bg={"purple"} padding={'5%'} columns={1} gap="40px">
   <Heading fontSize={'6xl'} lineHeight={'2rem'}>Welcome to the ATS-Friendly CV Builder</Heading>
      <p>Build professional resumes that get noticed by applicant tracking systems.</p>
      <Link  href="/cv-builder">
        <Button textAlign={'end'} colorScheme="blue" mt={4}>Start Building Your CV</Button>
      </Link>
    </SimpleGrid>
      
    
  
   </>
  );
}
