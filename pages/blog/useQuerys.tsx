/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { ListType } from "../../src/shared/enums"


const Article = () => {
    return (
        <PageLayout blogwithsidebar>
            <Text subtitle className="mt-10 md:text">
                 Explorando o poder do useQuery/useQueries para recuperação de dados em aplicações React
            </Text>
            <Text p>
               Em aplicações React, a recuperação de dados de uma API é uma tarefa comum. Para simplificar e aprimorar essa funcionalidade, 
               bibliotecas populares como React Query oferecem hooks poderosos, como useQuery e useQueries. Essas ferramentas simplificam o processo de 
               busca e armazenamento de dados, além de cuidarem do gerenciamento de estado, cache, refetching e outras tarefas relacionadas.
            </Text>
            <Text p>
                Neste artigo, mergulharemos no mundo do useQuery e useQueries, explorando suas funcionalidades e fornecendo exemplos de código para ilustrar 
                sua utilização. Veremos como esses hooks podem otimizar a recuperação de dados em aplicações React, tornando o desenvolvimento mais eficiente 
                e agradável.
            </Text>
            <Text p> 
                Ao longo deste artigo, você encontrará exemplos de código para facilitar a compreensão e a implementação prática. Esses exemplos abordarão 
                situações comuns, como a exibição de informações de um único usuário (useQuery) e a exibição de perfis de vários usuários simultaneamente 
                (useQueries). Com essas demonstrações, você poderá adaptar esses conceitos às suas necessidades específicas.
            </Text>
            <Text subtitle className="mt-10 md:text">
                O que é useQuery?
            </Text>
            <Text p> 
                O useQuery é um hook fornecido pela biblioteca React Query, que permite buscar e armazenar dados de forma fácil e eficiente. Ele cuida do 
                gerenciamento de estado, cache, refetching e outras tarefas relacionadas à recuperação de dados de uma API.
            </Text>
            <CodeBlock
                code={`
                    //import { useQuery } from 'react-query';

                    const UserProfile = ({ userId }) => {
                    const { data, isLoading, error } = useQuery(['user', userId], () =>
                        fetch('/api/users/userId').then((response) => response.json())
                    );

                    if (isLoading) {
                        return <p>Loading...</p>;
                    }

                    if (error) {
                        return <p>Error: {error.message}</p>;
                    }

                    return (
                        <div>
                        <h2>{data.name}</h2>
                        <p>{data.email}</p>
                        </div>
                    );
                    };`} />
         

        </PageLayout>
    )
}

export default Article;