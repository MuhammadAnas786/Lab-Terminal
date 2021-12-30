/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default function Transaction(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.content_box, styles.content_box_layout]}>
        <View style={styles.content_box_space} />
        <View style={styles.content_box_col}>
          <View style={[styles.transaction_box, styles.transaction_box_layout]}>
            <Text style={styles.transaction} ellipsizeMode={'clip'}>
              {'Transaction'}
            </Text>
          </View>
        </View>
        <View style={styles.content_box_space1} />
        <View style={styles.content_box_col1}>
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/e7287a0df2b4a3b2f25f198ddb718dd7.png')}
          />
        </View>
      </View>

      <View style={[styles.cover_group, styles.cover_group_layout]}>
        <ImageBackground
          style={[styles.img, styles.img_layout]}
          source={require('../assets/3acd5bec4d53f8a2e17aee125c072bf7.png')}
        />
      </View>

      <View style={[styles.medium_title_box, styles.medium_title_box_layout]}>
        <Text style={styles.medium_title} ellipsizeMode={'clip'}>
          {'Transaction Successful!'}
        </Text>
      </View>
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout]}
        source={require('../assets/a62da43ed13f1f70b5eab7da262ddb2c.png')}
      />
    </View>
  );
}

Transaction.inStorybook = true;
Transaction.fitScreen = false;
Transaction.scrollHeight = 844;

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
  content_box: {
    backgroundColor: '#f1f5ffff',
    borderTopLeftRadius: 62,
    borderTopRightRadius: 62,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row'
  },
  content_box_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 0,
    bottom: 698,
    minHeight: 146,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 119
  },
  content_box_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 152
  },
  transaction_box_layout: {
    marginTop: 37,
    marginBottom: 81,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  transaction_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content_box_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 63
  },
  content_box_col1: {
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
  cover_group: {
    width: '100%',
    backgroundColor: '#f1f5ffff'
  },
  cover_group_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 779,
    bottom: 0,
    minHeight: 65,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  img: {
    resizeMode: 'cover'
  },
  img_layout: {
    marginTop: 12,
    height: 41,
    marginLeft: 70,
    width: 249,
    minWidth: 249
  },
  medium_title_box_layout: {
    position: 'absolute',
    top: 402,
    bottom: 414,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  medium_title_box: {
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
    marginTop: 235,
    height: 187,
    marginBottom: 422,
    left: 0,
    right: 0,
    width: 181,
    minWidth: 181,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
