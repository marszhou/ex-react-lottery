import React, { Component } from 'react'
import {
  Container,
  Header,
  Grid,
  Segment,
  Menu,
  Label,
  Input,
  Form,
  Button,
  Divider,
  Statistic,
  Message,
  Loader
} from 'semantic-ui-react'

class App extends Component {
  state = {}

  componentDidMount() {
    const el = document.querySelector('link[rel="stylesheet"]')
    el.addEventListener('load', () =>
      this.setState({
        cssLoaded: true
      })
    )
  }
  render() {
    const { cssLoaded } = this.state
    return cssLoaded ? (
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1">抽奖</Header>
        <Grid columns={3} stackable>
          <Grid.Column width={3}>
            <Segment.Group className="left-sidebar">
              <Segment>1</Segment>
              <Segment>2</Segment>
              <Segment>3</Segment>
              <Segment>4</Segment>
              <Segment>5</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={13}>
            <Segment>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    label="总共抽取数量"
                    control={Input}
                    placeholder="总数"
                    value={19}
                    onChange={e => console.log(e.target.value)}
                  />
                  <Form.Field
                    label="共抽取几组？"
                    control="input"
                    placeholder="组"
                  />
                </Form.Group>
                <Button type="submit" primary>
                  Submit
                </Button>
                <Divider hidden />
              </Form>
            </Segment>

            <Segment attached='top'>
              <Statistic.Group widths='4' size='mini'>
                <Statistic >
                  <Statistic.Value>进行中</Statistic.Value>
                  <Statistic.Label>状态</Statistic.Label>
                </Statistic>
                <Statistic >
                  <Statistic.Value>30/50</Statistic.Value>
                  <Statistic.Label>总计抽取</Statistic.Label>
                </Statistic>
                <Statistic >
                  <Statistic.Value>3/5</Statistic.Value>
                  <Statistic.Label>抽取次数</Statistic.Label>
                </Statistic>
                <Statistic >
                  <Button size='large'>终止</Button>
                </Statistic>
              </Statistic.Group>


            </Segment>
            <Message color="black" size="massive" className='main-content' attached>
    <Message.Header>
      正在抽奖...
    </Message.Header>
    <p>
    沈毅恒,余文峻,张未,徐明宽,叶芃,杨景钦,吕欣,陈俊锟,袁伟强,吴作凡,杨家齐,沈睿,翁文涛
    </p>
  </Message>
  <Segment attached textAlign="center">
  <Button type='button' color="red">抽第4组</Button>
  <Button type='button' color="red" disabled loading>loading</Button>

  </Segment>

          </Grid.Column>
        </Grid>
      </Container>
    ) : null
  }
}

export default App
