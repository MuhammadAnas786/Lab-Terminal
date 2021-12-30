/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function TaskDetail(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.group1, styles.group1_layout]}>
        <View style={[styles.group2, styles.group2_layout]}>
          <View style={[styles.highlights_box, styles.highlights_box_layout]}>
            <Text style={styles.highlights} ellipsizeMode={'clip'}>
              {'14 MAR 2021'}
            </Text>
          </View>
          <View
            style={[
              styles.sallaries_paid_box,
              styles.sallaries_paid_box_layout
            ]}>
            <Text style={styles.sallaries_paid} ellipsizeMode={'clip'}>
              {'Sallaries Paid'}
            </Text>
          </View>
          <View
            style={[styles.heimstaden_sa_box, styles.heimstaden_sa_box_layout]}>
            <Text style={styles.heimstaden_sa} ellipsizeMode={'clip'}>
              {'Heimstaden SA'}
            </Text>
          </View>
          <View style={[styles.subtitle_box, styles.subtitle_box_layout]}>
            <Text style={styles.subtitle} ellipsizeMode={'clip'}>
              {'-$1,230'}
            </Text>
          </View>

          <ImageBackground
            style={[styles.cover_group, styles.cover_group_layout]}
            source={require('../assets/3f03beeaa5e07cdf19d97cf9fc12a221.png')}
            resizeMode="cover">
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require('../assets/29a346748bc1e0c499a1cbfb3691bcd8.png')}
            />
          </ImageBackground>

          <View style={[styles.food_box, styles.food_box_layout]}>
            <Text style={styles.food} ellipsizeMode={'clip'}>
              {'Food'}
            </Text>
          </View>
          <View style={[styles.coop_mega_box, styles.coop_mega_box_layout]}>
            <Text style={styles.coop_mega} ellipsizeMode={'clip'}>
              {'COOP MEGA'}
            </Text>
          </View>
          <View style={[styles.subtitle_box, styles.subtitle_box_layout1]}>
            <Text style={styles.subtitle} ellipsizeMode={'clip'}>
              {'-$56'}
            </Text>
          </View>

          <ImageBackground
            style={[styles.cover_group, styles.cover_group_layout1]}
            source={require('../assets/3c3087d235babf62844cb23dc133ce91.png')}
            resizeMode="cover">
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require('../assets/339dca32126782b68dc288971bdacc1b.png')}
            />
          </ImageBackground>

          <View
            style={[styles.raw_materials_box, styles.raw_materials_box_layout]}>
            <Text style={styles.raw_materials} ellipsizeMode={'clip'}>
              {'Raw materials'}
            </Text>
          </View>
          <View style={[styles.media_robot_box, styles.media_robot_box_layout]}>
            <Text style={styles.media_robot} ellipsizeMode={'clip'}>
              {'Media Robot'}
            </Text>
          </View>
          <View style={[styles.subtitle_box, styles.subtitle_box_layout2]}>
            <Text style={styles.subtitle} ellipsizeMode={'clip'}>
              {'-$1758'}
            </Text>
          </View>

          <ImageBackground
            style={[styles.cover_group, styles.cover_group_layout2]}
            source={require('../assets/3f03beeaa5e07cdf19d97cf9fc12a221.png')}
            resizeMode="cover">
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require('../assets/2b71e787573a1cc8bc3b4e4d2c0c53f1.png')}
            />
          </ImageBackground>

          <View style={[styles.salary_box, styles.salary_box_layout]}>
            <Text style={styles.salary} ellipsizeMode={'clip'}>
              {'Salary'}
            </Text>
          </View>
          <View style={[styles.joker_pub_box, styles.joker_pub_box_layout]}>
            <Text style={styles.joker_pub} ellipsizeMode={'clip'}>
              {'Joker Pub'}
            </Text>
          </View>
          <View style={[styles.subtitle_box, styles.subtitle_box_layout3]}>
            <Text style={styles.subtitle} ellipsizeMode={'clip'}>
              {'+$550'}
            </Text>
          </View>

          <ImageBackground
            style={[styles.cover_group, styles.cover_group_layout3]}
            source={require('../assets/8d6473da7a8587cf0e1adb651c5c2cda.png')}
            resizeMode="cover">
            <ImageBackground
              style={[styles.img, styles.img_layout3]}
              source={require('../assets/ef4ce21dba70a2d3d39cddbcfb7906fd.png')}
            />
          </ImageBackground>
        </View>
      </View>

      <View style={[styles.content_box, styles.content_box_layout]}>
        <View style={styles.content_box_space} />
        <View style={styles.content_box_col}>
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/93c68b81e099e6f340e2256ff6bed9c0.png')}
          />
        </View>
        <View style={styles.content_box_space1} />
        <View style={styles.content_box_col1}>
          <ImageBackground
            style={[styles.img4, styles.img4_layout]}
            source={require('../assets/58c49c6def6348a1bc3008fac80fe0d0.png')}
          />
        </View>
        <View style={styles.content_box_space2} />
        <View style={styles.content_box_col2}>
          <ImageBackground
            style={[styles.img5, styles.img5_layout]}
            source={require('../assets/6a6dde7ac6c17dc0e835679efb046342.png')}
          />
        </View>
        <View style={styles.content_box_space3} />
        <View style={styles.content_box_col3}>
          <ImageBackground
            style={[styles.icon1, styles.icon1_layout]}
            source={require('../assets/4c345525e0dec3f04f580d9d3706a19a.png')}
          />
        </View>
      </View>

      <View style={[styles.goss_balance_box, styles.goss_balance_box_layout]}>
        <Text style={styles.goss_balance} ellipsizeMode={'clip'}>
          {'GOSS BALANCE'}
        </Text>
      </View>
      <View style={[styles.hero_title_box, styles.hero_title_box_layout]}>
        <Text style={styles.hero_title} ellipsizeMode={'clip'}>
          {'$135 000'}
        </Text>
      </View>
      <View style={[styles.your_expense_box, styles.your_expense_box_layout]}>
        <Text style={styles.your_expense} ellipsizeMode={'clip'}>
          {'Your Expense'}
        </Text>
      </View>

      <ImageBackground
        style={[styles.cover_group, styles.cover_group_layout4]}
        source={require('../assets/7f6e258e76b890ec888fd8c197b97b66.png')}
        resizeMode="cover">
        <Px.View
          x="31.75px minmax(0px, max-content) 26.75fr"
          y="54.25px minmax(0px, max-content) 60.25fr"
          style={styles.txt_box}>
          <Text style={styles.txt} ellipsizeMode={'clip'}>
            {'$12 300'}
          </Text>
        </Px.View>
      </ImageBackground>

      <ImageBackground
        style={[styles.icon2, styles.icon2_layout]}
        source={require('../assets/b66de00c2713e9758dea32fdf4119d15.png')}
      />
      <ImageBackground
        style={[styles.icon3, styles.icon3_layout]}
        source={require('../assets/f59b827f5abb77a7d999d78bf66cf260.png')}
      />
      <ImageBackground
        style={[styles.decorator, styles.decorator_layout]}
        source={require('../assets/fe7949fc1c715e246cae0d1f70175101.png')}
      />
      <ImageBackground
        style={[styles.icon4, styles.icon4_layout]}
        source={require('../assets/25cf4aa5b15724ade67343323c0a256d.png')}
      />
      <View style={[styles.subtitle_box, styles.subtitle_box_layout4]}>
        <Text style={styles.subtitle4} ellipsizeMode={'clip'}>
          {'12%'}
        </Text>
      </View>
      <View style={[styles.subtitle_box, styles.subtitle_box_layout5]}>
        <Text style={styles.subtitle5} ellipsizeMode={'clip'}>
          {'9%'}
        </Text>
      </View>
      <View style={[styles.subtitle_box, styles.subtitle_box_layout6]}>
        <Text style={styles.subtitle6} ellipsizeMode={'clip'}>
          {'21%'}
        </Text>
      </View>
      <View style={[styles.subtitle_box, styles.subtitle_box_layout7]}>
        <Text style={styles.subtitle7} ellipsizeMode={'clip'}>
          {'45%'}
        </Text>
      </View>
    </View>
  );
}

