import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Card, CardImage, CardContent } from "react-native-cards";
import Icon from "react-native-vector-icons/AntDesign";

export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);

        const {feed, navegador} = this.props;
        this.state = {
            feed: feed,
            navegador: navegador
        }
    }

    exibirDetalhes = () => {
        const { feed, navegador } = this.state;

        navegador.navigate("Detalhes", { feedId: feed._id });
    }

    render = () => {
        const {feed} = this.state;

        return(
            <TouchableOpacity onPress={ () => {
                this.exibirDetalhes();
            }}>
                <Card>
                    <CardImage source={IMAGEM_PRODUTO}/>
                    <CardContent>
                        <NomeEmpresa>{feed.company.name}</NomeEmpresa>
                    </CardContent>
                    <CardContent>
                        <NomeProduto>{feed.product.name}</NomeProduto>
                    </CardContent>
                    <CardContent>
                        <DescricaoProduto>{feed.product.description}</DescricaoProduto>
                    </CardContent>
                    <CardContent>
                        <EsquerdaDaMesmaLinha>
                            <PrecoProduto>{"R$ " + feed.product.price + " "}</PrecoProduto>
                            <Icon name="heart" size={18} color={"#ff0000"} />
                            <Likes>{" " + feed.likes}</Likes>
                        </EsquerdaDaMesmaLinha>
                    </CardContent>
                </Card>
            </TouchableOpacity>
        );
    }

}