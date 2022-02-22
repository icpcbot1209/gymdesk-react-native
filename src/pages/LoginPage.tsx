import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import { Button, Text, View } from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../routing/RootStackParams';

import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'gymdesk.us.auth0.com',
  clientId: 'JW7wb1Pt5iULc5mpqVxcIdtDt7Me7N4E',
});

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const LoginPage = () => {
  const navigation = useNavigation<loginScreenProp>();
  const [accessToken, setAccessToken] = useState<any>('');

  useEffect(() => {
    setAccessToken('');
    // userLogin();
  }, []);

  const userLogin = () => {
    auth0.webAuth
        .authorize({scope: 'openid email profile'})
        .then(credentials => {
            console.log('credentials: ',credentials);
            setAccessToken(credentials.accessToken);      
            navigation.navigate('Profile');      
        })
        .catch(error => {
            console.log(error);
            console.log('login Error')
        });
  }

  const userLogout = () => {
    auth0.webAuth.clearSession()
    .then(res => console.log('logout:', res))
    .catch(error => console.log(error));
  } 

  return (
    <View style={{ marginTop: 250}}>       
       <Button title="login" onPress={() => userLogin()}></Button>
       <View style={{height: 20}}></View>
       <Button title="logout" onPress={() => userLogout()}></Button>
    </View>
  );
};
