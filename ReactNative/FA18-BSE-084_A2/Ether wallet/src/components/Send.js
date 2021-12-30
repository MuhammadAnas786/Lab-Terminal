/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function Send(props) {
  return (
    <View style={[styles.cover_group_wrap, styles.cover_group_wrap_layout]}>
      <View style={[styles.cover_group, styles.cover_group_layout]}>
        <View
          style={[styles.cover_group_wrap1, styles.cover_group_wrap1_layout]}>
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/e7287a0df2b4a3b2f25f198ddb718dd7.png')}
          />
          <View style={[styles.rect, styles.rect_layout]} />
          <View style={[styles.highlights_box, styles.highlights_box_layout]}>
            <Text style={styles.highlights} ellipsizeMode={'clip'}>
              {'Enter Amount here:'}
            </Text>
          </View>

          <View style={[styles.cover_group1, styles.cover_group1_layout]}>
            <Px.View
              x="74fr 132px 55fr"
              y="9px minmax(0px, 64fr) 9px"
              style={styles.send_box}>
              <Text style={styles.send} ellipsizeMode={'clip'}>
                {'SEND'}
              </Text>
            </Px.View>
          </View>

          <View style={[styles.cover_group2, styles.cover_group2_layout]}>
            <View style={styles.cover_group2_row}>
              <View style={[styles.username_box, styles.username_box_layout]}>
                <Text style={styles.username} ellipsizeMode={'clip'}>
                  {'Username'}
                </Text>
              </View>
            </View>
            <View style={styles.cover_group2_row}>
              <View
                style={[
                  styles.paragraph_body_box,
                  styles.paragraph_body_box_layout
                ]}>
                <Text style={styles.paragraph_body} ellipsizeMode={'clip'}>
                  {'0x628192D4D571267...F64b'}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.cover_group3, styles.cover_group3_layout]}>
            <View
              style={[styles.highlights_box, styles.highlights_box_layout1]}>
              <Text style={styles.highlights1} ellipsizeMode={'clip'}>
                {'0x628192D4D57c3079BaCfBec5'}
              </Text>
            </View>
          </View>

          <View style={[styles.highlights_box, styles.highlights_box_layout2]}>
            <Text style={styles.highlights2} ellipsizeMode={'clip'}>
              {'Enter the Address here:'}
            </Text>
          </View>
          <View style={[styles.highlights_box, styles.highlights_box_layout3]}>
            <Text style={styles.highlights3} ellipsizeMode={'clip'}>
              {'1.55'}
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.cover_group4, styles.cover_group4_layout]}>
        <ImageBackground
          style={[styles.cover_group5, styles.cover_group5_layout]}
          source={require('../assets/3acd5bec4d53f8a2e17aee125c072bf7.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.decorator, styles.decorator_layout]}
            source={require('../assets/02a77ccc757ddee45c8c1aef864b8a80.png')}
          />
        </ImageBackground>
      </View>

      <View style={[styles.cover_group6, styles.cover_group6_layout]}>
        <View
          style={[styles.medium_title_wrap, styles.medium_title_wrap_layout]}>
          <View style={[styles.highlights_box4, styles.highlights_box4_layout]}>
            <Text style={styles.highlights4} ellipsizeMode={'clip'}>
              {'10/11/21\n21:45'}
            </Text>
          </View>
          <ImageBackground
            style={[styles.icon, styles.icon_layout1]}
            source={require('../assets/f200fd8db4c4d62f8c102db15a9ba2c9.png')}
          />
          <View
            style={[styles.medium_title_box, styles.medium_title_box_layout]}>
            <Text style={styles.medium_title} ellipsizeMode={'clip'}>
              {'2.55 ETH'}
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.cover_group7, styles.cover_group7_layout]}>
        <View style={[styles.highlights_box5, styles.highlights_box5_layout]}>
          <Text style={styles.highlights5} ellipsizeMode={'clip'}>
            {'10/11/21\n23:10\n'}
          </Text>
        </View>
        <View style={[styles.rect1, styles.rect1_layout]} />
        <ImageBackground
          style={[styles.icon, styles.icon_layout2]}
          source={require('../assets/f200fd8db4c4d62f8c102db15a9ba2c9.png')}
        />
      </View>

      <View style={[styles.medium_title_box, styles.medium_title_box_layout1]}>
        <Text style={styles.medium_title} ellipsizeMode={'clip'}>
          {'0.15 ETH'}
        </Text>
      </View>
      <View style={[styles.history_box, styles.history_box_layout]}>
        <Text style={styles.history} ellipsizeMode={'clip'}>
          {'HISTORY'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout1]}
        source={require('../assets/e41f5c2476f57c00d3f26d74d6cd64e4.png')}
      />
    </View>
  );
}

Send.inStorybook = true;
Send.fitScreen = false;
Send.scrollHeight = 844;

