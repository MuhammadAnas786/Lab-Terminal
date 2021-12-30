/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function Importwallet(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.flex, styles.flex_layout]}>
        <View style={styles.flex_row}>
          <View style={[styles.flex1, styles.flex1_layout]}>
            <View style={styles.flex1_col}>
              <ImageBackground
                style={[styles.img, styles.img_layout]}
                source={require('../assets/7526f7ce5911bfe65f31c084a053b887.png')}
              />
            </View>
            <View style={styles.flex1_space} />
            <View style={styles.flex1_col1}>
              <View
                style={[
                  styles.ether_wallet_box,
                  styles.ether_wallet_box_layout
                ]}>
                <Text style={styles.ether_wallet} ellipsizeMode={'clip'}>
                  {'ETHER WALLET'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.cover_group, styles.cover_group_layout]}>
            <ImageBackground
              style={[styles.decorator, styles.decorator_layout]}
              source={require('../assets/6b51c084f0f6775985523a2880899942.png')}
            />
            <View style={[styles.rect, styles.rect_layout]} />

            <View style={[styles.cover_group1, styles.cover_group1_layout]}>
              <Px.View
                x="25px 180fr 111fr"
                y="24px 21fr 28fr"
                style={styles.txt_box}>
                <Text style={styles.txt} ellipsizeMode={'clip'}>
                  {'Enter secret phrase'}
                </Text>
              </Px.View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

Importwallet.inStorybook = true;
Importwallet.fitScreen = false;
Importwallet.scrollHeight = 844;

const styles = StyleSheet.create({
  group: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 60,
    overflow: 'hidden'
  },
  group_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 844,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {},
  flex_layout: {
    overflow: 'visible',
    marginTop: 68,
    marginBottom: 201,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 20
  },
  flex_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex1: {
    flexDirection: 'row'
  },
  flex1_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 15,
    flexGrow: 1,
    marginRight: 15
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 44
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 8,
    height: 34,
    marginBottom: 0,
    marginLeft: 0,
    width: 44,
    minWidth: 44,
    marginRight: 0
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15.5
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 197
  },
  ether_wallet_box_layout: {
    marginTop: 0,
    marginBottom: 14,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  ether_wallet_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group: {
    width: '100%'
  },
  cover_group_layout: {
    overflow: 'visible',
    marginTop: 91,
    marginBottom: 0,
    minHeight: 442,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 23,
    height: 242,
    marginBottom: 177,
    left: 71,
    flexGrow: 1,
    right: 74
  },
  rect: {
    width: '100%',
    opacity: 0,
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#cececeff',
    borderWidth: 1
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 442,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  cover_group1: {
    width: '100%',
    borderRadius: 36.5,
    borderStyle: 'solid',
    borderWidth: 1
  },
  cover_group1_layout: {
    overflow: 'visible',
    marginTop: 334,
    marginBottom: 35,
    minHeight: 73,
    marginLeft: 15,
    flexGrow: 1,
    marginRight: 17
  },
  txt: {
    color: '#5c5b5bff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 21.599999999999998,
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});
