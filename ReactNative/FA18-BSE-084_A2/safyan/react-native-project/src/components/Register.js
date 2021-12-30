/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function Register(props) {
  return (
    <View style={[styles.cover_group_wrap, styles.cover_group_wrap_layout]}>
      <View style={[styles.cover_group, styles.cover_group_layout]}>
        <ImageBackground
          style={[styles.cover_group1, styles.cover_group1_layout]}
          source={require('../assets/5645496f59165afda6a22685d5cf78cc.png')}
          resizeMode="contain">
          <View style={[styles.cover_group2, styles.cover_group2_layout]} />
          <ImageBackground
            style={[styles.image, styles.image_layout]}
            source={require('../assets/5645496f59165afda6a22685d5cf78cc.png')}
          />
        </ImageBackground>

        <ImageBackground
          style={[styles.cover_group3, styles.cover_group3_layout]}
          source={require('../assets/489d486af7bffb092673c934602dce9c.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout]}
            source={require('../assets/489d486af7bffb092673c934602dce9c.png')}
          />
        </ImageBackground>

        <View
          style={[
            styles.small_text_body_box,
            styles.small_text_body_box_layout
          ]}>
          <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
            {'100%'}
          </Text>
        </View>

        <ImageBackground
          style={[styles.cover_group4, styles.cover_group4_layout]}
          source={require('../assets/f6a4efc925a34e827579849969295b5a.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout1]}
            source={require('../assets/f6a4efc925a34e827579849969295b5a.png')}
          />
        </ImageBackground>

        <View
          style={[
            styles.small_text_body_box1,
            styles.small_text_body_box1_layout
          ]}>
          <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
            {'9:41 AM'}
          </Text>
        </View>
        <View style={[styles.freebie_box, styles.freebie_box_layout]}>
          <Text style={styles.freebie} ellipsizeMode={'clip'}>
            {'Freebie'}
          </Text>
        </View>

        <ImageBackground
          style={[styles.cover_group5, styles.cover_group5_layout]}
          source={require('../assets/89efda88cc05005141e394ec4d4874fa.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout2]}
            source={require('../assets/89efda88cc05005141e394ec4d4874fa.png')}
          />
        </ImageBackground>

        <ImageBackground
          style={[styles.cover_group6, styles.cover_group6_layout]}
          source={require('../assets/061076dde5e19611addac70744a34661.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout3]}
            source={require('../assets/061076dde5e19611addac70744a34661.png')}
          />
        </ImageBackground>

        <View style={[styles.rect, styles.rect_layout]} />
        <View
          style={[
            styles.small_text_body_box,
            styles.small_text_body_box_layout
          ]}>
          <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
            {'100%'}
          </Text>
        </View>
        <View
          style={[
            styles.small_text_body_box3,
            styles.small_text_body_box3_layout
          ]}>
          <Text style={styles.small_text_body3} ellipsizeMode={'clip'}>
            {'9:41 AM'}
          </Text>
        </View>
        <View style={[styles.freebie_box, styles.freebie_box_layout]}>
          <Text style={styles.freebie} ellipsizeMode={'clip'}>
            {'Freebie'}
          </Text>
        </View>
      </View>

      <View style={[styles.add_budget_box, styles.add_budget_box_layout]}>
        <Text style={styles.add_budget} ellipsizeMode={'clip'}>
          {'Add Budget '}
        </Text>
      </View>
      <View style={[styles.add_budget_box, styles.add_budget_box_layout]}>
        <Text style={styles.add_budget} ellipsizeMode={'clip'}>
          {'Add Budget '}
        </Text>
      </View>
      <View style={[styles.highlights_box, styles.highlights_box_layout]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'Login to existing account or create a new one.'}
        </Text>
      </View>
      <View style={[styles.highlights_box, styles.highlights_box_layout1]}>
        <Text style={styles.highlights1} ellipsizeMode={'clip'}>
          {'REGISTER AN ACCOUNT'}
        </Text>
      </View>
      <View style={[styles.rect1, styles.rect1_layout]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout2]}>
        <Text style={styles.highlights2} ellipsizeMode={'clip'}>
          {'FORGOT PASSWORD?'}
        </Text>
      </View>
      <View style={[styles.rect2, styles.rect2_layout]} />
      <View style={[styles.line, styles.line_layout]} />
      <View style={[styles.email_address_box, styles.email_address_box_layout]}>
        <Text style={styles.email_address} ellipsizeMode={'clip'}>
          {'Email address'}
        </Text>
      </View>
      <View style={[styles.line, styles.line_layout1]} />
      <View style={[styles.password_box, styles.password_box_layout]}>
        <Text style={styles.password} ellipsizeMode={'clip'}>
          {'Password'}
        </Text>
      </View>

      <View style={[styles.cover_group7, styles.cover_group7_layout]}>
        <Px.View
          x="128fr 70fr 129fr"
          y="19px minmax(0px, max-content) 19fr"
          style={styles.txt_box}>
          <Text style={styles.txt} ellipsizeMode={'clip'}>
            {'Register'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.line, styles.line_layout2]} />
      <View
        style={[styles.repeat_password_box, styles.repeat_password_box_layout]}>
        <Text style={styles.repeat_password} ellipsizeMode={'clip'}>
          {'Repeat password'}
        </Text>
      </View>
      <View style={[styles.line, styles.line_layout3]} />
      <View style={[styles.phone_number_box, styles.phone_number_box_layout]}>
        <Text style={styles.phone_number} ellipsizeMode={'clip'}>
          {'Phone number'}
        </Text>
      </View>
      <View style={[styles.hero_title_box, styles.hero_title_box_layout]}>
        <Text style={styles.hero_title} ellipsizeMode={'clip'}>
          <Text style={styles.hero_titleSpan0}>{'Register '}</Text>
          <Text style={styles.hero_titleSpan1}>{'👋'}</Text>
        </Text>
      </View>
    </View>
  );
}

Register.inStorybook = true;
Register.fitScreen = false;
Register.scrollHeight = 812;

const styles = StyleSheet.create({
  cover_group_wrap: {
    width: '100%',
    backgroundColor: '#f3efefff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  cover_group_wrap_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 812,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group: {
    width: '100%',
    backgroundColor: '#ffffffff'
  },
  cover_group_layout: {
    marginTop: 0,
    marginBottom: 748,
    minHeight: 64,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group1: {
    width: '100%',
    borderRadius: 2.5
  },
  cover_group1_layout: {
    position: 'absolute',
    top: 4.5,
    bottom: 48,
    minHeight: 11.5,
    width: 24,
    minWidth: 24,
    right: 8
  },
  cover_group2: {
    width: '100%',
    backgroundColor: '#000000ff',
    borderRadius: 0.5
  },
  cover_group2_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 2,
    height: 7.5,
    marginBottom: 2,
    left: 2,
    flexGrow: 1,
    right: 2
  },
  image: {
    resizeMode: 'contain',
    borderRadius: 2.5
  },
  image_layout: {
    marginTop: 0,
    height: 11.5,
    marginBottom: 0,
    marginLeft: 0,
    width: 24,
    minWidth: 24,
    marginRight: 0
  },
  cover_group3: {
    width: '100%'
  },
  cover_group3_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 8.5,
    height: 3.87,
    marginBottom: 51.63,
    width: 1.5,
    minWidth: 1.5,
    right: 5.5
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 0,
    height: 3.87,
    marginLeft: 0,
    width: 1.5,
    minWidth: 1.5
  },
  small_text_body_box_layout: {
    position: 'absolute',
    top: 3.5,
    bottom: 46.5,
    left: 35,
    flexGrow: 1,
    right: 35
  },
  small_text_body_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  cover_group4: {
    width: '100%'
  },
  cover_group4_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 5,
    height: 10,
    marginBottom: 49,
    width: 6,
    minWidth: 6,
    right: 70.5
  },
  img_layout1: {
    marginTop: 0,
    height: 10,
    marginLeft: 0,
    width: 6,
    minWidth: 6
  },
  small_text_body_box1_layout: {
    position: 'absolute',
    top: 3.5,
    bottom: 46.5,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  small_text_body_box1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  freebie_box_layout: {
    position: 'absolute',
    top: 3.5,
    bottom: 46.5,
    left: 26,
    flexGrow: 1,
    right: 26
  },
  freebie_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group5: {
    width: '100%'
  },
  cover_group5_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 5,
    height: 10,
    marginBottom: 49,
    left: 6,
    width: 16.5,
    minWidth: 16.5
  },
  img_layout2: {
    marginTop: 0,
    height: 10,
    marginLeft: 0,
    width: 16.5,
    minWidth: 16.5
  },
  cover_group6: {
    width: '100%'
  },
  cover_group6_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 5,
    height: 10,
    marginBottom: 49,
    left: 71.33,
    width: 14.34,
    minWidth: 14.34
  },
  img_layout3: {
    marginTop: 0,
    height: 10,
    marginLeft: 0,
    width: 14.34,
    minWidth: 14.34
  },
  rect: {
    width: '100%',
    backgroundColor: '#ffffffff'
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 64,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  small_text_body_box3_layout: {
    marginTop: 3.5,
    marginBottom: 46.5,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  add_budget_box_layout: {
    position: 'absolute',
    top: 36,
    bottom: 746,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  add_budget_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  highlights_box_layout: {
    position: 'absolute',
    top: 240,
    bottom: 554,
    left: 10,
    flexGrow: 1,
    right: 55
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  highlights_box_layout1: {
    position: 'absolute',
    top: 719,
    bottom: 57,
    left: 2,
    width: 152,
    minWidth: 152
  },
  rect1: {
    width: '100%',
    opacity: 0.20000000298023224,
    backgroundColor: '#284394ff'
  },
  rect1_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 760.92,
    height: 6.08,
    marginBottom: 45,
    left: 6,
    width: 144,
    minWidth: 144
  },
  highlights_box_layout2: {
    position: 'absolute',
    top: 717,
    bottom: 59,
    width: 153,
    minWidth: 153,
    right: 9
  },
  rect2: {
    width: '100%',
    opacity: 0.20000000298023224,
    backgroundColor: '#284394ff'
  },
  rect2_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 750.58,
    height: 4.42,
    marginBottom: 57,
    width: 147,
    minWidth: 147,
    right: 12
  },
  line: {
    width: '100%',
    backgroundColor: '#cad0e0ff',
    borderRadius: 1
  },
  line_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 348,
    height: 2,
    marginBottom: 462,
    left: 23,
    flexGrow: 1,
    right: 25
  },
  email_address_box_layout: {
    position: 'absolute',
    top: 320,
    bottom: 472,
    left: 23,
    flexGrow: 1,
    right: 23
  },
  email_address_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  line_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 413,
    height: 2,
    marginBottom: 397,
    left: 23,
    flexGrow: 1,
    right: 25
  },
  password_box_layout: {
    position: 'absolute',
    top: 385,
    bottom: 407,
    left: 23,
    flexGrow: 1,
    right: 23
  },
  password_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group7: {
    width: '100%',
    backgroundColor: '#284394ff',
    borderRadius: 5
  },
  cover_group7_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 638,
    bottom: 118,
    minHeight: 56,
    left: 23,
    flexGrow: 1,
    right: 25
  },
  txt: {
    color: '#ffffffff',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 18,
    fontSize: 15,
    fontWeight: '900',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  line_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 470,
    height: 2,
    marginBottom: 340,
    left: 25,
    flexGrow: 1,
    right: 23
  },
  repeat_password_box_layout: {
    position: 'absolute',
    top: 442,
    bottom: 350,
    left: 25,
    flexGrow: 1,
    right: 25
  },
  repeat_password_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  line_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 524,
    height: 2,
    marginBottom: 286,
    left: 35,
    flexGrow: 1,
    right: 13
  },
  phone_number_box_layout: {
    position: 'absolute',
    top: 496,
    bottom: 296,
    left: 35,
    flexGrow: 1,
    right: 35
  },
  phone_number_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  hero_title_box_layout: {
    position: 'absolute',
    top: 156,
    bottom: 615,
    left: 16,
    flexGrow: 1,
    right: 16
  },
  hero_title_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  hero_titleSpan0: {
    color: '#303236ff',
    letterSpacing: 0.4099999964237213,
    lineHeight: 41,
    fontSize: 34,
    fontWeight: '700',
    fontStyle: 'normal'
  },
  hero_titleSpan1: {
    color: '#303236ff',
    letterSpacing: 0.4099999964237213,
    lineHeight: 41,
    fontSize: 34,
    fontWeight: '400',
    fontStyle: 'normal'
  }
});
