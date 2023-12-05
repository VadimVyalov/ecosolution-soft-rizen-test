import Section from "@/components/Section"
import Social from "@/components/Social"


const Contacts = () => {

    return (
        <Section id="contacts" className="container border border-red-600">
            <h2 className="text-028xl text-center uppercase pb-6 t:pb-10 d:pb-[120px]"> Contact Us </h2>
            <div className="t:grid t:grid-cols-2 t:gap-8 d:gap-12">
                <dl>
                    <dt className="pb-2">Phone:</dt>
                    <dd className="pb-6 text-20xl">
                        <ul className="flex flex-col gap-3">
                            <li><a href="tel:380981234567" title="Call Us">38 (098) 12 34 567</a></li>
                            <li><a href="tel:380931234567" title="Call Us">38 (093) 12 34 567</a></li>
                        </ul>
                    </dd>
                    <dt className="pb-2">E-mail:</dt>
                    <dd className="pb-6 text-20xl">
                        <a href="mailto:office@ecosolution.com" title="Email Us">office@ecosolution.com</a>
                    </dd>
                    <dt className="pb-2">Address:</dt>
                    <dd className="pb-6 text-20xl">
                        <address className="not-italic">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</address>
                    </dd>
                    <dt className="pb-2">Social Networks:</dt>
                    <dd className="pb-6 text-20xl">
                        <Social className="p-3 gap-x-[29px] w-fit" />
                    </dd>
                </dl>
                <div>CONTACT FORM</div>
            </div>

        </Section>
    )
}
export default Contacts