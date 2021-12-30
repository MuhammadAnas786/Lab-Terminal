/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function Table(props) {
  return (
    <View style={[styles.cover_group_wrap, styles.cover_group_wrap_layout]}>
      <View style={[styles.cover_group, styles.cover_group_layout]}>
        <View style={[styles.employee_wrap, styles.employee_wrap_layout]}>
          <View style={[styles.employee_box, styles.employee_box_layout]}>
            <Text style={styles.employee} ellipsizeMode={'clip'}>
              {'Employee'}
            </Text>
          </View>
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/2668f50fd92fa75d7b756f8f4e267b2c.png')}
          />
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
            style={[styles.icon, styles.icon_layout1]}
            source={require('../assets/507bba58d688c62a78e3c74a4ec51e78.png')}
          />
          <ImageBackground
            style={[styles.icon, styles.icon_layout2]}
            source={require('../assets/b070e1fdc6a7a5209b7e0c399057d5ce.png')}
          />
          <ImageBackground
            style={[styles.icon, styles.icon_layout3]}
            source={require('../assets/be716c11d37192e82b0d70401cb111a2.png')}
          />
        </View>
      </View>

      <View style={[styles.content_box, styles.content_box_layout]}>
        <View style={styles.content_box_space} />
        <View style={styles.content_box_col}>
          <ImageBackground
            style={[styles.img, styles.img_layout]}
            source={require('../assets/89efda88cc05005141e394ec4d4874fa.png')}
          />
        </View>
        <View style={styles.content_box_space1} />
        <View style={styles.content_box_col1}>
          <View style={[styles.freebie_box, styles.freebie_box_layout]}>
            <Text style={styles.freebie} ellipsizeMode={'clip'}>
              {'Freebie'}
            </Text>
          </View>
        </View>
        <View style={styles.content_box_space2} />
        <View style={styles.content_box_col2}>
          <ImageBackground
            style={[styles.img, styles.img_layout1]}
            source={require('../assets/061076dde5e19611addac70744a34661.png')}
          />
        </View>
        <View style={styles.content_box_space3} />
        <View style={styles.content_box_col3}>
          <View
            style={[
              styles.small_text_body_box,
              styles.small_text_body_box_layout
            ]}>
            <Text style={styles.small_text_body} ellipsizeMode={'clip'}>
              {'9:41 AM'}
            </Text>
          </View>
        </View>
        <View style={styles.content_box_space4} />
        <View style={styles.content_box_col4}>
          <ImageBackground
            style={[styles.img, styles.img_layout2]}
            source={require('../assets/f6a4efc925a34e827579849969295b5a.png')}
          />
        </View>
        <View style={styles.content_box_space5} />
        <View style={styles.content_box_col5}>
          <View
            style={[
              styles.small_text_body_box1,
              styles.small_text_body_box1_layout
            ]}>
            <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
              {'100%'}
            </Text>
          </View>
        </View>
        <View style={styles.content_box_space6} />
        <View style={styles.content_box_col6}>
          <ImageBackground
            style={[styles.cover_group1, styles.cover_group1_layout]}
            source={require('../assets/5645496f59165afda6a22685d5cf78cc.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.content_box_space7} />
        <View style={styles.content_box_col7}>
          <ImageBackground
            style={[styles.img, styles.img_layout3]}
            source={require('../assets/489d486af7bffb092673c934602dce9c.png')}
          />
        </View>
      </View>

      <View style={[styles.budget_items_box, styles.budget_items_box_layout]}>
        <Text style={styles.budget_items} ellipsizeMode={'clip'}>
          {'Budget Items'}
        </Text>
      </View>

      <View style={[styles.group, styles.group_layout]}>
        <ImageBackground
          style={[styles.img4, styles.img4_layout]}
          source={require('../assets/ac97184e6a66e4167f740c9d6415d2ad.png')}
        />
      </View>

      <View style={[styles.group1, styles.group1_layout]}>
        <Px.View x="10fr 12fr 10fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt} ellipsizeMode={'clip'}>
            {'1'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group2, styles.group2_layout]}>
        <Px.View x="10fr 12fr 10fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt1} ellipsizeMode={'clip'}>
            {'2'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group3, styles.group3_layout]}>
        <Px.View x="8fr 16fr 8fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt2} ellipsizeMode={'clip'}>
            {'...'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group4, styles.group4_layout]}>
        <Px.View x="10fr 12fr 10fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt3} ellipsizeMode={'clip'}>
            {'9'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group5, styles.group5_layout]}>
        <Px.View x="6fr 20fr 6fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt4} ellipsizeMode={'clip'}>
            {'10'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group6, styles.group6_layout]}>
        <ImageBackground
          style={[styles.img5, styles.img5_layout]}
          source={require('../assets/7d6577e8734070483fa95ad5a5e2b8ef.png')}
        />
      </View>

      <View style={[styles.cover_group2, styles.cover_group2_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box5}>
          <Text style={styles.txt5} ellipsizeMode={'clip'}>
            {'44.1'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group3, styles.cover_group3_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box6}>
          <Text style={styles.txt6} ellipsizeMode={'clip'}>
            {'44.1'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group4, styles.cover_group4_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box7}>
          <Text style={styles.txt7} ellipsizeMode={'clip'}>
            {'69.0'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group5, styles.cover_group5_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box8}>
          <Text style={styles.txt8} ellipsizeMode={'clip'}>
            {'85.0'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group6, styles.cover_group6_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box9}>
          <Text style={styles.txt9} ellipsizeMode={'clip'}>
            {'95.9'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group7, styles.cover_group7_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box10}>
          <Text style={styles.txt10} ellipsizeMode={'clip'}>
            {'33.0'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group8, styles.cover_group8_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box11}>
          <Text style={styles.txt11} ellipsizeMode={'clip'}>
            {'39.9'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group9, styles.cover_group9_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box12}>
          <Text style={styles.txt12} ellipsizeMode={'clip'}>
            {'47.6'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group10, styles.cover_group10_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box13}>
          <Text style={styles.txt13} ellipsizeMode={'clip'}>
            {'66.4'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group11, styles.cover_group11_layout]}>
        <View style={[styles.highlights_box, styles.highlights_box_layout]}>
          <Text style={styles.highlights} ellipsizeMode={'clip'}>
            {'40.1'}
          </Text>
        </View>
        <View style={[styles.rect, styles.rect_layout]} />
        <View style={[styles.highlights_box, styles.highlights_box_layout1]}>
          <Text style={styles.highlights} ellipsizeMode={'clip'}>
            {'40.1'}
          </Text>
        </View>
      </View>

      <View style={[styles.cover_group12, styles.cover_group12_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box14}>
          <Text style={styles.txt14} ellipsizeMode={'clip'}>
            {'40.1'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group13, styles.cover_group13_layout]}>
        <Px.View x="11fr 33fr 8fr" y="4px 19fr 11fr" style={styles.txt_box15}>
          <Text style={styles.txt15} ellipsizeMode={'clip'}>
            {'40.1'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.rect, styles.rect_layout1]} />
      <View style={[styles.rect, styles.rect_layout2]} />

      <View style={[styles.cover_group14, styles.cover_group14_layout]}>
        <ImageBackground
          style={[styles.img6, styles.img6_layout]}
          source={require('../assets/99bb30b9a865bf6d4dabbf65ce632760.png')}
        />
      </View>

      <View style={[styles.rect, styles.rect_layout3]} />
      <View style={[styles.rect, styles.rect_layout4]} />

      <View style={[styles.cover_group15, styles.cover_group15_layout]}>
        <Px.View x="8fr 36fr 8px" y="4px 26fr 4fr" style={styles.txt_box16}>
          <Text style={styles.txt16} ellipsizeMode={'clip'}>
            {'40.1'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group16, styles.cover_group16_layout]}>
        <Px.View x="8fr 36fr 8px" y="4px 26fr 4fr" style={styles.txt_box17}>
          <Text style={styles.txt17} ellipsizeMode={'clip'}>
            {'40.1'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group17, styles.cover_group17_layout]}>
        <Px.View x="8fr 36fr 8px" y="4px 26fr 4fr" style={styles.txt_box18}>
          <Text style={styles.txt18} ellipsizeMode={'clip'}>
            {'93.9'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group18, styles.cover_group18_layout]}>
        <Px.View
          x="11fr minmax(0px, max-content) 10fr"
          y="5px minmax(0px, max-content) 6fr"
          style={styles.txt_box19}>
          <Text style={styles.txt19} ellipsizeMode={'clip'}>
            {'Price'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group19, styles.cover_group19_layout]}>
        <ImageBackground
          style={[styles.img7, styles.img7_layout]}
          source={require('../assets/7415c20c49a0b5720d85c265ff11a81f.png')}
        />
      </View>

      <View style={[styles.rect, styles.rect_layout5]} />
      <View style={[styles.rect, styles.rect_layout6]} />
      <View style={[styles.rect, styles.rect_layout7]} />
      <View style={[styles.rect, styles.rect_layout8]} />
      <View style={[styles.rect, styles.rect_layout9]} />
      <View style={[styles.rect, styles.rect_layout10]} />
      <View style={[styles.rect, styles.rect_layout11]} />

      <View style={[styles.cover_group20, styles.cover_group20_layout]}>
        <ImageBackground
          style={[styles.img8, styles.img8_layout]}
          source={require('../assets/31537c78d760b4174fb79a6a61198f06.png')}
        />
      </View>

      <View style={[styles.rect, styles.rect_layout12]} />
      <View style={[styles.rect, styles.rect_layout13]} />

      <View style={[styles.cover_group21, styles.cover_group21_layout]}>
        <Px.View x="8px 36fr 8fr" y="4px 21fr 4fr" style={styles.txt_box20}>
          <Text style={styles.txt20} ellipsizeMode={'clip'}>
            {'image'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.rect, styles.rect_layout14]} />
      <View style={[styles.rect, styles.rect_layout15]} />
      <View style={[styles.rect, styles.rect_layout16]} />
      <View style={[styles.rect, styles.rect_layout17]} />
      <View style={[styles.rect, styles.rect_layout18]} />
      <View style={[styles.rect, styles.rect_layout19]} />
      <View style={[styles.rect, styles.rect_layout20]} />
      <View style={[styles.rect, styles.rect_layout21]} />
      <View style={[styles.rect, styles.rect_layout22]} />
      <View style={[styles.rect, styles.rect_layout23]} />

      <View style={[styles.cover_group22, styles.cover_group22_layout]}>
        <ImageBackground
          style={[styles.img9, styles.img9_layout]}
          source={require('../assets/99bb30b9a865bf6d4dabbf65ce632760.png')}
        />
      </View>

      <View style={[styles.cover_group23, styles.cover_group23_layout]}>
        <Px.View
          x="10fr minmax(0px, max-content) 9fr"
          y="5px minmax(0px, max-content) 6fr"
          style={styles.txt_box21}>
          <Text style={styles.txt21} ellipsizeMode={'clip'}>
            {'audio'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group24, styles.cover_group24_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box22}>
          <Text style={styles.txt22} ellipsizeMode={'clip'}>
            {'JOPA'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group25, styles.cover_group25_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box23}>
          <Text style={styles.txt23} ellipsizeMode={'clip'}>
            {'ALTO'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group26, styles.cover_group26_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box24}>
          <Text style={styles.txt24} ellipsizeMode={'clip'}>
            {'HBAN'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group27, styles.cover_group27_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box25}>
          <Text style={styles.txt25} ellipsizeMode={'clip'}>
            {'FHN'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group28, styles.cover_group28_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box26}>
          <Text style={styles.txt26} ellipsizeMode={'clip'}>
            {'MUS'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group29, styles.cover_group29_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box27}>
          <Text style={styles.txt27} ellipsizeMode={'clip'}>
            {'ATI'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group30, styles.cover_group30_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box28}>
          <Text style={styles.txt28} ellipsizeMode={'clip'}>
            {'ALTR'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group31, styles.cover_group31_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box29}>
          <Text style={styles.txt29} ellipsizeMode={'clip'}>
            {'LSI'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group32, styles.cover_group32_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box30}>
          <Text style={styles.txt30} ellipsizeMode={'clip'}>
            {'FHN'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group33, styles.cover_group33_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box31}>
          <Text style={styles.txt31} ellipsizeMode={'clip'}>
            {'MU'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group34, styles.cover_group34_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box32}>
          <Text style={styles.txt32} ellipsizeMode={'clip'}>
            {'MU'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group35, styles.cover_group35_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box33}>
          <Text style={styles.txt33} ellipsizeMode={'clip'}>
            {'MU'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group36, styles.cover_group36_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box34}>
          <Text style={styles.txt34} ellipsizeMode={'clip'}>
            {'MU'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group37, styles.cover_group37_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box35}>
          <Text style={styles.txt35} ellipsizeMode={'clip'}>
            {'MU'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group38, styles.cover_group38_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 26fr 4fr" style={styles.txt_box36}>
          <Text style={styles.txt36} ellipsizeMode={'clip'}>
            {'AKAM'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group39, styles.cover_group39_layout]}>
        <Px.View x="8px 51fr 8fr" y="4px 21fr 4fr" style={styles.txt_box37}>
          <Text style={styles.txt37} ellipsizeMode={'clip'}>
            {'Type'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group40, styles.cover_group40_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 49fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box38}>
          <Text style={styles.txt38} ellipsizeMode={'clip'}>
            {'Jopa Telecom'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group41, styles.cover_group41_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 49fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box39}>
          <Text style={styles.txt39} ellipsizeMode={'clip'}>
            {'Jopa Telecom'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group42, styles.cover_group42_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 49fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box40}>
          <Text style={styles.txt40} ellipsizeMode={'clip'}>
            {'Jopa Telecom'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group43, styles.cover_group43_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 49fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box41}>
          <Text style={styles.txt41} ellipsizeMode={'clip'}>
            {'Jopa Telecom'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group44, styles.cover_group44_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 49fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box42}>
          <Text style={styles.txt42} ellipsizeMode={'clip'}>
            {'Jopa Telecom'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group45, styles.cover_group45_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 72fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box43}>
          <Text style={styles.txt43} ellipsizeMode={'clip'}>
            {'Altolandia'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group46, styles.cover_group46_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 2fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box44}>
          <Text style={styles.txt44} ellipsizeMode={'clip'}>
            {'Huntington Banschare'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group47, styles.cover_group47_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 56fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box45}>
          <Text style={styles.txt45} ellipsizeMode={'clip'}>
            {'First Horizon'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group48, styles.cover_group48_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 23fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box46}>
          <Text style={styles.txt46} ellipsizeMode={'clip'}>
            {'MUSA Corporation'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group49, styles.cover_group49_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 74fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box47}>
          <Text style={styles.txt47} ellipsizeMode={'clip'}>
            {'Allegheny'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group50, styles.cover_group50_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 96fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box48}>
          <Text style={styles.txt48} ellipsizeMode={'clip'}>
            {'Altera'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group51, styles.cover_group51_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 111fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box49}>
          <Text style={styles.txt49} ellipsizeMode={'clip'}>
            {'LSI'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group52, styles.cover_group52_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 56fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box50}>
          <Text style={styles.txt50} ellipsizeMode={'clip'}>
            {'First Horizon'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group53, styles.cover_group53_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 90fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box51}>
          <Text style={styles.txt51} ellipsizeMode={'clip'}>
            {'Micron'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group54, styles.cover_group54_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 7fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box52}>
          <Text style={styles.txt52} ellipsizeMode={'clip'}>
            {'Akamai Technologies'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group55, styles.cover_group55_layout]}>
        <Px.View x="8px 122fr 8fr" y="4px 21fr 4fr" style={styles.txt_box53}>
          <Text style={styles.txt53} ellipsizeMode={'clip'}>
            {'Name'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.rect, styles.rect_layout24]} />
      <View style={[styles.rect, styles.rect_layout25]} />

      <View style={[styles.cover_group56, styles.cover_group56_layout]}>
        <View style={[styles.highlights_box, styles.highlights_box_layout2]}>
          <Text style={styles.highlights} ellipsizeMode={'clip'}>
            {'40.1'}
          </Text>
        </View>
        <View style={[styles.rect, styles.rect_layout]} />
      </View>

      <ImageBackground
        style={[styles.decorator, styles.decorator_layout]}
        source={require('../assets/99bb30b9a865bf6d4dabbf65ce632760.png')}
      />
      <ImageBackground
        style={[styles.icon, styles.icon_layout4]}
        source={require('../assets/34a11b603461a3a3713fe2e9006d217a.png')}
      />
      <Px.View
        x="14px 128fr 233fr"
        y="126px 1px 685px"
        absolute
        style={styles.line}
      />
      <View style={[styles.text_box, styles.text_box_layout]}>
        <Text style={styles.text} ellipsizeMode={'clip'}>
          {'Text'}
        </Text>
      </View>
      <Px.View
        x="150fr 128fr 97px"
        y="126px 1px 685px"
        absolute
        style={styles.line}
      />
      <View style={[styles.field_box, styles.field_box_layout]}>
        <Text style={styles.field} ellipsizeMode={'clip'}>
          {'Field'}
        </Text>
      </View>

      <View style={[styles.cover_group57, styles.cover_group57_layout]}>
        <Px.View
          x="39.4fr minmax(0px, max-content) 40.6fr"
          y="7px minmax(0px, max-content) 6fr"
          style={styles.txt_box}>
          <Text style={styles.txt54} ellipsizeMode={'clip'}>
            {'Search'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group58, styles.cover_group58_layout]}>
        <ImageBackground
          style={[styles.img10, styles.img10_layout]}
          source={require('../assets/72fe021509f7560bc461104c76241cf0.png')}
        />
      </View>

      <ImageBackground
        style={[styles.decorator, styles.decorator_layout1]}
        source={require('../assets/4b1b65ffb00d157200f769f541738572.png')}
      />
    </View>
  );
}

