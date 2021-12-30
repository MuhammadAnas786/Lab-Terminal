/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function BudgetTableCalendar(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
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

      <View style={[styles.cover_group, styles.cover_group_layout1]}>
        <View
          style={[
            styles.small_text_body_wrap,
            styles.small_text_body_wrap_layout
          ]}>
          <ImageBackground
            style={[styles.cover_group2, styles.cover_group2_layout]}
            source={require('../assets/5645496f59165afda6a22685d5cf78cc.png')}
            resizeMode="contain"
          />
          <ImageBackground
            style={[styles.decorator, styles.decorator_layout]}
            source={require('../assets/489d486af7bffb092673c934602dce9c.png')}
          />
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
            style={[styles.decorator, styles.decorator_layout1]}
            source={require('../assets/f6a4efc925a34e827579849969295b5a.png')}
          />
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
            style={[styles.decorator, styles.decorator_layout2]}
            source={require('../assets/89efda88cc05005141e394ec4d4874fa.png')}
          />
          <ImageBackground
            style={[styles.decorator, styles.decorator_layout3]}
            source={require('../assets/061076dde5e19611addac70744a34661.png')}
          />
        </View>
      </View>

      <View style={[styles.budget_items_box, styles.budget_items_box_layout]}>
        <Text style={styles.budget_items} ellipsizeMode={'clip'}>
          {'Budget Items'}
        </Text>
      </View>

      <View style={[styles.group1, styles.group1_layout]}>
        <ImageBackground
          style={[styles.img, styles.img_layout]}
          source={require('../assets/ac97184e6a66e4167f740c9d6415d2ad.png')}
        />
      </View>

      <View style={[styles.group2, styles.group2_layout]}>
        <Px.View x="10fr 12fr 10fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt} ellipsizeMode={'clip'}>
            {'1'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group3, styles.group3_layout]}>
        <Px.View x="10fr 12fr 10fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt1} ellipsizeMode={'clip'}>
            {'2'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group4, styles.group4_layout]}>
        <Px.View x="8fr 16fr 8fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt2} ellipsizeMode={'clip'}>
            {'...'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group5, styles.group5_layout]}>
        <Px.View x="10fr 12fr 10fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt3} ellipsizeMode={'clip'}>
            {'9'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group6, styles.group6_layout]}>
        <Px.View x="6fr 20fr 6fr" y="5px 20fr 7fr" style={styles.txt_box}>
          <Text style={styles.txt4} ellipsizeMode={'clip'}>
            {'10'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.group7, styles.group7_layout]}>
        <ImageBackground
          style={[styles.img, styles.img_layout]}
          source={require('../assets/7d6577e8734070483fa95ad5a5e2b8ef.png')}
        />
      </View>

      <View style={[styles.rect, styles.rect_layout]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'44.1'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout1]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout1]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'44.1'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout2]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout2]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'69.0'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout3]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout3]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'85.0'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout4]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout4]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'95.9'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout5]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout5]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'33.0'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout6]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout6]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'39.9'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout7]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout7]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'47.6'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout8]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout8]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'66.4'}
        </Text>
      </View>
      <View style={[styles.cover_group3, styles.cover_group3_layout]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout9]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'40.1'}
        </Text>
      </View>
      <View style={[styles.highlights_box, styles.highlights_box_layout10]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'40.1'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout9]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout11]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'40.1'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout10]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout12]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'40.1'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout11]} />
      <View style={[styles.rect, styles.rect_layout12]} />

      <View style={[styles.cover_group4, styles.cover_group4_layout]}>
        <ImageBackground
          style={[styles.decorator, styles.decorator_layout4]}
          source={require('../assets/99bb30b9a865bf6d4dabbf65ce632760.png')}
        />
      </View>

      <View style={[styles.rect, styles.rect_layout13]} />
      <View style={[styles.rect, styles.rect_layout14]} />
      <View style={[styles.rect, styles.rect_layout15]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout13]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'40.1'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout16]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout14]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'40.1'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout17]} />
      <View style={[styles.highlights_box, styles.highlights_box_layout15]}>
        <Text style={styles.highlights} ellipsizeMode={'clip'}>
          {'93.9'}
        </Text>
      </View>

      <View style={[styles.cover_group5, styles.cover_group5_layout]}>
        <View style={[styles.price_box, styles.price_box_layout]}>
          <Text style={styles.price} ellipsizeMode={'clip'}>
            {'Price'}
          </Text>
        </View>
      </View>

      <View style={[styles.cover_group6, styles.cover_group6_layout]}>
        <ImageBackground
          style={[styles.decorator, styles.decorator_layout5]}
          source={require('../assets/7415c20c49a0b5720d85c265ff11a81f.png')}
        />
      </View>

      <View style={[styles.rect, styles.rect_layout18]} />
      <View style={[styles.rect, styles.rect_layout19]} />
      <View style={[styles.rect, styles.rect_layout20]} />
      <View style={[styles.rect, styles.rect_layout21]} />
      <View style={[styles.rect, styles.rect_layout22]} />
      <View style={[styles.rect, styles.rect_layout23]} />
      <View style={[styles.rect, styles.rect_layout24]} />

      <View style={[styles.cover_group7, styles.cover_group7_layout]}>
        <ImageBackground
          style={[styles.decorator, styles.decorator_layout6]}
          source={require('../assets/31537c78d760b4174fb79a6a61198f06.png')}
        />
      </View>

      <View style={[styles.rect, styles.rect_layout25]} />
      <View style={[styles.rect, styles.rect_layout26]} />
      <View style={[styles.rect27, styles.rect27_layout]} />
      <View style={[styles.image_box, styles.image_box_layout]}>
        <Text style={styles.image} ellipsizeMode={'clip'}>
          {'image'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout27]} />
      <View style={[styles.rect, styles.rect_layout28]} />
      <View style={[styles.rect, styles.rect_layout29]} />
      <View style={[styles.rect, styles.rect_layout30]} />
      <View style={[styles.rect, styles.rect_layout31]} />
      <View style={[styles.rect, styles.rect_layout32]} />
      <View style={[styles.rect, styles.rect_layout33]} />
      <View style={[styles.rect, styles.rect_layout34]} />
      <View style={[styles.rect, styles.rect_layout35]} />
      <View style={[styles.rect, styles.rect_layout36]} />

      <View style={[styles.cover_group8, styles.cover_group8_layout]}>
        <ImageBackground
          style={[styles.decorator, styles.decorator_layout7]}
          source={require('../assets/99bb30b9a865bf6d4dabbf65ce632760.png')}
        />
      </View>

      <View style={[styles.cover_group9, styles.cover_group9_layout]}>
        <View style={[styles.audio_box, styles.audio_box_layout]}>
          <Text style={styles.audio} ellipsizeMode={'clip'}>
            {'audio'}
          </Text>
        </View>
      </View>

      <View style={[styles.rect, styles.rect_layout37]} />
      <View style={[styles.jopa_box, styles.jopa_box_layout]}>
        <Text style={styles.jopa} ellipsizeMode={'clip'}>
          {'JOPA'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout38]} />
      <View style={[styles.alto_box, styles.alto_box_layout]}>
        <Text style={styles.alto} ellipsizeMode={'clip'}>
          {'ALTO'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout39]} />
      <View style={[styles.hban_box, styles.hban_box_layout]}>
        <Text style={styles.hban} ellipsizeMode={'clip'}>
          {'HBAN'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout40]} />
      <View style={[styles.fhn_box, styles.fhn_box_layout]}>
        <Text style={styles.fhn} ellipsizeMode={'clip'}>
          {'FHN'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout41]} />
      <View style={[styles.mus_box, styles.mus_box_layout]}>
        <Text style={styles.mus} ellipsizeMode={'clip'}>
          {'MUS'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout42]} />
      <View style={[styles.ati_box, styles.ati_box_layout]}>
        <Text style={styles.ati} ellipsizeMode={'clip'}>
          {'ATI'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout43]} />
      <View style={[styles.altr_box, styles.altr_box_layout]}>
        <Text style={styles.altr} ellipsizeMode={'clip'}>
          {'ALTR'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout44]} />
      <View style={[styles.lsi_box, styles.lsi_box_layout]}>
        <Text style={styles.lsi} ellipsizeMode={'clip'}>
          {'LSI'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout45]} />
      <View style={[styles.fhn_box, styles.fhn_box_layout1]}>
        <Text style={styles.fhn} ellipsizeMode={'clip'}>
          {'FHN'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout46]} />
      <View style={[styles.mu_box, styles.mu_box_layout]}>
        <Text style={styles.mu} ellipsizeMode={'clip'}>
          {'MU'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout47]} />
      <View style={[styles.mu_box, styles.mu_box_layout1]}>
        <Text style={styles.mu} ellipsizeMode={'clip'}>
          {'MU'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout48]} />
      <View style={[styles.mu_box, styles.mu_box_layout2]}>
        <Text style={styles.mu} ellipsizeMode={'clip'}>
          {'MU'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout49]} />
      <View style={[styles.mu_box, styles.mu_box_layout3]}>
        <Text style={styles.mu} ellipsizeMode={'clip'}>
          {'MU'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout50]} />
      <View style={[styles.mu_box, styles.mu_box_layout4]}>
        <Text style={styles.mu} ellipsizeMode={'clip'}>
          {'MU'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout51]} />
      <View style={[styles.akam_box, styles.akam_box_layout]}>
        <Text style={styles.akam} ellipsizeMode={'clip'}>
          {'AKAM'}
        </Text>
      </View>
      <View style={[styles.rect53, styles.rect53_layout]} />
      <View style={[styles.type_box, styles.type_box_layout]}>
        <Text style={styles.type} ellipsizeMode={'clip'}>
          {'Type'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout52]} />
      <View style={[styles.jopa_telecom_box, styles.jopa_telecom_box_layout]}>
        <Text style={styles.jopa_telecom} ellipsizeMode={'clip'}>
          {'Jopa Telecom'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout53]} />
      <View style={[styles.jopa_telecom_box, styles.jopa_telecom_box_layout1]}>
        <Text style={styles.jopa_telecom} ellipsizeMode={'clip'}>
          {'Jopa Telecom'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout54]} />
      <View style={[styles.jopa_telecom_box, styles.jopa_telecom_box_layout2]}>
        <Text style={styles.jopa_telecom} ellipsizeMode={'clip'}>
          {'Jopa Telecom'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout55]} />
      <View style={[styles.jopa_telecom_box, styles.jopa_telecom_box_layout3]}>
        <Text style={styles.jopa_telecom} ellipsizeMode={'clip'}>
          {'Jopa Telecom'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout56]} />
      <View style={[styles.jopa_telecom_box, styles.jopa_telecom_box_layout4]}>
        <Text style={styles.jopa_telecom} ellipsizeMode={'clip'}>
          {'Jopa Telecom'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout57]} />
      <View style={[styles.altolandia_box, styles.altolandia_box_layout]}>
        <Text style={styles.altolandia} ellipsizeMode={'clip'}>
          {'Altolandia'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout58]} />
      <View
        style={[
          styles.huntington_banschare_box,
          styles.huntington_banschare_box_layout
        ]}>
        <Text style={styles.huntington_banschare} ellipsizeMode={'clip'}>
          {'Huntington Banschare'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout59]} />
      <View style={[styles.first_horizon_box, styles.first_horizon_box_layout]}>
        <Text style={styles.first_horizon} ellipsizeMode={'clip'}>
          {'First Horizon'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout60]} />
      <View
        style={[
          styles.musa_corporation_box,
          styles.musa_corporation_box_layout
        ]}>
        <Text style={styles.musa_corporation} ellipsizeMode={'clip'}>
          {'MUSA Corporation'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout61]} />
      <View style={[styles.allegheny_box, styles.allegheny_box_layout]}>
        <Text style={styles.allegheny} ellipsizeMode={'clip'}>
          {'Allegheny'}
        </Text>
      </View>
      <View style={[styles.rect, styles.rect_layout62]} />
      <View style={[styles.altera_box, styles.altera_box_layout]}>
        <Text style={styles.altera} ellipsizeMode={'clip'}>
          {'Altera'}
        </Text>
      </View>

      <View style={[styles.cover_group10, styles.cover_group10_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 111fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box5}>
          <Text style={styles.txt5} ellipsizeMode={'clip'}>
            {'LSI'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group11, styles.cover_group11_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 56fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box6}>
          <Text style={styles.txt6} ellipsizeMode={'clip'}>
            {'First Horizon'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group12, styles.cover_group12_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 90fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box7}>
          <Text style={styles.txt7} ellipsizeMode={'clip'}>
            {'Micron'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group13, styles.cover_group13_layout]}>
        <Px.View
          x="8px minmax(0px, max-content) 7fr"
          y="8px minmax(0px, max-content) 8fr"
          style={styles.txt_box8}>
          <Text style={styles.txt8} ellipsizeMode={'clip'}>
            {'Akamai Technologies'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group14, styles.cover_group14_layout]}>
        <Px.View x="8px 122fr 8fr" y="4px 21fr 4fr" style={styles.txt_box9}>
          <Text style={styles.txt9} ellipsizeMode={'clip'}>
            {'Name'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.rect, styles.rect_layout63]} />
      <View style={[styles.rect, styles.rect_layout64]} />

      <View style={[styles.cover_group15, styles.cover_group15_layout]}>
        <View style={[styles.highlights_box, styles.highlights_box_layout16]}>
          <Text style={styles.highlights} ellipsizeMode={'clip'}>
            {'40.1'}
          </Text>
        </View>
        <View style={[styles.rect, styles.rect_layout65]} />
      </View>

      <ImageBackground
        style={[styles.decorator, styles.decorator_layout8]}
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

      <View style={[styles.cover_group16, styles.cover_group16_layout]}>
        <Px.View
          x="19.58fr minmax(0px, max-content) 20.42fr"
          y="7px minmax(0px, max-content) 6fr"
          style={styles.txt_box}>
          <Text style={styles.txt10} ellipsizeMode={'clip'}>
            {'Search'}
          </Text>
        </Px.View>
      </View>

      <View style={[styles.cover_group17, styles.cover_group17_layout]}>
        <ImageBackground
          style={[styles.img, styles.img_layout2]}
          source={require('../assets/72fe021509f7560bc461104c76241cf0.png')}
        />
      </View>

      <ImageBackground
        style={[styles.decorator, styles.decorator_layout9]}
        source={require('../assets/4b1b65ffb00d157200f769f541738572.png')}
      />
      <View style={[styles.rect68, styles.rect68_layout]} />
      <View style={[styles.start_date_box, styles.start_date_box_layout]}>
        <Text style={styles.start_date} ellipsizeMode={'clip'}>
          {'Start Date'}
        </Text>
      </View>
      <View style={[styles.rect69, styles.rect69_layout]} />
      <View style={[styles.end_date_box, styles.end_date_box_layout]}>
        <Text style={styles.end_date} ellipsizeMode={'clip'}>
          {'end Date'}
        </Text>
      </View>

      <View style={[styles.cover_group_wrap, styles.cover_group_wrap_layout]}>
        <View style={[styles.group8, styles.group8_layout]} />

        <View style={[styles.cover_group18, styles.cover_group18_layout]}>
          <View style={styles.cover_group18_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'19'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group18_space} />
          <View style={styles.cover_group18_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'20'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group18_space} />
          <View style={styles.cover_group18_col2}>
            <ImageBackground
              style={[styles.cover_group19, styles.cover_group19_layout]}
              source={require('../assets/2508bb7a4f010e06e405951b8a22b7e5.png')}
              resizeMode="cover">
              <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                  {'21'}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={[styles.cover_group20, styles.cover_group20_layout]}>
          <View style={styles.cover_group20_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'12'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group20_space} />
          <View style={styles.cover_group20_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'13'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group20_space} />
          <View style={styles.cover_group20_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'14'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group20_space} />
          <View style={styles.cover_group20_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'15'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group20_space} />
          <View style={styles.cover_group20_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'16'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group20_space} />
          <View style={styles.cover_group20_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'17'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group20_space} />
          <View style={styles.cover_group20_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'18'}
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.cover_group21, styles.cover_group21_layout]}>
          <View style={styles.cover_group21_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'5'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group21_space} />
          <View style={styles.cover_group21_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'6'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group21_space} />
          <View style={styles.cover_group21_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'7'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group21_space} />
          <View style={styles.cover_group21_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'8'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group21_space} />
          <View style={styles.cover_group21_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'9'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group21_space} />
          <View style={styles.cover_group21_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'10'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group21_space} />
          <View style={styles.cover_group21_col}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'11'}
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.cover_group22, styles.cover_group22_layout]}>
          <View style={styles.cover_group22_col}>
            <ImageBackground
              style={[styles.cover_group23, styles.cover_group23_layout]}
              source={require('../assets/2508bb7a4f010e06e405951b8a22b7e5.png')}
              resizeMode="cover">
              <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                  {'2'}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.cover_group22_space} />
          <View style={styles.cover_group22_col1}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'3'}
              </Text>
            </View>
          </View>
          <View style={styles.cover_group22_space} />
          <View style={styles.cover_group22_col2}>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'4'}
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.text_body_box, styles.text_body_box_layout20]}>
          <Text style={styles.text_body20} ellipsizeMode={'clip'}>
            {'1'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout21]}>
          <Text style={styles.text_body21} ellipsizeMode={'clip'}>
            {'31'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout22]}>
          <Text style={styles.text_body22} ellipsizeMode={'clip'}>
            {'30'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout23]}>
          <Text style={styles.text_body23} ellipsizeMode={'clip'}>
            {'29'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout24]}>
          <Text style={styles.text_body24} ellipsizeMode={'clip'}>
            {'28'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout25]}>
          <Text style={styles.text_body25} ellipsizeMode={'clip'}>
            {'27'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout26]}>
          <Text style={styles.text_body26} ellipsizeMode={'clip'}>
            {'26'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout27]}>
          <Text style={styles.text_body27} ellipsizeMode={'clip'}>
            {'25'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout28]}>
          <Text style={styles.text_body28} ellipsizeMode={'clip'}>
            {'24'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout29]}>
          <Text style={styles.text_body29} ellipsizeMode={'clip'}>
            {'23'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout30]}>
          <Text style={styles.text_body30} ellipsizeMode={'clip'}>
            {'22'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout31]}>
          <Text style={styles.text_body31} ellipsizeMode={'clip'}>
            {'1'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout32]}>
          <Text style={styles.text_body32} ellipsizeMode={'clip'}>
            {'30'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout33]}>
          <Text style={styles.text_body33} ellipsizeMode={'clip'}>
            {'29'}
          </Text>
        </View>
        <View style={[styles.text_body_box, styles.text_body_box_layout34]}>
          <Text style={styles.text_body34} ellipsizeMode={'clip'}>
            {'28'}
          </Text>
        </View>
        <View style={[styles.sat_box, styles.sat_box_layout]}>
          <Text style={styles.sat} ellipsizeMode={'clip'}>
            {'SAT'}
          </Text>
        </View>
        <View style={[styles.fri_box, styles.fri_box_layout]}>
          <Text style={styles.fri} ellipsizeMode={'clip'}>
            {'FRI'}
          </Text>
        </View>
        <View style={[styles.thu_box, styles.thu_box_layout]}>
          <Text style={styles.thu} ellipsizeMode={'clip'}>
            {'THU'}
          </Text>
        </View>
        <View style={[styles.wed_box, styles.wed_box_layout]}>
          <Text style={styles.wed} ellipsizeMode={'clip'}>
            {'WED'}
          </Text>
        </View>
        <View style={[styles.tue_box, styles.tue_box_layout]}>
          <Text style={styles.tue} ellipsizeMode={'clip'}>
            {'TUE'}
          </Text>
        </View>
        <View style={[styles.mon_box, styles.mon_box_layout]}>
          <Text style={styles.mon} ellipsizeMode={'clip'}>
            {'MON'}
          </Text>
        </View>
        <View style={[styles.sun_box, styles.sun_box_layout]}>
          <Text style={styles.sun} ellipsizeMode={'clip'}>
            {'SUN'}
          </Text>
        </View>
        <View style={[styles.highlights_box17, styles.highlights_box17_layout]}>
          <Text style={styles.highlights17} ellipsizeMode={'clip'}>
            {'May 2019'}
          </Text>
        </View>
        <ImageBackground
          style={[styles.decorator, styles.decorator_layout10]}
          source={require('../assets/269cde8cc354152617cd7d61c517d32f.png')}
        />
        <ImageBackground
          style={[styles.decorator, styles.decorator_layout11]}
          source={require('../assets/1bdb8971371aff46ac46f7f10c8a4bfd.png')}
        />
      </View>
    </View>
  );
}

