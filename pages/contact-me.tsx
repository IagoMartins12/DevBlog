/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const ContactUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'Contact Me',
        description: 'Para qualquer duvida relacionada a este projeto, fique livre para me mandar um email: martinsiagosaraiva@gmail.com',
        keywords: 'contact me, martinsiagosaraiva@gmail.com, next js blog ',
        author: 'Iago martins'
    } 
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 pb-10 md:pt-20 pt-[80px]'>
                <Text title className="!text-5xl !font-light">
                    Contact Me
                </Text>

                <div className="flex flex-wrap mt-8 justify-between">
                    <div className="md:w-1/2 w-full md:pl-2">
                        <Text p className="!text-lg leading-relaxed">
                            Para qualquer duvida relacionada a este projeto, fique livre para me mandar um email.
                            <br/>
                            Você tambem pode comentar no  <a href="https://github.com/IagoMartins12/Personal-Blog"><u><i>repositorio</i></u></a> do projeto.
                        </Text>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <Text p>
                            Me mande um Email :D
                        </Text>
                        <Text subtitle className="!font-light md:!text-3xl">
                            martinsiagosaraiva@gmail.com
                        </Text>
                    </div>
                </div>
            </section>


            <section className={"dark:bg-slate-800 bg-blue-100 mt-10 container py-10 md:px-20 px-5"}>
                <Text subtitle className="md:!text-5xl text-4xl !font-light">
                    Vamos trabalhar juntos? 
                </Text>
                <Text p className="!text-lg leading-relaxed mt-5 px-1">
                    Gosto de fazer projetos, caso queira um companheiro para te ajudar com algum projeto pessoal, pode entrar em contato comigo! 
                    Tenho experiência principalmente com o stack de JavaScript (ES6+, NodeJs, NextJs e ReactJs). 
                    Sinta-se livre para me enviar mensagem nas minhas redes sociais: 
                </Text>
                <a href="https://github.com/IagoMartins12/"><AiFillGithub/> </a>
            </section>

        </PageLayout>
    )
}

export default ContactUs