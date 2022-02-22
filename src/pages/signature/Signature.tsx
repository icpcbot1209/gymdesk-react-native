import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export const Signature = () => {
    const signaturePage = () => {
        console.log(`Hi, I'm Signature Page`);
    }

    return (
        <Pressable onPress={() => {signaturePage()}} style={styles.container}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[styles.textLabel, {fontWeight: '700'}]}>Signature Required:</Text>
            <Text style={styles.textLabel}> Waiver</Text>
          </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    // minHeight: '100vh',
    backgroundColor: '#F5E9D6',
    padding: 10,
    borderRadius: 3
  },
  textLabel: {
    color: '#CB9134',
    fontSize: 16,
  }
});