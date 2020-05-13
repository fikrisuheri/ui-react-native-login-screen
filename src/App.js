import React, { Fragment } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button, Card } from 'react-native-elements';
import Slider from './Slider';
import CardFlip from 'react-native-card-flip';
import Icon from 'react-native-vector-icons/Ionicons';
export default class App extends React.Component {

  state = {
    showRealApp: false,
    animationBox: 'fadeInLeft',
    animationBox2: 'fadeOutRight',
    box1: '',
    box2: 'display:none',
    disabledSignIn: true,
    disabledSignUp: false,

  }

  _onClickBtnSignIn = () => {
    this.setState({
      animationBox: 'fadeInLeft',
      disabledSignIn: true,
      disabledSignUp: false,
    })
    this.card.flip()

  }

  _onClickBtnSignUp = () => {
    this.setState({
      animationBox: 'fadeOutLeft',
      disabledSignIn: false,
      disabledSignUp: true,
    })
    this.card.flip()
  }

  _onDone = () => {
    this.setState({ showRealApp: true });
  }

  render() {
    const state = this.state;
    if (this.state.showRealApp) {
      return (
        <Fragment>
          <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
          <View style={styles.container}>
            <View>
              <Image source={require('./logo.png')} style={{ width: 200, height: 70, resizeMode: 'contain', marginBottom: 20 }} />
            </View>
            <CardFlip style={{ width: 300, height: 300, }} ref={(card) => this.card = card} >
              <Card
                containerStyle={styles.cardStyle}>
                <Text style={styles.textWelcome}>Please sign in to continue</Text>
                <View style={styles.containerInput}>
                  <TextInput style={styles.TextInput} placeholder="Your email" />
                </View>
                <View style={styles.containerInput}>
                  <TextInput style={styles.TextInput} placeholder="Your Password" secureTextEntry={true} />
                </View>
                <View>
                  <Button
                    icon={
                      <Icon
                        name="md-arrow-round-forward"
                        size={30}
                        color="white"
                      />
                    }
                  />
                </View>
              </Card>
              <Card
                containerStyle={styles.cardStyle}>
                <Text style={styles.textWelcome}>Please sign up to continue</Text>
                <View style={styles.containerInput}>
                  <TextInput style={styles.TextInput} placeholder="Your name" />
                </View>
                <View style={styles.containerInput}>
                  <TextInput style={styles.TextInput} placeholder="Your email" />
                </View>
                <View style={styles.containerInput}>
                  <TextInput style={styles.TextInput} placeholder="Password" />
                </View>
                <View style={styles.containerInput}>
                  <TextInput style={styles.TextInput} placeholder="Confirmation password" />
                </View>
                <View>
                  <Button
                    icon={
                      <Icon
                        name="md-arrow-round-forward"
                        size={30}
                        color="white"
                      />
                    }
                  />
                </View>
              </Card>
            </CardFlip>
            <View style={{ position:'absolute', flexDirection: 'row', padding: 20,bottom:0}}>
              <Animatable.View duration={300} animation="slideInLeft" style={{ flex: 1, margin: 10, }}>
                <Button
                  disabled={state.disabledSignIn}
                  disabledStyle={{ backgroundColor: '#4388d6' }}
                  disabledTitleStyle={{ color: '#fff' }}
                  buttonStyle={styles.btnStyle}
                  containerStyle={{ elevation: 3 }}
                  titleStyle={{ color: '#4388d6' }}
                  title="SIGN IN"
                  type="solid" onPress={() => this._onClickBtnSignIn()} />
              </Animatable.View>
              <Animatable.View duration={300} animation="slideInRight" style={{ flex: 1, margin: 10, }}>
                <Button
                  disabled={state.disabledSignUp}
                  disabledStyle={{ backgroundColor: '#4388d6' }}
                  disabledTitleStyle={{ color: '#fff' }}
                  buttonStyle={styles.btnStyle}
                  containerStyle={{ elevation: 3 }}
                  titleStyle={{ color: '#4388d6' }}
                  title="SIGN UP"
                  type="solid" onPress={() => this._onClickBtnSignUp()} />
              </Animatable.View>
            </View>
          </View>
        </Fragment>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
          <Slider onDone={() => this._onDone()} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  cardStyle: {
    borderWidth: 0,
    width: '100%',
    elevation: 3,
    margin: 0,
    borderRadius: 4,
    paddingVertical: 20
  },
  btnStyle: {
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingVertical: 10
  },
  containerInput: {
    backgroundColor: '#eeeeee',
    paddingHorizontal: 5,
    borderRadius: 4,
    marginBottom: 20
  },
  textWelcome: {
    color: '#424242',
    marginBottom: 20,
    fontSize: 14,
    alignSelf: 'center'
  },
  TextInput: {
    color: '#9e9e9e'
  }
})