import { ColorModeButton, ColorModeIcon } from "@/components/ui/color-mode";
import { Button, HStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
   <>
  <HStack>
    <ColorModeButton />
    <Button colorScheme="blue">Button</Button>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    <Button>Click me</Button>

  </HStack>
   </>
  );
}
