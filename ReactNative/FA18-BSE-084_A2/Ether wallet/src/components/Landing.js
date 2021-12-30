/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default function Landing(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.flex, styles.flex_layout]}>
        <View style={styles.flex_row}>
          <View
            style={[styles.ether_wallet_box, styles.ether_wallet_box_layout]}>
            <Text style={styles.ether_wallet} ellipsizeMode={'clip'}>
              {'ETHER WALLET'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.cover_group, styles.cover_group_layout]}>
            <ImageBackground
              style={[styles.decorator, styles.decorator_layout]}
              source={require('../assets/6b51c084f0f6775985523a2880899942.png')}
            />
            <ImageBackground
              style={[styles.image, styles.image_layout]}
              source={require('../assets/936ea5fd61ebec62328b55acc1ac6584.png')}
            />
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.cover_group, styles.cover_group_layout1]}>
            <ImageBackground
              style={[styles.decorator, styles.decorator_layout1]}
              source={require('../assets/7b87108c54d7f2816588feb6e203e6f1.png')}
            />
            <View style={[styles.rect, styles.rect_layout]} />
          </View>
        </View>
      </View>
    </View>
  );
}

Landing.inStorybook = true;
Landing.fitScreen = false;
Landing.scrollHeight = 844;

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
    marginBottom: 99,
    marginLeft: 43,
    flexGrow: 1,
    marginRight: 43
  },
  flex_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  ether_wallet_box_layout: {
    marginTop: 0,
    marginBottom: 0,
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
    marginTop: 65,
    marginBottom: 0,
    minHeight: 261,
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
    marginTop: 9,
    height: 242,
    marginBottom: 10,
    left: 50,
    flexGrow: 1,
    right: 51
  },
  image: {
    resizeMode: 'contain',
    borderRadius: 10
  },
  image_layout: {
    marginTop: 0,
    height: 261,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group_layout1: {
    marginTop: 48,
    marginBottom: 0,
    minHeight: 275,
    marginLeft: 9,
    flexGrow: 1,
    marginRight: 0
  },
  decorator_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 19,
    height: 237,
    marginBottom: 19,
    left: 40,
    flexGrow: 1,
    right: 39
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
    marginTop: 0,
    height: 275,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  }
});
