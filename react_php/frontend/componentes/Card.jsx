const Card = () => {

    const [estudante, setEstudante] = React.useState([]);

    React.useEffect(async() => {
        const resposta = await fetch('http://localhost/projetos/react_php/backend/index.php');
        setEstudante(await resposta.json());
    }, []);

    return(
        <div className="container">
            {estudante.map((exibir) => {
                return(
                    <main className="card w-50 mt-5 mx-auto" key={exibir.id}>
                        <div className="card-header">
                            {exibir.nome}
                        </div>
            
                        <div className="card-body">
                             {exibir.telefone}
                        </div>
                    </main>
                );
            })}
        </div>
    );
}