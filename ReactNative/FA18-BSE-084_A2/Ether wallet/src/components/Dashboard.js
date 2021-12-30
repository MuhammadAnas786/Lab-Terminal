/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function Dashboard(props) {
  return (
    <View style={[styles.cover_group_wrap, styles.cover_group_wrap_layout]}>
      <View style={[styles.cover_group, styles.cover_group_layout]}>
        <View style={[styles.flex, styles.flex_layout]}>
          <View style={styles.flex_row}>
            <View style={[styles.flex1, styles.flex1_layout]}>
              <View style={styles.flex1_col}>
                <View style={[styles.cover_group1, styles.cover_group1_layout]}>
                  <View style={styles.cover_group1_row}>
                    <View
                      style={[styles.username_box, styles.username_box_layout]}>
                      <Text style={styles.username} ellipsizeMode={'clip'}>
                        {'Username'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cover_group1_row}>
                    <View
                      style={[
                        styles.paragraph_body_box,
                        styles.paragraph_body_box_layout
                      ]}>
                      <Text
                        style={styles.paragraph_body}
                        ellipsizeMode={'clip'}>
                        {'0x628192D4D571267...F64b'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.flex1_space} />
              <View style={styles.flex1_col1}>
                <ImageBackground
                  style={[styles.icon, styles.icon_layout]}
                  source={require('../assets/e7287a0df2b4a3b2f25f198ddb718dd7.png')}
                />
              </View>
            </View>
          </View>
          <View style={styles.flex_row}>
            <View style={[styles.hero_title_box, styles.hero_title_box_layout]}>
              <Text style={styles.hero_title} ellipsizeMode={'clip'}>
                {'1.456 ETH'}
              </Text>
            </View>
          </View>
          <View style={styles.flex_row}>
            <View style={[styles.flex2, styles.flex2_layout]}>
              <View style={styles.flex2_col}>
                <View style={[styles.content_box, styles.content_box_layout]}>
                  <View style={styles.content_box_space} />
                  <View style={styles.content_box_col}>
                    <View style={[styles.send_box, styles.send_box_layout]}>
                      <Text style={styles.send} ellipsizeMode={'clip'}>
                        {'SEND'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.content_box_space1} />
                  <View style={styles.content_box_col1}>
                    <ImageBackground
                      style={[styles.icon, styles.icon_layout1]}
                      source={require('../assets/9a95442ae2407454b956a8edaf169d9f.png')}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.flex2_space} />
              <View style={styles.flex2_col1}>
                <View style={[styles.content_box, styles.content_box_layout]}>
                  <View style={styles.content_box1_space} />
                  <View style={styles.content_box1_col}>
                    <View
                      style={[styles.recieve_box, styles.recieve_box_layout]}>
                      <Text style={styles.recieve} ellipsizeMode={'clip'}>
                        {'Recieve'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.content_box1_space1} />
                  <View style={styles.content_box1_col1}>
                    <ImageBackground
                      style={[styles.img, styles.img_layout]}
                      source={require('../assets/7f75978fffa296876b6990963dd293b3.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.cover_group2, styles.cover_group2_layout]}>
        <View style={styles.cover_group2_space} />
        <View style={styles.cover_group2_col}>
          <ImageBackground
            style={[styles.icon, styles.icon_layout2]}
            source={require('../assets/f200fd8db4c4d62f8c102db15a9ba2c9.png')}
          />
        </View>
        <View style={styles.cover_group2_space1} />
        <View style={styles.cover_group2_col1}>
          <View
            style={[styles.medium_title_box, styles.medium_title_box_layout]}>
            <Text style={styles.medium_title} ellipsizeMode={'clip'}>
              {'2.55 ETH'}
            </Text>
          </View>
        </View>
        <View style={styles.cover_group2_space2} />
        <View style={styles.cover_group2_col2}>
          <View style={[styles.sent_box, styles.sent_box_layout]}>
            <Text style={styles.sent} ellipsizeMode={'clip'}>
              {'SENT'}
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.cover_group3, styles.cover_group3_layout]}>
        <Px.ImageBackground
          x="70px 249fr 71fr"
          y="12px minmax(41px,41fr) 12fr"
          style={styles.cover_group4}
          source={require('../assets/3acd5bec4d53f8a2e17aee125c072bf7.png')}
          resizeMode="cover">
          <ImageBackground
            style={[styles.img1, styles.img1_layout]}
            source={require('../assets/02a77ccc757ddee45c8c1aef864b8a80.png')}
          />
        </Px.ImageBackground>
      </View>

      <View style={[styles.cover_group5, styles.cover_group5_layout]}>
        <View style={[styles.sent_box, styles.sent_box_layout1]}>
          <Text style={styles.sent} ellipsizeMode={'clip'}>
            {'SENT'}
          </Text>
        </View>
        <View style={[styles.rect, styles.rect_layout]} />
        <ImageBackground
          style={[styles.icon, styles.icon_layout3]}
          source={require('../assets/f200fd8db4c4d62f8c102db15a9ba2c9.png')}
        />
        <View
          style={[styles.medium_title_box, styles.medium_title_box_layout1]}>
          <Text style={styles.medium_title} ellipsizeMode={'clip'}>
            {'0.15ETH'}
          </Text>
        </View>
      </View>

      <View style={[styles.cover_group6, styles.cover_group6_layout]}>
        <View style={[styles.recieved_box, styles.recieved_box_layout]}>
          <Text style={styles.recieved} ellipsizeMode={'clip'}>
            {'RECIEVED'}
          </Text>
        </View>
        <View style={[styles.rect, styles.rect_layout1]} />
        <ImageBackground
          style={[styles.icon, styles.icon_layout4]}
          source={require('../assets/f200fd8db4c4d62f8c102db15a9ba2c9.png')}
        />
        <View
          style={[styles.medium_title_box, styles.medium_title_box_layout2]}>
          <Text style={styles.medium_title} ellipsizeMode={'clip'}>
            {'0.004ETH'}
          </Text>
        </View>
      </View>

      <View style={[styles.history_box, styles.history_box_layout]}>
        <Text style={styles.history} ellipsizeMode={'clip'}>
          {'HISTORY'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout]}
        source={require('../assets/e41f5c2476f57c00d3f26d74d6cd64e4.png')}
      />
    </View>
  );
}

