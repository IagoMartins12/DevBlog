/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Me',
        description: `Seja bem vindos ao meu blog, onde irei documentar meus conhecimentos e aprendizagem como desenvolvedor :).`,
        keywords: ' contact me, martinsiagosaraiva@gmail.com, next js blog ',
        author: 'Iago martins' 
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a href="http:/linkedin.com/in/iago-martins-313838213/" target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/images/dev-icon.png" alt="" className="rounded-lg overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Olá! meu nome é Iago martins
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        Seja bem vindos ao meu blog, onde irei documentar meus conhecimentos e aprendizagem como desenvolvedor :)
                    </Text>

                    <Text p className='text-lg'>
                        A ideia deste blog é armazenar meus aprendizados em um lugar, que sirva tanto para mim quanto para pessoas que estejam confusas com algum determinado assunto <br/> <br/>
                        Caso você tenha um Github e esteja afim de copiar o repositorio deste projeto, clique  <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" className="underline font-bold">aqui</a>.
                    </Text>

                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Features
                            </Text>
                            <List type={ListType.disc}>
                                <li>Estilo minimalista</li>
                                <li>Switcher para tema claro ou escuro </li>
                                <li>Artigos centralizados ou com aba lateral</li>
                                <li>Integração com <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS </a></li>
                                <li>Artigos com Tags</li>
                                <li>Pesquisa de artigos com base no nome, autor ou tag</li>
                                <li>Diversos layouts para artigos</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Filosofias
                            </Text>
                            <List type={ListType.disc}>
                                <li>Facil de usar</li>
                                <li>Codigo limpo</li>
                                <li>Mais rapido que Wordpress ou outro CMS</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Requisitos
                            </Text>
                            <List type={ListType.disc}>
                                <li>Node.js</li>
                                <li>NPM</li>
                                <li>VS Code para editar</li>
                                <li>Imp VS Code plugins: <br /> <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noopener noreferrer">Path Intellisense</a> , <br /> <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noopener noreferrer">Tailwind CSS IntelliSense</a> </li>
                            </List>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs