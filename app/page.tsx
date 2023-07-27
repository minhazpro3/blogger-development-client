import Link from "next/link"
import Hello from "./content/hello.mdx"
import { getAllPostsMeta } from "@/lib/mdx"
import Image from "next/image"
import bannerImage from "../public/images/city.be6db825.jpg"

export default async function Home() {

  const courseMenu = [
    {
      id: 1,
      title: "Instractor"
    },
    {
      id: 2,
      title: "Course categories"
    },
    {
      id: 3,
      title: "(23) Registed"
    },
    {
      id: 4,
      title: "Course Review"
    },
  ]

  return (
    <main>
      {/* page banner */}
      <div className=''>
        <div className="relative w-full h-[500px]">
          <Image src={bannerImage} fill alt="banner" />
        </div>
      </div>
      {/* menu bar of outline */}
      <div className="relative flex justify-center">


        <div className=" absolute -top-10">
          <div className="flex gap-x-4 bg-purple-700	 px-12 py-8 rounded-full">
            {courseMenu.map((menu, index): any => (
              <div key={index}>
                <ul className={`${index !== courseMenu.length-1? "border-r-2 px-4":""}`}>
                  <li className="text-2xl font-medium"><a href="">{menu.title} </a></li>
                </ul>
              </div>
            ))}



          </div>
        </div>
      </div>
    </main>
  )
}
