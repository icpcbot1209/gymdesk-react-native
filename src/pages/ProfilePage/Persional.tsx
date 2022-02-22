import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar, Text, Button} from 'react-native-paper';
import { subtitleColor } from "../../constants/colors";
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export const Persional = () => {
    const addPaymentMethod = () => {
        console.log('Add Payment Method')
    }

    return (
      <>
        <View style={styles.detailSection}>
          <Text style={styles.subTitle}>Persional Details</Text>

          {/* Birthdy */}
          <View style={styles.contentStyle}>
            <Text style={styles.txtStyle}>Birthday</Text>
            <View style={styles.contentItem}>
              <Text style={styles.txtStyle}>May 2</Text>
              <Text style={styles.txtStyle}>(42 years old)</Text>
            </View>
          </View>

          {/* Gender */}
          <View style={styles.contentStyle}>
            <Text style={styles.txtStyle}>Gender</Text>
            <View style={styles.contentItem}>
              <Text style={styles.txtStyle}>Male</Text>
            </View>
          </View>

          {/* Phone Number */}
          <View style={styles.contentStyle}>
            <Text style={styles.txtStyle}>Phone Number</Text>
            <View style={styles.contentItem}>
              <Text style={styles.txtStyle}>360-2117</Text>
              <Text style={styles.txtStyle}>1343434834</Text>
            </View>
          </View>

          {/* Email Address */}
          <View style={styles.contentStyle}>
            <Text style={styles.txtStyle}>Email Address</Text>
            <View style={styles.contentItem}>
              <Text style={styles.txtStyle}>testmember@gymdesk.com</Text>
            </View>
          </View>

          {/* Address */}
          <View style={styles.contentStyle}>
            <Text style={styles.txtStyle}>Address</Text>
            <View style={styles.contentItem}>
              <Text style={styles.txtStyle}>David yalin 10</Text>
              <Text style={styles.txtStyle}>tel Aviv, Isreal 12345</Text>
            </View>
          </View>

          {/* Judo - Bule Belt */}
          <View style={{paddingVertical: 15}}>
            <Text style={styles.txtStyle}>Judo - Bule Belt</Text>
          </View>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.subTitle}>Billing Details</Text>

          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => addPaymentMethod()}>
            <FontAwesomeIcon icon={faPlus} />
            <Text style={{marginLeft: 10, color: 'black', fontWeight: 'bold'}}>
              ADD PAYMENT METHOD
            </Text>
          </TouchableOpacity>
        </View>

        {/* Family Section */}
        <View style={styles.detailSection}>
          <Text style={styles.subTitle}>Family Account</Text>

          <View style={[styles.contentStyle, {alignItems: 'center'}]}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Avatar.Image
                style={styles.avatar}
                size={52}
                source={require('../../assets/img/member58183-large.jpg')}
              />
              <Text style={styles.txtStyle}>Artium Marshall</Text>
            </View>
            <Text
              style={{
                padding: 5,
                borderRadius: 5,
                backgroundColor: 'rgba(255,255,255,.2)',
                color: 'white',
              }}>
              Primary
            </Text>
          </View>

          <View style={[styles.contentStyle, {alignItems: 'center'}]}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Avatar.Image
                style={styles.avatar}
                size={52}
                source={require('../../assets/img/member58183-large.jpg')}
              />
              <Text style={styles.txtStyle}>Eran galperin</Text>
            </View>
            <Text
              style={{
                padding: 5,
                borderRadius: 5,
                backgroundColor: 'rgba(0,0,0,.1)',
                color: 'white',
              }}>
              Manage
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'baseline', marginTop: 15}}>
            <Button
                mode="contained"
                onPress={() => {}}
                style={styles.addFamilyBtn}
                labelStyle={styles.addFamilyLabel}>
                {'ADD FAMILY MEMBER'}
            </Button>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  detailSection: {
    paddingTop: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: subtitleColor,
    marginBottom: 0,
    textTransform: 'uppercase',
  },
  contentStyle: {
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#50899a',
    borderBottomWidth: 2,
  },
  txtStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  paymentButton: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  avatar: {
    marginRight: 16,
  },
  addFamilyBtn: {
    borderRadius: 35,
    backgroundColor: '#08C9B5',
    padding: 5
  },
  addFamilyLabel: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14
  },
});