Table.inStorybook = true;
Table.fitScreen = false;
Table.scrollHeight = 812;

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
  employee_wrap: {
    width: '100%'
  },
  employee_wrap_layout: {
    overflow: 'visible',
    marginTop: 3,
    marginBottom: 3,
    minHeight: 43,
    marginLeft: 23,
    flexGrow: 1,
    marginRight: 23
  },
  employee_box_layout: {
    marginTop: 31,
    marginBottom: 0,
    marginLeft: 'auto',
    width: 48,
    minWidth: 48,
    marginRight: 0
  },
  employee_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 3,
    height: 24,
    marginBottom: 16,
    width: 24,
    minWidth: 24,
    right: 12
  },
  budget_box_layout: {
    position: 'absolute',
    top: 31,
    bottom: 0,
    left: 100,
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
    top: 31,
    bottom: 0,
    width: 40,
    minWidth: 40,
    right: 97
  },
  projects_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  home_box_layout: {
    position: 'absolute',
    top: 31,
    bottom: 0,
    left: 9,
    width: 30,
    minWidth: 30
  },
  home_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  icon_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 2,
    height: 23,
    marginBottom: 18,
    left: 12,
    width: 24,
    minWidth: 24
  },
  icon_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 3,
    height: 24,
    marginBottom: 16,
    width: 24,
    minWidth: 24,
    right: 107
  },
  icon_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 1,
    height: 24,
    marginBottom: 18,
    left: 106,
    width: 24,
    minWidth: 24
  },
  content_box: {
    backgroundColor: '#ffffffff',
    flexDirection: 'row'
  },
  content_box_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 0,
    bottom: 748,
    minHeight: 64,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 6
  },
  content_box_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 16.5
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 5,
    height: 10,
    marginBottom: 49,
    marginLeft: 0,
    width: 16.5,
    minWidth: 16.5,
    marginRight: 0
  },
  content_box_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3.5
  },
  content_box_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  freebie_box_layout: {
    marginTop: 3.5,
    marginBottom: 46.5,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  freebie_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content_box_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 2.33
  },
  content_box_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 14.34
  },
  img_layout1: {
    marginTop: 5,
    height: 10,
    marginBottom: 49,
    marginLeft: 0,
    width: 14.34,
    minWidth: 14.34,
    marginRight: 0
  },
  content_box_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 76.83
  },
  content_box_col3: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 50
  },
  small_text_body_box_layout: {
    marginTop: 3.5,
    marginBottom: 46.5,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  content_box_space4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 86
  },
  content_box_col4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 6
  },
  img_layout2: {
    marginTop: 5,
    height: 10,
    marginBottom: 49,
    marginLeft: 0,
    width: 6,
    minWidth: 6,
    marginRight: 0
  },
  content_box_space5: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 2.5
  },
  content_box_col5: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 33
  },
  small_text_body_box1_layout: {
    marginTop: 3.5,
    marginBottom: 46.5,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  content_box_space6: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3
  },
  content_box_col6: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 24
  },
  cover_group1: {
    width: '100%',
    backgroundColor: '#000000ff',
    borderRadius: 0.5
  },
  cover_group1_layout: {
    overflow: 'visible',
    marginTop: 4.5,
    marginBottom: 48,
    minHeight: 11.5,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box_space7: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 1
  },
  content_box_col7: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 7
  },
  img_layout3: {
    marginTop: 8.5,
    height: 3.87,
    marginBottom: 51.63,
    marginLeft: 0,
    width: 1.5,
    minWidth: 1.5
  },
  budget_items_box_layout: {
    position: 'absolute',
    top: 36,
    bottom: 746,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  budget_items_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  group: {
    width: '100%',
    backgroundColor: '#929facff',
    borderRadius: 4
  },
  group_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    left: 99,
    width: 32,
    minWidth: 32
  },
  img4: {
    resizeMode: 'cover'
  },
  img4_layout: {
    marginTop: 4,
    height: 24,
    marginLeft: 4,
    width: 24,
    minWidth: 24
  },
  group1: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 4
  },
  group1_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    left: 139,
    width: 32,
    minWidth: 32
  },
  txt: {
    color: '#4300ffff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '700',
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
  group2: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 4
  },
  group2_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    left: 0,
    right: 0,
    width: 32,
    minWidth: 32,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  txt1: {
    color: '#222c37ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  group3: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 4
  },
  group3_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    width: 32,
    minWidth: 32,
    right: 124
  },
  txt2: {
    color: '#222c37ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  group4: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 4
  },
  group4_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    width: 32,
    minWidth: 32,
    right: 84
  },
  txt3: {
    color: '#222c37ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  group5: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 4
  },
  group5_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    width: 32,
    minWidth: 32,
    right: 44
  },
  txt4: {
    color: '#222c37ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  group6: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 4
  },
  group6_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    width: 32,
    minWidth: 32,
    right: 4
  },
  img5: {
    resizeMode: 'cover'
  },
  img5_layout: {
    marginTop: 4,
    height: 24,
    marginLeft: 4,
    width: 24,
    minWidth: 24
  },
  cover_group2: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group2_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 551.91,
    bottom: 226.09,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 111
  },
  txt5: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box5: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group3: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group3_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 521.62,
    bottom: 256.38,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt6: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box6: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group4: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group4_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 487.39,
    bottom: 290.61,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt7: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box7: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group5: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group5_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 453.16,
    bottom: 324.84,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt8: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box8: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group6: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group6_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 418.93,
    bottom: 359.07,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt9: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box9: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group7: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group7_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 384.69,
    bottom: 393.31,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt10: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box10: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group8: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group8_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 350.46,
    bottom: 427.54,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt11: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box11: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group9: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group9_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 316.23,
    bottom: 461.77,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt12: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box12: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group10: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group10_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 281.99,
    bottom: 496.01,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt13: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box13: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group11: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group11_layout: {
    position: 'absolute',
    top: 247.76,
    bottom: 530.24,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout: {
    position: 'absolute',
    top: 4,
    bottom: 11,
    left: 8,
    flexGrow: 1,
    right: 8
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rect: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 34,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  highlights_box_layout1: {
    marginTop: 4,
    marginBottom: 11,
    marginLeft: 8,
    flexGrow: 1,
    marginRight: 8
  },
  cover_group12: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group12_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 655.28,
    bottom: 122.72,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 109
  },
  txt14: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box14: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group13: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group13_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 686.01,
    bottom: 91.99,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 111
  },
  txt15: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box15: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rect_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 687.87,
    height: 34,
    marginBottom: 90.13,
    width: 52,
    minWidth: 52,
    right: 9
  },
  rect_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 661.8,
    height: 34,
    marginBottom: 116.2,
    width: 52,
    minWidth: 52,
    right: 9
  },
  cover_group14: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group14_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 591.95,
    bottom: 186.05,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 8
  },
  img6: {
    resizeMode: 'cover'
  },
  img6_layout: {
    marginTop: 0.05,
    height: 14,
    marginLeft: 26,
    width: 11,
    minWidth: 11
  },
  rect_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 687.87,
    height: 34,
    marginBottom: 90.13,
    width: 52,
    minWidth: 52,
    right: 60
  },
  rect_layout4: {
    position: 'absolute',
    top: 0,
    marginTop: 628.27,
    height: 34,
    marginBottom: 149.73,
    width: 52,
    minWidth: 52,
    right: 10
  },
  cover_group15: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group15_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 624.55,
    bottom: 153.45,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 111
  },
  txt16: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box16: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group16: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group16_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 591.02,
    bottom: 186.98,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 112
  },
  txt17: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box17: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group17: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group17_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 213.53,
    bottom: 564.47,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt18: {
    color: '#242427ff',
    textAlign: 'right',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box18: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cover_group18: {
    width: '100%',
    backgroundColor: '#4f4f54ff'
  },
  cover_group18_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 185,
    bottom: 598,
    minHeight: 29,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  txt19: {
    color: '#ffffffff',
    textAlign: 'center',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '900',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box19: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group19: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group19_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 555.86,
    bottom: 222.14,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  img7: {
    resizeMode: 'cover'
  },
  img7_layout: {
    marginTop: 3.5,
    height: 22.35,
    marginLeft: 8.35,
    width: 24,
    minWidth: 24
  },
  rect_layout5: {
    position: 'absolute',
    top: 0,
    marginTop: 521.62,
    height: 34,
    marginBottom: 256.38,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout6: {
    position: 'absolute',
    top: 0,
    marginTop: 487.39,
    height: 34,
    marginBottom: 290.61,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout7: {
    position: 'absolute',
    top: 0,
    marginTop: 453.16,
    height: 34,
    marginBottom: 324.84,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout8: {
    position: 'absolute',
    top: 0,
    marginTop: 418.93,
    height: 34,
    marginBottom: 359.07,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout9: {
    position: 'absolute',
    top: 0,
    marginTop: 384.69,
    height: 34,
    marginBottom: 393.31,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout10: {
    position: 'absolute',
    top: 0,
    marginTop: 350.46,
    height: 34,
    marginBottom: 427.54,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout11: {
    position: 'absolute',
    top: 0,
    marginTop: 316.23,
    height: 34,
    marginBottom: 461.77,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  cover_group20: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group20_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 281.99,
    bottom: 496.01,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  img8: {
    resizeMode: 'cover'
  },
  img8_layout: {
    marginTop: 1.72,
    height: 22.35,
    marginLeft: 15.35,
    width: 24,
    minWidth: 24
  },
  rect_layout12: {
    position: 'absolute',
    top: 0,
    marginTop: 247.76,
    height: 34,
    marginBottom: 530.24,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout13: {
    position: 'absolute',
    top: 0,
    marginTop: 213.53,
    height: 34,
    marginBottom: 564.47,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  cover_group21: {
    width: '100%',
    backgroundColor: '#4f4f54ff',
    borderRadius: 1
  },
  cover_group21_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 185,
    bottom: 598,
    minHeight: 29,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  txt20: {
    color: '#ffffffff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '900',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box20: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout14: {
    position: 'absolute',
    top: 0,
    marginTop: 555.86,
    height: 34,
    marginBottom: 222.14,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout15: {
    position: 'absolute',
    top: 0,
    marginTop: 521.62,
    height: 34,
    marginBottom: 256.38,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout16: {
    position: 'absolute',
    top: 0,
    marginTop: 487.39,
    height: 34,
    marginBottom: 290.61,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout17: {
    position: 'absolute',
    top: 0,
    marginTop: 453.16,
    height: 34,
    marginBottom: 324.84,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout18: {
    position: 'absolute',
    top: 0,
    marginTop: 418.93,
    height: 34,
    marginBottom: 359.07,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout19: {
    position: 'absolute',
    top: 0,
    marginTop: 384.69,
    height: 34,
    marginBottom: 393.31,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout20: {
    position: 'absolute',
    top: 0,
    marginTop: 350.46,
    height: 34,
    marginBottom: 427.54,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout21: {
    position: 'absolute',
    top: 0,
    marginTop: 316.23,
    height: 34,
    marginBottom: 461.77,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout22: {
    position: 'absolute',
    top: 0,
    marginTop: 281.99,
    height: 34,
    marginBottom: 496.01,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout23: {
    position: 'absolute',
    top: 0,
    marginTop: 247.76,
    height: 34,
    marginBottom: 530.24,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  cover_group22: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group22_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 213.53,
    bottom: 564.47,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  img9: {
    resizeMode: 'cover'
  },
  img9_layout: {
    marginTop: 7.47,
    height: 14,
    marginLeft: 18.17,
    width: 11,
    minWidth: 11
  },
  cover_group23: {
    width: '100%',
    backgroundColor: '#4f4f54ff'
  },
  cover_group23_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 185,
    bottom: 598,
    minHeight: 29,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  txt21: {
    color: '#ffffffff',
    textAlign: 'center',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '900',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box21: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group24: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group24_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 557.72,
    bottom: 220.28,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt22: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box22: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group25: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group25_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 523.49,
    bottom: 254.51,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt23: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box23: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group26: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group26_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 489.25,
    bottom: 288.75,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt24: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box24: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group27: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group27_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 455.02,
    bottom: 322.98,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt25: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box25: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group28: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group28_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 420.79,
    bottom: 357.21,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt26: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box26: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group29: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group29_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 386.56,
    bottom: 391.44,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt27: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box27: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group30: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group30_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 352.32,
    bottom: 425.68,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt28: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box28: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group31: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group31_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 318.09,
    bottom: 459.91,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt29: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box29: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group32: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group32_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 283.86,
    bottom: 494.14,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt30: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box30: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group33: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group33_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 249.62,
    bottom: 528.38,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt31: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box31: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group34: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group34_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 692.53,
    bottom: 85.47,
    minHeight: 34,
    left: 9,
    width: 67,
    minWidth: 67
  },
  txt32: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box32: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group35: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group35_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 661.8,
    bottom: 116.2,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt33: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box33: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group36: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group36_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 631.07,
    bottom: 146.93,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt34: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box34: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group37: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group37_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 592.88,
    bottom: 185.12,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt35: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box35: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group38: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group38_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 215.39,
    bottom: 562.61,
    minHeight: 34,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt36: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.23999999463558197,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box36: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group39: {
    width: '100%',
    backgroundColor: '#4f4f54ff'
  },
  cover_group39_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 186.86,
    bottom: 596.14,
    minHeight: 29,
    left: 7,
    width: 67,
    minWidth: 67
  },
  txt37: {
    color: '#ffffffff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '900',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box37: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group40: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group40_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 689.73,
    bottom: 88.27,
    minHeight: 34,
    left: 76,
    width: 138,
    minWidth: 138
  },
  txt38: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box38: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group41: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group41_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 586.37,
    bottom: 191.63,
    minHeight: 34,
    left: 73,
    width: 138,
    minWidth: 138
  },
  txt39: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box39: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group42: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group42_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 556.57,
    bottom: 221.43,
    minHeight: 34,
    left: 71,
    width: 138,
    minWidth: 138
  },
  txt40: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box40: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group43: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group43_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 620.82,
    bottom: 157.18,
    minHeight: 34,
    left: 74,
    width: 138,
    minWidth: 138
  },
  txt41: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box41: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group44: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group44_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 655.28,
    bottom: 122.72,
    minHeight: 34,
    left: 76,
    width: 138,
    minWidth: 138
  },
  txt42: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box42: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group45: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group45_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 521.62,
    bottom: 256.38,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt43: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box43: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group46: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group46_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 487.39,
    bottom: 290.61,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt44: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box44: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group47: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group47_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 453.16,
    bottom: 324.84,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt45: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box45: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group48: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group48_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 418.93,
    bottom: 359.07,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt46: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box46: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group49: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group49_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 384.69,
    bottom: 393.31,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt47: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box47: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group50: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group50_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 350.46,
    bottom: 427.54,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt48: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box48: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group51: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group51_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 316.23,
    bottom: 461.77,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt49: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box49: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group52: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group52_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 281.99,
    bottom: 496.01,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt50: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box50: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group53: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group53_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 247.76,
    bottom: 530.24,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt51: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box51: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group54: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group54_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 213.53,
    bottom: 564.47,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt52: {
    color: '#242427ff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box52: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group55: {
    width: '100%',
    backgroundColor: '#4f4f54ff'
  },
  cover_group55_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 185,
    bottom: 598,
    minHeight: 29,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt53: {
    color: '#ffffffff',
    textAlign: 'left',
    letterSpacing: -0.07999999821186066,
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '900',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box53: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout24: {
    position: 'absolute',
    top: 0,
    marginTop: 589.16,
    height: 34,
    marginBottom: 188.84,
    width: 52,
    minWidth: 52,
    right: 61
  },
  rect_layout25: {
    position: 'absolute',
    top: 0,
    marginTop: 621.75,
    height: 34,
    marginBottom: 156.25,
    width: 52,
    minWidth: 52,
    right: 59
  },
  cover_group56: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group56_layout: {
    position: 'absolute',
    top: 653.42,
    bottom: 124.58,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 61
  },
  highlights_box_layout2: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 8,
    flexGrow: 1,
    marginRight: 8
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 348,
    height: 14,
    marginBottom: 450,
    width: 11,
    minWidth: 11,
    right: 23
  },
  icon_layout4: {
    position: 'absolute',
    top: 0,
    marginTop: 212,
    height: 24,
    marginBottom: 576,
    width: 24,
    minWidth: 24,
    right: 74
  },
  line: {
    width: '100%',
    flexGrow: 1,
    borderStyle: 'solid',
    borderColor: '#9d27b1ff',
    borderWidth: 1
  },
  text_box_layout: {
    position: 'absolute',
    top: 96,
    bottom: 698,
    left: 19.58,
    flexGrow: 1,
    right: 19.58
  },
  text_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  field_box_layout: {
    position: 'absolute',
    top: 96,
    bottom: 698,
    left: 0,
    right: 0,
    width: 63.84,
    minWidth: 63.84,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  field_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group57: {
    width: '100%',
    backgroundColor: '#4db051ff',
    borderRadius: 3
  },
  cover_group57_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 142,
    bottom: 638,
    minHeight: 32,
    width: 130,
    minWidth: 130,
    right: 92
  },
  txt54: {
    color: '#ffffffff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 19.2,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  cover_group58: {
    width: '100%',
    backgroundColor: '#9d27b1ff',
    borderRadius: 14
  },
  cover_group58_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 96,
    bottom: 688,
    minHeight: 28,
    width: 46,
    minWidth: 46,
    right: 34
  },
  img10: {
    resizeMode: 'cover'
  },
  img10_layout: {
    marginTop: 2,
    height: 24,
    marginLeft: 20,
    width: 24,
    minWidth: 24
  },
  decorator_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 141.75,
    height: 21.25,
    marginBottom: 649,
    width: 18.08,
    minWidth: 18.08,
    right: 41.46
  }
});
