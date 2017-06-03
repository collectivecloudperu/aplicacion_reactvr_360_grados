import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  VrButton,
  View,
  Image,
  Box,
  Cylinder,
  CylindricalPanel,
  Sound,
  NativeModules,
  Video,
  MediaPlayerState,
  VideoControl,
} from 'react-vr';

export default class MiproyectoVR extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
      playerState: new MediaPlayerState({autoPlay: true, muted: false}),
    };
  }

  render() {
    return (
      <View>
        {/*
        <Sound
          source={{
           mp3: asset('sonido.mp3'),
          }}
          autoPlay={false}
        />
        */}

        <Pano source={{uri: '../static_assets/bg.jpg'}} />

        {/*
        <VrButton
          style={{width: 0.7,transform: [{translate: [0, 0, -3]}],layoutOrigin: [0.5, 0.9],}}
          onClick={() => NativeModules.LinkingManager.openURL('http://google.com/')}>
          <Image style={{width:1, height:1}}
            source={asset('fp.jpg')}
            inset={[0.2,0.2,0.2,0.2]}
            insetSize={[0.05,0.45,0.55,0.15]} >
          </Image>
        </VrButton>
        */}

        <Text
          style={{
            backgroundColor: '#305b8e',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 3.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -7]}],
            borderRadius: 0.1,
          }}>           
            Bienvenido
        </Text>

        <Video 
          style={{
            transform: [{translate: [0, 0, -7]}],
            width: 7.0, 
            height: 3.6,
            layoutOrigin: [0.5, 0.9],
          }} 
          source={{uri: '../static_assets/video.mp4'}}
          playerState={this.state.playerState} />

          <VideoControl
            style={{height: 0.2, width: 4}}
            playerState={this.state.playerState}
          />

        <VrButton
          style={{width: 1.7,transform: [{translate: [0, 0, -7]}],layoutOrigin: [1.65, 7.9],backgroundColor: '#444444',borderRadius: 0.1,}}
          onClick={() => NativeModules.LinkingManager.openURL('http://collectivecloudperu.com/')}>
          <Text
            style={{              
              fontSize: 0.3,
              fontWeight: '400',              
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>           
              Home
          </Text>
        </VrButton>

        <VrButton
          style={{width: 1.7,transform: [{translate: [0, 0, -7]}],layoutOrigin: [0.5, 8.9],backgroundColor: '#444444',borderRadius: 0.1,}}
          onClick={() => NativeModules.LinkingManager.openURL('http://collectivecloudperu.com/team.php')}>
          <Text
            style={{              
              fontSize: 0.3,
              fontWeight: '400',              
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>           
              Nosotros
          </Text>
        </VrButton>

        <VrButton
          style={{width: 1.7,transform: [{translate: [0, 0, -7]}],layoutOrigin: [-0.65, 9.9],backgroundColor: '#444444',borderRadius: 0.1,}}
          onClick={() => NativeModules.LinkingManager.openURL('http://collectivecloudperu.com/contacts.php')}>
          <Text
            style={{              
              fontSize: 0.3,
              fontWeight: '400',              
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>           
              Contacto
          </Text>
        </VrButton>

        <Box
          dimWidth={2}
          dimDepth={2}
          dimHeight={1}
          style={{
            color: '#444444',
          }}
        />

        <Cylinder
          radiusTop={0.2}
          radiusBottom={0.2}
          dimHeight={2}
          segments={12}
        />


      </View>     


    );
  }


};

AppRegistry.registerComponent('MiproyectoVR', () => MiproyectoVR);
