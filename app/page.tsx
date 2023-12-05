import About from "@/components/Sections/About";
import Cases from "@/components/Sections/Cases";
import Contacts from "@/components/Sections/Contacts";
import Electricity from "@/components/Sections/Electricity";
import Faq from "@/components/Sections/Faq";
import ForHeader from "@/components/Sections/ForHeader";
import Main from "@/components/Sections/Main";



const Home = () => {
  return (

    <main className="">
      <ForHeader />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <Contacts />
    </main>
  )
}

export default Home
