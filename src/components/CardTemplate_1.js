
import { Card, Col, Row, Grid, Text, Popover, Button } from "@nextui-org/react";



export const PersonalCard = (props) => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          {props.main_title}
        </Text>
        <Text h3 color="white">
          {props.main_title_desc}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }} className={`cardTemp_1_body`}>
      <Card.Image src={props.background_image} css={{ bg: "rgba(0, 0, 0, 0.357)"}}
        objectFit="cover" width="100%" height="100%" alt="Personal Web"
      />
    </Card.Body>
    <Card.Footer isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
    <Col>
      <Text color="#d1d1d1" size={12}>
        {props.text_title}
      </Text>

        <Row>
          <Grid.Container gap={2} justify="flex-start">
            <Grid xs={1.5}>
              <Popover justify="flex-start"placement={"top-left"} className={``}>
                <Popover.Trigger>
                  <Card.Image src="/assets/images/tools-icons/nextjs.png" className={`card-icon-type1`}
                    css={{ bg: "black", br: "10px" }} height={40} width={40} alt="Personal Web Icon"
                  />
                </Popover.Trigger>
                <Popover.Content isBlurred css={{ bgBlur: "#0f1114b5", br: "10px" }} >
                  <Text css={{ p: "10px" }} color="#fff" size={12}>Next.js by Vercel - The React Framework</Text>
                </Popover.Content>
              </Popover>
            </Grid>

            <Grid xs={1.5} >
              <Popover placement={"top-left"} className={``}>
                <Popover.Trigger>
                  <Card.Image src="/assets/images/tools-icons/nextui.png" className={`card-icon-type1`}
                    css={{ bg: "black", br: "10px" }} height={40} width={40} alt="Personal Web Icon"
                  />
                </Popover.Trigger>
                <Popover.Content isBlurred css={{ bgBlur: "#0f1114b5", br: "10px" }} >
                  <Text css={{ p: "10px" }} color="#fff" size={12}>NextUI - Beautiful, fast and modern React UI Library</Text>
                </Popover.Content>
              </Popover>
            </Grid>

            <Grid xs={1.5} >
              <Popover placement={"top-left"} className={``} variant="bordered">
                <Popover.Trigger>
                  <Card.Image src="/assets/images/tools-icons/sass_01.png" className={`card-icon-type1`}
                    css={{ bg: "black", br: "10px" }} height={40} width={40} alt="Personal Web Icon"
                  />
                </Popover.Trigger>
                <Popover.Content isBlurred css={{ bgBlur: "#0f1114b5", br: "10px" }} >
                  <Text css={{ p: "10px" }} color="#fff" size={12}>Sass: Syntactically Awesome Style Sheets</Text>
                </Popover.Content>
              </Popover>
            </Grid>
          </Grid.Container>
        </Row>
    </Col>
    </Card.Footer>
  </Card>
);
