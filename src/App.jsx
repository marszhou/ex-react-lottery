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
  Loader,
} from 'semantic-ui-react'

const users =
  '沈毅恒,余文峻,张未,徐明宽,叶芃,杨景钦,吕欣,陈俊锟,袁伟强,吴作凡,杨家齐,沈睿,翁文涛,赵晟宇,高杰,欧阳思琦,龙耀为,张洗月,董玥,杨坤禾,陈治学,迟舒乘,唐一凡,陈柯润,陈俊杰,胡亦行,谢添乐,尹龙晖,叶添,蒋佳轩,潘慰慈,申奥,高敏博,郑书豪,袁宾雨,张心之,毛怡欢,李佳蔚,王世因,董克凡,姜志豪,李子豪,李一鸣,许子望,邹逍遥,汪文潇,钟惠兴,张若天,张天纵,林漓尽致,任之洲,朱晨智,娄晨耀,王藴韵,韩迟,张志俊,金策,任翰林,倪博楠,李博洋,唐博识,任崇旭,梅知雨,覃煜鑫,赵浩宇,林一衡,郭铖浩,王润喆,宋政钦,王远皓,卢睿,洪文浩,张羿翔,邹岳松,李政,姜舜华,姚顺雨,张恒捷,孙明杰,凌展,吕凯风,王鉴浩,束欣凯,刘研绎,杜瑜皓,黄涛岸,杜卓帆,余岳,岑若虚,余行江,刘剑成,谢倩,彭雨翔,谢昌志,林子窈,王浩昀,刘蕴超,彭炳辉,张皓辰,陶润洲,张玮中,汪至祺,贺嘉帆,王旭东,赵梓硕,陈胤伯,崔馨月,吴睿涵,黎天鸿,乔明达,俞鼎力,黄嘉泰,贺子航,黄志翱,刘定峰,洪鑫焰,黄施霖,钟皓曦,周天茗,何奇正,吕可凡,董宏华,左世良,茅佳源,李文正,康宇衡,胡伦嘉,孟涛,梁桢枭,赵金昊,罗辑,吴晨玮,周杉,鲍业伦,许悦,魏子豪'

class App extends Component {
  state = {}

  componentDidMount() {
    const el = document.querySelector('link[rel="stylesheet"]')
    el.addEventListener('load', () =>
      this.setState({
        cssLoaded: true,
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
                    onChange={(e) => console.log(e.target.value)}
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

            <Segment attached="top">
              <Statistic.Group widths="4" size="mini">
                <Statistic>
                  <Statistic.Value>进行中</Statistic.Value>
                  <Statistic.Label>状态</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>30/50</Statistic.Value>
                  <Statistic.Label>总计抽取</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>3/5</Statistic.Value>
                  <Statistic.Label>抽取次数</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Button size="large">终止</Button>
                </Statistic>
              </Statistic.Group>
            </Segment>
            <Message
              color="black"
              size="massive"
              className="main-content"
              attached
            >
              <Message.Header>正在抽奖...</Message.Header>
              <p>
                沈毅恒,余文峻,张未,徐明宽,叶芃,杨景钦,吕欣,陈俊锟,袁伟强,吴作凡,杨家齐,沈睿,翁文涛
              </p>
            </Message>
            <Segment attached textAlign="center">
              <Button type="button" color="red">
                抽第4组
              </Button>
              <Button type="button" color="red" disabled loading>
                loading
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    ) : null
  }
}

export default App
