/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default function AddBudgetItem(props) {
  return (
    <View style={[styles.cover_group_wrap, styles.cover_group_wrap_layout]}>
      <View style={[styles.cover_group, styles.cover_group_layout]}>
        <View style={[styles.employee_box, styles.employee_box_layout]}>
          <Text style={styles.employee} ellipsizeMode={'clip'}>
            {'Employee'}
          </Text>
        </View>

        <ImageBackground
          style={[styles.cover_group1, styles.cover_group1_layout]}
          source={require('../assets/2668f50fd92fa75d7b756f8f4e267b2c.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/2668f50fd92fa75d7b756f8f4e267b2c.png')}
          />
        </ImageBackground>

        <View style={[styles.budget_box, styles.budget_box_layout]}>
          <Text style={styles.budget} ellipsizeMode={'clip'}>
            {'Budget'}
          </Text>
        </View>
        <View style={[styles.projects_box, styles.projects_box_layout]}>
          <Text style={styles.projects} ellipsizeMode={'clip'}>
            {'projects'}
          </Text>
        </View>
        <View style={[styles.home_box, styles.home_box_layout]}>
          <Text style={styles.home} ellipsizeMode={'clip'}>
            {'Home'}
          </Text>
        </View>

        <ImageBackground
          style={[styles.cover_group2, styles.cover_group2_layout]}
          source={require('../assets/507bba58d688c62a78e3c74a4ec51e78.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.icon, styles.icon_layout1]}
            source={require('../assets/507bba58d688c62a78e3c74a4ec51e78.png')}
          />
        </ImageBackground>

        <ImageBackground
          style={[styles.cover_group3, styles.cover_group3_layout]}
          source={require('../assets/b070e1fdc6a7a5209b7e0c399057d5ce.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/b070e1fdc6a7a5209b7e0c399057d5ce.png')}
          />
        </ImageBackground>

        <ImageBackground
          style={[styles.cover_group4, styles.cover_group4_layout]}
          source={require('../assets/be716c11d37192e82b0d70401cb111a2.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/be716c11d37192e82b0d70401cb111a2.png')}
          />
        </ImageBackground>

        <View style={[styles.rect, styles.rect_layout]} />
        <View style={[styles.employee_box, styles.employee_box_layout1]}>
          <Text style={styles.employee} ellipsizeMode={'clip'}>
            {'Employee'}
          </Text>
        </View>
        <View style={[styles.budget_box, styles.budget_box_layout]}>
          <Text style={styles.budget} ellipsizeMode={'clip'}>
            {'Budget'}
          </Text>
        </View>
        <View style={[styles.projects_box, styles.projects_box_layout]}>
          <Text style={styles.projects} ellipsizeMode={'clip'}>
            {'projects'}
          </Text>
        </View>
        <View style={[styles.home_box, styles.home_box_layout]}>
          <Text style={styles.home} ellipsizeMode={'clip'}>
            {'Home'}
          </Text>
        </View>
      </View>

      <View style={[styles.cover_group, styles.cover_group_layout1]}>
        <ImageBackground
          style={[styles.cover_group6, styles.cover_group6_layout]}
          source={require('../assets/5645496f59165afda6a22685d5cf78cc.png')}
          resizeMode="contain">
          <View style={[styles.cover_group7, styles.cover_group7_layout]} />
          <ImageBackground
            style={[styles.image, styles.image_layout]}
            source={require('../assets/5645496f59165afda6a22685d5cf78cc.png')}
          />
        </ImageBackground>

        <ImageBackground
          style={[styles.cover_group8, styles.cover_group8_layout]}
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
          style={[styles.cover_group9, styles.cover_group9_layout]}
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
          style={[styles.cover_group10, styles.cover_group10_layout]}
          source={require('../assets/89efda88cc05005141e394ec4d4874fa.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout2]}
            source={require('../assets/89efda88cc05005141e394ec4d4874fa.png')}
          />
        </ImageBackground>

        <ImageBackground
          style={[styles.cover_group11, styles.cover_group11_layout]}
          source={require('../assets/061076dde5e19611addac70744a34661.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout3]}
            source={require('../assets/061076dde5e19611addac70744a34661.png')}
          />
        </ImageBackground>

        <View style={[styles.rect, styles.rect_layout1]} />
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
      <View style={[styles.cover_group12, styles.cover_group12_layout]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'food expense for guest'}
        </Text>
      </View>
      <View style={[styles.name_box, styles.name_box_layout]}>
        <Text style={styles.name} ellipsizeMode={'clip'}>
          {'Name'}
        </Text>
      </View>
      <View style={[styles.cover_group13, styles.cover_group13_layout]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout1]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'$900'}
        </Text>
      </View>
      <View style={[styles.price_box, styles.price_box_layout]}>
        <Text style={styles.price} ellipsizeMode={'clip'}>
          {'Price'}
        </Text>
      </View>
      <View style={[styles.cover_group14, styles.cover_group14_layout]} />
      <View style={[styles.food_box, styles.food_box_layout]}>
        <Text style={styles.food} ellipsizeMode={'clip'}>
          {'food'}
        </Text>
      </View>
      <View style={[styles.type_box, styles.type_box_layout]}>
        <Text style={styles.type} ellipsizeMode={'clip'}>
          {'Type'}
        </Text>
      </View>

      <View style={[styles.cover_group15, styles.cover_group15_layout]}>
        <ImageBackground
          style={[styles.cover_group16, styles.cover_group16_layout]}
          source={require('../assets/72fe021509f7560bc461104c76241cf0.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/72fe021509f7560bc461104c76241cf0.png')}
          />
        </ImageBackground>

        <View style={[styles.rect2, styles.rect2_layout]} />
      </View>

      <View style={[styles.text_body_box, styles.text_body_box_layout]}>
        <Text style={styles.text_body} ellipsizeMode={'clip'}>
          {'Expense/Revenue'}
        </Text>
      </View>

      <View style={[styles.cover_group17, styles.cover_group17_layout]}>
        <View style={[styles.gallary_box, styles.gallary_box_layout]}>
          <Text style={styles.gallary} ellipsizeMode={'clip'}>
            {'Gallary'}
          </Text>
        </View>
        <View style={[styles.rect3, styles.rect3_layout]} />
        <View style={[styles.gallary_box, styles.gallary_box_layout]}>
          <Text style={styles.gallary} ellipsizeMode={'clip'}>
            {'Gallary'}
          </Text>
        </View>

        <View style={[styles.cover_group18, styles.cover_group18_layout]}>
          <ImageBackground
            style={[styles.cover_group19, styles.cover_group19_layout]}
            source={require('../assets/3623bce395e8e15ce30cda0b915081f8.png')}
            resizeMode="contain">
            <ImageBackground
              style={[styles.icon, styles.icon_layout5]}
              source={require('../assets/3623bce395e8e15ce30cda0b915081f8.png')}
            />
          </ImageBackground>

          <ImageBackground
            style={[styles.decorator, styles.decorator_layout]}
            source={require('../assets/1764c683bf83a413e6a87daba7b0dd2e.png')}
          />
          <ImageBackground
            style={[styles.image1, styles.image1_layout]}
            source={require('../assets/1764c683bf83a413e6a87daba7b0dd2e.png')}
          />
        </View>

        <View style={[styles.rect4, styles.rect4_layout]} />
        <View style={[styles.gallary_box, styles.gallary_box_layout]}>
          <Text style={styles.gallary} ellipsizeMode={'clip'}>
            {'Gallary'}
          </Text>
        </View>
        <View style={[styles.rect5, styles.rect5_layout]} />
        <View style={[styles.gallary_box, styles.gallary_box_layout3]}>
          <Text style={styles.gallary} ellipsizeMode={'clip'}>
            {'Gallary'}
          </Text>
        </View>
      </View>

      <View style={[styles.cover_group20, styles.cover_group20_layout]}>
        <ImageBackground
          style={[styles.cover_group21, styles.cover_group21_layout]}
          source={require('../assets/9fc7da2024745b0668a78d94dd06139c.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/9fc7da2024745b0668a78d94dd06139c.png')}
          />
        </ImageBackground>

        <View style={[styles.rect6, styles.rect6_layout]} />
        <View style={[styles.camera_box, styles.camera_box_layout]}>
          <Text style={styles.camera} ellipsizeMode={'clip'}>
            {'Camera'}
          </Text>
        </View>

        <ImageBackground
          style={[styles.cover_group22, styles.cover_group22_layout]}
          source={require('../assets/16c1dd913d2ee58c26d86a20ff9392c7.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout4]}
            source={require('../assets/16c1dd913d2ee58c26d86a20ff9392c7.png')}
          />
        </ImageBackground>

        <View style={[styles.rect7, styles.rect7_layout]} />
        <View style={[styles.camera_box, styles.camera_box_layout1]}>
          <Text style={styles.camera} ellipsizeMode={'clip'}>
            {'Camera'}
          </Text>
        </View>
      </View>

      <View style={[styles.add_photo_box, styles.add_photo_box_layout]}>
        <Text style={styles.add_photo} ellipsizeMode={'clip'}>
          {'Add Photo '}
        </Text>
      </View>

      <View style={[styles.cover_group23, styles.cover_group23_layout]}>
        <View
          style={[styles.play_recording_box, styles.play_recording_box_layout]}>
          <Text style={styles.play_recording} ellipsizeMode={'clip'}>
            {'Play recording'}
          </Text>
        </View>

        <ImageBackground
          style={[styles.cover_group24, styles.cover_group24_layout]}
          source={require('../assets/99bb30b9a865bf6d4dabbf65ce632760.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout5]}
            source={require('../assets/99bb30b9a865bf6d4dabbf65ce632760.png')}
          />
        </ImageBackground>

        <View style={[styles.rect8, styles.rect8_layout]} />
        <View
          style={[
            styles.play_recording_box,
            styles.play_recording_box_layout1
          ]}>
          <Text style={styles.play_recording} ellipsizeMode={'clip'}>
            {'Play recording'}
          </Text>
        </View>
      </View>

      <View style={[styles.cover_group25, styles.cover_group25_layout]}>
        <View
          style={[
            styles.start_recording_box,
            styles.start_recording_box_layout
          ]}>
          <Text style={styles.start_recording} ellipsizeMode={'clip'}>
            {'Start Recording'}
          </Text>
        </View>

        <ImageBackground
          style={[styles.cover_group26, styles.cover_group26_layout]}
          source={require('../assets/7bd560469f9ccec8eebde910c488c91f.png')}
          resizeMode="contain">
          <ImageBackground
            style={[styles.img, styles.img_layout6]}
            source={require('../assets/7bd560469f9ccec8eebde910c488c91f.png')}
          />
        </ImageBackground>

        <View style={[styles.rect9, styles.rect9_layout]} />
        <View
          style={[
            styles.start_recording_box,
            styles.start_recording_box_layout1
          ]}>
          <Text style={styles.start_recording} ellipsizeMode={'clip'}>
            {'Start Recording'}
          </Text>
        </View>
      </View>

      <View style={[styles.add_voice_box, styles.add_voice_box_layout]}>
        <Text style={styles.add_voice} ellipsizeMode={'clip'}>
          {'Add Voice'}
        </Text>
      </View>

      <View style={[styles.cover_group27, styles.cover_group27_layout]}>
        <View style={[styles.submit_box, styles.submit_box_layout]}>
          <Text style={styles.submit} ellipsizeMode={'clip'}>
            {'submit'}
          </Text>
        </View>
        <View style={[styles.rect10, styles.rect10_layout]} />
        <View style={[styles.submit_box, styles.submit_box_layout1]}>
          <Text style={styles.submit} ellipsizeMode={'clip'}>
            {'submit'}
          </Text>
        </View>
      </View>

      <View style={[styles.add_budget_box, styles.add_budget_box_layout]}>
        <Text style={styles.add_budget} ellipsizeMode={'clip'}>
          {'Add Budget '}
        </Text>
      </View>
      <View style={[styles.highlights_box, styles.highlights_box_layout]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'food expense for guest'}
        </Text>
      </View>
      <View style={[styles.name_box, styles.name_box_layout]}>
        <Text style={styles.name} ellipsizeMode={'clip'}>
          {'Name'}
        </Text>
      </View>
      <View style={[styles.highlights_box, styles.highlights_box_layout3]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'$900'}
        </Text>
      </View>
      <View style={[styles.price_box, styles.price_box_layout]}>
        <Text style={styles.price} ellipsizeMode={'clip'}>
          {'Price'}
        </Text>
      </View>
      <View style={[styles.food_box, styles.food_box_layout]}>
        <Text style={styles.food} ellipsizeMode={'clip'}>
          {'food'}
        </Text>
      </View>
      <View style={[styles.type_box, styles.type_box_layout]}>
        <Text style={styles.type} ellipsizeMode={'clip'}>
          {'Type'}
        </Text>
      </View>
      <View style={[styles.text_body_box, styles.text_body_box_layout]}>
        <Text style={styles.text_body} ellipsizeMode={'clip'}>
          {'Expense/Revenue'}
        </Text>
      </View>
      <View style={[styles.add_photo_box, styles.add_photo_box_layout]}>
        <Text style={styles.add_photo} ellipsizeMode={'clip'}>
          {'Add Photo '}
        </Text>
      </View>
      <View style={[styles.add_voice_box, styles.add_voice_box_layout]}>
        <Text style={styles.add_voice} ellipsizeMode={'clip'}>
          {'Add Voice'}
        </Text>
      </View>
    </View>
  );
}

AddBudgetItem.inStorybook = true;
AddBudgetItem.fitScreen = false;
AddBudgetItem.scrollHeight = 812;

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
    marginTop: 763,
    marginBottom: 0,
    minHeight: 49,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  employee_box_layout: {
    position: 'absolute',
    top: 34,
    bottom: 3,
    width: 48,
    minWidth: 48,
    right: 23
  },
  employee_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cover_group1: {
    width: '100%'
  },
  cover_group1_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 6,
    height: 24,
    marginBottom: 19,
    width: 24,
    minWidth: 24,
    right: 35
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    marginTop: 0,
    height: 24,
    marginLeft: 0,
    width: 24,
    minWidth: 24
  },
  budget_box_layout: {
    position: 'absolute',
    top: 34,
    bottom: 3,
    left: 123,
    width: 36,
    minWidth: 36
  },
  budget_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  projects_box_layout: {
    position: 'absolute',
    top: 34,
    bottom: 3,
    width: 40,
    minWidth: 40,
    right: 120
  },
  projects_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  home_box_layout: {
    position: 'absolute',
    top: 34,
    bottom: 3,
    left: 32,
    width: 30,
    minWidth: 30
  },
  home_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cover_group2: {
    width: '100%'
  },
  cover_group2_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 5,
    height: 23,
    marginBottom: 21,
    left: 35,
    width: 24,
    minWidth: 24
  },
  icon_layout1: {
    marginTop: 0,
    height: 23,
    marginLeft: 0,
    width: 24,
    minWidth: 24
  },
  cover_group3: {
    width: '100%'
  },
  cover_group3_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 6,
    height: 24,
    marginBottom: 19,
    width: 24,
    minWidth: 24,
    right: 130
  },
  cover_group4: {
    width: '100%'
  },
  cover_group4_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 4,
    height: 24,
    marginBottom: 21,
    left: 129,
    width: 24,
    minWidth: 24
  },
  rect: {
    width: '100%',
    backgroundColor: '#ffffffff'
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 49,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  employee_box_layout1: {
    marginTop: 34,
    marginBottom: 3,
    marginLeft: 'auto',
    width: 48,
    minWidth: 48,
    marginRight: 23
  },
  cover_group_layout1: {
    position: 'absolute',
    top: 0,
    bottom: 748,
    minHeight: 64,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  cover_group6: {
    width: '100%',
    borderRadius: 2.5
  },
  cover_group6_layout: {
    position: 'absolute',
    top: 4.5,
    bottom: 48,
    minHeight: 11.5,
    width: 24,
    minWidth: 24,
    right: 8
  },
  cover_group7: {
    width: '100%',
    backgroundColor: '#000000ff',
    borderRadius: 0.5
  },
  cover_group7_layout: {
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
  cover_group8: {
    width: '100%'
  },
  cover_group8_layout: {
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
  cover_group9: {
    width: '100%'
  },
  cover_group9_layout: {
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
  cover_group10: {
    width: '100%'
  },
  cover_group10_layout: {
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
  cover_group11: {
    width: '100%'
  },
  cover_group11_layout: {
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
  rect_layout1: {
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
  cover_group12: {
    width: '100%',
    backgroundColor: '#cad0e0ff',
    borderRadius: 1
  },
  cover_group12_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 160,
    height: 2,
    marginBottom: 650,
    left: 17,
    flexGrow: 1,
    right: 31
  },
  highlights_box_layout: {
    position: 'absolute',
    top: 132,
    bottom: 660,
    left: 17,
    flexGrow: 1,
    right: 17
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  name_box_layout: {
    position: 'absolute',
    top: 113,
    bottom: 684,
    left: 17,
    flexGrow: 1,
    right: 17
  },
  name_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group13: {
    width: '100%',
    backgroundColor: '#cad0e0ff',
    borderRadius: 1
  },
  cover_group13_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 225,
    height: 2,
    marginBottom: 585,
    left: 18,
    flexGrow: 1,
    right: 30
  },
  highlights_box_layout1: {
    position: 'absolute',
    top: 197,
    bottom: 595,
    left: 18,
    flexGrow: 1,
    right: 18
  },
  price_box_layout: {
    position: 'absolute',
    top: 178,
    bottom: 619,
    left: 18,
    flexGrow: 1,
    right: 18
  },
  price_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group14: {
    width: '100%',
    backgroundColor: '#cad0e0ff',
    borderRadius: 1
  },
  cover_group14_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 489,
    height: 2,
    marginBottom: 321,
    left: 13,
    flexGrow: 1,
    right: 35
  },
  food_box_layout: {
    position: 'absolute',
    top: 461,
    bottom: 331,
    left: 13,
    flexGrow: 1,
    right: 13
  },
  food_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  type_box_layout: {
    position: 'absolute',
    top: 442,
    bottom: 355,
    left: 13,
    flexGrow: 1,
    right: 13
  },
  type_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group15: {
    width: '100%',
    backgroundColor: '#9d27b1ff',
    borderRadius: 14
  },
  cover_group15_layout: {
    position: 'absolute',
    top: 518,
    bottom: 266,
    minHeight: 28,
    width: 46,
    minWidth: 46,
    right: 33
  },
  cover_group16: {
    width: '100%'
  },
  cover_group16_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 2,
    height: 24,
    marginBottom: 2,
    width: 24,
    minWidth: 24,
    right: 2
  },
  rect2: {
    width: '100%',
    backgroundColor: '#9d27b1ff',
    borderRadius: 14
  },
  rect2_layout: {
    marginTop: 0,
    height: 28,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  text_body_box_layout: {
    position: 'absolute',
    top: 524,
    bottom: 273,
    left: 85,
    flexGrow: 1,
    right: 85
  },
  text_body_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  cover_group17: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  cover_group17_layout: {
    position: 'absolute',
    top: 367,
    bottom: 397,
    minHeight: 48,
    left: 9,
    width: 156,
    minWidth: 156
  },
  gallary_box_layout: {
    position: 'absolute',
    top: 15,
    bottom: 14,
    left: 0,
    right: 0,
    width: 54,
    minWidth: 54,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  gallary_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  rect3: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  rect3_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  cover_group18: {
    width: '100%'
  },
  cover_group18_layout: {
    position: 'absolute',
    top: 12,
    bottom: 18,
    minHeight: 18,
    left: 21,
    width: 20,
    minWidth: 20
  },
  cover_group19: {
    width: '100%'
  },
  cover_group19_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 6.8,
    height: 6.4,
    marginBottom: 4.8,
    left: 0,
    right: 0,
    width: 6.4,
    minWidth: 6.4,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  icon_layout5: {
    marginTop: 0,
    height: 6.4,
    marginLeft: 0,
    width: 6.4,
    minWidth: 6.4
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 18,
    marginBottom: 0,
    left: 0,
    marginLeft: 0,
    width: 20,
    minWidth: 20,
    marginRight: 0
  },
  image1: {
    resizeMode: 'contain'
  },
  image1_layout: {
    marginTop: 0,
    height: 18,
    marginBottom: 0,
    marginLeft: 0,
    width: 20,
    minWidth: 20,
    marginRight: 0
  },
  rect4: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  rect4_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  rect5: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  rect5_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  gallary_box_layout3: {
    marginTop: 15,
    marginBottom: 14,
    width: 54,
    minWidth: 54,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cover_group20: {
    width: '100%'
  },
  cover_group20_layout: {
    position: 'absolute',
    top: 367,
    bottom: 397,
    minHeight: 48,
    width: 156,
    minWidth: 156,
    right: 30
  },
  cover_group21: {
    width: '100%'
  },
  cover_group21_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 10,
    height: 24,
    marginBottom: 14,
    left: 20,
    width: 24,
    minWidth: 24
  },
  rect6: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  rect6_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  camera_box_layout: {
    position: 'absolute',
    top: 15,
    bottom: 14,
    left: 0,
    right: 0,
    width: 60,
    minWidth: 60,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  camera_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cover_group22: {
    width: '100%'
  },
  cover_group22_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 18,
    height: 12,
    marginBottom: 18,
    left: 15,
    width: 18,
    minWidth: 18
  },
  img_layout4: {
    marginTop: 0,
    height: 12,
    marginLeft: 0,
    width: 18,
    minWidth: 18
  },
  rect7: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  rect7_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  camera_box_layout1: {
    marginTop: 15,
    marginBottom: 14,
    width: 60,
    minWidth: 60,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  add_photo_box_layout: {
    position: 'absolute',
    top: 339,
    bottom: 458,
    left: 12,
    flexGrow: 1,
    right: 12
  },
  add_photo_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group23: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  cover_group23_layout: {
    position: 'absolute',
    top: 273,
    bottom: 491,
    minHeight: 48,
    width: 156,
    minWidth: 156,
    right: 30
  },
  play_recording_box_layout: {
    position: 'absolute',
    top: 15,
    bottom: 14,
    left: 24.16,
    flexGrow: 1,
    right: 25.84
  },
  play_recording_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cover_group24: {
    width: '100%'
  },
  cover_group24_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 20,
    height: 14,
    marginBottom: 14,
    left: 8,
    width: 11,
    minWidth: 11
  },
  img_layout5: {
    marginTop: 0,
    height: 14,
    marginLeft: 0,
    width: 11,
    minWidth: 11
  },
  rect8: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  rect8_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  play_recording_box_layout1: {
    marginTop: 15,
    marginBottom: 14,
    marginLeft: 24.16,
    flexGrow: 1,
    marginRight: 25.84
  },
  cover_group25: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  cover_group25_layout: {
    position: 'absolute',
    top: 273,
    bottom: 491,
    minHeight: 48,
    left: 12,
    width: 156,
    minWidth: 156
  },
  start_recording_box_layout: {
    position: 'absolute',
    top: 15,
    bottom: 14,
    left: 20.16,
    flexGrow: 1,
    right: 20.84
  },
  start_recording_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cover_group26: {
    width: '100%'
  },
  cover_group26_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 14,
    height: 19,
    marginBottom: 15,
    left: 1,
    width: 14,
    minWidth: 14
  },
  img_layout6: {
    marginTop: 0,
    height: 19,
    marginLeft: 0,
    width: 14,
    minWidth: 14
  },
  rect9: {
    width: '100%',
    backgroundColor: '#00bdd5ff',
    borderRadius: 3
  },
  rect9_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  start_recording_box_layout1: {
    marginTop: 15,
    marginBottom: 14,
    marginLeft: 20.16,
    flexGrow: 1,
    marginRight: 20.84
  },
  add_voice_box_layout: {
    position: 'absolute',
    top: 250,
    bottom: 547,
    left: 8,
    flexGrow: 1,
    right: 8
  },
  add_voice_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group27: {
    width: '100%',
    backgroundColor: '#4db051ff',
    borderRadius: 3
  },
  cover_group27_layout: {
    position: 'absolute',
    top: 579,
    bottom: 185,
    minHeight: 48,
    left: 14,
    flexGrow: 1,
    right: 17
  },
  submit_box_layout: {
    position: 'absolute',
    top: 15,
    bottom: 14,
    left: 0,
    right: 0,
    width: 54,
    minWidth: 54,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  submit_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  rect10: {
    width: '100%',
    backgroundColor: '#4db051ff',
    borderRadius: 3
  },
  rect10_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  submit_box_layout1: {
    marginTop: 15,
    marginBottom: 14,
    width: 54,
    minWidth: 54,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  highlights_box_layout3: {
    position: 'absolute',
    top: 197,
    bottom: 595,
    left: 18,
    flexGrow: 1,
    right: 18
  }
});
