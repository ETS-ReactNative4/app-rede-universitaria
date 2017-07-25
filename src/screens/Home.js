import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { colors } from '../helpers/Constants';

/* eslint-disable global-require */
export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={{ height: 200, margin: 10 }}
            source={require('../assets/imgs/projetos.jpg')}
          />
          <Text style={styles.headerText}>
            A Ideia da Rede
          </Text>
          {/* <Expo.Video
            source={require('../assets/videos/promocional.mp4')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').width / 2,
            }}
            useNativeControls
            posterSource={require('../assets/imgs/logo.png')}
            usePoster
            resizeMode={Expo.Video.RESIZE_MODE_CONTAIN}
          /> */}
          <View style={styles.body}>
            <View style={styles.roundedIcon}>
              <MaterialIcons
                name="lightbulb-outline"
                size={50}
                color={colors.white}
              />
            </View>
            <Text style={[styles.bodyText, styles.centerText]}>
              A ideia da rede é promover, criar e ajudar grupos de estudantes que se reúnem nas universidades. Conheça!
            </Text>
            <View style={styles.roundedIcon}>
              <MaterialIcons
                name="chat-bubble-outline"
                size={50}
                color={colors.white}
              />
            </View>
            <Text style={[styles.bodyText, styles.centerText]}>
              Visite nosso blog para ficar por dentro das novidades, ler testemunhos  e outras histórias da rede universitária.
            </Text>
            <View style={styles.roundedIcon}>
              <MaterialIcons
                name="school"
                size={50}
                color={colors.white}
              />
            </View>
            <Text style={[styles.bodyText, styles.centerText]}>
              Conheça as igrejas que já estão participando da Rede, a sua Igreja também pode participar! Clique e saiba como.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