const styles = StyleSheet.create({
  cover_group_wrap: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 60,
    overflow: 'hidden'
  },
  cover_group_wrap_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 844,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group: {
    width: '100%',
    backgroundColor: '#f1f5ffff',
    borderTopLeftRadius: 62,
    borderTopRightRadius: 62,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  cover_group_layout: {
    position: 'absolute',
    top: 0,
    bottom: 274,
    minHeight: 570,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  cover_group_wrap1: {
    width: '100%'
  },
  cover_group_wrap1_layout: {
    overflow: 'visible',
    marginTop: 23,
    marginBottom: 23,
    minHeight: 524,
    marginLeft: 19,
    flexGrow: 1,
    marginRight: 19
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 39,
    height: 30,
    marginBottom: 455,
    width: 30,
    minWidth: 30,
    right: 4
  },
  rect: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 47,
    borderStyle: 'solid',
    borderColor: '#000000ff',
    borderWidth: 1
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 314,
    height: 94,
    marginBottom: 116,
    left: 9,
    flexGrow: 1,
    right: 10
  },
  highlights_box_layout: {
    position: 'absolute',
    top: 274,
    bottom: 207,
    left: 10,
    width: 217,
    minWidth: 217
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group1: {
    width: '100%',
    backgroundColor: '#214cb2ff',
    borderRadius: 41
  },
  cover_group1_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 442,
    bottom: 0,
    minHeight: 82,
    left: 36,
    flexGrow: 1,
    right: 55
  },
  send: {
    color: '#ffffffff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 43.199999999999996,
    fontSize: 36,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  send_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group2: {
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1
  },
  cover_group2_layout: {
    overflow: 'visible',
    marginTop: 21,
    marginBottom: 417,
    minHeight: 86,
    marginLeft: 64,
    flexGrow: 1,
    marginRight: 64
  },
  cover_group2_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  username_box_layout: {
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 24,
    flexGrow: 1,
    marginRight: 25
  },
  username_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph_body_box_layout: {
    marginTop: 1,
    marginBottom: 12,
    marginLeft: 13,
    flexGrow: 1,
    marginRight: 12
  },
  paragraph_body_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group3: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 47,
    borderStyle: 'solid',
    borderColor: '#000000ff',
    borderWidth: 1
  },
  cover_group3_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 159,
    bottom: 271,
    minHeight: 94,
    left: 0,
    flexGrow: 1,
    right: 19
  },
  highlights_box_layout1: {
    marginTop: 26,
    marginBottom: 25,
    marginLeft: 19,
    flexGrow: 1,
    marginRight: 11
  },
  highlights_box_layout2: {
    position: 'absolute',
    top: 116,
    bottom: 365,
    left: 10,
    width: 217,
    minWidth: 217
  },
  highlights_box_layout3: {
    position: 'absolute',
    top: 340,
    bottom: 141,
    left: 51,
    flexGrow: 1,
    right: 92
  },
  cover_group4: {
    width: '100%',
    backgroundColor: '#f1f5ffff'
  },
  cover_group4_layout: {
    position: 'absolute',
    top: 779,
    bottom: 0,
    minHeight: 65,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  cover_group5: {
    width: '100%'
  },
  cover_group5_layout: {
    overflow: 'visible',
    marginTop: 12,
    marginBottom: 12,
    minHeight: 41,
    marginLeft: 70,
    flexGrow: 1,
    marginRight: 71
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    marginTop: 0,
    height: 41,
    marginBottom: 0,
    marginLeft: 13,
    width: 35,
    minWidth: 35
  },
  cover_group6: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1
  },
  cover_group6_layout: {
    marginTop: 632,
    marginBottom: 125,
    minHeight: 87,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 0
  },
  medium_title_wrap: {
    width: '100%'
  },
  medium_title_wrap_layout: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 15,
    minHeight: 57,
    marginLeft: 20,
    flexGrow: 1,
    marginRight: 20
  },
  highlights_box4_layout: {
    position: 'absolute',
    top: 1,
    bottom: 1,
    width: 131,
    minWidth: 131,
    right: 0
  },
  highlights_box4: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  icon_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 8,
    height: 30,
    marginBottom: 19,
    left: 2,
    width: 30,
    minWidth: 30
  },
  medium_title_box_layout: {
    marginTop: 0,
    marginBottom: 5,
    marginLeft: 47,
    flexGrow: 1,
    marginRight: 82
  },
  medium_title_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group7: {
    width: '100%'
  },
  cover_group7_layout: {
    position: 'absolute',
    top: 717,
    bottom: 65,
    minHeight: 62,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  highlights_box5_layout: {
    marginTop: 10,
    marginBottom: 19,
    marginLeft: 'auto',
    width: 78,
    minWidth: 78,
    marginRight: 39
  },
  highlights_box5: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  rect1: {
    width: '100%',
    opacity: 0,
    backgroundColor: '#c5c5c5ff',
    borderStyle: 'solid',
    borderColor: '#ccccccff',
    borderWidth: 1
  },
  rect1_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 62,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  icon_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 25,
    height: 30,
    marginBottom: 7,
    left: 23,
    width: 30,
    minWidth: 30
  },
  medium_title_box_layout1: {
    position: 'absolute',
    top: 734,
    bottom: 58,
    left: 68,
    flexGrow: 1,
    right: 102
  },
  history_box_layout: {
    position: 'absolute',
    top: 579,
    bottom: 221,
    left: 13,
    width: 119,
    minWidth: 119
  },
  history_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  decorator_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 584,
    height: 30,
    marginBottom: 230,
    width: 38,
    minWidth: 38,
    right: 37
  }
});
