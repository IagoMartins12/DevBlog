/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import { ListType } from "../../src/shared/enums"


const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            <Text subtitle className="mt-10 md:text">
                Quem eu sou? 
            </Text>
            <Text p>
                Olá pessoal! Meu nome é Iago martins, o criador deste blog. Como primeiro post, irei comentar um pouco sobre mim, meus hobbys 
                e o meu trajeto na area de tecnologia 
            </Text>
            <Text p>
                Tenho 22 anos, e estou no ultimo periodo da faculdade de Analise e Desenvolvimento de sistemas pela universidade Cruzeiro do sul. 
                Meu primeiro contato com programação foi quando eu tinha 14 anos, em um curso de informatica na escola. Aprendi apenas sobre html e css, mas ja foi 
                o bastante para me fazer se apaixonar por esse universo. No entando, eu não tinha nenhum computador em casa, minha unica forma de ter acesso a computadores 
                era no curso, porém quando o curso se encerrou, eu me vi sem meios para conseguir continuar com os estudos :(. 
            </Text>
            <Text p>
                Consegui voltar aos estudos no começo de 2021, quando comecei o curso de ADS. e desde então, não parei de estudar. 
                Durante esse periodo, tive contato com diversas tecnologias, como por exemplo: 
                <List type={ListType.disc} className="mt-3">
                    <li>JavaScript (ES6+)</li>
                    <li>.NET C#</li>
                    <li>Java </li>
                    <li>SQL Server </li>
                    <li>MongoDb</li>
                    <li>NodeJs</li>
                    <li>ReactJs</li>
                    <li>PostgresSQL</li>
                    <li>Wordpress</li>
                </List>
                Caso queira conhecer mais sobre minhas hard skills, clique <a href=""> aqui </a> para ver meu portfolio.
                <Seperator dots />
            </Text>
            <Text subtitle className="mt-10 md:text">
                Qual o objetivo deste blog?
            </Text>
            <Text p>
                Irei utilizar este blog como uma forma de deixar meus estudos localizados em apenas um só local, que irá servir para ajudar 
                outras pessoas também. Afinal, quem nunca se perdeu quando estava estudando algum determinado assunto? 
                <br/> 
                Neste blog, irei fazer o possível para que os tôpicos sejam esclarecidos da maneira mais pratica e didatica possivel. Topicos esses
                que podem ser de nivel iniciante, intermediario ou ate avançados.
            </Text>
            <Text p>
                Também irei atualizar o blog com informações dos projetos que eu venho participando, tanto projetos profissionais quanto projetos pessoais.
            </Text>
            <Text p>
                Além disso, este projeto servirá para colocar em pratica algumas tecnologias que eu venho estudando. 
            </Text>
            <Text subtitle className="mt-10 md:text">
                Quais foram as tecnologias utilizadas neste projeto? 
            </Text>
            <List type={ListType.disc}>
                <li><strong> TypeScript</strong> como linguagem principal  </li>
                <li><strong>ReactJs </strong>para componetização de elementos </li>
                <li><strong>NextJs</strong> para otimizar o processo de desempenho do site, focado no SSR, sendo assim mais amigavel com o SEO </li>
                <li><strong>Tailwind CSS </strong> para estilização</li>
                <li><strong>Firebase </strong>como hospedagem e banco de dados </li>
            </List>

        </PageLayout>
    )
}

export default Article;