TaskDetail.inStorybook = true;
TaskDetail.fitScreen = false;
TaskDetail.scrollHeight = 812;

const styles = StyleSheet.create({
  group: {
    width: '100%',
    backgroundColor: '#777a85ff',
    borderRadius: 40,
    overflow: 'hidden'
  },
  group_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 812,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  group1: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden'
  },
  group1_layout: {
    overflow: 'hidden',
    marginTop: 411,
    marginBottom: 0,
    minHeight: 401,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  group2: {
    width: '100%'
  },
  group2_layout: {
    overflow: 'visible',
    marginTop: 30,
    marginBottom: 30,
    minHeight: 341,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  highlights_box_layout: {
    position: 'absolute',
    top: 0,
    bottom: 323,
    left: 30,
    flexGrow: 1,
    right: 30
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  sallaries_paid_box_layout: {
    position: 'absolute',
    top: 24,
    bottom: 296,
    left: 72,
    flexGrow: 1,
    right: 72
  },
  sallaries_paid_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  heimstaden_sa_box_layout: {
    position: 'absolute',
    top: 47.65,
    bottom: 278.35,
    left: 72,
    flexGrow: 1,
    right: 72
  },
  heimstaden_sa_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  subtitle_box_layout: {
    position: 'absolute',
    top: 34,
    bottom: 283,
    left: 30,
    flexGrow: 1,
    right: 30
  },
  subtitle_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  cover_group: {
    width: '100%'
  },
  cover_group_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 31,
    bottom: 274.73,
    minHeight: 35.27,
    left: 30,
    width: 35.41,
    minWidth: 35.41
  },
  img: {
    resizeMode: 'cover'
  },
  img_layout: {
    marginTop: 9.85,
    height: 15,
    marginLeft: 10.65,
    width: 15,
    minWidth: 15
  },
  food_box_layout: {
    position: 'absolute',
    top: 76,
    bottom: 244,
    left: 72,
    flexGrow: 1,
    right: 72
  },
  food_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  coop_mega_box_layout: {
    position: 'absolute',
    top: 99.65,
    bottom: 226.35,
    left: 72,
    flexGrow: 1,
    right: 72
  },
  coop_mega_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  subtitle_box_layout1: {
    position: 'absolute',
    top: 86,
    bottom: 231,
    left: 30,
    flexGrow: 1,
    right: 30
  },
  cover_group_layout1: {
    position: 'absolute',
    overflow: 'visible',
    top: 83,
    bottom: 222.73,
    minHeight: 35.27,
    left: 30,
    width: 35.41,
    minWidth: 35.41
  },
  raw_materials_box_layout: {
    marginTop: 128,
    marginBottom: 192,
    marginLeft: 72,
    flexGrow: 1,
    marginRight: 72
  },
  raw_materials_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  media_robot_box_layout: {
    position: 'absolute',
    top: 151.65,
    bottom: 174.35,
    left: 72,
    flexGrow: 1,
    right: 72
  },
  media_robot_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  subtitle_box_layout2: {
    position: 'absolute',
    top: 138,
    bottom: 179,
    left: 30,
    flexGrow: 1,
    right: 30
  },
  cover_group_layout2: {
    position: 'absolute',
    overflow: 'visible',
    top: 135,
    bottom: 170.73,
    minHeight: 35.27,
    left: 30,
    width: 35.41,
    minWidth: 35.41
  },
  salary_box_layout: {
    position: 'absolute',
    top: 180,
    bottom: 140,
    left: 72,
    flexGrow: 1,
    right: 72
  },
  salary_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  joker_pub_box_layout: {
    position: 'absolute',
    top: 203.65,
    bottom: 122.35,
    left: 72,
    flexGrow: 1,
    right: 72
  },
  joker_pub_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  subtitle_box_layout3: {
    position: 'absolute',
    top: 190,
    bottom: 127,
    left: 30,
    flexGrow: 1,
    right: 30
  },
  cover_group_layout3: {
    position: 'absolute',
    overflow: 'visible',
    top: 187,
    bottom: 118.73,
    minHeight: 35.27,
    left: 30,
    width: 35.41,
    minWidth: 35.41
  },
  img_layout3: {
    marginTop: 10.15,
    height: 15,
    marginLeft: 10.35,
    width: 15,
    minWidth: 15
  },
  content_box: {
    backgroundColor: '#ffffffff',
    flexDirection: 'row'
  },
  content_box_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 719,
    bottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 43.6
  },
  content_box_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 18.79
  },
  icon: {
    resizeMode: 'contain',
    borderRadius: 4
  },
  icon_layout: {
    marginTop: 22.5,
    height: 19.73,
    marginBottom: 50.77,
    marginLeft: 0,
    width: 18.79,
    minWidth: 18.79,
    marginRight: 0
  },
  content_box_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 73.6
  },
  content_box_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 14
  },
  img4: {
    resizeMode: 'contain'
  },
  img4_layout: {
    marginTop: 23.5,
    height: 19,
    marginBottom: 50.5,
    marginLeft: 0,
    width: 14,
    minWidth: 14,
    marginRight: 0
  },
  content_box_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 73.32
  },
  content_box_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 19.37
  },
  img5: {
    resizeMode: 'contain'
  },
  img5_layout: {
    marginTop: 24.2,
    height: 17.61,
    marginBottom: 51.2,
    marginLeft: 0,
    width: 19.37,
    minWidth: 19.37,
    marginRight: 0
  },
  content_box_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 70.43
  },
  content_box_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 61.89
  },
  icon1: {
    resizeMode: 'contain'
  },
  icon1_layout: {
    marginTop: 23.11,
    height: 19.78,
    marginBottom: 50.11,
    marginLeft: 0,
    width: 19.78,
    minWidth: 19.78
  },
  goss_balance_box_layout: {
    position: 'absolute',
    top: 63,
    bottom: 731,
    left: 43,
    flexGrow: 1,
    right: 43
  },
  goss_balance_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  hero_title_box_layout: {
    position: 'absolute',
    top: 75.29,
    bottom: 682.71,
    left: 43,
    flexGrow: 1,
    right: 43
  },
  hero_title_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  your_expense_box_layout: {
    position: 'absolute',
    top: 163,
    bottom: 631,
    left: 43,
    flexGrow: 1,
    right: 43
  },
  your_expense_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group_layout4: {
    position: 'absolute',
    overflow: 'visible',
    top: 215.73,
    bottom: 457.77,
    minHeight: 138.5,
    left: 62.72,
    width: 138.5,
    minWidth: 138.5
  },
  txt: {
    color: '#ffffffff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: 20,
    fontWeight: '900',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  icon2: {
    resizeMode: 'contain'
  },
  icon2_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 224.28,
    height: 19.68,
    marginBottom: 568.04,
    width: 19.55,
    minWidth: 19.55,
    right: 111.01
  },
  icon3: {
    resizeMode: 'contain'
  },
  icon3_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 326.05,
    height: 19.56,
    marginBottom: 466.38,
    width: 19.56,
    minWidth: 19.56,
    right: 111
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 259.55,
    height: 16.94,
    marginBottom: 535.51,
    width: 19.4,
    minWidth: 19.4,
    right: 111.08
  },
  icon4: {
    resizeMode: 'contain'
  },
  icon4_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 291.93,
    height: 20,
    marginBottom: 500.07,
    width: 20,
    minWidth: 20,
    right: 110.78
  },
  subtitle_box_layout4: {
    position: 'absolute',
    top: 286.93,
    bottom: 501.07,
    left: 49.78,
    flexGrow: 1,
    right: 49.78
  },
  subtitle_box_layout5: {
    position: 'absolute',
    top: 320.84,
    bottom: 467.16,
    left: 61.78,
    flexGrow: 1,
    right: 61.78
  },
  subtitle_box_layout6: {
    position: 'absolute',
    top: 219.12,
    bottom: 568.88,
    left: 49.78,
    flexGrow: 1,
    right: 49.78
  },
  subtitle_box_layout7: {
    position: 'absolute',
    top: 253.02,
    bottom: 534.98,
    left: 49.78,
    flexGrow: 1,
    right: 49.78
  }
});
