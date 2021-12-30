/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default function Recieve(props) {
  return (
    <View style={[styles.content_box, styles.content_box_layout]}>
      <View style={styles.content_box_row}>
        <View style={[styles.cover_group, styles.cover_group_layout]}>
          <View style={[styles.flex, styles.flex_layout]}>
            <View style={styles.flex_row}>
              <View style={[styles.flex1, styles.flex1_layout]}>
                <View style={styles.flex1_col}>
                  <View
                    style={[styles.cover_group1, styles.cover_group1_layout]}>
                    <View style={styles.cover_group1_row}>
                      <View
                        style={[
                          styles.username_box,
                          styles.username_box_layout
                        ]}>
                        <Text style={styles.username} ellipsizeMode={'clip'}>
                          {'Username'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cover_group1_row}>
                      <View
                        style={[
                          styles.text_body_box,
                          styles.text_body_box_layout
                        ]}>
                        <Text style={styles.text_body} ellipsizeMode={'clip'}>
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
              <View style={[styles.recieve_box, styles.recieve_box_layout]}>
                <Text style={styles.recieve} ellipsizeMode={'clip'}>
                  {'RECIEVE'}
                </Text>
              </View>
            </View>
            <View style={styles.flex_row}>
              <View
                style={[styles.highlights_box, styles.highlights_box_layout]}>
                <Text style={styles.highlights} ellipsizeMode={'clip'}>
                  {'Send to this address only'}
                </Text>
              </View>
            </View>
            <View style={styles.flex_row}>
              <View style={[styles.content_box1, styles.content_box1_layout]}>
                <View style={styles.content_box1_space} />
                <View style={styles.content_box1_col}>
                  <View
                    style={[
                      styles.highlights_box1,
                      styles.highlights_box1_layout
                    ]}>
                    <Text style={styles.highlights1} ellipsizeMode={'clip'}>
                      {'0x628192D4...566BaBec5'}
                    </Text>
                  </View>
                </View>
                <View style={styles.content_box1_space1} />
                <View style={styles.content_box1_col1}>
                  <ImageBackground
                    style={[styles.icon, styles.icon_layout1]}
                    source={require('../assets/9a70d8b83ac14a29ce80cb648ebdba97.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row1}>
        <View style={[styles.flex2, styles.flex2_layout]}>
          <View style={styles.flex2_col}>
            <View style={[styles.history_box, styles.history_box_layout]}>
              <Text style={styles.history} ellipsizeMode={'clip'}>
                {'HISTORY'}
              </Text>
            </View>
          </View>
          <View style={styles.flex2_space} />
          <View style={styles.flex2_col1}>
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require('../assets/e41f5c2476f57c00d3f26d74d6cd64e4.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row2}>
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
          <View style={styles.cover_group2_col2}>
            <View
              style={[styles.highlights_box2, styles.highlights_box2_layout]}>
              <Text style={styles.highlights2} ellipsizeMode={'clip'}>
                {'10/11/21\n21:45'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row3}>
        <View style={[styles.cover_group3, styles.cover_group3_layout]}>
          <View style={[styles.highlights_box3, styles.highlights_box3_layout]}>
            <Text style={styles.highlights3} ellipsizeMode={'clip'}>
              {'10/11/21\n23:10\n'}
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
              {'0.15 ETH'}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row4}>
        <View style={[styles.cover_group4, styles.cover_group4_layout]}>
          <View style={[styles.highlights_box4, styles.highlights_box4_layout]}>
            <Text style={styles.highlights4} ellipsizeMode={'clip'}>
              {'10/11/21\n23:10\n'}
            </Text>
          </View>
          <View style={[styles.rect, styles.rect_layout]} />
          <ImageBackground
            style={[styles.icon, styles.icon_layout4]}
            source={require('../assets/f200fd8db4c4d62f8c102db15a9ba2c9.png')}
          />
          <View
            style={[styles.medium_title_box, styles.medium_title_box_layout2]}>
            <Text style={styles.medium_title} ellipsizeMode={'clip'}>
              {'0.02 ETH'}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row5}>
        <View style={[styles.cover_group5, styles.cover_group5_layout]}>
          <ImageBackground
            style={[styles.cover_group6, styles.cover_group6_layout]}
            source={require('../assets/3acd5bec4d53f8a2e17aee125c072bf7.png')}
            resizeMode="cover">
            <ImageBackground
              style={[styles.img1, styles.img1_layout]}
              source={require('../assets/02a77ccc757ddee45c8c1aef864b8a80.png')}
            />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

Recieve.inStorybook = true;
Recieve.fitScreen = false;
Recieve.scrollHeight = 844;

const styles = StyleSheet.create({
  content_box: {
    backgroundColor: '#ffffffff',
    borderRadius: 60,
    overflow: 'hidden'
  },
  content_box_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box_row: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 456
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
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 456,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {},
  flex_layout: {
    overflow: 'visible',
    marginTop: 44,
    marginBottom: 44,
    marginLeft: 23,
    flexGrow: 1,
    marginRight: 23
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
    marginLeft: 60,
    flexGrow: 1,
    marginRight: 0
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
    marginLeft: 45.5,
    flexGrow: 1,
    marginRight: 46.5
  },
  username_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text_body_box_layout: {
    marginTop: 11,
    marginBottom: 27,
    marginLeft: 24.5,
    flexGrow: 1,
    marginRight: 23.5
  },
  text_body_box: {
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
  recieve_box_layout: {
    marginTop: 15,
    marginBottom: 0,
    width: 169,
    minWidth: 169,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  recieve_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlights_box_layout: {
    marginTop: 70,
    marginBottom: 0,
    marginLeft: 49,
    flexGrow: 1,
    marginRight: 65
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content_box1: {
    backgroundColor: '#ffffffff',
    borderStyle: 'solid',
    borderColor: '#ccccccff',
    borderWidth: 1,
    flexDirection: 'row'
  },
  content_box1_layout: {
    overflow: 'visible',
    marginTop: 37,
    marginBottom: 2,
    minHeight: 94,
    marginLeft: 6,
    flexGrow: 1,
    marginRight: 5
  },
  content_box1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 19
  },
  content_box1_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  highlights_box1_layout: {
    marginTop: 26,
    marginBottom: 47,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  highlights_box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  content_box1_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 30
  },
  content_box1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 58
  },
  icon_layout1: {
    marginTop: 32,
    height: 30,
    marginBottom: 32,
    marginLeft: 0,
    width: 30,
    minWidth: 30
  },
  content_box_row1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 44
  },
  flex2: {
    flexDirection: 'row'
  },
  flex2_layout: {
    overflow: 'visible',
    marginTop: 9,
    marginBottom: 0,
    marginLeft: 17,
    flexGrow: 1,
    marginRight: 17
  },
  flex2_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 111
  },
  history_box_layout: {
    marginTop: 0,
    marginBottom: 7,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  history_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 187
  },
  flex2_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 38
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 5,
    height: 30,
    marginBottom: 0,
    marginLeft: 0,
    width: 38,
    minWidth: 38,
    marginRight: 0
  },
  content_box_row2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 105
  },
  cover_group2: {
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row'
  },
  cover_group2_layout: {
    overflow: 'visible',
    marginTop: 18,
    marginBottom: 0,
    minHeight: 87,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 0
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
    flexBasis: 69
  },
  cover_group2_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 112
  },
  medium_title_box_layout: {
    marginTop: 15,
    marginBottom: 44,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  medium_title_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group2_col2: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 156
  },
  highlights_box2_layout: {
    marginTop: 16,
    marginBottom: 29,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 15
  },
  highlights_box2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  content_box_row3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 87
  },
  cover_group3: {
    width: '100%'
  },
  cover_group3_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 87,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 0
  },
  highlights_box3_layout: {
    marginTop: 24,
    marginBottom: 21,
    marginLeft: 'auto',
    width: 88,
    minWidth: 88,
    marginRight: 36
  },
  highlights_box3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
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
    position: 'absolute',
    top: 15,
    bottom: 44,
    left: 121,
    width: 112,
    minWidth: 112
  },
  content_box_row4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 87
  },
  cover_group4: {
    width: '100%'
  },
  cover_group4_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 87,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 0
  },
  highlights_box4_layout: {
    marginTop: 24,
    marginBottom: 21,
    marginLeft: 'auto',
    width: 88,
    minWidth: 88,
    marginRight: 38
  },
  highlights_box4: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  icon_layout4: {
    position: 'absolute',
    top: 0,
    marginTop: 23,
    height: 30,
    marginBottom: 34,
    left: 20,
    width: 30,
    minWidth: 30
  },
  medium_title_box_layout2: {
    position: 'absolute',
    top: 15,
    bottom: 44,
    left: 119,
    width: 112,
    minWidth: 112
  },
  content_box_row5: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 65
  },
  cover_group5: {
    width: '100%',
    backgroundColor: '#f1f5ffff'
  },
  cover_group5_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 65,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group6: {
    width: '100%'
  },
  cover_group6_layout: {
    overflow: 'visible',
    marginTop: 12,
    marginBottom: 12,
    minHeight: 41,
    marginLeft: 70,
    flexGrow: 1,
    marginRight: 71
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
  }
});
