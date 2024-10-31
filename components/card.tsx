"use client"
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

export default function CustomCard({ lable, link, src }: any) {
  return (
    <Link isExternal href={link} >
      < Card isPressable isFooterBlurred className="border-none" radius="lg" >
        <Image
          alt="Links"
          className="object-cover !p-5"
          height={200}
          src={src}
          width={200}
        />
        <CardFooter className="justify-center before:bg-white/10 bg-black/20 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          {lable}
        </CardFooter>
      </Card >
    </Link >
  );
}
