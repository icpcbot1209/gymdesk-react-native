import React, { useState } from 'react';
import { useTheme, Button, Card, Title, RadioButton, TextInput } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { customGray } from '../constants/colors';

export const LogInPage = () => {
  const { colors } = useTheme();
  const [value, setValue] = useState<string>('');
  const [text, setText] = useState<string>('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Image source={require('assets/img/circles.png')} style={styles.logo}></Image>

            <View style={styles.divider}></View>
            <Title style={styles.title}>Welcome back!</Title>
            <View style={styles.divider}></View>
            <RadioButton.Group value={value} onValueChange={(value: string) => setValue(value)}>
              <View style={styles.radioGroup}>
                <RadioButton.Item value="first" label="MEMBER" labelStyle={styles.radioLabel} position="leading" />
                <RadioButton.Item value="second" label="MANAGER" labelStyle={styles.radioLabel} position="leading" />
              </View>
            </RadioButton.Group>
            <View style={styles.divider}></View>

            <TextInput
              label="Email Address"
              value={text}
              onChangeText={(text) => setText(text)}
              autoComplete={false}
              mode="outlined"
              textContentType="emailAddress"
              outlineColor={customGray}
              activeOutlineColor={customGray}
              style={styles.input}
            />
            <View style={styles.divider}></View>

            <TextInput
              label="Password"
              value={text}
              onChangeText={(text) => setText(text)}
              autoComplete={false}
              mode="outlined"
              textContentType="password"
              outlineColor={customGray}
              activeOutlineColor={customGray}
              style={styles.input}
            />

            <View style={styles.divider}></View>

            <Button mode="contained" onPress={() => {}} color={colors.error} contentStyle={styles.button}>
              SIGN-IN
            </Button>

            <View style={styles.divider}></View>

            <Button mode="text" onPress={() => {}} color={customGray}>
              Forgot Password
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(244,246,248,1)',
  },
  logo: {
    width: 102,
    height: 102,
    margin: 'auto',
  },
  card: {
    marginTop: 190,
    marginHorizontal: 'auto',
    marginBottom: 50,
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 60,
    maxWidth: 480,
    minWidth: 0,
    width: 'auto',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  divider: {
    height: 24,
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioLabel: {
    color: customGray,
    fontSize: 12,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  input: {
    minWidth: 0,
  },
  button: {
    minWidth: 0,
    width: '100%',
    paddingVertical: 10,
  },
});
