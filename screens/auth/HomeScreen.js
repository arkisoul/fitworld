import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button
} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this._signIn = this._signIn.bind(this);
    this._signUp = this._signUp.bind(this);
  }
  static navigationOptions = {
    header: null,
  };

  _signIn() {
    console.log(this.props);
    this.props.navigation.navigate('SignIn');
  }

  _signUp() {
    console.log(this.props);
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <ImageBackground source={require('../../assets/images/authbg.jpg')} style={styles.authBg}>
            <Text>Inside</Text>
          </ImageBackground>
          <View styles={styles.authBgOverlay}></View>
        </View>
        <View style={styles.bottomNavbar}>
          <View style={[styles.authBtn, styles.authBtnFirst]}>
            <Button
              onPress={this._signIn}
              title="Sign In"
              color="#841584"
              accessibilityLabel="Sign In"
            />
            <TabBarIcon
              name={
                Platform.OS === 'ios'
                  ? `ios-log-in`
                  : 'md-log-in'
              }
            />
          </View>
          <View style={styles.authBtn}>
            <Button
              onPress={this._signUp}
              title="Sign Up"
              color="#841584"
              accessibilityLabel="Register"
            />
            <TabBarIcon
              name={
                Platform.OS === 'ios'
                  ? `ios-contact`
                  : 'md-contact'
              }
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff'
  },
  sliderContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  authBg: {
    width: '100%',
    height: '100%',
  },
  authBgOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  bottomNavbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 50,
    backgroundColor: '#fefefe'
  },
  authBtn: {
    flex: 1,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  authBtnFirst: {
    borderRightWidth: 1,
    borderRightColor: '#dbdbdb'
  }
});
