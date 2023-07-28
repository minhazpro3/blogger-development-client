"use client"
import Link from "next/link"
import Hello from "./content/hello.mdx"
import { getAllPostsMeta } from "@/lib/mdx"
import Image from "next/image"
import { BiTime } from 'react-icons/bi';
import ReactStars from 'react-rating-star-with-type'
import bannerImage from "../public/images/city.be6db825.jpg"
import instroctor from "../public/images/course_author02.png"
import { Inter, Poppins , Roboto} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({subsets: ['latin'], weight:"400"})

export default async function Home() {

  const courseMenu = [
    {
      id: 1,
      title: "instructor",
      mainT: "Teacher"
    },
    {
      id: 2,
      title: "Course categories",
      mainT: "Categories"
    },
    {
      id: 3,
      title: "(23) Registed",
      mainT: "Students"
    },
    {
      id: 4,
      title: "Course Review",
      mainT: "5"
    },
  ]

  return (
    <main className={roboto.className}>
      {/* header team */}
      <div className="w-full h-[60px] bg-white">

      </div>
      {/* page banner */}
      <div className="relative w-full h-[400px] bg-blue-950">

        <div className='container mx-auto md:px-0 px-8'>
          <div className="absolute top-12">
            <h4 className=" inline-block px-3 py-1 font-medium rounded-full text-base bg-pink-700">
              Easy to mastery
            </h4>
            <h1 className=" text-4xl font-semibold text-white mt-2 mb-4">
              Essential Beginners To Advanced Javascript Core <br /> Course For You 2023
            </h1>
            <p className=" font-medium">Javascript tutorial will help you learn quickly and thoroughly orem ipsumor lipsum as it is sometime</p>
            <div className="my-6 flex gap-4">
              <div className="flex gap-x-3 items-center">
               <div>
               <Image src={instroctor} alt="" />
               </div>
               <small>Asadulla Hil</small>
              </div>
              <div className="flex gap-x-3 items-center">
               <div>
              <BiTime size={25}/>
               </div>
               <small>30 min</small>
              </div>
              <div className="flex gap-x-3 items-center">
               <div>
               <ReactStars
    // onChange={onChange} 
    value={4.2}  
    // edit={true}  
    activeColors={[ "yellow",]} 
    />
               </div>
               <small>(4.6)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* menu bar of outline */}
      <div >

      </div>

    </main>
  )
}
