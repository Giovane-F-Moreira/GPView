import styled from "styled-components/native";

export const BandeiraPais = styled.Image`
    width: 65;
    height: 65;
    margin-left: 10;
    border-radius: 50;
`;

export const Avatar = styled.Image`
    padding: 4px;
    width: 36px;
    height: 36px;
    border-radius: 18px;
`;

export const NomeEmpresa = styled.Text`
    padding: 8px;
    font-size: 16;
    color: #59594a;
`;

export const NomeProduto = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: #59594a;
`;

export const DescricaoProduto = styled.Text`
    font-size: 14;
    color: #59594a;
`;

export const PrecoProduto = styled.Text`
    font-size: 14;
    font-weight: bold;
    color: #59594a;
`;

export const Likes = styled.Text`
    font-size: 14;
    color: #59594a;
`;

export const EntradaNomeCircuito = styled.TextInput`
    height: 40px;
    width: 80%;
    background-color: #fff;
    border-color: #c7c7c7;
    border-width: 1;
    border-radius: 8px;
`;

export const CentralizadoNaMesmaLinha = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const EsquerdaDaMesmaLinha = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Espacador = styled.View`
    flex-direction: row;
    padding: 3px;
`;

export const ContenedorMenu = styled.View`
    flex: 1;
    padding: 4px;
    font-size: 18;
    background-color: #fff;
`;

export const DivisorMenu = styled.View`
    margin-vertical: 5;
    margin-horizontal: 5;

    border-bottom-width: 1;
    border-color: #3f6ea3;
`;

export const SecaoComentarios = styled.Text`
    padding: 8px;
    font-size: 16;
    font-weight: bold;
    color: #59594a;
`;

export const DivisorComentario = styled.View`
    marginVertical: 5;
    marginHorizontal: 5;

    border-bottom-width: 1;
    border-color: #3f6ea3;
`;

export const ContenedorComentarios = styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

export const ContenedorComentarioDoUsuario = styled.View`
    background-color: #b4d2e7;
    border-color: #c7c7c7;
    border-width: 1;
    margin-horizontal: 5px;
`;

export const ContenedorComentario = styled.View`
    background-color: #fff;
    border-color: #c7c7c7;
    border-width: 1;
    margin-horizontal: 5px;
`;

export const EspacadorComentario = styled.View`
    marginVertical: 2;
`;

export const ContenedorNovoComentario = styled.View`
    margin-top: 100;
    align-self: center;
    width: 95%;
    border-color: #7ca982;
    border-width: 1;
    border-radius: 6;
    background-color: #fffcf9;
`;

export const AutorComentario = styled.Text`
    padding: 6px;
    font-size: 12;
    color: #283044;
`;

export const Comentario = styled.Text`
    padding: 6px;
    font-size: 14;
    color: #283044;
`;

export const DataComentario = styled.Text`
    padding: 6px;
    font-size: 12;
    color: #283044;
`;

export const ContenedorMensagem = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #eff2f1;
`;

export const Mensagem = styled.Text`
    color: #283044;
`;

export const Cabecalho = {
    backgroundolor: '#f0f0f0',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0
};
