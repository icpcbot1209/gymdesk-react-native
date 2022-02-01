import React, { useState } from 'react';
import { useTheme, Button, Card, Title, RadioButton, TextInput } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { customGray } from '../../constants/colors';
import { ProfileDetails } from './ProfileDetails';

export const ProfilePage = () => {
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileDetails></ProfileDetails>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
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
