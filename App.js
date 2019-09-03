import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Header,
  Footer,
  FooterTab,
  Badge,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Thumbnail
} from "native-base";

export default function App() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>myHeader!!!!</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Card>
        <Title style={styles.title}>PineApp</Title>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://pbs.twimg.com/profile_images/1148974811537911809/FIqAfd0l_400x400.png"
              }}
            />
            <Body>
              <Text>Go (B)Ananas</Text>
              <Text note>by Punny Ananas</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVhbxGN925J6BcDyNnfeooE95kjAv2Ck8pKBrpkm0-kBa3tDXlA"
              }}
            />
            <Body>
              <Text>Taste of Sunshine</Text>
              <Text note>by Golden Ananas</Text>
            </Body>
          </Left>
        </CardItem>
        <Card>
          <CardItem>
            <Title style={styles.textStyle}>`piña un poco loca`</Title>
          </CardItem>
        </Card>
        <CardItem style={styles.polkaStyle}>
          <Text>
            .\\..//..\\..//..\\..//..\\..//..\\..//..\\..//..\\..//..\\..//..\\..//..\\..//.
          </Text>
        </CardItem>

        <CardItem>
          <Button>
            <Icon name="rocket" size={30} color="#990"></Icon>
            <Text> Benefits and cool facts about this fruit</Text>
          </Button>
        </CardItem>
        <Button style={styles.buttonStyle}>
          <Icon name="globe" size={10} color="#900" />
          <Text> Where to find the best</Text>
        </Button>
      </Card>

      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzEtpWtDVFXuWdOX-tPYnkRq_RB_sbJ26P8USZInr9nUC5FlZ"
              }}
            />
            <Body>
              <Text>Below this card should be an image</Text>
              <Text note>and now there is, thanks to Captain Huss</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwX_KNl6cS6eEH8QMBntfGsmwLmSDGnGu27qiLFOkqIi6jYtK"
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
      <Footer style={styles.footerStyle}>
        <FooterTab>
          <Button badge vertical>
            <Badge>
              <Text>23</Text>
            </Badge>
            <Icon name="apps" />
            <Text>تطبيقات</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button active badge vertical>
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>استعن بصديق</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  buttonStyle: {
    backgroundColor: "black",
    justifyContent: "center"
  },

  polkaStyle: {
    backgroundColor: "green",
    alignItems: "center",
    fontSize: 80
  },

  textStyle: {
    color: "orange",
    justifyContent: "center",
    fontStyle: "italic",
    fontSize: 40
  },
  footerStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  title: {
    color: "green",
    fontSize: 60,
    // fontFamily:
    backgroundColor: "gold"
  }
});
