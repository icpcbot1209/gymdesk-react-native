import {StyleSheet, View, Text, Touchable, } from 'react-native';
import {useState} from 'react';
import * as React from 'react';
import { Avatar, Title, Chip, Button, Card, Paragraph } from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBarcode} from '@fortawesome/free-solid-svg-icons';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';
import { Persional } from './Persional';
import { Signature } from '../signature/Signature';
import { QuickActions } from './QuickActions';
import { Attendance } from './Attendance';
// import { Card } from '../../component/Card';

const userInfo = {
  name: 'Artium Marshall',
  createdAt: '04/14/2021',
  checkinCode: '862697',
};

const BookingsRightContent = (props: any) => (
  <Button mode="contained" onPress={() => {}} style={styles.cardBtn}>
    {'BOOK A CLASS'}
  </Button>
);

const MembershipRightContent = (props: any) => (
  <Button mode="contained" onPress={() => {}} style={styles.cardBtn}>
    {'ADD MEMBERSHIP'}
  </Button>
);

export const ProfileDetails = () => {
  const [expanded, setExpanded] = useState(false);

  const editProfile = () => {
      console.log('Edit Profile')
  }

  const showBarCode = () => {
      console.log('Show BarCode')
  }

  return (
    <View>
      <View style={styles.header}>
        <Avatar.Image
          style={styles.avatar}
          size={72}
          source={require('../../assets/img/member58183-large.jpg')}
        />
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
              <TouchableOpacity
                style={styles.editProfileButton}
                onPress={() => editProfile()}>
                <FontAwesomeIcon icon={faPencil} />
                <Text
                  style={{marginLeft: 10, color: 'black', fontWeight: 'bold'}}>
                  EDIT
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.barCodeButton}
                onPress={() => showBarCode()}>
                <FontAwesomeIcon icon={faBarcode} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: 2,
                backgroundColor: '#50899a',
                width: 150,
              }}
            />

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Text style={styles.checkinCode}>{userInfo.checkinCode}</Text>
              <Text style={styles.white}>Check-in code</Text>
            </View>
          </View>

          <Persional />
        </View>
      )}

      <Button
        mode="contained"
        onPress={() => {
          setExpanded(x => !x);
        }}
        style={styles.expandBtn}
        icon={expanded ? 'chevron-up' : 'chevron-down'}
        labelStyle={styles.expandBtnIcon}>
        {''}
      </Button>

      <View style={styles.additionalInfoSection}>
        <Signature />

        <QuickActions />

        <Attendance />

        <View style={styles.service}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
            You forgot your bag at the gym, please pick it up at the front desk
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingBottom: 20,
            }}>
            <Text style={{color: 'white', fontSize: 14}}>By Eran</Text>
            <Text style={{color: 'white', fontSize: 14}}>
              12/14/2021 - 12:34pm
            </Text>
          </View>
        </View>

        {/* Booking Card */}
        <Card style={{marginTop: 15, borderRadius: 10}}>
          <Card.Title
            title="Bookings"
            style={styles.cardHeader}
            titleStyle={{color: 'white'}}
            right={BookingsRightContent}
          />
          <Card.Content>
            <View style={{height: 30}}></View>
          </Card.Content>
        </Card>

        {/* Memberships Card */}
        <Card style={{marginTop: 15, borderRadius: 10}}>
          <Card.Title
            title="Memberships"
            style={styles.cardHeader}
            titleStyle={{color: 'white'}}
            right={MembershipRightContent}
          />
          <Card.Content style={{padding: 16}}>
            <Title>Adult BJJ Family Membership</Title>
            <Paragraph>Family Membership</Paragraph>
            <Paragraph>Start Date: 03/19/2020</Paragraph>
            <Paragraph>Cost: $180.00 / 6 months</Paragraph>
            <Paragraph>25% Discount</Paragraph>
            <Paragraph>Access: 3 Sessions / week 3 remaining:</Paragraph>
            <View style={{alignItems: 'center'}}>
              <Button
                mode="contained"
                onPress={() => {}}
                style={styles.membershipBtn}
                labelStyle={{color: '#333'}}>
                {'1 PREVIOUS MEMBERSHIP'}
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* Payment Card */}
        <Card style={{marginTop: 15, borderRadius: 10}}>
          <Card.Title
            title="Payments"
            style={styles.cardHeader}
            titleStyle={{color: 'white'}}
          />
          <Card.Content style={{padding: 16}}>
            <Title>Adult BJJ Family Membership</Title>
            <Paragraph>Manual Payment: $135.00(Recurring)</Paragraph>
            <Paragraph>Scheduled: 03/19/2022</Paragraph>
            <View style={{alignItems: 'flex-start'}}>
              <Button
                mode="contained"
                onPress={() => {}}
                style={styles.membershipBtn}
                labelStyle={{color: '#333'}}>
                {'INVOICE'}
              </Button>
            </View>
            <Button
              mode="contained"
              onPress={() => {}}
              style={[styles.cardBtn, {marginTop: 20}]}>
              {'PAYMENT HISTORY'}
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    borderRadius: 3,
    height: 25,
    marginTop: 5,
  },
  statusChipText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 0,
  },
  expandBtn: {
    backgroundColor: '#276F84',
    opacity: 0.8,
    borderRadius: 0,
    height: 40,
  },
  expandBtnIcon: {
    fontSize: 32,
  },
  columnCenter: {
    width: '100%',
    height: 180,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  editProfileButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  barCodeButton: {
    backgroundColor: 'white',
    marginLeft: 25,
    borderRadius: 30,
    padding: 15,
  },
  additionalInfoSection: {
    backgroundColor: '#F3F4F7',
    padding: 16,
  },
  service: {
    backgroundColor: '#CB9134',
    padding: 15,
    borderRadius: 10,
  },
  cardHeader: {
    backgroundColor: '#235D83',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
  },
  cardBtn: {
    backgroundColor: '#08C9B5',
    borderRadius: 35,
    padding: 0,
  },
  membershipBtn: {
    backgroundColor: 'white',
    borderRadius: 35,
    marginTop: 30,
  },
});
