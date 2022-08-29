import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native';

class ProgressHud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
        };

        this.showHud = this.showHud.bind(this)
        this.hideHud = this.hideHud.bind(this)

    }

    // use with refs  
    //  <ProgressHud ref="progressHud" />
    // this.refs.progressHud.showHud()
    showHud() {

        this.setState({ visible: true })
    }

    // this.refs.progressHud.hideHud()
    hideHud() {

        this.setState({ visible: false })
    }

    static propTypes = {
        cancelable: PropTypes.bool,
        color: PropTypes.string,
        overlayColor: PropTypes.string,
        textContent: PropTypes.string,
        textStyle: PropTypes.object,
        visible: PropTypes.bool,
        indicatorStyle: PropTypes.object,
        customIndicator: PropTypes.element,
        children: PropTypes.element,
        spinnerKey: PropTypes.string
    };

    static defaultProps = {
        visible: false,
        cancelable: false,
        textContent: 'Loading...',
        color: 'white',
        size: 'large', // 'normal',
        overlayColor: '#000'
    };

    render() {
        const view = this.state.visible ?
            <Modal animationType='fade' transparent={true} visible={this.state.visible} >
                <View style={[styles.overlayView, { backgroundColor: this.props.overlayColor }]}>
                    <View style={{ backgroundColor: 'transparent', opacity: 1 }}>
                        <ActivityIndicator size={this.props.size} color={this.props.color} />
                    </View>
                    <View>
                        <Text allowFontScaling={false} style={styles.contentText}>{this.props.textContent}</Text>
                    </View>
                </View>
            </Modal> : null;
        return view;
    }
}

const styles = StyleSheet.create({
    contentText: {
        color: '#fff',
        marginTop: 30,
        fontSize: 24,
    },
    overlayView: {
        opacity: .5,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProgressHud;
