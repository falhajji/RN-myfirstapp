image URL below




{
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
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwX_KNl6cS6eEH8QMBntfGsmwLmSDGnGu27qiLFOkqIi6jYtK"
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
        <CardItem>
          <Title style={styles.textStyle}>Tropically Pina or Ananas</Title>
        </CardItem>
        <CardItem>
          <Button>
            <Icon name="rocket" size={30} color="#990"></Icon>
            <Text> Benefits and facts about this fruit</Text>
          </Button>
        </CardItem>
        <Button>
          <Icon name="globe" size={30} color="#900" />
          <Text> Where to find the best in-season</Text>
        </Button>
      </Card>
      <Card>
        <CardItem style={styles.polkaStyle}>
          <Text>
            .\\..//..\\..//..\\..//..\\..//..\\..//..\\..//..\\..//..\\..//..\\..//..\\..//.
          </Text>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwX_KNl6cS6eEH8QMBntfGsmwLmSDGnGu27qiLFOkqIi6jYtK"
              }}
            />
            <Body>
              <Text>Below this card should be an image</Text>
              <Text note>but IT IS NOT WORKING</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          {/* <Image
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwX_KNl6cS6eEH8QMBntfGsmwLmSDGnGu27qiLFOkqIi6jYtK"
            }}
            style={{ height: 200, width: null, flex: 1 }}
          /> */}
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