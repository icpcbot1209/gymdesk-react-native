import { StyleSheet, View, Text, Touchable } from 'react-native';
import  { useState } from 'react';
import * as React from 'react';
import { Avatar, List, Title, Chip, Button, IconButton } from 'react-native-paper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';

const userInfo = {
  name: 'Artium Marshall',
  createdAt: '04/14/2021',
  checkinCode: '862697',
};

export const ProfileDetails = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <View>
      <View style={styles.header}>
        <Avatar.Image style={styles.avatar} size={72} source={require('assets/img/member58183-large.jpg')}></Avatar.Image>
        <View style={styles.headerInfo}>
          <Title style={styles.white}>{userInfo.name}</Title>
          <Text style={styles.white}>Member since {userInfo.createdAt}</Text>
        </View>

        <Chip style={styles.statusChip} textStyle={styles.statusChipText}>
          Active
        </Chip>
      </View>

      {expanded && (
        <View style={styles.expandedSection}>
          <View style={styles.columnCenter}>
            <View style={styles.rowCenter}>
              <Button mode="contained" onPress={() => {}} color="white">
                Edit
              </Button>

              <Button  mode="contained" onPress={() => {}} color="white" style={styles.barCodeButton}>
                <FontAwesomeIcon icon={faBarcode}/>
              </Button>
            </View>

            <Text style={styles.checkinCode}>{userInfo.checkinCode}</Text>
            <Text style={styles.white}>Check-in code</Text>
          </View>
        </View>
      )}

      <Button
        mode="contained"
        onPress={() => {
          setExpanded((x) => !x);
        }}
        style={styles.expandBtn}
        icon={expanded ? 'chevron-up' : 'chevron-down'}
        labelStyle={styles.expandBtnIcon}
      >
        {''}
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#276F84',
    padding: 16,
  },
  avatar: {
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  white: {
    color: '#ffffff',
  },
  statusChip: {
    backgroundColor: '#3ACA6F',
    borderRadius: 10,
    padding: 0,
  },
  statusChipText: {
    color: 'white',
    fontWeight: 'bold',
  },
  expandBtn: {
    backgroundColor: '#276F84',
    opacity: 0.8,
    borderRadius: 0,
  },
  expandBtnIcon: {
    fontSize: 32,
  },
  columnCenter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkinCode: {
    color: '#ffffff',
    fontSize: 32,
  },
  expandedSection: {
    backgroundColor: '#276F84',
    padding: 16,
    borderTopColor: 'rgba(255,255,255,0.2)',
    borderTopWidth: 2,
  },
  barCodeButton: {
    marginLeft: 32
  }
});