BudgetTableCalendar.inStorybook = true;
BudgetTableCalendar.fitScreen = false;
BudgetTableCalendar.scrollHeight = 812;

const styles = StyleSheet.create({
  group: {
    width: '100%',
    backgroundColor: '#f3efefff',
    borderRadius: 10,
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
  cover_group: {
    width: '100%',
    backgroundColor: '#ffffffff'
  },
  cover_group_layout: {
    position: 'absolute',
    top: 763,
    bottom: 0,
    minHeight: 49,
    left: 0,
    flexGrow: 1,
    right: 0
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
  cover_group_layout1: {
    position: 'absolute',
    top: 0,
    bottom: 748,
    minHeight: 64,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  small_text_body_wrap: {
    width: '100%'
  },
  small_text_body_wrap_layout: {
    overflow: 'visible',
    marginTop: 3.5,
    marginBottom: 3.5,
    minHeight: 57,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group2: {
    width: '100%',
    backgroundColor: '#000000ff',
    borderRadius: 0.5
  },
  cover_group2_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 1,
    bottom: 44.5,
    minHeight: 11.5,
    width: 24,
    minWidth: 24,
    right: 8
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 5,
    height: 3.87,
    marginBottom: 48.13,
    width: 1.5,
    minWidth: 1.5,
    right: 5.5
  },
  small_text_body_box_layout: {
    position: 'absolute',
    top: 0,
    bottom: 43,
    left: 35,
    flexGrow: 1,
    right: 35
  },
  small_text_body_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  decorator_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 1.5,
    height: 10,
    marginBottom: 45.5,
    width: 6,
    minWidth: 6,
    right: 70.5
  },
  small_text_body_box1_layout: {
    marginTop: 0,
    marginBottom: 43,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  freebie_box_layout: {
    position: 'absolute',
    top: 0,
    bottom: 43,
    left: 26,
    flexGrow: 1,
    right: 26
  },
  freebie_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  decorator_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 1.5,
    height: 10,
    marginBottom: 45.5,
    left: 6,
    width: 16.5,
    minWidth: 16.5
  },
  decorator_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 1.5,
    height: 10,
    marginBottom: 45.5,
    left: 71.33,
    width: 14.34,
    minWidth: 14.34
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
  group1: {
    width: '100%',
    backgroundColor: '#929facff',
    borderRadius: 4
  },
  group1_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    left: 99,
    width: 32,
    minWidth: 32
  },
  img: {
    resizeMode: 'cover'
  },
  img_layout: {
    marginTop: 4,
    height: 24,
    marginLeft: 4,
    width: 24,
    minWidth: 24
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
  group7: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 4
  },
  group7_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 731,
    bottom: 49,
    minHeight: 32,
    width: 32,
    minWidth: 32,
    right: 4
  },
  rect: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 551.91,
    height: 34,
    marginBottom: 226.09,
    width: 52,
    minWidth: 52,
    right: 111
  },
  highlights_box_layout: {
    position: 'absolute',
    top: 555.91,
    bottom: 237.09,
    left: 0,
    right: 0,
    width: 137,
    minWidth: 137,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rect_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 521.62,
    height: 34,
    marginBottom: 256.38,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout1: {
    position: 'absolute',
    top: 525.62,
    bottom: 267.38,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 487.39,
    height: 34,
    marginBottom: 290.61,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout2: {
    position: 'absolute',
    top: 491.39,
    bottom: 301.61,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout3: {
    position: 'absolute',
    top: 0,
    marginTop: 453.16,
    height: 34,
    marginBottom: 324.84,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout3: {
    position: 'absolute',
    top: 457.16,
    bottom: 335.84,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout4: {
    position: 'absolute',
    top: 0,
    marginTop: 418.93,
    height: 34,
    marginBottom: 359.07,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout4: {
    position: 'absolute',
    top: 422.93,
    bottom: 370.07,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout5: {
    position: 'absolute',
    top: 0,
    marginTop: 384.69,
    height: 34,
    marginBottom: 393.31,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout5: {
    position: 'absolute',
    top: 388.69,
    bottom: 404.31,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout6: {
    position: 'absolute',
    top: 0,
    marginTop: 350.46,
    height: 34,
    marginBottom: 427.54,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout6: {
    position: 'absolute',
    top: 354.46,
    bottom: 438.54,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout7: {
    position: 'absolute',
    top: 0,
    marginTop: 316.23,
    height: 34,
    marginBottom: 461.77,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout7: {
    position: 'absolute',
    top: 320.23,
    bottom: 472.77,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout8: {
    position: 'absolute',
    top: 0,
    marginTop: 281.99,
    height: 34,
    marginBottom: 496.01,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout8: {
    position: 'absolute',
    top: 285.99,
    bottom: 507.01,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cover_group3: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group3_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 247.76,
    height: 34,
    marginBottom: 530.24,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout9: {
    position: 'absolute',
    top: 251.76,
    bottom: 541.24,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  highlights_box_layout10: {
    position: 'absolute',
    top: 251.76,
    bottom: 541.24,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout9: {
    position: 'absolute',
    top: 0,
    marginTop: 655.28,
    height: 34,
    marginBottom: 122.72,
    width: 52,
    minWidth: 52,
    right: 109
  },
  highlights_box_layout11: {
    position: 'absolute',
    top: 659.28,
    bottom: 133.72,
    left: 0,
    right: 0,
    width: 141,
    minWidth: 141,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout10: {
    position: 'absolute',
    top: 0,
    marginTop: 686.01,
    height: 34,
    marginBottom: 91.99,
    width: 52,
    minWidth: 52,
    right: 111
  },
  highlights_box_layout12: {
    position: 'absolute',
    top: 690.01,
    bottom: 102.99,
    left: 0,
    right: 0,
    width: 137,
    minWidth: 137,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout11: {
    position: 'absolute',
    top: 0,
    marginTop: 687.87,
    height: 34,
    marginBottom: 90.13,
    width: 52,
    minWidth: 52,
    right: 9
  },
  rect_layout12: {
    position: 'absolute',
    top: 0,
    marginTop: 661.8,
    height: 34,
    marginBottom: 116.2,
    width: 52,
    minWidth: 52,
    right: 9
  },
  cover_group4: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group4_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 591.95,
    height: 34,
    marginBottom: 186.05,
    width: 52,
    minWidth: 52,
    right: 8
  },
  decorator_layout4: {
    marginTop: 0.05,
    height: 14,
    marginBottom: 19.95,
    marginLeft: 'auto',
    width: 11,
    minWidth: 11,
    marginRight: 15
  },
  rect_layout13: {
    position: 'absolute',
    top: 0,
    marginTop: 687.87,
    height: 34,
    marginBottom: 90.13,
    width: 52,
    minWidth: 52,
    right: 60
  },
  rect_layout14: {
    position: 'absolute',
    top: 0,
    marginTop: 628.27,
    height: 34,
    marginBottom: 149.73,
    width: 52,
    minWidth: 52,
    right: 10
  },
  rect_layout15: {
    position: 'absolute',
    top: 0,
    marginTop: 624.55,
    height: 34,
    marginBottom: 153.45,
    width: 52,
    minWidth: 52,
    right: 111
  },
  highlights_box_layout13: {
    position: 'absolute',
    top: 628.55,
    bottom: 157.45,
    left: 0,
    right: 0,
    width: 137,
    minWidth: 137,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout16: {
    position: 'absolute',
    top: 0,
    marginTop: 591.02,
    height: 34,
    marginBottom: 186.98,
    width: 52,
    minWidth: 52,
    right: 112
  },
  highlights_box_layout14: {
    position: 'absolute',
    top: 595.02,
    bottom: 190.98,
    left: 0,
    right: 0,
    width: 135,
    minWidth: 135,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rect_layout17: {
    position: 'absolute',
    top: 0,
    marginTop: 213.53,
    height: 34,
    marginBottom: 564.47,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  highlights_box_layout15: {
    position: 'absolute',
    top: 217.53,
    bottom: 568.47,
    left: 0,
    right: 0,
    width: 137.96,
    minWidth: 137.96,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cover_group5: {
    width: '100%',
    backgroundColor: '#4f4f54ff'
  },
  cover_group5_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 185,
    bottom: 598,
    minHeight: 29,
    width: 52,
    minWidth: 52,
    right: 110.52
  },
  price_box_layout: {
    marginTop: 5,
    marginBottom: 6,
    marginLeft: 'auto',
    width: 31,
    minWidth: 31,
    marginRight: 10
  },
  price_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group6: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group6_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 555.86,
    height: 34,
    marginBottom: 222.14,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  decorator_layout5: {
    marginTop: 3.5,
    height: 22.35,
    marginBottom: 8.15,
    marginLeft: 'auto',
    width: 24,
    minWidth: 24,
    marginRight: 19.65
  },
  rect_layout18: {
    position: 'absolute',
    top: 0,
    marginTop: 521.62,
    height: 34,
    marginBottom: 256.38,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout19: {
    position: 'absolute',
    top: 0,
    marginTop: 487.39,
    height: 34,
    marginBottom: 290.61,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout20: {
    position: 'absolute',
    top: 0,
    marginTop: 453.16,
    height: 34,
    marginBottom: 324.84,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout21: {
    position: 'absolute',
    top: 0,
    marginTop: 418.93,
    height: 34,
    marginBottom: 359.07,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout22: {
    position: 'absolute',
    top: 0,
    marginTop: 384.69,
    height: 34,
    marginBottom: 393.31,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout23: {
    position: 'absolute',
    top: 0,
    marginTop: 350.46,
    height: 34,
    marginBottom: 427.54,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout24: {
    position: 'absolute',
    top: 0,
    marginTop: 316.23,
    height: 34,
    marginBottom: 461.77,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  cover_group7: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group7_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 281.99,
    height: 34,
    marginBottom: 496.01,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  decorator_layout6: {
    marginTop: 1.72,
    height: 22.35,
    marginBottom: 9.93,
    marginLeft: 'auto',
    width: 24,
    minWidth: 24,
    marginRight: 12.65
  },
  rect_layout25: {
    position: 'absolute',
    top: 0,
    marginTop: 247.76,
    height: 34,
    marginBottom: 530.24,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect_layout26: {
    position: 'absolute',
    top: 0,
    marginTop: 213.53,
    height: 34,
    marginBottom: 564.47,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  rect27: {
    width: '100%',
    backgroundColor: '#4f4f54ff',
    borderRadius: 1
  },
  rect27_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 185,
    height: 29,
    marginBottom: 598,
    width: 52,
    minWidth: 52,
    right: 58.35
  },
  image_box_layout: {
    position: 'absolute',
    top: 189,
    bottom: 602,
    left: 66.35,
    flexGrow: 1,
    right: 66.35
  },
  image_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rect_layout27: {
    position: 'absolute',
    top: 0,
    marginTop: 555.86,
    height: 34,
    marginBottom: 222.14,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout28: {
    position: 'absolute',
    top: 0,
    marginTop: 521.62,
    height: 34,
    marginBottom: 256.38,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout29: {
    position: 'absolute',
    top: 0,
    marginTop: 487.39,
    height: 34,
    marginBottom: 290.61,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout30: {
    position: 'absolute',
    top: 0,
    marginTop: 453.16,
    height: 34,
    marginBottom: 324.84,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout31: {
    position: 'absolute',
    top: 0,
    marginTop: 418.93,
    height: 34,
    marginBottom: 359.07,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout32: {
    position: 'absolute',
    top: 0,
    marginTop: 384.69,
    height: 34,
    marginBottom: 393.31,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout33: {
    position: 'absolute',
    top: 0,
    marginTop: 350.46,
    height: 34,
    marginBottom: 427.54,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout34: {
    position: 'absolute',
    top: 0,
    marginTop: 316.23,
    height: 34,
    marginBottom: 461.77,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout35: {
    position: 'absolute',
    top: 0,
    marginTop: 281.99,
    height: 34,
    marginBottom: 496.01,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  rect_layout36: {
    position: 'absolute',
    top: 0,
    marginTop: 247.76,
    height: 34,
    marginBottom: 530.24,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  cover_group8: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group8_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 213.53,
    height: 34,
    marginBottom: 564.47,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  decorator_layout7: {
    marginTop: 7.47,
    height: 14,
    marginBottom: 12.53,
    marginLeft: 'auto',
    width: 11,
    minWidth: 11,
    marginRight: 22.83
  },
  cover_group9: {
    width: '100%',
    backgroundColor: '#4f4f54ff'
  },
  cover_group9_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 185,
    bottom: 598,
    minHeight: 29,
    width: 52,
    minWidth: 52,
    right: 6.17
  },
  audio_box_layout: {
    marginTop: 5,
    marginBottom: 6,
    marginLeft: 'auto',
    width: 33,
    minWidth: 33,
    marginRight: 9
  },
  audio_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rect_layout37: {
    position: 'absolute',
    top: 0,
    marginTop: 557.72,
    height: 34,
    marginBottom: 220.28,
    left: 7,
    width: 67,
    minWidth: 67
  },
  jopa_box_layout: {
    position: 'absolute',
    top: 561.72,
    bottom: 224.28,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  jopa_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout38: {
    position: 'absolute',
    top: 0,
    marginTop: 523.49,
    height: 34,
    marginBottom: 254.51,
    left: 7,
    width: 67,
    minWidth: 67
  },
  alto_box_layout: {
    position: 'absolute',
    top: 527.49,
    bottom: 258.51,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  alto_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout39: {
    position: 'absolute',
    top: 0,
    marginTop: 489.25,
    height: 34,
    marginBottom: 288.75,
    left: 7,
    width: 67,
    minWidth: 67
  },
  hban_box_layout: {
    position: 'absolute',
    top: 493.25,
    bottom: 292.75,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  hban_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout40: {
    position: 'absolute',
    top: 0,
    marginTop: 455.02,
    height: 34,
    marginBottom: 322.98,
    left: 7,
    width: 67,
    minWidth: 67
  },
  fhn_box_layout: {
    position: 'absolute',
    top: 459.02,
    bottom: 326.98,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  fhn_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout41: {
    position: 'absolute',
    top: 0,
    marginTop: 420.79,
    height: 34,
    marginBottom: 357.21,
    left: 7,
    width: 67,
    minWidth: 67
  },
  mus_box_layout: {
    position: 'absolute',
    top: 424.79,
    bottom: 361.21,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  mus_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout42: {
    position: 'absolute',
    top: 0,
    marginTop: 386.56,
    height: 34,
    marginBottom: 391.44,
    left: 7,
    width: 67,
    minWidth: 67
  },
  ati_box_layout: {
    position: 'absolute',
    top: 390.56,
    bottom: 395.44,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  ati_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout43: {
    position: 'absolute',
    top: 0,
    marginTop: 352.32,
    height: 34,
    marginBottom: 425.68,
    left: 7,
    width: 67,
    minWidth: 67
  },
  altr_box_layout: {
    position: 'absolute',
    top: 356.32,
    bottom: 429.68,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  altr_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout44: {
    position: 'absolute',
    top: 0,
    marginTop: 318.09,
    height: 34,
    marginBottom: 459.91,
    left: 7,
    width: 67,
    minWidth: 67
  },
  lsi_box_layout: {
    position: 'absolute',
    top: 322.09,
    bottom: 463.91,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  lsi_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout45: {
    position: 'absolute',
    top: 0,
    marginTop: 283.86,
    height: 34,
    marginBottom: 494.14,
    left: 7,
    width: 67,
    minWidth: 67
  },
  fhn_box_layout1: {
    position: 'absolute',
    top: 287.86,
    bottom: 498.14,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  rect_layout46: {
    position: 'absolute',
    top: 0,
    marginTop: 249.62,
    height: 34,
    marginBottom: 528.38,
    left: 7,
    width: 67,
    minWidth: 67
  },
  mu_box_layout: {
    position: 'absolute',
    top: 253.62,
    bottom: 532.38,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  mu_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout47: {
    position: 'absolute',
    top: 0,
    marginTop: 692.53,
    height: 34,
    marginBottom: 85.47,
    left: 9,
    width: 67,
    minWidth: 67
  },
  mu_box_layout1: {
    position: 'absolute',
    top: 696.53,
    bottom: 89.47,
    left: 17,
    flexGrow: 1,
    right: 17
  },
  rect_layout48: {
    position: 'absolute',
    top: 0,
    marginTop: 661.8,
    height: 34,
    marginBottom: 116.2,
    left: 7,
    width: 67,
    minWidth: 67
  },
  mu_box_layout2: {
    position: 'absolute',
    top: 665.8,
    bottom: 120.2,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  rect_layout49: {
    position: 'absolute',
    top: 0,
    marginTop: 631.07,
    height: 34,
    marginBottom: 146.93,
    left: 7,
    width: 67,
    minWidth: 67
  },
  mu_box_layout3: {
    position: 'absolute',
    top: 635.07,
    bottom: 150.93,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  rect_layout50: {
    position: 'absolute',
    top: 0,
    marginTop: 592.88,
    height: 34,
    marginBottom: 185.12,
    left: 7,
    width: 67,
    minWidth: 67
  },
  mu_box_layout4: {
    position: 'absolute',
    top: 596.88,
    bottom: 189.12,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  rect_layout51: {
    position: 'absolute',
    top: 0,
    marginTop: 215.39,
    height: 34,
    marginBottom: 562.61,
    left: 7,
    width: 67,
    minWidth: 67
  },
  akam_box_layout: {
    position: 'absolute',
    top: 219.39,
    bottom: 566.61,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  akam_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect53: {
    width: '100%',
    backgroundColor: '#4f4f54ff'
  },
  rect53_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 186.86,
    height: 29,
    marginBottom: 596.14,
    left: 7,
    width: 67,
    minWidth: 67
  },
  type_box_layout: {
    position: 'absolute',
    top: 190.86,
    bottom: 600.14,
    left: 15,
    flexGrow: 1,
    right: 15
  },
  type_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout52: {
    position: 'absolute',
    top: 0,
    marginTop: 689.73,
    height: 34,
    marginBottom: 88.27,
    left: 76,
    width: 138,
    minWidth: 138
  },
  jopa_telecom_box_layout: {
    position: 'absolute',
    top: 697.73,
    bottom: 96.27,
    left: 84,
    flexGrow: 1,
    right: 84
  },
  jopa_telecom_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout53: {
    position: 'absolute',
    top: 0,
    marginTop: 586.37,
    height: 34,
    marginBottom: 191.63,
    left: 73,
    width: 138,
    minWidth: 138
  },
  jopa_telecom_box_layout1: {
    position: 'absolute',
    top: 594.37,
    bottom: 199.63,
    left: 81,
    flexGrow: 1,
    right: 81
  },
  rect_layout54: {
    position: 'absolute',
    top: 0,
    marginTop: 556.57,
    height: 34,
    marginBottom: 221.43,
    left: 71,
    width: 138,
    minWidth: 138
  },
  jopa_telecom_box_layout2: {
    position: 'absolute',
    top: 564.57,
    bottom: 229.43,
    left: 79,
    flexGrow: 1,
    right: 79
  },
  rect_layout55: {
    position: 'absolute',
    top: 0,
    marginTop: 620.82,
    height: 34,
    marginBottom: 157.18,
    left: 74,
    width: 138,
    minWidth: 138
  },
  jopa_telecom_box_layout3: {
    position: 'absolute',
    top: 628.82,
    bottom: 165.18,
    left: 82,
    flexGrow: 1,
    right: 82
  },
  rect_layout56: {
    position: 'absolute',
    top: 0,
    marginTop: 655.28,
    height: 34,
    marginBottom: 122.72,
    left: 76,
    width: 138,
    minWidth: 138
  },
  jopa_telecom_box_layout4: {
    position: 'absolute',
    top: 663.28,
    bottom: 130.72,
    left: 84,
    flexGrow: 1,
    right: 84
  },
  rect_layout57: {
    position: 'absolute',
    top: 0,
    marginTop: 521.62,
    height: 34,
    marginBottom: 256.38,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  altolandia_box_layout: {
    position: 'absolute',
    top: 529.62,
    bottom: 264.38,
    left: 82.74,
    flexGrow: 1,
    right: 82.74
  },
  altolandia_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout58: {
    position: 'absolute',
    top: 0,
    marginTop: 487.39,
    height: 34,
    marginBottom: 290.61,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  huntington_banschare_box_layout: {
    position: 'absolute',
    top: 495.39,
    bottom: 298.61,
    left: 82.74,
    flexGrow: 1,
    right: 82.74
  },
  huntington_banschare_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout59: {
    position: 'absolute',
    top: 0,
    marginTop: 453.16,
    height: 34,
    marginBottom: 324.84,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  first_horizon_box_layout: {
    position: 'absolute',
    top: 461.16,
    bottom: 332.84,
    left: 82.74,
    flexGrow: 1,
    right: 82.74
  },
  first_horizon_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout60: {
    position: 'absolute',
    top: 0,
    marginTop: 418.93,
    height: 34,
    marginBottom: 359.07,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  musa_corporation_box_layout: {
    position: 'absolute',
    top: 426.93,
    bottom: 367.07,
    left: 82.74,
    flexGrow: 1,
    right: 82.74
  },
  musa_corporation_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout61: {
    position: 'absolute',
    top: 0,
    marginTop: 384.69,
    height: 34,
    marginBottom: 393.31,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  allegheny_box_layout: {
    position: 'absolute',
    top: 392.69,
    bottom: 401.31,
    left: 82.74,
    flexGrow: 1,
    right: 82.74
  },
  allegheny_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout62: {
    position: 'absolute',
    top: 0,
    marginTop: 350.46,
    height: 34,
    marginBottom: 427.54,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  altera_box_layout: {
    position: 'absolute',
    top: 358.46,
    bottom: 435.54,
    left: 82.74,
    flexGrow: 1,
    right: 82.74
  },
  altera_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group10: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group10_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 316.23,
    bottom: 461.77,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt5: {
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
  txt_box5: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group11: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group11_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 281.99,
    bottom: 496.01,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt6: {
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
  txt_box6: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group12: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group12_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 247.76,
    bottom: 530.24,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt7: {
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
  txt_box7: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group13: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group13_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 213.53,
    bottom: 564.47,
    minHeight: 34,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt8: {
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
  txt_box8: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cover_group14: {
    width: '100%',
    backgroundColor: '#4f4f54ff'
  },
  cover_group14_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 185,
    bottom: 598,
    minHeight: 29,
    left: 74.74,
    width: 138,
    minWidth: 138
  },
  txt9: {
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
  txt_box9: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rect_layout63: {
    position: 'absolute',
    top: 0,
    marginTop: 589.16,
    height: 34,
    marginBottom: 188.84,
    width: 52,
    minWidth: 52,
    right: 61
  },
  rect_layout64: {
    position: 'absolute',
    top: 0,
    marginTop: 621.75,
    height: 34,
    marginBottom: 156.25,
    width: 52,
    minWidth: 52,
    right: 59
  },
  cover_group15: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 1
  },
  cover_group15_layout: {
    position: 'absolute',
    top: 653.42,
    bottom: 124.58,
    minHeight: 34,
    width: 52,
    minWidth: 52,
    right: 61
  },
  highlights_box_layout16: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 8,
    flexGrow: 1,
    marginRight: 8
  },
  rect_layout65: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 34,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  decorator_layout8: {
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
  cover_group16: {
    width: '100%',
    backgroundColor: '#4db051ff',
    borderRadius: 3
  },
  cover_group16_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 92,
    bottom: 688,
    minHeight: 32,
    width: 90,
    minWidth: 90,
    right: 118
  },
  txt10: {
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
  cover_group17: {
    width: '100%',
    backgroundColor: '#9d27b1ff',
    borderRadius: 14
  },
  cover_group17_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 96,
    bottom: 688,
    minHeight: 28,
    width: 46,
    minWidth: 46,
    right: 34
  },
  img_layout2: {
    marginTop: 2,
    height: 24,
    marginLeft: 20,
    width: 24,
    minWidth: 24
  },
  decorator_layout9: {
    position: 'absolute',
    top: 0,
    marginTop: 141.75,
    height: 21.25,
    marginBottom: 649,
    width: 18.08,
    minWidth: 18.08,
    right: 41.46
  },
  rect68: {
    width: '100%',
    backgroundColor: '#ddddddff',
    borderRadius: 3
  },
  rect68_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 138,
    height: 35,
    marginBottom: 639,
    left: 9,
    width: 80,
    minWidth: 80
  },
  start_date_box_layout: {
    position: 'absolute',
    top: 147,
    bottom: 648,
    left: 13.35,
    width: 75.65,
    minWidth: 75.65
  },
  start_date_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  rect69: {
    width: '100%',
    backgroundColor: '#ddddddff',
    borderRadius: 3
  },
  rect69_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 138,
    height: 35,
    marginBottom: 639,
    left: 95,
    width: 80,
    minWidth: 80
  },
  end_date_box_layout: {
    position: 'absolute',
    top: 147,
    bottom: 648,
    left: 99.35,
    width: 75.65,
    minWidth: 75.65
  },
  end_date_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cover_group_wrap: {
    width: '100%',
    backgroundColor: '#a54444ff'
  },
  cover_group_wrap_layout: {
    overflow: 'visible',
    marginTop: 324,
    marginBottom: 183,
    minHeight: 305,
    marginLeft: 27,
    flexGrow: 1,
    marginRight: 32
  },
  group8: {
    width: '100%',
    backgroundColor: '#000000ff',
    borderRadius: 10
  },
  group8_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 0,
    bottom: 0,
    minHeight: 305,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  cover_group18: {
    backgroundColor: '#142d15ff',
    borderRadius: 16,
    flexDirection: 'row'
  },
  cover_group18_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 213,
    bottom: 60,
    minHeight: 32,
    left: 22,
    flexGrow: 1,
    right: 22
  },
  cover_group18_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 32
  },
  text_body_box_layout: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  text_body_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cover_group18_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8
  },
  cover_group18_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 32
  },
  cover_group19: {
    width: '100%'
  },
  cover_group19_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 32,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group20: {
    backgroundColor: '#142d15ff',
    borderRadius: 16,
    flexDirection: 'row'
  },
  cover_group20_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 171,
    bottom: 102,
    minHeight: 32,
    left: 22,
    flexGrow: 1,
    right: 22
  },
  cover_group20_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 32
  },
  cover_group20_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8
  },
  cover_group21: {
    backgroundColor: '#142d15ff',
    borderRadius: 16,
    flexDirection: 'row'
  },
  cover_group21_layout: {
    overflow: 'visible',
    marginTop: 129,
    marginBottom: 144,
    minHeight: 32,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  cover_group21_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 32
  },
  cover_group21_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8
  },
  cover_group22: {
    backgroundColor: '#142d15ff',
    borderRadius: 16,
    flexDirection: 'row'
  },
  cover_group22_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 87,
    bottom: 186,
    minHeight: 32,
    width: 112,
    minWidth: 112,
    right: 22
  },
  cover_group22_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 32
  },
  cover_group23: {
    width: '100%'
  },
  cover_group23_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 32,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_group22_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8
  },
  cover_group22_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 32
  },
  cover_group22_col2: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 32
  },
  text_body_box_layout20: {
    position: 'absolute',
    top: 260,
    bottom: 23,
    width: 32,
    minWidth: 32,
    right: 22
  },
  text_body_box_layout21: {
    position: 'absolute',
    top: 260,
    bottom: 23,
    width: 32,
    minWidth: 32,
    right: 62
  },
  text_body_box_layout22: {
    position: 'absolute',
    top: 260,
    bottom: 23,
    width: 32,
    minWidth: 32,
    right: 102
  },
  text_body_box_layout23: {
    position: 'absolute',
    top: 260,
    bottom: 23,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  text_body_box_layout24: {
    position: 'absolute',
    top: 260,
    bottom: 23,
    left: 102,
    width: 32,
    minWidth: 32
  },
  text_body_box_layout25: {
    position: 'absolute',
    top: 260,
    bottom: 23,
    left: 62,
    width: 32,
    minWidth: 32
  },
  text_body_box_layout26: {
    position: 'absolute',
    top: 260,
    bottom: 23,
    left: 22,
    width: 32,
    minWidth: 32
  },
  text_body_box_layout27: {
    position: 'absolute',
    top: 218,
    bottom: 65,
    width: 32,
    minWidth: 32,
    right: 22
  },
  text_body_box_layout28: {
    position: 'absolute',
    top: 218,
    bottom: 65,
    width: 32,
    minWidth: 32,
    right: 62
  },
  text_body_box_layout29: {
    position: 'absolute',
    top: 218,
    bottom: 65,
    width: 32,
    minWidth: 32,
    right: 102
  },
  text_body_box_layout30: {
    position: 'absolute',
    top: 218,
    bottom: 65,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  text_body_box_layout31: {
    position: 'absolute',
    top: 92,
    bottom: 191,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  text_body_box_layout32: {
    position: 'absolute',
    top: 92,
    bottom: 191,
    left: 102,
    width: 32,
    minWidth: 32
  },
  text_body_box_layout33: {
    position: 'absolute',
    top: 92,
    bottom: 191,
    left: 62,
    width: 32,
    minWidth: 32
  },
  text_body_box_layout34: {
    position: 'absolute',
    top: 92,
    bottom: 191,
    left: 22,
    width: 32,
    minWidth: 32
  },
  sat_box_layout: {
    position: 'absolute',
    top: 60,
    bottom: 240,
    width: 28,
    minWidth: 28,
    right: 24
  },
  sat_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fri_box_layout: {
    position: 'absolute',
    top: 60,
    bottom: 240,
    width: 28,
    minWidth: 28,
    right: 64
  },
  fri_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thu_box_layout: {
    position: 'absolute',
    top: 60,
    bottom: 240,
    width: 28,
    minWidth: 28,
    right: 104
  },
  thu_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wed_box_layout: {
    position: 'absolute',
    top: 60,
    bottom: 240,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  wed_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tue_box_layout: {
    position: 'absolute',
    top: 60,
    bottom: 240,
    left: 104,
    width: 28,
    minWidth: 28
  },
  tue_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mon_box_layout: {
    position: 'absolute',
    top: 60,
    bottom: 240,
    left: 64,
    width: 28,
    minWidth: 28
  },
  mon_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sun_box_layout: {
    position: 'absolute',
    top: 60,
    bottom: 240,
    left: 24,
    width: 28,
    minWidth: 28
  },
  sun_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlights_box17_layout: {
    position: 'absolute',
    top: 22,
    bottom: 259,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  highlights_box17: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  decorator_layout10: {
    position: 'absolute',
    top: 0,
    marginTop: 28,
    height: 12,
    marginBottom: 265,
    left: 102,
    width: 6,
    minWidth: 6
  },
  decorator_layout11: {
    position: 'absolute',
    top: 0,
    marginTop: 28,
    height: 12,
    marginBottom: 265,
    width: 6,
    minWidth: 6,
    right: 102
  }
});
