import About from "@/components/Sections/About";
import Cases from "@/components/Sections/Cases";
import Contacts from "@/components/Sections/Contacts";
import Faq from "@/components/Sections/Faq";
import ForHeader from "@/components/Sections/ForHeader";
import Main from "@/components/Sections/Main";



export default function Home() {
  return (

    <main className="">
      <ForHeader />
      <Main />
      <About />
      <Cases />
      <Faq />
      <Contacts />
    </main>
  )
}
