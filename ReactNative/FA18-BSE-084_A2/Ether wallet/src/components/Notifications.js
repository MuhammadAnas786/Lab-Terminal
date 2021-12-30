/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default function Notifications(props) {
  return (
    <View style={[styles.content_box, styles.content_box_layout]}>
      <View style={styles.content_box_row}>
        <View style={[styles.content_box1, styles.content_box1_layout]}>
          <View style={styles.content_box1_space} />
          <View style={styles.content_box1_col}>
            <View
              style={[
                styles.notifications_box,
                styles.notifications_box_layout
              ]}>
              <Text style={styles.notifications} ellipsizeMode={'clip'}>
                {'Notifications'}
              </Text>
            </View>
          </View>
          <View style={styles.content_box1_space1} />
          <View style={styles.content_box1_col1}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout]}
              source={require('../assets/e7287a0df2b4a3b2f25f198ddb718dd7.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row1}>
        <View style={[styles.highlights_box, styles.highlights_box_layout]}>
          <Text style={styles.highlights} ellipsizeMode={'clip'}>
            {'There is no notifiation to view!'}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row2}>
        <View style={[styles.cover_group, styles.cover_group_layout]}>
          <ImageBackground
            style={[styles.cover_group1, styles.cover_group1_layout]}
            source={require('../assets/3acd5bec4d53f8a2e17aee125c072bf7.png')}
            resizeMode="cover">
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require('../assets/65a4fe06032f902ac13d60a0b43da081.png')}
            />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

Notifications.inStorybook = true;
Notifications.fitScreen = false;
Notifications.scrollHeight = 844;

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
    minHeight: 844,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box_row: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 146
  },
  content_box1: {
    backgroundColor: '#f1f5ffff',
    borderTopLeftRadius: 62,
    borderTopRightRadius: 62,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row'
  },
  content_box1_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 146,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 111.5
  },
  content_box1_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 167
  },
  notifications_box_layout: {
    marginTop: 37,
    marginBottom: 81,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  notifications_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content_box1_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 55.5
  },
  content_box1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 56
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    marginTop: 50,
    height: 30,
    marginBottom: 66,
    marginLeft: 0,
    width: 30,
    minWidth: 30
  },
  content_box_row1: {
    flexGrow: 0,
    flexShrink: 0,
    minHeight: 277
  },
  highlights_box_layout: {
    marginTop: 256,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content_box_row2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 421
  },
  cover_group: {
    width: '100%',
    backgroundColor: '#f1f5ffff'
  },
  cover_group_layout: {
    overflow: 'visible',
    marginTop: 356,
    marginBottom: 0,
    minHeight: 65,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group1: {
    width: '100%'
  },
  cover_group1_layout: {
    overflow: 'visible',
    marginTop: 12,
    marginBottom: 12,
    minHeight: 41,
    marginLeft: 70,
    flexGrow: 1,
    marginRight: 71
  },
  img: {
    resizeMode: 'cover'
  },
  img_layout: {
    marginTop: 7,
    height: 28,
    marginLeft: 203,
    width: 22,
    minWidth: 22
  }
});
