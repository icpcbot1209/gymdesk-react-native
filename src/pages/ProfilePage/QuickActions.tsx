import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import {faC} from '@fortawesome/free-solid-svg-icons';
import {faFileContract} from '@fortawesome/free-solid-svg-icons';

export const QuickActions = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTextLabel}>Quick Actions</Text>
        <View style={styles.content}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
            <FontAwesomeIcon icon={faCalendar} color="#08C9B5" />
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Book a Class
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
            <FontAwesomeIcon icon={faCalendar} color="#08C9B5" />
            <Text style={{color: 'black', fontWeight: 'bold'}}>Check-in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
            <FontAwesomeIcon icon={faFileContract} color="#08C9B5"  />
            <Text style={{color: 'black', fontWeight: 'bold'}}>content</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  mainTextLabel: {
    color: '#334644',
    fontSize: 18,
    fontWeight: '700',
  },
  content: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 80,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 15
  }
});