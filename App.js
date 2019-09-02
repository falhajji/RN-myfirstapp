import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
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
  Thumbnail,
  Image
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
      <Text> Hello these are my thumbnails </Text>
      <Thumbnail
        large
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwX_KNl6cS6eEH8QMBntfGsmwLmSDGnGu27qiLFOkqIi6jYtK"
        }}
      />
      <Thumbnail
        large
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVhbxGN925J6BcDyNnfeooE95kjAv2Ck8pKBrpkm0-kBa3tDXlA"
        }}
      />

      <View style={styles.container}>
        <Text style={styles.textStyle}>
          This is my first app using React Native ! :) maybe
        </Text>
      </View>
      <Footer>
        <FooterTab>
          <Button badge vertical>
            <Badge>
              <Text>2</Text>
            </Badge>
            <Icon name="apps" />
            <Text>Apps</Text>
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
            <Text>Contact</Text>
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
  textStyle: {
    color: "purple"
  }
});
