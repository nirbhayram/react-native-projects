import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import { Button, Icon, Toast, Root } from 'native-base';
import * as LocalAuthentication from 'expo-local-authentication';

import FingerPrintModal from './FingerPrintModal';
const WIDTH = Dimensions.get('screen').width;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
        };
        this.modalRef = React.createRef();
        this.openScanner = this.openScanner.bind(this);
    }

    async componentDidMount() {
        this.setState({ authenticated: false });
        try {
            let results = await LocalAuthentication.hasHardwareAsync();
            if (results) {
                console.log(results);
            } else {
                console.log(results);
                Toast.show({
                    text: "Finger print authentication is not available in this device",
                    duration: 5000,
                    type: 'danger'
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    openScanner() {
        this.modalRef.current.setModalVisible(true);
    }

    onSuccessAuth(val) {
        this.setState({ authenticated: val });
    }

    render() {
        return (
            <Root>
                <View style={styles.container}>

                    {this.state.authenticated ?
                        <SUCCESS_SCREEN />
                        :
                        <HOME_SCREEN onFingurePress={this.openScanner} />
                    }

                    <FingerPrintModal ref={this.modalRef} onSuccess={(val) => this.onSuccessAuth(val)} />

                </View>
            </Root>
        );
    }
}

const HOME_SCREEN = (props) => {
    return (
        <View style={styles.container}>
            <Button rounded style={styles.btn}>
                <Icon name="google" type="MaterialCommunityIcons" style={styles.icon}></Icon>
                <Text style={styles.btnTxt}>Login with google</Text>
            </Button>
            <Button rounded style={[styles.btn, { marginTop: 20 }]} onPress={props.onFingurePress}>
                <Icon name="fingerprint" type="MaterialIcons" style={styles.icon} />
                <Text style={styles.btnTxt}>Login with fingerprint</Text>
            </Button>
        </View>
    )
}

const SUCCESS_SCREEN = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img} source={require('./assets/success2.png')} resizeMode="contain" />
            </View>
            <View style={{ marginTop: 50 }}>
                <Text style={styles.msgTxt}>Finger print success</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 120,
        height: 120
    },
    msgTxt: {
        fontSize: 16,
        color: 'black',
        fontStyle: 'italic'
    },
    btn: {
        width: WIDTH * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color: '#fff',
        fontSize: 14,
        fontStyle: 'italic'
    },
    icon: {
        fontSize: 15,
        color: '#fff'
    }
});