Dashboard.inStorybook = true;
Dashboard.fitScreen = false;
Dashboard.scrollHeight = 844;

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
    marginTop: 0,
    marginBottom: 377,
    minHeight: 467,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {},
  flex_layout: {
    overflow: 'visible',
    marginTop: 36,
    marginBottom: 36,
    marginLeft: 9,
    flexGrow: 1,
    marginRight: 9
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
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 74,
    flexGrow: 1,
    marginRight: 14
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 224
  },
  cover_group1: {
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1
  },
  cover_group1_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 86,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group1_row: {
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
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    marginTop: 18,
    height: 30,
    marginBottom: 38,
    marginLeft: 0,
    width: 30,
    minWidth: 30,
    marginRight: 0
  },
  hero_title_box_layout: {
    marginTop: 46,
    marginBottom: 0,
    marginLeft: 13,
    flexGrow: 1,
    marginRight: 17
  },
  hero_title_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex2: {
    flexDirection: 'row'
  },
  flex2_layout: {
    overflow: 'visible',
    marginTop: 65,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex2_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 173
  },
  content_box: {
    backgroundColor: '#214cb2ff',
    borderRadius: 32.5,
    flexDirection: 'row'
  },
  content_box_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 65,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 22
  },
  content_box_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  send_box_layout: {
    marginTop: 19,
    marginBottom: 19,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  send_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  content_box_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 11
  },
  content_box_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 64
  },
  icon_layout1: {
    marginTop: 18.78,
    height: 25.5,
    marginBottom: 20.72,
    marginLeft: 0,
    width: 26,
    minWidth: 26
  },
  flex2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 14
  },
  flex2_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 181
  },
  content_box1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 21
  },
  content_box1_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  recieve_box_layout: {
    marginTop: 18,
    marginBottom: 20,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  recieve_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  content_box1_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 14.89
  },
  content_box1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40.11
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 19,
    height: 25,
    marginBottom: 21,
    marginLeft: 0,
    width: 27.5,
    minWidth: 27.5,
    marginRight: 12.61
  },
  cover_group2: {
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row'
  },
  cover_group2_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 532,
    bottom: 225,
    minHeight: 87,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  cover_group2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 22
  },
  cover_group2_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  icon_layout2: {
    marginTop: 23,
    height: 30,
    marginBottom: 34,
    marginLeft: 0,
    width: 30,
    minWidth: 30,
    marginRight: 0
  },
  cover_group2_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15
  },
  cover_group2_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 220
  },
  medium_title_box_layout: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  medium_title_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group2_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8
  },
  cover_group2_col2: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 95
  },
  sent_box_layout: {
    marginTop: 23,
    marginBottom: 31,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 17
  },
  sent_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cover_group3: {
    width: '100%',
    backgroundColor: '#f1f5ffff'
  },
  cover_group3_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 779,
    bottom: 0,
    minHeight: 65,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  cover_group4: {
    width: '100%',
    flexGrow: 1
  },
  img1: {
    resizeMode: 'cover'
  },
  img1_layout: {
    marginTop: 0,
    height: 41,
    marginLeft: 13,
    width: 35,
    minWidth: 35
  },
  cover_group5: {
    width: '100%'
  },
  cover_group5_layout: {
    position: 'absolute',
    top: 619,
    bottom: 138,
    minHeight: 87,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  sent_box_layout1: {
    position: 'absolute',
    top: 25,
    bottom: 29,
    width: 78,
    minWidth: 78,
    right: 19
  },
  rect: {
    width: '100%',
    opacity: 0,
    backgroundColor: '#c5c5c5ff',
    borderStyle: 'solid',
    borderColor: '#ccccccff',
    borderWidth: 1
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 87,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  icon_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 23,
    height: 30,
    marginBottom: 34,
    left: 22,
    width: 30,
    minWidth: 30
  },
  medium_title_box_layout1: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 67,
    flexGrow: 1,
    marginRight: 103
  },
  cover_group6: {
    width: '100%'
  },
  cover_group6_layout: {
    position: 'absolute',
    top: 704,
    bottom: 65,
    minHeight: 75,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  recieved_box_layout: {
    position: 'absolute',
    top: 27,
    bottom: 15,
    width: 99,
    minWidth: 99,
    right: 19
  },
  recieved_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  rect_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 75,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  icon_layout4: {
    position: 'absolute',
    top: 0,
    marginTop: 23,
    height: 30,
    marginBottom: 22,
    left: 22,
    width: 30,
    minWidth: 30
  },
  medium_title_box_layout2: {
    marginTop: 15,
    marginBottom: 8,
    marginLeft: 67,
    flexGrow: 1,
    marginRight: 103
  },
  history_box_layout: {
    position: 'absolute',
    top: 479,
    bottom: 321,
    left: 12,
    width: 119,
    minWidth: 119
  },
  history_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 484,
    height: 30,
    marginBottom: 330,
    width: 38,
    minWidth: 38,
    right: 38
  }
});
