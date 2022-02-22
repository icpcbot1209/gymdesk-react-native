import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProfileDetails} from './ProfileDetails';

export const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileDetails />      
    </ScrollView>
    //  <Text>Hi, I'm Profile page</Text> 
  );
};

const styles = StyleSheet.create({
  container: {
    // minHeight: '100vh',
    backgroundColor: 'rgba(244,246,248,1)',
  }
});
