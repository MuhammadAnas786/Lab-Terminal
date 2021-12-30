/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default function Createwallet(props) {
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
          <View style={[styles.highlights_box, styles.highlights_box_layout]}>
            <Text style={styles.highlights} ellipsizeMode={'clip'}>
              {'Save this key phrase in secure place '}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.cover_group, styles.cover_group_layout]}>
            <View style={styles.cover_group_row}>
              <View style={[styles.cover_group1, styles.cover_group1_layout]}>
                <View
                  style={[
                    styles.highlights_box,
                    styles.highlights_box_layout1
                  ]}>
                  <Text style={styles.highlights} ellipsizeMode={'clip'}>
                    {
                      'some people have curly brown hair through proper brushing'
                    }
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cover_group_row}>
              <View style={[styles.cover_group2, styles.cover_group2_layout]}>
                <View
                  style={[
                    styles.highlights_box2,
                    styles.highlights_box2_layout
                  ]}>
                  <Text style={styles.highlights2} ellipsizeMode={'clip'}>
                    {'Enter above phrase here'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

Createwallet.inStorybook = true;
Createwallet.fitScreen = false;
Createwallet.scrollHeight = 844;

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
    flexBasis: 9.5
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
  highlights_box_layout: {
    marginTop: 1,
    marginBottom: 0,
    marginLeft: 9,
    flexGrow: 1,
    marginRight: 15
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1
  },
  cover_group_layout: {
    overflow: 'visible',
    marginTop: 48,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  cover_group1: {
    width: '100%',
    backgroundColor: '#c5c5c53e'
  },
  cover_group1_layout: {
    overflow: 'visible',
    marginTop: 34,
    marginBottom: 0,
    minHeight: 255,
    marginLeft: 17,
    flexGrow: 1,
    marginRight: 22
  },
  highlights_box_layout1: {
    marginTop: 24,
    marginBottom: 168,
    marginLeft: 18,
    flexGrow: 1,
    marginRight: 27
  },
  cover_group2: {
    width: '100%',
    borderRadius: 36.5,
    borderStyle: 'solid',
    borderWidth: 1
  },
  cover_group2_layout: {
    overflow: 'visible',
    marginTop: 45,
    marginBottom: 35,
    minHeight: 73,
    marginLeft: 15,
    flexGrow: 1,
    marginRight: 17
  },
  highlights_box2_layout: {
    marginTop: 24,
    marginBottom: 28,
    marginLeft: 29,
    flexGrow: 1,
    marginRight: 29
  },
  highlights_box2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});
